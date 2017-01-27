import { Component, ViewContainerRef, ViewChild, Input, HostListener } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { AppBaseComponent } from '../appbase.component';
import { ArticleService } from './article.service';
import { CarouselComponent, CardComponent, ListComponent } from '../shared/component/index';
import { ArticleListComponent } from './articlelist.component';
import { ArticleDetailComponent } from './articledetail.component';

const CONS = {
    dataName: {
        categories: 'categories',
        articles: 'articles',
        article: 'article'
    }
};

@Component({
    moduleId: module.id,
    selector: 'mc-article',
    styleUrls: ['article.component.css'],
    templateUrl: 'article.component.html'
})

export class ArticleComponent extends AppBaseComponent {

    @ViewChild('maincard') cardCmp: CardComponent;
    @ViewChild(CarouselComponent) carouselCmp: CarouselComponent;

    private _list:any = [];
    private _article: any;
    private _title: string;
    private _prevTitle: string;
    private _listCmp: any;
    private _listItem: any;
    private _category: any;

    @HostListener('click',['$event'])
    onPress(e: any) {
        let dom = this.dom;
        let listItemEl = dom.findParent(e.target, 'mc-listitem');
        if (listItemEl) {
            this.loadArticle(listItemEl);
        } else if (this.dom.findParent(e.target,'.header__article-list__left')) {
            this.loadList(this._category);
        }
    }

    @Input()
    set config(config: any) {
        if (config.category) {
            this._category = config.category;
            this.loadList(this._category);
        }
    }

    constructor(
        protected el: ViewContainerRef,
        protected service: SharedService, 
        private _articleService: ArticleService
    ) {
        super(el,service);
    }

    loadArticle(el: any) {
        this._listItem = this._listCmp.getItem(el);
        this._prevTitle = this._title;
        this._title = this._listItem.title;
        this._articleService.getArticle(this._category.id,  this._listItem.articleId)
            .then((article: any) => {
                this._article = article;
                this.addCarouselItem(article, 1);
            });
    }

    loadList(category: any) {
        this._title = this._category.displayName;
        this._prevTitle = '';
        this._articleService.getArticleList(category.id)
            .then((items: any) => {
                this._list = items;
                this.addCarouselItem(items, 0);
            });
    }

    addCarouselItem(data: any, idx: number) {
        let cmp: any;
        let config: any;
        if (idx === 0) {
            config = {
                items: data
            };
            cmp = ListComponent;
        } else {
            config = {};
            cmp = ArticleDetailComponent;
        }
        let childCmp = this.carouselCmp.addNew(cmp, config, idx).instance;
        if (idx === 0) {
            this._listCmp = childCmp;
        }
    }
}
