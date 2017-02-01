import { ViewContainerRef, Input } from '@angular/core';
import { SharedService } from './shared/shared.service';

export class AppBaseComponent {

    protected util: any;
    protected dom: any;

    constructor(
        protected el: ViewContainerRef,
        protected service: SharedService
    ) {
        this.util = this.service.getUtil();
        this.dom = this.service.getDom();
    }

    @Input()
    set hidden(value: boolean) {
        if (value) {
            this.dom.addCls(this.el.element.nativeElement, '__hidden__');
        } else {
            this.dom.removeCls(this.el.element.nativeElement, '__hidden__');
        }
    }
}
