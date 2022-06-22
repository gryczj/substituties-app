import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../product/dto/product.entity';

@Entity()
export class Substitute {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne((type) => Product, (product) => product.id)
  mainProductId: number;

  @OneToOne((type) => Product, (product) => product.id)
  secondProductId: number;

  @Column()
  mainProductWeight: number;

  @Column()
  secondProductWeight: number;
}
