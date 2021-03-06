import { Injectable, ViewContainerRef, ComponentFactoryResolver, Input, Output, EventEmitter } from '@angular/core';
import { Util } from './util/util';

@Injectable()
export class SharedService {

  private _util: Util;

  @Input() appEl: ViewContainerRef;

  @Output() sendmsg: EventEmitter<any> = new EventEmitter();

  constructor(private _resolver: ComponentFactoryResolver) {
    this._util = new Util();
  }

  doSendMsg(msg: string, config: any = null) {
    this.sendmsg.emit({target:this, msg:msg, config:config});
  }

  showMsg(drawer: any, parentEl: ViewContainerRef, msg: string, direction: string = 'top', cls: string = 'red') {
    let config = {message: msg, direction: direction, cls: cls, zIndex: 1001};
    let cmp: any = this.showDrawer(drawer, parentEl, config);
    cmp.instance.hided.subscribe((e: any) => {
      cmp.destroy();
    });
    return cmp;
  }

  showDrawer(drawer: any, parentEl: ViewContainerRef, config: any, show: boolean = true) {
    let cmp: any = this.addComponent(drawer, config, parentEl);
    if (show) cmp.instance.show();
    return cmp;
  }

  addComponent(cmpType: any, config: any = {}, parentEl: ViewContainerRef) {
    //http://stackoverflow.com/questions/39297219/angular2-rc6-dynamically-load-component-from-module
    let factory = this._resolver.resolveComponentFactory(cmpType);
    let cmp: any = parentEl.createComponent(factory);
    cmp.instance['config'] = config;
    return cmp;
  }

  getUtil() {
    return this._util;
  }

  isLoggedIn() {
    return this._util.isLoggedIn();
  }

  getValidator() {
    return this._util.validator();
  }

  //data access
  getDataAccess() {
    return this._util.dataAccess();
  }

  //dom
  getDom() {
    return this._util.dom();
  }
}
