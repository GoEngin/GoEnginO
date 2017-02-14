import { Component, ViewContainerRef, ViewChild, Input, HostListener } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { AppBaseComponent } from '../appbase.component';
import { ExampleService } from './example.service';
import { ExampleGridComponent } from './examplegrid.component';

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

    private _egCmp: any;
    private _items: any[];

    @HostListener('click',['$event'])
    onPress(e: any) {
        let dom = this.dom;
        let listItemEl = dom.findParent(e.target, 'mc-listitem');
        if (listItemEl) {
            this.showExample(listItemEl);
        }
    }

    constructor(
        protected el: ViewContainerRef,
        protected service: SharedService,
        private _exampleService: ExampleService
    ) {
        super(el,service);
        this.initData();
    }

    initData() {
        this.loadData();
    }

    loadData() {
        this._items = this._exampleService.getExampleList();
    }

    showExample(el: any) {
        let id = el.dataset.id;
        let cmpType: any;
        let config: any;
        switch(id) {
            case 0:
                cmpType = ExampleGridComponent;
                config = {};
                break;
        }
        if (this._egCmp) {
            this._egCmp.destroy();
        }
        this._egCmp = this.service.addComponent(cmpType, config, this.el);
    }
}
