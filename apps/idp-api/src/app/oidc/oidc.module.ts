import { Module, DynamicModule, Global } from '@nestjs/common';
import {Configuration} from 'oidc-provider';
import {OidcProvider} from './oidc.provider';

@Global()
@Module({
  providers: [OidcProvider],
})
export class OidcProviderModule {
  static forRoot(option: {issuer: string, configuration?: Configuration}): DynamicModule {    
    // const OidcProvider = new Provider(issuer, options);
    const providers = [
      OidcProvider,
      {
        provide: 'OIDC_CONFIG',
        useValue: option
      },
    ]
    return {
      module: OidcProviderModule,
      providers: providers,
      exports: providers,
    };
  }
}
