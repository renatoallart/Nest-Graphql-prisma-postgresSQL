import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('Running at: http://localhost:3000/graphql');
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
