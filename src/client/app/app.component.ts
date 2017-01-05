import { Component, ViewContainerRef } from '@angular/core';
import * as firebase from "firebase";
import { SharedService } from './shared/shared.service'; 
import { CategoryComponent } from './category/category.component';

@Component({
	moduleId: module.id,
	selector: 'mc-app',
	templateUrl: 'app.component.html',
})

export class AppComponent {

	private _categoryDrawer: any;

	constructor(
		private _el: ViewContainerRef,
		private _service: SharedService
	) {
		const firebaseConfig = {
			apiKey: "AIzaSyCyZ7hQF_ey2-7AbA-yaXRgarrjlyRZO_w",
			authDomain: "goengin-a784e.firebaseapp.com",
			databaseURL: "https://goengin-a784e.firebaseio.com",
			storageBucket: "goengin-a784e.appspot.com",
			messagingSenderId: "487579082978"
		}
		firebase.initializeApp(firebaseConfig);
		_service.sendmsg.subscribe((e: any) => this.onSendMsg(e));
		this.showCategory();
	}

	showCategory() {
		if (!this._categoryDrawer) {
			let config = {
				cls: 'drawer__category',
				direction: 'left',
				hasClose: true,
				contentInfo: {
					cmpType: CategoryComponent
				}
			};
			this._categoryDrawer = this._service.showDrawer(this._el, config);
		} else {
			this._categoryDrawer.show();
		}
	}

	onSendMsg(e: any) {
	this._service.showMsg(this._el, e.msg);
	}
}
