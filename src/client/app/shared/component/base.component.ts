//Base Component - Deprecated
//example Component Inheritance: http://wijmo.com/blog/using-class-inheritance-to-create-a-custom-component-in-angular-2/
//ElementRef and Renderer are injected from a child, so that they aren't needed, 
//but the typescript lint doesn't konw that so I added them for the lint.
import { Input, ElementRef } from '@angular/core';
import { SharedService } from '../shared.service'; 

export class BaseComponent {

    protected el: HTMLElement;
    protected util: any;
    protected dom: any;

    private _cls: string;

    @Input()
    set cls(value: string) {
        let dom = this.dom;
        if (this._cls) {
            dom.removeCls(this.el,value);
        }
        dom.addCls(this.el,value);
        this._cls = value;
    }
    get cls() {
        return this._cls;
    }

    constructor(protected _el: ElementRef, protected _service: SharedService) { 
        this.el = this._el.nativeElement;
        this.util = this._service.getUtil();
        this.dom = this._service.getDom();
    }

    // add base cls, this is not removable.
    addBaseCls(cls: string) {
        this.dom.addCls(this.el,cls);
    }
}