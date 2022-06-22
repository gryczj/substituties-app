import { IsNotEmpty } from 'class-validator';

export class AddProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  category: number;
}
