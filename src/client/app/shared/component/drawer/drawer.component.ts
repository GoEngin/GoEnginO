import { Component, Input, Output, EventEmitter, ElementRef, Inject, ViewChild, ViewContainerRef, HostBinding } from '@angular/core';
import { SharedService } from '../../shared.service';
import { BaseComponent } from '../base.component';

const Direction = {
    Left: 'left',
    Right: 'right',
    Top: 'top',
    Bottom: 'bottom'
};

@Component({
    selector: 'mc-drawer',
    moduleId: module.id,
    styleUrls: ['drawer.component.css'],
    templateUrl: 'drawer.component.html'
})

export class DrawerComponent extends BaseComponent {

    private _contentCmp: any;

    @ViewChild('children', {read: ViewContainerRef}) container: ViewContainerRef;

    @HostBinding('style.z-index') private _zIndex: number = 99;
    @HostBinding('class.shown') private _shown: boolean = false;
    @HostBinding('class.opened') private _opened: boolean = false;
    @HostBinding('class.is-bottom') get is_bottom() { return this.direction === 'bottom'; }
    @HostBinding('class.is-top') get is_top() { return this.direction === 'top'; }
    @HostBinding('class.is-left') get is_left() { return this.direction === 'left'; }
    @HostBinding('class.is-right') get is_right() { return this.direction === 'right'; }

    @Input() direction: string = Direction.Bottom;
    @Input() cls: string;
    @Input() message: string;
    @Input() hasClose: boolean = false;
    @Input() hasTool: boolean = false;
    @Input() toolTitle: string = '';
    @Input()
    set config(config: any) {
        if (config.zIndex) {
            this._zIndex = config.zIndex;
        }
        if (config.direction) {
            this.direction = config.direction;
        }
        if (config.message) {
            this.addBaseCls('drawer__message');
            this.message = config.message;
        }
        if (config.cls) {
            this.cls = config.cls;
        }
        if (config.contentInfo) {
            this.addContent(config.contentInfo);
        }
        if (config.hasClose) {
            this.hasClose = true;
        }
        if (config.hasTool) {
            this.hasTool = true;
        }
    }

    @Output() hided: EventEmitter<any> = new EventEmitter();

    constructor(protected _el: ElementRef, protected _service: SharedService) {
        super(_el, _service);
    }

    addContent(config: any) {
        if (this._contentCmp) {
            this._contentCmp.destroy();
        }

        let _config = config.config || {}
        _config.parentCmp = this;

        let cmp: any = this._service.addComponent(config.cmpType, _config, this.container);
        if (cmp.instance.hide) {
            cmp.instance.hide.subscribe((e: any) => this.hide());
        }
        this._contentCmp = cmp;
    }

    show(msg?: string, cls?: string) {
        //for animation, we need time to apply a new class

        //message
        this._shown = true;
        if (msg && !this.cls) {
            this.addBaseCls('drawer__message');
            this.message = msg;
        }
        if (cls) {
            this.cls = cls;
        }
        //end message

        setTimeout(() => {
            this._opened = true;
        }, 100);
    }

    hide() {
        this._opened = false;
        setTimeout(() => {
            this._shown = false;
            this.hided.emit({target:this});
        }, 300);
    }

    opened() {
        return this._opened;
    }

    onPressMask(e: any) {
        this.hide();
    }

    toggle() {
        if (this._opened) {
            this.hide();
        } else {
            this.show();
        }
    }

    onClose(e: any) {
        this.hide();
    }
}
