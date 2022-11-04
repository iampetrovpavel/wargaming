import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Query } from 'src/models/query.model';
import { queries } from './templates';

@Injectable()
export class QueriesService {
    constructor(
        // @InjectModel(Query) private queryModel: typeof Query,
        // private producerService: ProducerServise
    ){}

    findAll(): Query[] {
        return queries;
    }

    findOne(id: string): Query {
        return queries.find((q)=>q.id === id);
    }
}
