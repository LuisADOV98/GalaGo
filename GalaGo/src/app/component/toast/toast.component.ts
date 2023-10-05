import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {

  //los recive del padre
  @Input() title: string;
  @Input() message: string;
  @Output() eventToast = new EventEmitter<boolean>() ;

  public showToast: boolean = true;
  public isPut : boolean = true;
  public static readonly TOAST_TIME = 3000;


  constructor() {}

  ngOnInit(): void {

    if(this.title == 'ERROR'){
      this.isPut = false;
    }
    this.show() 

  }

 public show() {
    setTimeout(() => {
      this.showToast = false;
      this.eventToast.emit(false);
    }, ToastComponent.TOAST_TIME);
  }

}