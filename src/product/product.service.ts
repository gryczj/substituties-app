import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  async getProducts(): Promise<Product[]> {
    return [];
  }

  async addProduct(): Promise<{ name: string }> {
    return {
      name: 'product',
    };
  }

  async deleteProduct(): Promise<{ name: string }> {
    return {
      name: 'product',
    };
  }
}
