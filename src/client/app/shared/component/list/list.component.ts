import { Component, Input, ElementRef, Output, EventEmitter, ViewChild, ViewContainerRef, HostListener, HostBinding } from '@angular/core';
import { SharedService } from '../../shared.service';
import { BaseComponent } from '../base.component';
import { ListData } from '../model/listdata';

const IconType = {
    Edit: 'edit',
    Save: 'save',
    Delete: 'delete'
};

//TODO: listitem edit event
@Component({
    selector: 'mc-list',
    moduleId: module.id,
    styleUrls: ['list.component.css'],
    templateUrl: 'list.component.html'
})

export class ListComponent extends BaseComponent {

    constructor(protected _el: ElementRef, protected _service: SharedService) {
        super(_el, _service);
    }

    onEditItem(el: HTMLElement, item: any) {
        this.dom.addCls(el, 'edit-mode');
        this.findLabelInput(el).focus();
        this._isEditing = true;
    }

    findLabelInput(el: HTMLElement) {
        return <HTMLInputElement> el.querySelector('.listitem__input__label');
    }

    onSaveItem(el: HTMLElement, item: any) {
        if (this.isSimpleEdit) {
            this.updateSimpleItem(el, item);
        }
        this.dom.removeCls(el, 'edit-mode');
        this._isEditing = false;
        this.changeitem.emit({target:this, listItemEl:el, cud: 'u', item:item});
    }

    updateSimpleItem(el: HTMLElement, item: any) {
        let labelEl = el.querySelector('.listitem__label');
        let displayName = this.findLabelInput(el).value;
        labelEl.innerHTML = displayName;
        item[this.displayField] = displayName;
        this._listData.updateItem(item);
    }

    onDeleteItem(el: HTMLElement, item: any) {
        el.parentNode.removeChild(el);
        this._listData.deleteItem(item);
        this.changeitem.emit({target:this, listItemEl:el, cud: 'd', item:item});
    }

    updateState(iconEl: any, iconType: string) {
        let el = this.dom.findParent(iconEl, 'mc-listitem');
        let item = this.getItem(el);
        switch (iconType) {
            case IconType.Edit:
                this.onEditItem(el,item);
                break;
            case IconType.Save:
                this.onSaveItem(el,item);
                break;
            case IconType.Delete:
                this.onDeleteItem(el,item);
                break;
        }
    }

    getItem(el: any) {
        return this.getItemById(el.dataset.id);
    }

    getItemById(id: any) {
        return this._listData.getItem(id);
    }
}
