import { Dom } from './dom';
import { DataAccess } from './dataaccess';
import { Validator } from './validator';

const CONS: any = {
  userGroup: {
    admin: 'admin',
    user: 'user'
  }
}

export class Util {

  _dom: Dom;
  _da: any;

  constructor() { 
    this._dom = new Dom();
    this._da = new DataAccess();
  }

  isEmpty(value:any) {
    if (value === undefined || value === null || value === '') {
      return true;
    }
    return false;
  }

  validator() {
    return Validator;
  }

  //data access
  dataAccess() {
    return this._da;
  }

  //dom
  dom() {
    return this._dom;
  }

  // Web Storage 
  setItem(key: string, value: any, isLocal: boolean = true) {
    let store = this._getStore(isLocal);
    store.setItem('__mc__' + key, JSON.stringify(value));
  }

  getItem(key: string, isLocal: boolean = true) {
    let store = this._getStore(isLocal);
    let value = store.getItem('__mc__' + key);
    return value ? JSON.parse(value) : null;
  }

  removeItem(key: string) {
    this.setItem(key,null,false);
    this.setItem(key,null);
  }

  private _getStore(isLocal: boolean) {
    return !isLocal ? localStorage : sessionStorage;
  }

  checkLoggedIn() {
    return this._da.checkLoggedIn();
  }

  isLoggedIn() {
    return this._da.isLoggedIn();
  }

  getUserId() {
    return this._da.getUserId();
  }

  getUserInfo() {
    let uid = this.getUserId();
    let userInfo: any;
    if (uid) {
      return this.getItem(uid) || this.getItem(uid,false);
    }
    return false;
  }

  isAdmin() {
    let userGroup = this.getUserGroup();
    if (userGroup) {
      if (userGroup === CONS.userGroup.admin) {
        return true;
      }
    }
    return false;
  }

  getUserGroup() {
    let user = this.getUserInfo();
    if (user) {
      return user.userGroup;
    }
    return false;
  }

  clone(o: any) {
    let newO: any, i: any;

    if (!o || typeof o !== 'object') {
        return o;
    }

    if ('[object Array]' === Object.prototype.toString.apply(o)) {
        newO = [];
        for (i = 0; i < o.length; i += 1) {
            newO[i] = this.clone(o[i]);
        }
        return newO;
    }

    newO = {};
    for (i in o) {
        if (o.hasOwnProperty(i)) {
            newO[i] = this.clone(o[i]);
        }
    }
    return newO;
  }
}
