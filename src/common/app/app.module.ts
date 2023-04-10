import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'src/common/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config/dist';
import configuretions from '../../configurations'
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuretions]
  }),
  SequelizeModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService) => ({
      dialect: "postgres",
      host: configService.get('db_host'),
      port: configService.get('db_port'),
      username: configService.get('db_user'),
      password: configService.get('db_password'),
      database: configService.get('db_name'),
      synchronize: true,
      autoLoadModels: true,
      models: []

    })

  }),
    UserModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
