import { Column, Model, Table, HasMany } from 'sequelize-typescript';

@Table
export class Query {
    @Column
    id: string;

    @Column
    name: string;

    @Column
    description: string;

    @Column
    query: string;

    @Column
    group: string;
}
