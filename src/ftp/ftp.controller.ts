import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { CreateFTPDto, UpdateFTPDto } from './dto';
import { FTPService } from './ftp.service';
import { FTP } from './interfaces/ftp.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectTemplate } from './project-template.entity';

@Controller('ftp')
export class FTPController {

    constructor(
        @InjectRepository(ProjectTemplate)
        private projectTemplateRepository: Repository<ProjectTemplate>,
        private ftpService: FTPService
    ) {}

    @Post()
    async create(@Body() createApplicantDto: CreateFTPDto) {
        return this.ftpService.create(createApplicantDto);
    }

    @Get()
    async findAll(): Promise<ProjectTemplate[]> {
        return this.ftpService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.ftpService.findOne(id);
    }
}
