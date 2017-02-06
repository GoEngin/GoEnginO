import { Component, Input, Output, EventEmitter, ElementRef, Inject, ViewChild, AfterViewInit, HostBinding } from '@angular/core';
import { SharedService } from '../../shared.service'; 
import { BaseComponent } from '../base.component';

@Component({
    selector: 'mc-card',
    moduleId: module.id,
    styleUrls: ['card.component.css'],
    templateUrl: 'card.component.html'
})

export class CardComponent extends BaseComponent implements AfterViewInit {

    private _collapsed: boolean;
    private _bodyHeight: number;
    private _afterViewInit: boolean;

    @ViewChild('cardbody') bodyEl: ElementRef;

    @Input()
    set collapsed(value: boolean) {
        if (this._afterViewInit) {
            this.expand(!value);
        }
        this._collapsed = value;
    }
    get collapsed() {
        return this._collapsed;
    }

    @Input() cls: string;
    @Input() headerCls: string = 'header__card';

    @HostBinding('class.collapsed') hb_editing = '_collapsed';

    constructor(protected _el: ElementRef, protected _service: SharedService) { 
        super(_el, _service);
    }

    ngAfterViewInit() {
        this._afterViewInit = true;
        this.initSize();
    }

    initSize() {
        if (this.collapsed) {
            this.bodyEl.nativeElement.style.height = '0px';
        }
    }

    expand(expanded: boolean) {
        let el = this.bodyEl.nativeElement;
        if (!this._bodyHeight) {
            let size = this.util.dom().getSize(el);
            this._bodyHeight = size.height;
        }
        //for animation, that is needed a delay.
        if (!el.style.height) {
            el.style.height = !expanded ? this._bodyHeight + 'px' : '0px';
        }
        setTimeout(() => el.style.height = expanded ? this._bodyHeight + 'px' : '0px',100);
    }
}