import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import {Product} from "./Product";

@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: string

    @Column()
    name!: string

    @Column()
    password!: string

    @OneToMany(type => Product, product => product.user)
    products!: Product[];
}