import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AccessToken } from './entities/access-token.entity';
import { AuthorizationCode } from './entities/authorization-code.entity';
import { ClientCredential } from './entities/client-credentials.entity';
import { Client } from './entities/client.entity';
import { DeviceCode } from './entities/device-code.entity';
import { InitialAccessToken } from './entities/initial-access-token.entity';
import { Interaction } from './entities/interaction.entity';
import { ReplayDetection } from './entities/replay-detection.entity';
import { RegistrationAccessToken } from './entities/registration-access-token.entity';
import { PushedAuthorizationRequest } from './entities/pushed-authorization-request.entity';
import { Session } from './entities/session.entity';
import { OidcProviderModule } from './oidc/oidc.module';
import { OIDC_CONFIGURATION } from './oidc.config';
import { InteractionModule } from './oidc/interaction.module';
import { OidcProvider } from './oidc/oidc.provider';

const port = process.env.port || 3333;


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1q2w3e',
      database: 'postgres',
      entities: [
        Session,
        AccessToken,
        AuthorizationCode,
        ClientCredential,
        Client,
        DeviceCode,
        InitialAccessToken,
        RegistrationAccessToken,
        Interaction,
        ReplayDetection,
        PushedAuthorizationRequest
      ],
      synchronize: true,
    }),
    InteractionModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: 'OIDC_CONFIG',
      useValue: {
        issuer: `http://localhost:${port}`,
        configuration: OIDC_CONFIGURATION
      }
    },
    AppService,
    OidcProvider
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
