


export interface Userlist
{
    createdDate: string,
    updatedDate: string,
    createdUser: string,
    updatedUser: string,
    id: number,
    firstName: string,
    lastName: String,
    email: string,
    contactNumber: string,
    roleLst:Rolelist[],
    addressLst: Addresslist[]
}
interface Rolelist
{
    createdDate: string,
    updatedDate: string,
    createdUser: string,
    updatedUser: string,
    id: number,
    role: string
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
    addrLine2: string
}
 export interface Userdetails
{
    errorCode: number,
    errorDesc: string,
    errorType: string,
    response: string
    userLst : Userlist[]
   
}