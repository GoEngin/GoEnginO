import { Component, Input, Output, EventEmitter, ElementRef, Inject, ViewContainerRef, ViewChild, HostListener } from '@angular/core';
import { SharedService } from '../../shared.service';
import { BaseComponent } from '../base.component'
import { CarouselItemComponent } from './carouselitem.component';

@Component({
    selector: 'mc-carousel',
    moduleId: module.id,
    styleUrls: ['carousel.component.css'],
    templateUrl: 'carousel.component.html'
})

export class CarouselComponent extends BaseComponent {

    private _children: any[] = [];
    private _size: any;
    private _childrenWidth: string;
    private _childrenTransform: string;
    private _timer: any = null;

    @ViewChild('children', {read: ViewContainerRef}) container: ViewContainerRef;

    @HostListener('window:resize',['$event'])
    onResize(e: any) {
        if (!this._timer) {
            this._timer = setTimeout(() => {
                this._size = this._service.getDom().getSize(this._el.nativeElement);
                let w = this._size.width;
                this._children.forEach(child => child.instance.width = w);
                this._childrenWidth = (this._children.length * w) + 'px';
                this.move(this._children.length - 1,w);
                clearTimeout(this._timer);
                this._timer = null;
            },500);
        }
    }
    @HostListener('click',['$event'])
    onPress(e: any) {
        return false;
    }

    constructor(protected _el: ElementRef, protected _service: SharedService ) { 
        super(_el, _service);
    }

    previous() {
        return this.remove() - 1;
    }

    remove(idx?: number, anim: boolean = true) {
        let lastIdx = this._children.length - 1;
        idx = idx >= 0 ? idx : lastIdx;
        if (idx > 0) {
            if (anim) {
                this.anim(idx-1,true);
                setTimeout(() => {
                    this._remove(idx);
                }, 300);
            } else {
                this._remove(idx);
            }
        }
        return idx;
    }

    _remove(idx: number) {
        let removed = this._children.splice(idx);
        for (let i = removed.length - 1; i >= 0; i-- ) {
            removed[i].destroy();
        }
        removed = null;
    }

    anim(idx: number, removed: boolean = false) {
        let w = ((idx + 1) * this._size.width) + 'px';
        this.move(idx,this._size.width);
        if (removed) {
            setTimeout(()=>{
                this._childrenWidth = w;
            },300);
        } else {
            this._childrenWidth = w;
        }
    }

    move(idx: number, width: number) {
        let x = 'translateX(-' + (idx * width) + 'px)';
        this._childrenTransform = x;
    }

    addNew(cmpType: any, config: any, idx?: number) {
        if (!this._size) {
            this._size = this._service.getDom().getSize(this._el.nativeElement);
        }
        //remove existing 
        if (idx >= 0) {
            this.remove(idx, false);
        } else {
            idx = this._children.length;
        }

        this.anim(idx);

        let cmp: any = this._service.addComponent(CarouselItemComponent, {idx:idx, width:this._size.width}, this.container);
        this._children.push(cmp);
        let contentCmp: any = this._service.addComponent(cmpType, config, cmp.instance.container);
        return contentCmp;
    }
}
