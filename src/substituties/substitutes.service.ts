import { Injectable } from '@nestjs/common';
import { Substitute } from './substitute.interface';
import { Category } from './category.interface';

@Injectable()
export class SubstitutesService {
  /**
   * Some plan:
   * 1. getAllSubstitutes
   * 2. getSubByCategory
   * 3. getSub(idSub, weightSub): Sub[]
   * 4. AddNewSub(name, category)
   * 5. DeleteSub(name/id)
   * 6. AddCategory
   * 7. DeleteCategory
   * 8. GetCategories
   */
  async getAllSubstitutes(): Promise<Substitute[]> {
    return [];
  }

  async getCategories(): Promise<Category[]> {
    return [];
  }
}
