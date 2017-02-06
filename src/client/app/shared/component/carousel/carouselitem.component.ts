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

    private _width: string;

    @ViewChild('children', {read: ViewContainerRef}) container: ViewContainerRef;

    @Input() idx: number = 0;
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

    @HostBinding('attr.data-idx') hb_idx = 'idx';
    @HostBinding('style.width') hb_width = '_width';

    constructor(protected _el: ElementRef, protected _service: SharedService) { 
        super(_el, _service);
    }
}
