import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Substitute } from './dto/substitute.entity';
import { Repository } from 'typeorm';
import { AddSubstituteDto } from './dto/add-substitute.dto';

@Injectable()
export class SubstituteService {
  constructor(
    @InjectRepository(Substitute)
    private substituteRepository: Repository<Substitute>,
  ) {}

  async addSubstitute(addSubstituteDto: AddSubstituteDto): Promise<Substitute> {
    const {
      mainProduct,
      secondProduct,
      mainProductWeight,
      secondProductWeight,
    } = addSubstituteDto;
    const substitute = this.substituteRepository.create({
      mainProduct,
      secondProduct,
      mainProductWeight,
      secondProductWeight,
    });
    await this.substituteRepository.save(substitute);
    return substitute;
  }

  async getSubstitutes(productId: number): Promise<any> {
    const query = this.substituteRepository
      .createQueryBuilder('substitute')
      .innerJoinAndSelect('substitute.secondProduct', 'product');
    return query
      .where('substitute.mainProduct = :mainId', { mainId: productId })
      .orWhere('substitute.secondProduct = :secondId', {
        secondId: productId,
      })
      .getMany();
  }

  async getAllSubstitutes(): Promise<Substitute[]> {
    const query = this.substituteRepository.createQueryBuilder('substitute');
    return query.getMany();
  }
}
