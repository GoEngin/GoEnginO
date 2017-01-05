import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'mc-categorylistitem',
	styleUrls: ['categorylistitem.component.css'],
	templateUrl: 'categorylistitem.component.html'
})
export class CategoryListItemComponent {
	
	@Input() item: any;

	@Input()
    set config(config: any) {
        this.item = config.item;
    }
}