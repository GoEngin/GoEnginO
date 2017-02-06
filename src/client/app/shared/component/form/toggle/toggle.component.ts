import { Component, Input, Output, EventEmitter, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';
import { SharedService } from '../../../shared.service'; 
import { ListData } from '../../model/listdata';
import { BaseComponent } from '../../base.component';

@Component({
    selector: 'mc-toggle',
    moduleId: module.id,
    styleUrls: ['./toggle.component.css'],
    templateUrl: './toggle.component.html'
})
export class ToggleComponent extends BaseComponent implements OnInit {

    private _indexes: any = {};
    private _focused: boolean = false;

    @Input() name: string;
    @Input() type: string;
    @Input() listData: ListData;

    @Input()
    set value(values: any) {
        this.listData.selectItems(values);
    }
    get value() {
        return this.listData.getSelectedItems();
    }

    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

    @HostBinding('class.focused') hb_focused = '_focused';

    @HostListener('click',['$event'])
    onPress(e: any) {
        let dom = this.util.dom();
        let el = dom.findParent(e.target,'.toggle__item');
        if (el) {
            this.listData.unselectAll();
            this.listData.selectItemByIndex(this.getIdx(el));
        }
    }
    @HostListener('focus',['$event'])
    onFocus(e: any) {
        this._focused = true;
    }
    @HostListener('blur',['$event'])
    onBlur(e: any) {
        this._focused = false;
    }

    constructor(protected _el: ElementRef, protected _service: SharedService) {
        super(_el, _service);
    }

    ngOnInit() {
        this.listData.selectedItemChange.subscribe((e: any) => this.onSelectedItemChange(e));
    }

    onSelectedItemChange(e: any) {
        let els = this.getItemEls();
        let dom = this.util.dom();
        if (e.lastUnselectedIndexes) {
            for (let idx of e.lastUnselectedIndexes) {
                dom.removeCls(<HTMLElement>els[idx], 'selected');
            }
        }
        if (e.lastSelectedIndexes) {
            for (let idx of e.lastSelectedIndexes) {
                dom.addCls(<HTMLElement>els[idx], 'selected');
            }
        }
    }

    getIdx(el: any) {
        return this.util.dom().parseClsInt(el,'toggle__item__idx__');
    }

    getItemEls() {
        return this.el.querySelector('.toggle__container').children;
    }
}
