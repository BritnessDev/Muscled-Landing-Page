import { NestFactory } from '@nestjs/core';
import { AppModule } from './application.module';

async function bootstrap() {
  const server = await NestFactory.create(AppModule);

  await server.listen(process.env.PORT || 5001);
}

bootstrap();
