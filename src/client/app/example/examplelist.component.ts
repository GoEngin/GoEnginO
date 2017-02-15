import { Component, Input } from '@angular/core';
import { AppBaseComponent } from '../appbase.component';

@Component({
    moduleId: module.id,
    selector: 'mc-examplelist',
    styleUrls: ['examplelist.component.css'],
    templateUrl: 'examplelist.component.html'
})
export class ExampleListComponent extends AppBaseComponent {

    private _items: any;

    @Input()
    set config(config: any) {
        this._items = config.items;
    }
}
