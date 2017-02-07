import { Component, ViewContainerRef, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { AppBaseComponent } from '../appbase.component';
import { ListData } from '../shared/component/index';

@Component({
    moduleId: module.id,
    selector: 'mc-articlelist',
    styleUrls: ['articlelist.component.css'],
    templateUrl: 'articlelist.component.html'
})
export class ArticleListComponent extends AppBaseComponent {

    private _listData: ListData;
    private _items: any;

    @Input()
    set config(config: any) {
        if (config.items && config.indexes) {
            this._listData = new ListData({items: config.items, indexes: config.indexes},this.service);
            this._items = this._listData.getItems();
        }
        if (config.parentId) {
            this.parentId = config.parentId;
        }
    }
    @Input() parentId: string;

    @HostListener('click',['$event'])
    onPress(e: any) {
        return false;
    }

    constructor(
        protected el: ViewContainerRef,
        protected service: SharedService
    ) {
        super(el,service);
    }

    getItem(el: any) {
        return this.getItemById(el.dataset.id);
    }

    getItemById(id: any) {
        return this._listData.getItem(id);
    }
}
