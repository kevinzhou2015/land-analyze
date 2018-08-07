import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { MatButton } from '@angular/material';

@Component({
  template: `<p></p>`
})
export class FilterContainerComponent implements OnInit {

  @ViewChild('overlayComp') overlayComp: TemplateRef<any>;
  @ViewChild('originBtn') originBtn: MatButton;
  overlayRef: OverlayRef;

  constructor(protected overlay: Overlay, protected viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    const strategy = this.overlay
      .position()
      .connectedTo(this.originBtn._elementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' });
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: strategy
    });
    this.overlayRef.backdropClick().subscribe(_ => {
      if (this.overlayRef && this.overlayRef.hasAttached()) {
        this.overlayRef.detach();
      }
    });
  }

  showOverloay() {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    } else {
      this.overlayRef.attach(new TemplatePortal(this.overlayComp, this.viewContainerRef));

    }
  }

  closeOverloay() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

}
