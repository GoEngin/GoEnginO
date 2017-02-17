import { Component, ViewContainerRef, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { AppBaseComponent } from '../appbase.component';

@Component({
    moduleId: module.id,
    selector: 'mc-exampleviewer',
    styleUrls: ['exampleviewer.component.css'],
    templateUrl: 'exampleviewer.component.html'
})

export class ExampleViewerComponent extends AppBaseComponent {

}
