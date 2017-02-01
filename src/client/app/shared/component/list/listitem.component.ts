import { Component, Input, ElementRef, HostBinding } from '@angular/core';
import { SharedService } from '../../shared.service';
import { BaseComponent } from '../base.component';

//TODO: Does this create too much instances that can be caused the poor performance or wasting memory? 
// -> Material2 Also use list-item component.
@Component({
    selector: 'mc-listitem',
    moduleId: module.id,
    styleUrls: ['listitem.component.css'],
    templateUrl: 'listitem.component.html'
})

export class ListItemComponent extends BaseComponent {
    constructor(protected _el: ElementRef, protected _service: SharedService) {
        super(_el, _service);
    }
}
