import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[scrollTracker]',
})

export class ScrollTracker {
  @Output() scrolled = new EventEmitter<any>();
 

  @HostListener("window:scroll", ["$event"])

  onWindowScroll() {
    let endReached = false;
    //In chrome and some browser scroll is given to body tag 
    let  windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    let  body = document.body,
    html = document.documentElement,
    docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  
    let  windowBottom = windowHeight + window.pageYOffset;
    
    if (windowBottom >= docHeight ) {
        endReached = true;
    } 

     this.scrolled.emit({
        pos: windowBottom,
        endReached
      })
  } 
}