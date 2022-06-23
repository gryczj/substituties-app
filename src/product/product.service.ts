import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './dto/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddProductDto } from './dto/add-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    const query = this.productRepository
      .createQueryBuilder('product')
      .innerJoinAndSelect('product.category', 'category');
    return query.getMany();
  }

  async getProductsByCategory(categoryId: number): Promise<Product[]> {
    const query = this.productRepository
      .createQueryBuilder('product')
      .innerJoinAndSelect('product.category', 'category');
    return query.where(`product.category = :id`, { id: categoryId }).getMany();
  }

  async addProduct(addProductDto: AddProductDto): Promise<Product> {
    const { name, category } = addProductDto;
    const product = this.productRepository.create({
      name,
      category,
    });
    await this.productRepository.save(product);
    return product;
  }

  async deleteProduct(id: number): Promise<number> {
    const result = await this.productRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product not found`);
    }
    return id;
  }
}
