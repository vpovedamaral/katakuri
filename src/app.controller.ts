import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('config')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/info')
  getInfo(): string{
    return this.appService.getInfo();
  }
}
