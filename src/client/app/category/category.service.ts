import { EventEmitter, Output, Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { BaseService } from '../base.service';

@Injectable()
export class CategoryService extends BaseService {

	private _categoryRef: any;
	private _categoryPath: any;
	private _tempId: number = 0;
	private _parentId: string = '';
	items: Array<any> = [];

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
				this.items = this.da.snapshotToArray(snapshot);
				return this.items;
			})
			.catch((error: any) => this.service.doSendMsg(error));
	}

	doAddItem(parentId: string, displayName: string) {
		let item = {
			key: this.getTempId(),
			parentId: parentId,
			displayName: displayName,
			__modified__: {
				isNew: true
			}
		};
		this.items.push(item);
		this.additem.emit({item:item});
	}

	doSave() {
		this.items.forEach((item:any) => {
			let m = item.__modified__;
			if (m) {
				let parentId = item.parentId;
				let displayName = item.displayName;
				let key = item.key;
				if (m.isNew) {
					this.createCategory(parentId, displayName);
				} else if (m.isUpdated) {
					this.updateCategory(key, parentId, displayName);
				} else if (m.isDeleted) {
					this.deleteCategory(key);
				}
			}
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

	getTempId() {
		this._tempId++;
		return 'tempId___' + this._tempId;
	}
}