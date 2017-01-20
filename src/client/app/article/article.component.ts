import { Component, ViewContainerRef, ViewChild, Input } from '@angular/core';
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
	private _defaultTitle: string = 'Category';
	private _headerLeftIcon: string = 'Category';
	private _parentCmp: any;
	private _categoryId: string;

	@ViewChild('maincard') cardCmp: CardComponent;
	@ViewChild(CarouselComponent) carouselCmp: CarouselComponent;

	@Input()
    set config(config: any) {
        if (config.parentCmp) {
            this._parentCmp = config.parentCmp;
            this.updateToolTitle();
        }
        if (config.categoryId) {
        	this._categoryId = config.categoryId;
        }
    }

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
		let dom = this.dom;
		let listItemEl = dom.hasCls(e.target, 'listitem__input__label') ? false : dom.findParent(e.target, 'mc-listitem');
		if (listItemEl) {
			this.nextList(listItemEl);
		} else if (this.dom.findParent(e.target,'.header__category__left')) {
			this.previousList();
		}
	}

	nextList(el: any) {
		let id = el.dataset.id;
		let cItem = this.dom.findParent(el, 'mc-carouselitem');
		let idx = parseInt(cItem.dataset.idx);
		if (idx < CONS.MAX_CATEGORY_DEPTH) {
			let item = this.getItem(id, idx);
			//current list
			let data = this._data[idx];
			data.selectedItem = item;
			data.title = item.displayName;
			this.updateHeader(idx);
			this.loadData(el.dataset.id,++idx);
		}
	}

	previousList() {
		this._data.pop();
		let idx = this.carouselCmp.previous();
		this.updateHeader(idx - 1);
	}

	updateHeader(idx: number) {
		//children list header
		this._title = idx >= 0 ? this._data[idx].title : this._defaultTitle;
		this._prevTitle = idx > 0 ? this._data[idx-1].title : idx === 0 ? this._defaultTitle : '';
		this._headerLeftIcon = idx >= 0 ? 'left' : '';
		this.updateToolTitle();
	}

	updateToolTitle() {
		if (this._parentCmp) {
			this._parentCmp.toolTitle = this._title || this._defaultTitle;
		}
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
		this._categoryService.getCategories(id)
			.then((items: any) => {
				this._data[idx] = {parentId:id};
				this.addCarouselItem(items, idx);
			});
	}

	addCarouselItem(items: any, idx: number) {
		let config = {
			items: items,
			isSimpleEdit: this.util.isAdmin(),
			isSimpleList: true,
			options: {
				itemTpl: {
					parentId: this._data[idx].parentId
				}
			}
		}
		let listCmp = this.carouselCmp.addNew(ListComponent, config, idx).instance;
		listCmp.clicksaveall.subscribe((e:any) => this.onSaveAll(e.modifiedItems));
		this._data[idx].items = items;
		this._data[idx].listCmp = listCmp;
	}

	onSaveAll(modifiedItems: any) {
		this._categoryService.saveAll(modifiedItems);
	}
}
