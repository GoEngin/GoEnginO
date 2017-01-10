import { EventEmitter, Input, Output, Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { BaseService } from '../base.service';
import { ListData } from '../shared/component/index';

@Injectable()
export class CategoryService extends BaseService {

	private _categoryRef: any;
	private _categoryPath: any;
	private _tempId: number = 0;
	private _parentId: string = '';

	@Input() listData: ListData;
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
		this._parentId = parentId;
		return this._categoryRef.orderByChild('parentId').equalTo(parentId).once('value')
			.then((snapshot: any) => {
				this.listData = new ListData({items:this.da.snapshotToArray(snapshot)},this._service);
				return this.listData;
			})
			.catch((error: any) => this.service.doSendMsg(error));
	}

	doAddItem(parentId: string, displayName: string) {
		this.listData.addItem({parentId:parentId,displayName:displayName});
	}

	doSave() {
		let items = this.listData.getModifiedItems();
		items.new.forEach((item:any) => {
			this.createCategory(item.parentId, item.displayName);
		});
		items.updated.forEach((item:any) => {
			this.updateCategory(item.id, item.parentId, item.displayName);
		});
		items.deleted.forEach((item:any) => {
			this.deleteCategory(item.id);
		});
		this.getCategories(this._parentId);
	}

	createCategory(parentId: string = '', displayName: string) {
		let item = {
			parentId: parentId,
			displayName: displayName
		};
		this._categoryRef.push(item)
	}

	updateCategory(key: string, parentId: string, displayName: string) {
		this.da.updateData(this._categoryPath + '/' + key, {parentId: parentId, displayName: displayName});
	}

	deleteCategory(key: string) {
		this.da.removeData(this._categoryPath + '/' + key);
	}
}