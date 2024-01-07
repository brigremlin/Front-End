import { Component, ElementRef, Injectable, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {

  @ViewChild('myModal', {static: false}) modal: ElementRef;
  message = "";

  open(alert) {
    this.modal.nativeElement.style.display = 'block';
    this.message = alert;
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }

}
