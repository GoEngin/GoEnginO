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

}
