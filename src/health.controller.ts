import {  Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  constructor() {}
    @Get()   
    health(): boolean {
       return true;
    }
}
