import { Product } from "../../product/dto/product.entity";

export interface OutputSubstitute {
  id: number;
  mainProduct: number;
  secondProduct: Product;
  mainProductWeight: number;
  secondProductWeight;
}

export interface CalculatedSubstitute {
  id: number;
  name: string;
  category: string;
  weight: number;
}

export interface ProductWithSubstitutes {
  id: number;
  name: string;
  category: string;
  weight: number;
  substitutes: CalculatedSubstitute[];
}
