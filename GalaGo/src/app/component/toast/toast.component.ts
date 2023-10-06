import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {

  //los recive del padre
  @Input() titleToast: string; //envia titulo al padre
  @Input() message: string; //envia mensaje al padre
  @Output() eventToast = new EventEmitter<boolean>() ; //recoge el evento que el padre emite

  public showToast: boolean = true;
  public isPut : boolean = true;
  public static readonly TOAST_TIME = 1000; //tiempo que esta activo 


  constructor() {
    console.log("event toast desde toast:");
    console.log(this.eventToast);
  }

  ngOnInit(): void {
    if(this.titleToast == 'ERROR'){
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