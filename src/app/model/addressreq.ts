export class Addressreq {
    constructor(
      public id:number,
        public addrLine1:string,
        public addrLine2:string,
        public city:string,
        public country:string,
        public pincode:string,
        public state: string,
      )
    {

    };

}
