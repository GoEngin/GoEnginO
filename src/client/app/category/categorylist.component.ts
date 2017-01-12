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
		this.listCmp.changeitem.subscribe((e:any) => this.onChangeItem(e.cud, e.displayName));
		this.listCmp.clicksaveall.subscribe((e:any) => this.onSaveAll(e.modifiedItems));
	}

	onSaveAll(modifiedItems: any) {
		this._categoryService.saveAll(modifiedItems)
	}

	onChangeItem(cud: string, displayName: string) {
		let item: any;
		switch (cud) {
			case "c":
				item = {
					parentId: this._categoryService.getParentId(),
					displayName: displayName
				};
				let config = {
					item: item,
					editable: true,
					isSimpleEdit: true
				};
				this.listCmp.addItem(config);
				break;
		}
	}

	onPress(e: any) {

	}
}