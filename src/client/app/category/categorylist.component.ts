import { Component, Input, ViewContainerRef, ViewChild } from '@angular/core';
import { AppBaseComponent } from '../appbase.component';
import { SharedService } from '../shared/shared.service';
import { CategoryService } from './category.service';
import { ListComponent } from '../shared/component/index';
import { CategoryListItemComponent } from './categorylistitem.component';

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

	private _data: any;
	private _editable: boolean;

	@ViewChild(ListComponent, {read: ViewContainerRef}) listEl: ViewContainerRef;

	@Input()
	set config(config: any) {
		this._data = config.data;
	}

	constructor(
		protected el: ViewContainerRef,
		protected service: SharedService,
		private _categoryService: CategoryService
	) {
		super(el,service);
		_categoryService.additem.subscribe((e: any) => this.onAddEmptyItem(e.item));
	}

	onAddEmptyItem(item: any) {
		this.service.addComponent(CategoryListItemComponent, {item:item}, this.listEl);
	}

	onPress(e: any) {

	}
}