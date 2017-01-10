import { Component, Input, ViewContainerRef, ViewChild } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { AppBaseComponent } from '../appbase.component';
import { CategoryService } from './category.service';
import { ListComponent, ListItemComponent } from '../shared/component/index';

@Component({
	moduleId: module.id,
	selector: 'mc-categorylist',
	styleUrls: ['categorylist.component.css'],
	templateUrl: 'categorylist.component.html',
	host: {
		'(click)':'onPress($event)'
	}
})
export class CategoryListComponent extends AppBaseComponent {

	private _data:any = {items:[]};

	@ViewChild(ListComponent) listCmp: ListComponent;

	@Input() editable: boolean;
	@Input()
	set config(config: any) {
		this._data = config.data;
		this.editable = config.editable;
	}

	constructor(
		protected el: ViewContainerRef,
		protected service: SharedService,
		private _categoryService: CategoryService
	) {
		super(el,service);
		_categoryService.additem.subscribe((e: any) => this.onAddItem(e.item, e.count));
	}

	onAddItem(item: any, count: number) {
		let config = {
			item: item,
			editable: true,
			isSimpleEdit: true,
			cls: "listitem__" + (count/2 === 0 ? "even" : "odd")
		};
		this.listCmp.addItem(config);
	}

	onPress(e: any) {

	}
}