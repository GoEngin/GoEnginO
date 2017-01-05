import { Component, ViewContainerRef, EventEmitter, Output } from '@angular/core';
import { AppBaseComponent } from '../appbase.component';
import { LoginService } from '../login/login.service';
import { SharedService } from '../shared/shared.service'; 

@Component({
	moduleId: module.id,
	selector: 'mc-usermenu',
	styleUrls: ['usermenu.component.css'],
	templateUrl: 'usermenu.component.html',
	host: {
		'(click)':'onPress($event)'
	}
})
export class UserMenuComponent extends AppBaseComponent {
	@Output() hide: EventEmitter<any> = new EventEmitter();

	constructor(
		protected el: ViewContainerRef,
		protected service: SharedService,
		private _loginService: LoginService
	) {
		super(el,service);
	}

	onPress(e: any) {
		let dom = this.service.getDom();
		if (dom.findParent(e.target,'.button__login__logout')) {
			this._loginService.logout();
			this.hide.emit({target:this});
		}
	}
}
