import { EventEmitter, Output, Injectable, Input } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { BaseService } from '../base.service';

const CONS = {
    defaultRewardCoin: 10
};

@Injectable()
export class ArticleService extends BaseService {

    private _articleRef: any;
    private _articlePath: string = 'article';

    constructor(protected _service: SharedService) {
        super(_service);
        this._articleRef = this.da.getData(this._articlePath);
    }

    getArticleList(categoryId: string) {
        return this.da.getData('article/list/' + categoryId);
    }

    getArticle(categoryId: string, articleId: string) {
        return this.da.getData('article/body/' + categoryId + '/' + articleId);
    }

    createArticle(title: string, content: string, coin: number = 0, prevArticleId: string = '', nextArticleId: string = '') {
        let tagNames = this.getTagNames(content);
    }

    getTagNames(content: string) {

        return {}
    }

    createArticleInfo(
        categoryId: string,
        title: string,
        tagNames: any,
        coin: number = 0,
        prevArticleId: string = '',
        nextArticleId: string = '') {
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
        };
        return this.da.getData('article/articleInfo/' + categoryId).push(articleInfo);
    }
}