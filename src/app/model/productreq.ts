export class Productreq {
    constructor(
     
        public product_id: number,
        public product_name: string,
       public seller_id: number,
        public img_path: string,
        public price: number,
        public description: string,
        public is_deleted: string,
        public brand: string,
        category: {
          "category_id": number,
          "category_name": string;
        }
      )
    {

    };

}
