interface AddressResponse{
  "errorCode": 0,
  "errorDesc": "SUCCESS",
  "errorType": "SUCCESS",
  "addressResponseLst":AddressModel[]

  }
  interface AddressModel
  {
    "addrLine1": string,
    "addrLine2": string,
    "city": string,
    "country": string,
    "id": number,
    "pincode": number,
    "state": string
  }
