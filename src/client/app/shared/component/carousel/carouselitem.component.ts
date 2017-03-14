import { Component, Input, Output, Inject, ViewChild, ViewContainerRef, ElementRef, HostBinding } from '@angular/core';
import { SharedService } from '../../shared.service'; 
import { BaseComponent } from '../base.component';

@Component({
    moduleId: module.id,
    selector: 'mc-carouselitem',
    styleUrls: ['carouselitem.component.css'],
    templateUrl: 'carouselitem.component.html'
})

export class CarouselItemComponent extends BaseComponent {

    @ViewChild('children', {read: ViewContainerRef}) container: ViewContainerRef;

    @HostBinding('attr.data-idx') @Input() idx: number = 0;
    @HostBinding('style.width') private _width: string;

    @Input()
    set width(value: number) {
        this._width = value + 'px';
    }
    get width() {
        return parseInt(this._width.split('px')[0]);
    }
    @Input()
    set config(config: any) {
        if (config.idx) {
            this.idx = config.idx;
        }
        if (config.width) {
            this.width = config.width;
        }
    }

    constructor(protected _el: ElementRef, protected _service: SharedService) { 
        super(_el, _service);
    }
}
