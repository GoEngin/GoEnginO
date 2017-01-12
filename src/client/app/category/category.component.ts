import { Component, ViewContainerRef, ViewChild, Input } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { AppBaseComponent } from '../appbase.component';
import { CategoryService } from './category.service';
import { CarouselComponent, CardComponent } from '../shared/component/index';
import { CategoryListComponent } from './categorylist.component';

@Component({
	moduleId: module.id,
	selector: 'mc-category',
	styleUrls: ['category.component.css'],
	templateUrl: 'category.component.html',
	host: {
		'(click)':'onPress($event)'
	}
})

export class CategoryComponent extends AppBaseComponent {

	private _data: any[] = [];
	private _title: string;
	private _prevTitle: string;
	private _defaultTitle: string = 'Category';
	private _headerLeftIcon: string = 'Category';
	private _parentCmp: any;
	private _parentId: string = '';

	@ViewChild('maincard') cardCmp: CardComponent;
	@ViewChild(CarouselComponent) carouselCmp: CarouselComponent;

	@Input()
    set config(config: any) {
        if (config.parentCmp) {
            this._parentCmp = config.parentCmp;
            this.updateToolTitle();
        }
    }

	constructor(
		protected el: ViewContainerRef,
		protected service: SharedService, 
		private _categoryService: CategoryService
	) {
		super(el,service);
		this.initData();
	}

	initData() {
		this.loadData();
	}

	onPress(e: any) {
		let dom = this.dom;
		let listItemEl = dom.findParent(e.target, 'mc-listitem');
		if (listItemEl) {
			this.nextList(listItemEl);
		} else if (this.dom.hasCls(e.target,'icon-left') || this.dom.hasCls(e.target,'card__title__previous')) {
			if (this.dom.findParent(e.target, '.header__card__content')) {
				this.previousList();
			}
		} else if (this.dom.hasCls(e.target,'card__title__current')) {
			if (this.dom.findParent(e.target, '.header__card__content')) {
				this.toggleCardCollapsed();
			}
		}
	}

	toggleCardCollapsed() {
		this.cardCmp.collapsed = !this.cardCmp.collapsed;
	}

	nextList(el: any) {
		let id = parseInt(el.dataset.id);
		let cItem = this.dom.findParent(el, 'mc-carouselitem');
		let idx = parseInt(cItem.dataset.idx);
		let item = this.getItem(id, idx);
		//current list
		let data = this._data[idx];
		data.selectedItem = item;
		data.title = item.displayName;
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
		this._parentId = id;
		this._categoryService.getCategories(id)
			.then((items: any) => {
				let data: any = {
					items: items || []
				};
				this._data[idx] = data;
				this.addCarouselItem(data,idx);
			});
	}

	addCarouselItem(data: any, idx: number) {
		let config = {
			data: data,
			editable: true
		}
		this.carouselCmp.addNew(CategoryListComponent, config, idx);
	}
}
