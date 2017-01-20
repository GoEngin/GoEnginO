import { EventEmitter, Output, Injectable, Input } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { BaseService } from '../base.service';

const CONS = {
	defaultRewardCoin: 10
}

@Injectable()
export class ArticleService extends BaseService {

	private _articleRef: any;
	private _articlePath: string = "article";

	@Input() categoryId: string;

	constructor(protected _service: SharedService) {
		super(_service);
		this._articleRef = this.da.getData(this._articlePath);
	}

	getArticleTitleList() {
		this.da.getData('article/title/' + this.categoryId);
	}

	createArticle(title: string, content: string, coin: number = 0, prevArticleId: string = '', nextArticleId: string = '') {
		let tagNames = this.getTagNames(content);
	}	

	getTagNames(content: string) {

		return {}
	}

	createArticleInfo(title: string, tagNames: any, coin: number = 0, prevArticleId: string = '', nextArticleId: string = '') {
		let articleInfo = {
			title: title,
			createdDate: new Date(),
			viewCount: 0,
			like: 0,
			prevArticleId: prevArticleId,
			nextArticleId: nextArticleId,
			userId: this.util.getUserId(),
			answerRewardCoin: coin,
			tag: tagNames
		}
		return this.da.getData('article/articleInfo/' + this.categoryId).push(articleInfo);
	}
}