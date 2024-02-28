import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';

@Module({
  // Configuration du module
  imports: [ConfigModule.register({ folder: './prod' })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
