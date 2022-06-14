import { Injectable } from '@nestjs/common';
import { Category } from "./category.interface";

@Injectable()
export class CategoryService {
  async addCategory(categoryName: string): Promise<string> {
    return categoryName;
  }

  async removeCategory(categoryName: string): Promise<string> {
    return categoryName;
  }

  async getCategories(): Promise<Category[]> {
    return [];
  }
}
