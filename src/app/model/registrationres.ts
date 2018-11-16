interface rolesList{
          createdDate : string,
          updatedDate: string,
          createdUser: string,
          updatedUser: string,
          id: number,
          role: string
}
interface addressLst {
  createdDate: string,
  updatedDate: string,
   createdUser: string,
   updatedUser: string,
  id:number,
  city: string,
  state: string,
  country: string,
   pincode: number,
  addrLine1: string,
  addrLine2: string
}
interface User{
  createdDate : string,
  updatedDate:string,
  createdUser: string,
  updatedUser: string,
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  contactNumber: string,
  roleLst : rolesList[],
  addressLst : addressLst[]
  
}
interface Response{
   user  : User;
}
export interface Userdetail {
          errorCode :number,
          errorDesc :string,
          errorType:string,
          response : Response
}


