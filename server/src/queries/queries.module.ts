import { Module } from '@nestjs/common';
import { QueriesService } from './queries.service';
import { QueriesController } from './queries.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Query } from 'src/models/query.model';

@Module({
  // imports: [ SequelizeModule.forFeature([ Query ]) ],
  // providers: [QueriesService],
  controllers: [QueriesController]
})
export class QueriesModule {}
