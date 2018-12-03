

export interface Useraddress
{
    errorCode: number,
    errorDesc: string,
    errorType: string,
   
   addressLst : Addresslist[]
   
}
interface Addresslist
{
    createdDate: string,
    updatedDate: string,
    createdUser: string,
    updatedUser: string,
    id: number,
    city: string,
    state: string,
    country: string,
    pincode: 0,
    addrLine1: string,
    addrLine2: string,
    userid : Userid
}
interface  Userid
{
    id: number
}