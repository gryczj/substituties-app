import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../product/dto/product.entity';

@Entity()
export class Substitute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ManyToOne((type) => Product, (product) => product.id)
  @JoinColumn()
  mainProduct: number;

  @Column()
  @ManyToOne((type) => Product, (product) => product.id)
  @JoinColumn()
  secondProduct: number;

  @Column()
  mainProductWeight: number;

  @Column()
  secondProductWeight: number;
}
