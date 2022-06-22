import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './dto/category.entity';
import { Repository } from 'typeorm';
import { AddCategoryDto } from './dto/add-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async addCategory(addCategoryDto: AddCategoryDto): Promise<Category> {
    const { name } = addCategoryDto;
    const category = this.categoryRepository.create({ name });
    await this.categoryRepository.save(category);
    return category;
  }

  async removeCategory(id: number): Promise<number> {
    const result = await this.categoryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Category not found`);
    }
    return id;
  }

  async getCategories(): Promise<Category[]> {
    const query = this.categoryRepository.createQueryBuilder('category');
    return query.getMany();
  }
}
