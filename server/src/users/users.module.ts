import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [ SequelizeModule.forFeature([ User ]) ],
  providers: [ UsersService ],
  controllers: [ UsersController ],
})
export class UsersModule {}
