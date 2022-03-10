/* this creates a new datatype that we can use for each product */
export interface IProduct {
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}
