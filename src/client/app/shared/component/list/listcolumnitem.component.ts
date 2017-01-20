import { Component, Input, Output, EventEmitter, ElementRef, Inject, ViewChild } from '@angular/core';
import { SharedService } from '../../shared.service'; 
import { BaseComponent } from '../base.component';

//TODO: Does this create too much instances that can be caused the poor performance or wasting memory? 
// -> Material2 Also use list-item component.
@Component({
    selector: 'mc-listcolumnitem',
    moduleId: module.id,
    styleUrls: ['listcolumnitem.component.css'],
    templateUrl: 'listcolumnitem.component.html',
    host: {
        '[attr.data-id]': 'item[idField]',
        '[class.editable]': 'editable'
    }
})

export class ListColumnItemComponent extends BaseComponent {

    @Input() cls: string;
    @Input() item: any;
    @Input() columns: any[];
    @Input() idField: string = 'id';
    @Input() displayField: string = 'displayName';
    @Input() hasDetail: boolean;
    @Input() hasTable: boolean;
    @Input() editable: boolean = false;

    @Input()
    set config(config: any) {
        if (config.cls) {
            this.cls = config.cls;
        }
        if (config.item) {
            this.item = config.item;
        }
        if (config.idField) {
            this.idField = config.idField;
        }
        if (config.displayField) {
            this.displayField = config.displayField;
        }
        if (config.hasDetail) {
            this.hasDetail = config.hasDetail;
        }
        if (config.hasTable) {
            this.hasTable = config.hasTable;
        }
        if (config.editable) {
            this.editable = config.editable;
        }
        if (config.columns) {
            this.columns = config.columns;
        }
    }

    constructor(protected _el: ElementRef, protected _service: SharedService) { 
        super(_el, _service);
    }
}