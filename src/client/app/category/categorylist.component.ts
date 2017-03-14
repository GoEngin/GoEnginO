import { Component, ViewContainerRef, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { AppBaseComponent } from '../appbase.component';
import { ListData } from '../shared/component/index';

const CONS = {
    ICON_TYPE: {
        edit: 'edit',
        save: 'save',
        delete: 'delete'
    }
};

@Component({
    moduleId: module.id,
    selector: 'mc-categorylist',
    styleUrls: ['categorylist.component.css'],
    templateUrl: 'categorylist.component.html'
})

export class CategoryListComponent extends AppBaseComponent {

    private _listData: ListData;
    private _items: any;
    private _inputEl: any;

    @HostBinding('class.editing') private _isEditing: boolean = false;
    @HostBinding('class.readonly') private _hasDirty: boolean = false;

    @HostListener('click',['$event'])
    onPress(e: any) {
        if (e.target.tagName.toLowerCase() === 'mc-icon' && e.target.dataset) {
            this.updateState(e.target, e.target.getAttribute('icon'));
            e.stopPropagation();
        } else if (this.dom.findParent(e.target,'.button__tool__add')) {
            this.onAddItem(e.target);
        } else if (this.dom.findParent(e.target,'.button__tool__save')) {
            this.onSaveAll();
        }
    }

    //TODO: Can they be the constructor's parameters?
    @Input()
    set config(config: any) {
        if (config.items && config.indexes) {
            this._listData = new ListData({items: config.items, indexes: config.indexes},this.service);
            this._items = this._listData.getItems();
            this._listData.itemChange.subscribe((e:any) => this.onItemChange(e));
        }
        if (config.parentId) {
            this.parentId = config.parentId;
        }
    }
    @Input() parentId: string;

    @Output() clicksaveall: EventEmitter<any> = new EventEmitter();

    constructor(
        protected el: ViewContainerRef,
        protected service: SharedService
    ) {
        super(el,service);
    }

    onSaveAll() {
        let modifiedItems = this._listData.getModifiedItems();
        this.clicksaveall.emit({modifiedItems:modifiedItems});
    }

    onItemChange(e: any) {
        this._hasDirty = e.hasDirty;
    }

    getInputEl() {
        if (!this._inputEl) {
            this._inputEl = this.el.element.nativeElement.querySelector('.category-list__additem__label__input');
        }
        return this._inputEl;
    }

    onAddItem(el: HTMLElement) {
        let displayName = this.getInputEl().value;
        this.doAddItem(displayName);
    }

    doAddItem(displayName: string) {
        let item: any = {
            parentId: this.parentId,
            displayName: displayName
        };
        this.addItem(item);
    }

    addItem(item:any) {
        let count = this._listData.addItem(item);
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
        this.updateItem(el, item);
        this.dom.removeCls(el, 'edit-mode');
        this._isEditing = false;
    }

    updateItem(el: HTMLElement, item: any) {
        let labelEl = el.querySelector('.listitem__label');
        let displayName = this.findLabelInput(el).value;
        labelEl.innerHTML = displayName;
        item.displayName = displayName;
        this._listData.updateItem(item);
    }

    onDeleteItem(el: HTMLElement, item: any) {
        el.parentNode.removeChild(el);
        this._listData.deleteItem(item);
    }

    updateState(iconEl: any, iconType: string) {
        let el = this.dom.findParent(iconEl, 'mc-listitem');
        let item = this.getItem(el);
        let iconTypes = CONS.ICON_TYPE;
        switch (iconType) {
            case iconTypes.edit:
                this.onEditItem(el,item);
                break;
            case iconTypes.save:
                this.onSaveItem(el,item);
                break;
            case iconTypes.delete:
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

