import { Module, Injectable, NestMiddleware, Global } from '@nestjs/common';
// import Provider, {Configuration} from 'oidc-provider';
import { Request, Response } from 'express';
import { InteractionController } from './interaction.controller';
import { OidcProviderModule } from './oidc.module';

@Injectable()
export class SetNoCacheMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('SetNoCache...');
    res.set('Pragma', 'no-cache');
    res.set('Cache-Control', 'no-cache, no-store');
    next();
  }
}

// @Global()
@Module({
  imports: [OidcProviderModule],
  controllers: [InteractionController],
  providers: [
    SetNoCacheMiddleware
  ],
})
export class InteractionModule {}