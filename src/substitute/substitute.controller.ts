import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SubstituteService } from './substitute.service';
import { Substitute } from './dto/substitute.entity';
import { AddSubstituteDto } from './dto/add-substitute.dto';

@Controller('substitute')
export class SubstituteController {
  constructor(private substituteService: SubstituteService) {}

  @Get('/all/:productId')
  async getSubstitutes(
    @Param('productId') productId: number,
  ): Promise<Substitute[]> {
    return this.substituteService.getSubstitutes(productId);
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
