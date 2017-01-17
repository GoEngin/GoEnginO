import { EventEmitter, Input, Output, Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { BaseService } from '../base.service';

@Injectable()
export class CategoryService extends BaseService {

	private _categoryRef: any;
	private _categoryPath: any;
	private _tempId: number = 0;
	private _parentId: string = '';

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
				return this.da.snapshotToArray(snapshot);
			})
			.catch((error: any) => this.service.doSendMsg(error));
	}

	getParentId() {return this._parentId;}

	saveAll(items: any) {
		items.new.forEach((item:any) => {
			this.createCategory(item.parentId, item.displayName);
		});
		items.updated.forEach((item:any) => {
			this.updateCategory(item.id, item.parentId, item.displayName);
		});
		items.deleted.forEach((item:any) => {
			this.deleteCategory(item.id);
		});
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