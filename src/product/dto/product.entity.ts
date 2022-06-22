import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../../category/dto/category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @OneToOne((type) => Category, (category) => category.id)
  category: number;
}
