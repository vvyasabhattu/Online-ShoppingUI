import { Product } from "./product";

export interface ProductResponse
{
  "errorCode": number,
   "errorDesc": string,
   "errorType": string,
   "productResponse": Product[],

  }
