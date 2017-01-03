//Base Component - Deprecated
//example Component Inheritance: http://wijmo.com/blog/using-class-inheritance-to-create-a-custom-component-in-angular-2/
//ElementRef and Renderer are injected from a child, so that they aren't needed, but the typescript lint doesn't konw that so I added them for the lint.
import { Input, ElementRef } from '@angular/core';
import { SharedService } from '../shared.service'; 

export class BaseComponent {

    private _cls: string;
    public el: HTMLElement;
    public util: any;

    constructor(protected _el: ElementRef, protected _service: SharedService) { 
        this.el = this._el.nativeElement;
        this.util = this._service.getUtil();
    }

    @Input()
    set cls(value: string) {
        let dom = this._service.getDom();
        if (this._cls) {
            dom.removeCls(this.el,value);
        }
        dom.addCls(this.el,value);
        this._cls = value;
    }
    get cls() {
        return this._cls;
    }

    // add base cls, this is not removable.
    addBaseCls(cls: string) {
        this._service.getDom().addCls(this.el,cls);
    }
}