import { Component, ViewContainerRef, ViewChild, Input, HostListener } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { AppBaseComponent } from '../appbase.component';
import { CarouselComponent } from '../shared/component/index';
import { ExampleService } from './example.service';
import { ExampleListComponent } from './examplelist.component';

const CONS = {
    MAX_CATEGORY_DEPTH: 2
}

@Component({
    moduleId: module.id,
    selector: 'mc-example',
    styleUrls: ['example.component.css'],
    templateUrl: 'example.component.html'
})

export class ExampleComponent extends AppBaseComponent {

    private _data: any[] = [];
    private _title: string;
    private _prevTitle: string;
    private _defaultTitle: string = 'Examples';
    private _headerLeftIcon: string = '';
    private _parentCmp: any;
    private _articleCmp: any;

    @ViewChild(CarouselComponent) carouselCmp: CarouselComponent;

    @HostListener('click',['$event'])
    onPress(e: any) {
        let dom = this.dom;
        let listItemEl = dom.findParent(e.target, 'mc-listitem');
        if (listItemEl) {
            this.nextList(listItemEl);
        } else if (this.dom.findParent(e.target,'.header__example__left')) {
            this.previousList();
        }
    }

    constructor(
        protected el: ViewContainerRef,
        protected service: SharedService,
        private _exampleService: ExampleService
    ) {
        super(el,service);
        this.addCarouselItem({items:this._exampleService.getExampleList()}, 0);
    }

    nextList(el: any) {
        let id = el.dataset.id;
        let cItem = this.dom.findParent(el, 'mc-carouselitem');
        let idx = parseInt(cItem.dataset.idx);
        let item = this.getItem(id, idx);
        if (item.children) {
            let data = this._data[idx];
            data.selectedItem = item;
            data.title = item.displayName;
            this.updateHeader(idx);
            this.addCarouselItem({items:item.children}, ++idx);
        } else {
            this.showExample(item.displayName);
        }
    }

    previousList() {
        this._data.pop();
        let idx = this.carouselCmp.previous();
        this.updateHeader(idx - 1);
    }

    updateHeader(idx: number) {
        //children list header
        this._title = idx >= 0 ? this._data[idx].title : this._defaultTitle;
        this._prevTitle = idx > 0 ? this._data[idx-1].title : idx === 0 ? this._defaultTitle : '';
        this._headerLeftIcon = idx >= 0 ? 'left' : '';
    }

    getItem(id: number, idx?: number) {
        idx = idx >= 0 ? idx : this._data.length - 1;
        let items = this._data[idx].items;
        let item: any;
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                item = items[i];
                break;
            }
        }
        return item;
    }

    addCarouselItem(data: any, idx: number) {
        let config = data;
        let listCmp = this.carouselCmp.addNew(ExampleListComponent, config, idx).instance;
        this._data[idx] = data;
        data = null;
    }

    showExample(displayName: string) {
        //load example
        return false;
    }
}
