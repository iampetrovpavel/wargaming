import { Controller, Get, Param } from '@nestjs/common';
import { QueriesService } from './queries.service';
import { queries } from './templates';

@Controller('queries')
export class QueriesController {
    constructor(
        // private readonly queriesService: QueriesService,
    ) {}
    @Get()
    async findAll() {
        return queries
    }
    
    @Get(':id')
    async findOne(@Param() params) {
        return queries.find(q=>q.id === params.id)
    }
}
