import { IsNotEmpty } from 'class-validator';

export class AddSubstituteDto {
  @IsNotEmpty()
  mainProduct: number;

  @IsNotEmpty()
  secondProduct: number;

  @IsNotEmpty()
  mainProductWeight: number;

  @IsNotEmpty()
  secondProductWeight: number;
}
