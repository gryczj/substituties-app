import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './dto/category.entity';
import { AddCategoryDto } from './dto/add-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('/all')
  async getAllCategories(): Promise<Category[]> {
    return this.categoryService.getCategories();
  }

  @Post('/add')
  async addCategory(@Body() addCategoryDto: AddCategoryDto): Promise<Category> {
    return this.categoryService.addCategory(addCategoryDto);
  }

  @Delete('/:id')
  async removeCategory(@Param('id') id: number): Promise<number> {
    return this.categoryService.removeCategory(id);
  }
}
