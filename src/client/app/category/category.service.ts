import { EventEmitter, Output, Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { BaseService } from '../base.service';

@Injectable()
export class CategoryService extends BaseService {

	private _categoryRef: any;
	private _categoryPath: any;
	private _tempId: number = 0;
	items: any[] = [];

	@Output() additem: EventEmitter<any> = new EventEmitter();

	constructor(protected _service: SharedService) {
		super(_service);
		this._categoryPath = this.da.getPath('categories');
		this._categoryRef = this.da.getData(this._categoryPath);
	}

	/*
	3 depth catetory
	Job > Interview > Coding Interview
	*/
	getCategories(parentId: string = '') {
		return this._categoryRef.orderByChild('parentId').equalTo(parentId)
			.then((snapshot: any) => {
				this.items = snapshot;
				return snapshot;
			})
			.catch((error: any) => this.service.doSendMsg(error));
	}

	addEmptyItem() {
		let item = {
			key: this.getTempId(),
			parentId: '',
			displayName: ''
		};
		this.items.push(item);
		this.additem.emit({item:item});
	}

	createCategory(parentId: string = '', categoryName: string) {
		let item = {
			parentId: parentId,
			categoryName: categoryName
		};
		this._categoryRef.push(item)
	}

	updateCategory(key: string, parentId: string, categoryName: string) {
		this.da.updateData(this._categoryPath + '/' + key, {parentId: parentId, categoryName: categoryName});
	}

	deleteCategory(key: string) {
		this.da.removeData(this._categoryPath + '/' + key);
	}

	getTempId() {
		this._tempId++;
		return 'tempId___' + this._tempId;
	}
}