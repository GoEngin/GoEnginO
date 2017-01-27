import { Component, Input, ElementRef, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import { SharedService } from '../../shared.service'; 
import { BaseComponent } from '../base.component';
import { ListData } from '../model/listdata';

const IconType = {
    // Expand: "expand",
    // Select: "select",
    // Toggle: "toggle",
    Edit: "edit",
    Save: "save",
    Delete: "delete"
}

//TODO: listitem edit event
@Component({
    selector: 'mc-list',
    moduleId: module.id,
    styleUrls: ['list.component.css'],
    templateUrl: 'list.component.html',
    host: {
        '(click)' : 'onPress($event)',
        '[class.editing]' : '_isEditing',
        '[class.readonly]' : '!_hasDirty'
    }
})

export class ListComponent extends BaseComponent {

    @Input() cls: string;
    @Input() itemsHeader: boolean = false;
    @Input() isSimpleList: boolean = false;
    @Input() isSimpleEdit: boolean = false;
    @Input() idField: string = 'id';
    @Input() displayField: string = 'displayName';
    //for additional information like index, parentId etc.
    @Input() options: any;
    @Input()
    set items(value:any) {
        this._listData = new ListData({items:value,valueField:this.idField,displayField:this.displayField},this._service);
        this._items = this._listData.getItems();
        this._listData.itemChange.subscribe((e:any) => this.onItemChange(e));
    }
    //TODO: Can they be the constructor's parameters?
    @Input()
    set config(config: any) {
        if (config.cls) {
            this.cls = config.cls;
        }
        if (config.itemsHeader) {
            this.itemsHeader = true;
        }
        if (config.isSimpleList) {
            this.isSimpleList = true;
        }
        if (config.isSimpleEdit) {
            this.isSimpleEdit = true;
        }
        if (config.items) {
            this.items = config.items;
        }
        if (config.options) {
            this.options = config.options;
        }
    }

    // @Input()
    // set columns(value: any) {
    //     this._columns = value;
    //     this._columns.forEach((column: any) => {
    //         if (column.iconType) {
    //             this._iconTypeInfo[column.iconType] = {
    //                 icon: column.icon,
    //                 toggled: column.iconToggled
    //             }
    //         }
    //     });
    // }
    // get columns() {
    //     return this._columns;
    // }

    @Output() changeitem: EventEmitter<any> = new EventEmitter();
    @Output() clicksaveall: EventEmitter<any> = new EventEmitter();

    // private _toggledItems: any[] = [];
    // private _selectedListItem: any;
    // private _detailHeight: number;
    // private _columns: any[];
    // private _iconTypeInfo: any = {};

    //ListData will have columns also.
    private _listData: ListData;
    private _items: any;
    private _isEditing: boolean = false;
    private _hasDirty: boolean = false;
    private _inputEl: any;

    constructor(protected _el: ElementRef, protected _service: SharedService) { 
        super(_el, _service);
    }

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

    onItemSelect(el: any) {
        let id = el.dataset.id;
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
            this._inputEl = this._el.nativeElement.querySelector('.list__additem__label__input');
        }
        return this._inputEl;
    }

    onAddItem(el: HTMLElement) {
        let displayName = this.getInputEl().value;
        if (this.isSimpleEdit) {
            this.addSimpleItem(displayName);
        }
        this.changeitem.emit({target: this, cud: 'c',displayName:displayName});
    }

    addSimpleItem(displayName: string) {
        let item: any = {};
        if (this.options) {
            item = this.options.itemTpl || {};
        }
        item[this.displayField] = displayName;
        let config = {
            item: item
        }
        this.addItem(config);
    }

    addItem(config:any) {
        let count = this._listData.addItem(config.item);
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
            // case IconType.Toggle:
            //     this.updateToggledItems(el,item,iconEl);
            //     break;
            // case IconType.Select:
            //     this.updateSelectedItem(el,item,iconEl);
            //     break;
            // case IconType.Expand:
            //     this.updateExpandedItem(el,iconEl);
            //     break;
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

    // getSelectedItem() {
    //     return this._selectedListItem ? this._selectedListItem.item : null;
    // }

    // getToggledItems() {
    //     return this._toggledItems;
    // }

    // updateToggledItems(el: HTMLElement, item: any, iconEl: HTMLElement) {
    //     let added = this.dom.toggleCls(el,'toggled');
    //     if (!added) {
    //         let items = this._toggledItems;
    //         let idx: number = -1;
    //         let idField = this.idField;
    //         for ( let i = 0; i < items.length; i++ ) {
    //             if (items[i][idField] === item[idField]) {
    //                 idx = i;
    //                 break;
    //             }
    //         }
    //         if (idx > -1) {
    //             this._toggledItems.splice(idx,1);
    //         }
    //     } else {
    //         this._toggledItems.push(item);
    //     }
    //     this.updateIcon(IconType.Toggle, iconEl, added);
    // }

    // updateSelectedItem(el: HTMLElement, item: any, iconEl: HTMLElement) {
    //     if (this._selectedListItem) {
    //         this.dom.removeCls(this._selectedListItem.el, 'selected');
    //     }
    //     this.dom.addCls(el,'selected');
    //     this._selectedListItem = {el: el, item: item};
    // }

    // updateExpandedItem(el: HTMLElement, iconEl: HTMLElement) {
    //     let added = this.dom.toggleCls(el, 'expanded');
    //     let detailEl: any = el.getElementsByClassName('listitem__detail')[0];
    //     if (!this._detailHeight) {
    //         let size = this.dom.getSize(detailEl);
    //         this._detailHeight = size.height;
    //     }
    //     this.updateIcon(IconType.Expand, iconEl, added);
    //     if (detailEl) {
    //         //for animation, that is needed a delay.
    //         setTimeout(() => detailEl.style.height = added ? this._detailHeight + 'px' : '0px',0);
    //     }
    // }

    // updateIcon(iconType: string, iconEl: HTMLElement, toggled: boolean) {
    //     let icon = this._iconTypeInfo[iconType];
    //     if (icon.toggled) {
    //         let newCls = toggled ? icon.toggled : icon.icon;
    //         let oldCls = toggled ? icon.icon : icon.toggled;
    //         this.dom.replaceCls(iconEl, 'icon-' + oldCls, 'icon-' + newCls);
    //     }
    // }
}