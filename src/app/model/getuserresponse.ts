


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
    password:string,
    roleLst:Rolelist[]
   
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

 export interface Userdetail
{
    errorCode: number,
    errorDesc: string,
    errorType: string,
    userLst : Userlist[]
   
}
