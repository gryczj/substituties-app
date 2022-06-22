import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './dto/product.entity';
import { AddProductDto } from './dto/add-product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/all')
  async getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Get('/all/:categoryId')
  async getProductsByCategory(
    @Param('categoryId') categoryId: number,
  ): Promise<Product[]> {
    return this.productService.getProductsByCategory(categoryId);
  }

  @Post('/add')
  async addProduct(@Body() addProductDto: AddProductDto): Promise<Product> {
    return this.productService.addProduct(addProductDto);
  }

  @Delete('/:id')
  async removeProduct(@Param('id') id: number): Promise<number> {
    return this.productService.deleteProduct(id);
  }
}
