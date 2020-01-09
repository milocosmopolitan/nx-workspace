import { Controller, Get, Res, Req } from '@nestjs/common';
import { OidcProvider } from './oidc.provider';

// const keys = new Set();
// const debug = (obj) => querystring.stringify(Object.entries(obj).reduce((acc, [key, value]) => {
//   keys.add(key);
//   if (isEmpty(value)) return acc;
//   acc[key] = inspect(value, { depth: null });
//   return acc;
// }, {}), '<br/>', ': ', {
//   encodeURIComponent(value) { return keys.has(value) ? `<strong>${value}</strong>` : value; },
// });

@Controller('interaction')
export class InteractionController {
  constructor(private readonly oidc: OidcProvider) {}

  @Get(':uid')
  async uid(@Req() req, @Res() res) {
    res.set('Pragma', 'no-cache');
    res.set('Cache-Control', 'no-cache, no-store');

    const {
      uid, prompt, params, session,
    } = await this.oidc.provider.interactionDetails(req, res);

    const client = await this.oidc.provider.Client.find(params.client_id);

    switch (prompt.name) {
      case 'select_account': {
        if (!session) {
          this.oidc.provider.interactionFinished(req, res, { select_account: {} }, { mergeWithLastSubmission: false });
        }

        const account = await this.oidc.provider.Account.findAccount(undefined, session.accountId);
        const { email } = await account.claims('prompt', 'email', { email: null }, []);

        return res.render('select_account', {
          client,
          uid,
          email,
          details: prompt.details,
          params,
          title: 'Sign-in',
          session: session ? session  : undefined,
          dbg: { params, prompt },
        });
      }
      case 'login': {
        return res.render('login', {
          client,
          uid,
          details: prompt.details,
          params,
          title: 'Sign-in',
          session: session ? session  : undefined,
          dbg: { params, prompt },
        });
      }
      case 'consent': {
        return res.render('interaction', {
          client,
          uid,
          details: prompt.details,
          params,
          title: 'Authorize',
          session: session ? session  : undefined,
          dbg: { params, prompt },
        });
      }
      default:
        return undefined;
    }
  }
}