import { Component, ElementRef } from '@angular/core';
import { SharedService } from '../../shared.service'; 
import { BaseComponent } from '../base.component';

@Component({
    selector: 'mc-header',
    moduleId: module.id,
    styleUrls: ['header.component.css'],
    templateUrl: 'header.component.html',
    host: {
        '[class.has-close]': 'hasClose'
    }
})

export class HeaderComponent extends BaseComponent {
	constructor(protected _el: ElementRef, protected _service: SharedService) { 
        super(_el, _service);
    }
}