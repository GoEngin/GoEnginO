import { Component, Input, ViewContainerRef, HostListener } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { AppBaseComponent } from '../appbase.component';

@Component({
    moduleId: module.id,
    selector: 'mc-articledetail',
    styleUrls: ['articledetail.component.css'],
    templateUrl: 'articledetail.component.html'
})
export class ArticleDetailComponent extends AppBaseComponent {

    private _columns: any[];
    private _data: any;

    @Input()
    set config(config: any) {
        this._columns = config.columns;
        this._data = config.data;
    }

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
}
