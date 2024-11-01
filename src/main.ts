import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.SERVICE_PORT;
  const servicePath = process.env.SERVICE_PATH;
  app.setGlobalPrefix(servicePath);

  app.useGlobalPipes(new ValidationPipe());

  // Set payload limit to 10MB (adjust as needed)
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  
  await app.listen(port, () => {
    Logger.log(` 
      ############################################
      Service is started..
      Port                   : ${port}
      ############################################
    `);
  });
}
bootstrap();
