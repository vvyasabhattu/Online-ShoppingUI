
export interface Addproduct
{
    errorCode: number,
    errorDesc: string,
    errorType: string,
   
    productResponse : productResponse[]
   
}
interface productResponse
{
    product_id: number ,
    product_name: string,
    seller_id: number,
    img_path: string,
    price: number,
    description: string,
    qty: number,
    is_deleted: string,
    brand: string,
    category: Category[]
}
interface  Category
{
    category_id : number,
    category_name : string,
}