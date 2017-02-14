import { Component, ViewContainerRef, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { AppBaseComponent } from '../appbase.component';

@Component({
    moduleId: module.id,
    selector: 'mc-examplegrid',
    styleUrls: ['examplegrid.component.css'],
    templateUrl: 'examplegrid.component.html'
})

export class ExampleGridComponent extends AppBaseComponent {

}
