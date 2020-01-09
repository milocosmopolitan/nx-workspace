import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import Provider from 'oidc-provider';

@Injectable()
export class OidcProviderMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Request...');
    next();
  }
}
