import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SubstituteService } from './substitute.service';
import { Substitute } from './dto/substitute.entity';
import { AddSubstituteDto } from './dto/add-substitute.dto';
import { GetProductSubstitutesDto } from "./dto/get-product-substitutes.dto";

@Controller('substitute')
export class SubstituteController {
  constructor(private substituteService: SubstituteService) {}

  @Get('/all/:productId')
  async getProductSubstitutes(
    @Param('productId') productId: number,
  ): Promise<Substitute[]> {
    return this.substituteService.getProductSubstitutes(productId);
  }

  @Get('/:productId')
  async getCalculatedSubstitutes(
    @Body() getProductSubstitutesDto: GetProductSubstitutesDto,
  ): Promise<Substitute[]> {
    return this.substituteService.getCalculatedProductSubstitutes(
      getProductSubstitutesDto,
    );
  }

  @Get('/all')
  async getAllSubstitutes(): Promise<Substitute[]> {
    return this.substituteService.getAllSubstitutes();
  }

  @Post('/add')
  async addSubstitute(
    @Body() addSubstituteDto: AddSubstituteDto,
  ): Promise<Substitute> {
    return this.substituteService.addSubstitute(addSubstituteDto);
  }
}
