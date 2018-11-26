import { Component } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ConnectionService } from 'ng-connection-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'onlineshoppingui';
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 2000);

  }

  //public message connection check
  status = 'ONLINE';
isConnected = true;

constructor(private connectionService: ConnectionService ,private spinner:NgxSpinnerService) {
  
  this.connectionService.monitor().subscribe(isConnected => {
    this.isConnected = isConnected;
    if (this.isConnected) {
      this.status = "ONLINE";
    }
    else {
      this.status = "OFFLINE";
    }
  });
  //end of connection check


}


}
