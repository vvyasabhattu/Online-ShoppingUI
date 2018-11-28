export interface Product
{

      "product_id": number;
      "product_name": string;
      "seller_id": number,
      "img_path": string;
      "price": number;
      "description": string;
      "is_deleted": string;
      "brand": string;
      "category": {
        "category_id": number,
        "category_name": string;
      }
    }
