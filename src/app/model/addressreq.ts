export class Addressreq {
    constructor(
      public id:string,
        public addrLine1:string,
        public addrLine2:string,
        public city:string,
        public country:string,
        public pincode:string,
        public state: string,
        public defaultAddress :string,
        public addressTag: string
      )
    {

    };

}
