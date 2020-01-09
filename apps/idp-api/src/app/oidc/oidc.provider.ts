import { Injectable, NestMiddleware, Inject, Optional, Scope } from '@nestjs/common';
import { Request, Response } from 'express';
import Provider from 'oidc-provider';

// @Injectable()
// export class SetNoCacheMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: Function) {
//     console.log('SetNoCache...');
//     res.set('Pragma', 'no-cache');
//     res.set('Cache-Control', 'no-cache, no-store');
//     next();
//   }
// }

@Injectable({scope: Scope.DEFAULT})
export class OidcProvider {

  provider: Provider;

  constructor(
    @Optional() @Inject('OIDC_CONFIG') option: any
  ) {
    if (!this.provider && option) {
      this.provider = new Provider(option.issuer, option.config);
    }
  }
}


// @Injectable()
// export class OidcProviderRoutes implements NestMiddleware {
//   use(req: Request, res: Response, next: Function) {
//     console.log('Request...');
//     next();
//   }
// }
