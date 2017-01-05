import { Component, Input, ViewContainerRef } from '@angular/core';
import { AppBaseComponent } from '../appbase.component';
import { SharedService } from '../shared/shared.service';

@Component({
	moduleId: module.id,
	selector: 'mc-articlelist',
	styleUrls: ['articlelist.component.css'],
	templateUrl: 'articlelist.component.html',
	host: {
		'(click)':'onPress($event)'
	}
})
export class ArticleListComponent extends AppBaseComponent {

	private _columns: any[];
	private _data: any;

	@Input()
	set config(config: any) {
		this._columns = config.columns;
		this._data = config.data;
	}

	constructor(
		protected el: ViewContainerRef,
		protected service: SharedService
	) {
		super(el,service);
	}

	onPress(e: any) {

	}
}