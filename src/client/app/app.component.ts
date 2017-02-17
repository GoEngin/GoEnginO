import { Component, ViewContainerRef } from '@angular/core';
import './operators';
import * as firebase from 'firebase';
import { SharedService } from './shared/shared.service';
import { DrawerComponent } from './shared/component/index';

@Component({
    moduleId: module.id,
    selector: 'mc-app',
    templateUrl: 'app.component.html',
})

export class AppComponent {

    constructor(
        private _el: ViewContainerRef,
        private _service: SharedService
    ) {
        const firebaseConfig = {
            apiKey: 'AIzaSyCyZ7hQF_ey2-7AbA-yaXRgarrjlyRZO_w',
            authDomain: 'goengin-a784e.firebaseapp.com',
            databaseURL: 'https://goengin-a784e.firebaseio.com',
            storageBucket: 'goengin-a784e.appspot.com',
            messagingSenderId: '487579082978'
        }
        firebase.initializeApp(firebaseConfig);
        _service.appEl = this._el;
        _service.sendmsg.subscribe((e: any) => this.onSendMsg(e));
    }

    onSendMsg(e: any) {
        this._service.showMsg(DrawerComponent, this._el, e.msg);
    }
}
