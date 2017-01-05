import { EventEmitter, Output, Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { SharedService } from '../shared/shared.service';
import { md5 } from '../shared/util/md5';

@Injectable()
export class LoginService extends BaseService {

	@Output() loggedin: EventEmitter<any> = new EventEmitter();
	@Output() createduser: EventEmitter<any> = new EventEmitter();
	@Output() resetpassword: EventEmitter<any> = new EventEmitter();

	constructor(protected service: SharedService) {
		super(service);
	}

	private _setUserInfo(uid: string, userInfo: any, remember: boolean) {
		//remebmer === local storage
		//save to the storage
		this.util.setItem('uid',uid,remember);
		this.util.setItem(uid,userInfo,remember);
	}

	private _getUserInfo(uid: string = this.getUserId()) {
		let userInfo: any = null;
		if (uid) {
			userInfo = this.util.getItem(uid) || this.util.getItem(uid,false);
		}
		return userInfo
	}

	private _removeUserInfo(reload: boolean = false) {
		let uid = this.getUserId();
		if (uid) {
			this.util.removeItem('uid');
			this.util.removeItem(uid);
		}
		if (reload) {
			location.reload(true);
		}
	}

	login( provider: string = 'email', email: string = '', password: string = '', remember: boolean = false ) {
		this._removeUserInfo();
		this.da.login(provider, email, password)
			.then((result: any) => this.didLogin(provider, result, remember))
			.catch((error: any) => this.service.doSendMsg(error));
		return
	}

	didLogin(provider: string, result: any, remember: boolean) {
		//token = result.credential.accessToken;
		//user: displayName, email, emailVerified, isAnonymous, photoURL, providerData, providerId, refreshToken, uid
		//value event is fired eery time data is changed.
		let user = result.user || result;
		this.da.getDataOnce(this.da.getPath('users') + '/' + user.uid).then((snapshot: any) => {
			let userInfo: any = snapshot.val();
			if (!userInfo || provider !== 'email') {
				userInfo = this.createSNSUser(user);
			}
			if (!this.getUserId()) {
				this._setUserInfo(userInfo.uid, userInfo, remember);
			}
			this.loggedin.emit({target:this,userInfo:userInfo});
		}).catch((error: any) => this.service.doSendMsg(error));
	}

	loginFacebook() {
		this.login('facebook');
	}

	loginGoogle() {
		this.login('google');
	}

	logout() {
		this.da.logout().then((result: any) => {
			//remove saved user data
			this._removeUserInfo(true);
		}).catch((error: any) => this.service.doSendMsg(error));
	}

	getUserId() {
		return this.util.getUserId();
	}

	updateUserInfo(userInfo: any) {
		this.da.setData(this.da.getPath('users') + '/' + userInfo.uid, userInfo);
	}

	createSNSUser(user: any) {
		let userInfo = {
			uid: user.uid,
			username: user.displayName,
			email: user.email,
			photoURL: user.photoURL
		}
		this.updateUserInfo(userInfo);
		return userInfo;
	}

	createUser(displayName: string, email: string, password: string) {
		this.da.createUser(email,password).then((result: any) => {
			//token = result.credential.accessToken;
			let userInfo = {
				uid: result.uid,
				username: result.displayName || displayName,
				email: result.email,
				photoURL: result.photoURL || 'http://www.gravatar.com/avatar/' + md5(result.email)
			}
			this.updateUserInfo(userInfo);
			this.createduser.emit({target:this,userInfo:userInfo});
		}).catch((error: any) => this.service.doSendMsg(error));
	}

	sendPasswordResetEmail(email: string) {
		this.da.sendPasswordResetEmail(email).catch((error: any) => this.service.doSendMsg(error));
		this.resetpassword.emit({target:this});
	}
}
