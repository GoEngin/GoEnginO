import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { AppBaseComponent } from '../appbase.component';
import { ArticleService } from './article.service';
import { CarouselComponent, CardComponent } from '../shared/component/index';
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
	templateUrl: 'article.component.html',
	host: {
		'(click)':'onPress($event)'
	}
})

export class ArticleComponent extends AppBaseComponent {

	private _data: any[] = [];
	private _title: string;
	private _prevTitle: string;
	private _defaultTitle: string = "Categories";
	private _headerLeftIcon: string;

	@ViewChild('maincard') cardCmp: CardComponent;
	@ViewChild(CarouselComponent) carouselCmp: CarouselComponent;

	constructor(
		protected el: ViewContainerRef,
		protected service: SharedService, 
		private _articleService: ArticleService
	) {
		super(el,service);
		this.initData();
	}

	initData() {
		this.loadData();
	}

	onPress(e: any) {
		let listItemEl = this.util.findParent(e.target, 'mc-listitem',10);
		if (listItemEl) {
			this.nextList(listItemEl);
		} else if (this.util.hasCls(e.target,'icon-left') || this.util.hasCls(e.target,'card__title__previous')) {
			if (this.util.findParent(e.target, '.header__card__content',6)) {
				this.previousList();
			}
		} else if (this.util.hasCls(e.target,'card__title__current')) {
			if (this.util.findParent(e.target, '.header__card__content',6)) {
				this.toggleCardCollapsed();
			}
		}
	}

	toggleCardCollapsed() {
		this.cardCmp.collapsed = !this.cardCmp.collapsed;
	}

	nextList(el: any) {
		let id = parseInt(el.dataset.id);
		let cItem = this.util.findParent(el, 'mc-carouselitem');
		let idx = parseInt(cItem.dataset.idx);
		let item = this.getItem(id, idx);
		//current list
		let data = this._data[idx];
		data.selectedItem = item;
		data.title = item.region;
		this.updateHeader(idx);
		this.loadData(el.dataset.id,++idx);
	}

	previousList() {
		let idx = this.carouselCmp.remove() - 1;
		this._data.pop();
		this.updateHeader(idx - 1);
	}

	updateHeader(idx: number) {
		//children list header
		this._title = idx >= 0 ? this._data[idx].title : this._defaultTitle;
		this._prevTitle = idx > 0 ? this._data[idx-1].title : idx === 0 ? this._defaultTitle : '';
		this._headerLeftIcon = idx >= 0 ? 'left' : '';
	}

	getItem(id: number, idx?: number) {
		idx = idx >= 0 ? idx : this._data.length - 1;
		let items = this._data[idx].items;
		let item: any;
		for (let i = 0; i < items.length; i++) {
			if (items[i].id === id) {
				item = items[i];
				break;
			}
		}
		return item;
	}

	loadData(id: string = '', idx: number = 0) {
		//Category
		// if (idx < 3) {
		// 	this._articleService.getCategories(id)
		// 		.then((data: any) => {
		// 			this.addCarouselItem(data,idx);
		// 		});
		// } else if (idx === 3) {
		// 	let articles = this._articleService.getArticles(id);
		// } else if (idx === 4) {
		// 	let article = this._articleService.getArticle(id);
		// }
	}

	addCarouselItem(data: any, idx: number) {
		let config = {
			data: data
		}
		// switch (idx) {
		// 	case 0:
		// 	case 1:
		// 	case 2:
		// 		this.carouselCmp.addNew(CategoryListComponent, config, idx);
		// 		break;
		// 	case 3:
		// 		this.carouselCmp.addNew(ArticleListComponent, config, idx);
		// 		break;
		// 	case 4:
		// 		this.carouselCmp.addNew(ArticleDetailComponent, config, idx);
		// 		break;
		// }
	}
}
