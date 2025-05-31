import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT ?? 3000;
  console.log(`\nApp started at http://localhost:${PORT}\n`);
  await app.listen(PORT);
}

void bootstrap();
