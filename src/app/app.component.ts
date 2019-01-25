import { Component } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ConnectionService } from 'ng-connection-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { OnInit } from '@angular/core';
import { ToastService } from './service/toaster.service'; 
import { IToastMessage } from './model/toast';
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
    }, 1000);

  }

  //public message connection check
  status = 'ONLINE';
isConnected = true;

constructor(private connectionService: ConnectionService ,private spinner:NgxSpinnerService,private toastService: ToastService) {
  
  this.connectionService.monitor().subscribe(isConnected => {
    this.isConnected = isConnected;
    if (this.isConnected) {
      this.status = "ONLINE";
      this.success();
    }
    else {
      this.status = "OFFLINE";
      this.warn();
    }
  });
  //end of connection check


}
warn() {
  this.toastService.warn('Please check your network.');
 }
success()
{
  this.toastService.success('we are back..');
}
}
