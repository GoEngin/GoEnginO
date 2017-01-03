import { Component, ViewContainerRef, EventEmitter, Output } from '@angular/core';
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
export class UserMenuComponent {

	@Output() hide: EventEmitter<any> = new EventEmitter();

	constructor(
		private _el: ViewContainerRef, 
		private _loginService: LoginService,
		private _service: SharedService
	) {
		
	}

	onPress(e: any) {
		let dom = this._service.getDom();
		if (dom.findParent(e.target,'.button__login__logout')) {
			this._loginService.logout();
			this.hide.emit({target:this});
		}
	}
}
