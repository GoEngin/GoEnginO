import { EventEmitter, Output, Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { BaseService } from '../base.service';

@Injectable()
export class ArticleService extends BaseService {

	constructor(protected _service: SharedService) {
		super(_service);
		// this._categoryPath = this.da.getPath('categories');
		// this._categoryRef = this.da.getData(this._categoryPath);
	}
}