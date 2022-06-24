import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Substitute } from './dto/substitute.entity';
import { Repository } from 'typeorm';
import { AddSubstituteDto } from './dto/add-substitute.dto';
import { GetProductSubstitutesDto } from "./dto/get-product-substitutes.dto";
import { Product } from "../product/dto/product.entity";
import { CalculatedSubstitute, OutputSubstitute, ProductWithSubstitutes } from "./dto/substitute.interface";

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

  calculateWeightMainProduct(substitutes: OutputSubstitute[]): Promise<CalculatedSubstitute[]> {
    return substitutes.map(s => {

    })
  }

  calculateWeightSecondProduct() {

  }

  async getCalculatedProductSubstitutes(
    getProductSubstitutesDto: GetProductSubstitutesDto
  ): Promise<ProductWithSubstitutes[]> {
    const { productId, productWeight } = getProductSubstitutesDto;
    const substitutes = await this.getProductSubstitutes(productId);

    const productAsMain = substitutes.filter((s) => s.mainProduct == productId);
    const productAsSecond = substitutes.filter(
      (s) => s.secondProduct.id == productId);
    console.log("main",productAsMain);
    console.log("second",productAsSecond);
    return substitutes;
  }

  async getProductSubstitutes(productId: number): Promise<OutputSubstitute[]> {
    const query = this.substituteRepository
      .createQueryBuilder('substitute')
      .innerJoinAndSelect('substitute.secondProduct', 'product');
    return (await query
      .where('substitute.mainProduct = :mainId', { mainId: productId })
      .orWhere('substitute.secondProduct = :secondId', { secondId: productId })
      .getMany()) as unknown as OutputSubstitute[];
  }

  async getAllSubstitutes(): Promise<Substitute[]> {
    const query = this.substituteRepository.createQueryBuilder('substitute');
    return query.getMany();
  }
}
