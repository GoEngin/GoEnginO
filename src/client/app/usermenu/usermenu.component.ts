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

    @Output() selectmenu: EventEmitter<any> = new EventEmitter();

    @HostListener('click',['$event'])
    onPress(e: any) {
        if (this.dom.findParent(e.target,'.button__login__logout')) {
            this._loginService.logout();
        } else if (this.dom.findParent(e.target,'.button__example')) {
            this.selectmenu.emit({target:this,menu:'example'});
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
