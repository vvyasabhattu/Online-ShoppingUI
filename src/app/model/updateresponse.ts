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
    contactNumber: string
 
}
export interface Userdetails
{
    errorCode: number,
    errorDesc: string,
    errorType: string,
    response: string
    userLst : Userlist[]
   
}
