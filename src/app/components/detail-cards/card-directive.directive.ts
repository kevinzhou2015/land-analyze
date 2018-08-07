import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCardDirective]'
})
export class CardDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
