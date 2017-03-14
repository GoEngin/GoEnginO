import { Component, ViewContainerRef, HostListener } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { AppBaseComponent } from '../appbase.component';
import { LoginComponent } from '../login/login.component';
import { UserMenuComponent } from '../usermenu/usermenu.component';
import { DrawerComponent } from '../shared/component/index';
import { CategoryComponent } from '../category/category.component';
import { ExampleComponent } from '../example/example.component';

@Component({
    moduleId: module.id,
    selector: 'mc-appheader',
    styleUrls: ['appheader.component.css'],
    templateUrl: 'appheader.component.html'
})
export class AppHeaderComponent extends AppBaseComponent {

    private _photoURL: string;
    private _userInfo: any;
    private _categoryDrawer: any;
    private _exampleDrawer: any;

    @HostListener('click',['$event'])
    onPress(e: any) {
        let dom = this.util.dom();
        if (dom.findParent(e.target,'.button__header__category')) {
            this._categoryDrawer.toggle();
        } else if (dom.findParent(e.target,'.button__header__person')) {
            this.showLoginForm();
        } else if (dom.findParent(e.target,'.button__header__gravatar')) {
            this.showUserMenu();
        }
    }

    constructor(
        protected el: ViewContainerRef,
        protected service: SharedService
    ) {
        super(el,service);
        this.checkLoggedIn();
        this.showCategory();
    }

    checkLoggedIn() {
        this.util.checkLoggedIn()
            .then((user:any) => {
                if (user) {
                    this._userInfo = user;
                    this._photoURL = this._userInfo.photoURL;
                }
            });
    }

    showLoginForm() {
        let config = {
            cls: 'drawer__usermenu',
            direction: 'right',
            hasClose: true,
            contentInfo: {
                cmpType: LoginComponent
            }
        };
        let cmp = this.service.showDrawer(DrawerComponent, this.el, config);
        cmp.instance.hided.subscribe((e: any) => {
          cmp.destroy();
          this.checkLoggedIn();
        });
    }

    showUserMenu() {
        let config = {
            cls: 'drawer__login',
            direction: 'right',
            hasClose: true,
            contentInfo: {
                cmpType: UserMenuComponent
            }
        };
        let cmp = this.service.showDrawer(DrawerComponent, this.el, config);
        cmp.instance.hided.subscribe((e: any) => {
          cmp.destroy();
        });
        // cmp.instance.selectmenu.subscribe((e: any) => {
        //     if (e.menu === 'example') {
        //         this.showExample();
        //     }
        // });
    }

    showCategory() {
        if (!this._categoryDrawer) {
            let config = {
                cls: 'drawer__category',
                direction: 'left',
                // hasTool: true,
                contentInfo: {
                    cmpType: CategoryComponent
                }
            };
            this._categoryDrawer = this.service.showDrawer(DrawerComponent, this.el, config).instance;
        } else {
            this._categoryDrawer.show();
        }
    }

    showExample() {
        //TODO: Need Example Module
        if (this._categoryDrawer) {
            this._categoryDrawer.hide();
        }
        if (!this._exampleDrawer) {
            let config = {
                cls: 'drawer__example',
                direction: 'left',
                contentInfo: {
                    cmpType: ExampleComponent
                }
            };
            this._exampleDrawer = this.service.showDrawer(DrawerComponent, this.el, config).instance;
        } else {
            this._exampleDrawer.show();
        }
    }
}
