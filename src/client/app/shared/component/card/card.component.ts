import { Component, Input, Output, EventEmitter, ElementRef, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../base.component';
import { SharedService } from '../../shared.service'; 

@Component({
    selector: 'mc-card',
    moduleId: module.id,
    styleUrls: ['card.component.css'],
    templateUrl: 'card.component.html',
    host: {
        '[class.collapsed]': '_collapsed'
    }
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

    @Input() hasHeader: boolean = true;
    @Input() headerLeftIcon: string = '';
    @Input() headerRightIcon: string = '';
    @Input() title: string = '';
    @Input() cls: string;
    @Input() headerCls: string = 'header__card';

    @Output() pressHeaderLeftIcon: EventEmitter<any> = new EventEmitter();
    @Output() pressHeaderRightIcon: EventEmitter<any> = new EventEmitter();
    @Output() pressTitle: EventEmitter<any> = new EventEmitter();

    constructor(protected _el: ElementRef, protected _service: SharedService) { 
        super(_el, _service);
    }

    ngAfterViewInit() {
        this._afterViewInit = true;
        this.initSize();
    }

    initSize() {
        if (this.collapsed) {
            this.bodyEl.nativeElement.style.height = "0px";
        }
    }

    onPressLeftIcon(e: any) {
        this.pressHeaderLeftIcon.emit(e);
    }
    onPressRightIcon(e: any) {
        this.pressHeaderRightIcon.emit(e);
    }
    onPressTitle(e: any) {
        this.pressTitle.emit({event:e,cmp:this});
    }

    expand(expanded: boolean) {
        let el = this.bodyEl.nativeElement;
        if (!this._bodyHeight) {
            let size = this.util.dom().getSize(el);
            this._bodyHeight = size.height;
        }
        //for animation, that is needed a delay.
        if (!el.style.height) {
            el.style.height = !expanded ? this._bodyHeight + 'px' : '0px'
        }
        setTimeout(() => el.style.height = expanded ? this._bodyHeight + 'px' : '0px',100);
    }
}