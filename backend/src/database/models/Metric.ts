import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'
import {User} from "./User";
import {Product} from "./Product";

@Entity("metrics")
export class Metric extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: string

    @Column()
    name!: string

    @Column()
    value!: string

    @Column()
    type!: string

    @ManyToOne(() => Product, product => product.metrics)
    product!: Product;
}