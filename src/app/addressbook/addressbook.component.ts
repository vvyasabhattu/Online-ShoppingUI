import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid/main";
import { Addressreq } from '../model/addressreq';
@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.css']
})
export class AddressbookComponent implements OnInit {

  
address = new Addressreq('','','','','','',0);
  ngOnInit() {
  }


    constructor() {
       
        
       
    }

    columnDefs = [            
      {
          headerName: "id",
          field: "id",                
          width: 100
      },
      {
        headerName: "city",
        field: "city",                
        width: 100
     },
     {
      headerName: "state",
      field: "state",                
      width: 100
    },
    {
      headerName: "country",
      field: "country",                
      width: 100
    },
    {
      headerName: "pincode",
      field: "pincode",                
      width: 100
    },
    {
      headerName: "addrLine1",
      field: "addrLine1",                
      width: 100
    },
    {
      headerName: "addrLine2",
      field: "addrLine2",                
      width: 100
    },

  ];
    rowData = [
      {
        "id": 43,
        "city": "Hyderabad",
        "state": "TELANGANA",
        "country": "India",
        "pincode": 500081,
        "addrLine1": "vbsit Park",
        "addrLine2": "Hitech"
      },
      {
        "id": 50,
        "city": "Hyderabad",
        "state": "TELANGANA",
        "country": "India",
        "pincode": 500081,
        "addrLine1": "vbit Park",
        "addrLine2": "Hitech"
      }
  
    ]
}
