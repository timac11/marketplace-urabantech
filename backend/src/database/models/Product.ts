import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm'
import {User} from "./User";
import {Metric} from "./Metric";

@Entity("products")
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: string

    @Column()
    name!: string

    @Column()
    description!: string

    @Column()
    price!: string

    @ManyToOne(type => User, user => user.products)
    user!: User;

    @OneToMany(type => Metric, metric => metric.product)
    metrics!: Metric[];
}