import { IsNotEmpty } from 'class-validator';

export class GetProductSubstitutesDto {
  @IsNotEmpty()
  productId: number;

  @IsNotEmpty()
  productWeight: number;
}
