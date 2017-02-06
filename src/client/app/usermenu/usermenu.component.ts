import { Component, ViewContainerRef, EventEmitter, Output, HostListener } from '@angular/core';
import { SharedService } from '../shared/shared.service'; 
import { AppBaseComponent } from '../appbase.component';
import { LoginService } from '../login/login.service';

@Component({
    moduleId: module.id,
    selector: 'mc-usermenu',
    styleUrls: ['usermenu.component.css'],
    templateUrl: 'usermenu.component.html'
})
export class UserMenuComponent extends AppBaseComponent {

    @Output() hide: EventEmitter<any> = new EventEmitter();

    @HostListener('click',['$event'])
    onPress(e: any) {
        let dom = this.service.getDom();
        if (dom.findParent(e.target,'.button__login__logout')) {
            this._loginService.logout();
            this.hide.emit({target:this});
        }
    }

    constructor(
        protected el: ViewContainerRef,
        protected service: SharedService,
        private _loginService: LoginService
    ) {
        super(el,service);
    }
}
