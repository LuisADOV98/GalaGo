import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'GalaGo';
  public showHeader: boolean = true;
  public closeMenu: boolean = false;
  public showFooter: boolean = false;

  public header: boolean = true;

  //No cierra la navegación actual del resto de páginas
  constructor(private router: Router){
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        this.showHeader = !this.shouldHideHeader(event.url); 
        this.showFooter = this.shouldFooter(event.url);
        this.closeMenu = this.shouldCloseMenu(event.url);
      }
    });
  }

  shouldHideHeader(url:string): boolean{
    const routesToHideHeader = ['/login', '/registro', '/quienes-somos'];
    // console.log(routesToHideHeader.some(route => url.includes(route)));
        
    return routesToHideHeader.some(route => url.includes(route));
  }

  shouldFooter(url:string): boolean{
    const routesToFooter = ['/landing', '/home', '/quienes-somos'];
    // console.log("routesToFooter",routesToFooter.some(route => url.includes(route)));
        
    return routesToFooter.some(route => url.includes(route));

  }
  shouldCloseMenu(url:string): boolean{
    const routesToHideHeader = ['/perfil', '/chats'];
    // console.log("routesToHideHeader",routesToHideHeader.some(route => url.includes(route)));
        
    return routesToHideHeader.some(route => url.includes(route));

  }





  // constructor(private router: Router){
  //   this.router.events.subscribe(event =>{
  //     if(event instanceof NavigationEnd){
  //       if((event.url == "/registro") || 
  //          (event.url == "/login") || 
  //          (event.url == "/quienes-somos") ){
  //           this.header = !this.header;
  //          }
  //     }
  //   })
  // }

}
