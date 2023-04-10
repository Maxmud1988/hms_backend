import { NestFactory } from '@nestjs/core';
import { AppModule } from './common/app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const сonfigService = app.get(ConfigService);
  const port = сonfigService.get('port');
  await app.listen(3000);
}
bootstrap();
