import { Component, OnInit } from '@angular/core';

import { ToastService } from '../service/toaster.service';
import { IToast } from '../model/toast';
@Component({
  selector: 'app-toast',
  templateUrl: './toast-host.component.html',
  styleUrls: ['./toast-host.component.css']
})
export class ToastHostComponent implements OnInit {
  toasts: IToast[] = [];

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    this.toastService.getToast().subscribe((toast: IToast) => {
      if (!toast) {
        // clear toasts when an empty toast is received
        this.toasts = [];
        return;
      }
      this.toasts.push(toast);
      setTimeout(() => this.removeToast(toast), 3000);
    });
  }

  removeToast(toast: IToast): void {
    this.toasts = this.toasts.filter(x => x !== toast);
  }
}