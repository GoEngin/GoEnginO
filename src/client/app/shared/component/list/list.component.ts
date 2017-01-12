import { Component, Input, ElementRef, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import { SharedService } from '../../shared.service'; 
import { BaseComponent } from '../base.component';
import { ListData } from '../model/listdata';
import { ListItemComponent } from './listitem.component';

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
        '(click)' : 'onPress($event)'
    }
})

export class ListComponent extends BaseComponent {

    // private _toggledItems: any[] = [];
    // private _selectedListItem: any;
    // private _detailHeight: number;
    // private _columns: any[];
    // private _iconTypeInfo: any = {};

    //ListData will have columns also.
    private _listData: ListData;

    @ViewChild('children', {read: ViewContainerRef}) listContainer: ViewContainerRef;
    @ViewChild('inputlabel') inputLabelEl: HTMLInputElement;

    @Input() cls: string;
    @Input()
    set items(value:any) {
        this._listData = new ListData({items:value},this._service);
    }
    @Input() headerCls: string;
    @Input() itemsHeader: boolean = false;
    @Input() idField: string = 'id';
    @Input() isSimpleEdit: boolean = false;

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

    constructor(protected _el: ElementRef, protected _service: SharedService) { 
        super(_el, _service);
    }

    onPress(e: any) {
        if (e.target.tagName.toLowerCase() === 'mc-icon' && e.target.dataset) {
            this.updateState(e.target, e.target.dataset.icontype);
            e.stopPropagation();
        } else if (this.dom.findParent(e.target,'button__tool__add')) {
            this.onAddItem(e.target);
        } else if (this.dom.findParent(e.target,'button__tool__save')) {
            this.onSaveAll();
        }
    }

    onSaveAll() {
        let modifiedItems = this._listData.getModifiedItems();
        this.clicksaveall.emit({modifiedItems:modifiedItems});
    }

    onAddItem(el: HTMLElement) {
        let displayName = this.inputLabelEl.value;
        this.changeitem.emit({cud:'c',displayName:displayName});
    }

    addItem(config:any, cmpType:any = ListItemComponent) {
        let count = this._listData.addItem(config.item);
        config.cls = "listitem__" + (count/2 === 0 ? "even" : "odd");
        this._service.addComponent(cmpType, config, this.listContainer);
    }

    onEditItem(el: HTMLElement, item: any) {
        this.dom.addCls(el, 'edit-mode');
    }

    onSaveItem(el: HTMLElement, item: any) {
        this.dom.removeCls(el, 'edit-mode');
        this.changeitem.emit({target:this, listItemEl:el, update:true, item:item});
    }

    onDeleteItem(el: HTMLElement, item: any) {
        el.parentNode.removeChild(el);
        this.changeitem.emit({target:this, listItemEl:el, delete:true, item:item});
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
        let id = el.dataset.id;
        let items = this.items;
        let idField = this.idField;
        let item: any;
        for ( let i=0; i < items.length; i++ ) {
            if (items[i][idField] + '' === id) {
                item = items[i];
                break;
            }
        }
        return item;
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