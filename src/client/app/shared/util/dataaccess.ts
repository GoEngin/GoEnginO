import * as firebase from "firebase";

const CONS = {
	path: {
		users: 'users',
		categories: 'categories',
		article: 'article'
	}
};

/*
https://firebase.google.com/docs/database/web/structure-data
Avoid nesting data: 
Because the Firebase Realtime Database allows nesting data up to 32 levels deep, 
you might be tempted to think that this should be the default structure. 
However, when you fetch data at a location in your database, you also retrieve all of its child nodes. 
In addition, when you grant someone read or write access at a node in your database, 
you also grant them access to all data under that node. 
Therefore, in practice, it's best to keep your data structure as flat as possible.
****** Example of Flatten data structures ******
{
  // Chats contains only meta info about each conversation
  // stored under the chats's unique ID
  "chats": {
    "one": {
      "title": "Historical Tech Pioneers",
      "lastMessage": "ghopper: Relay malfunction found. Cause: moth.",
      "timestamp": 1459361875666
    },
    "two": { ... },
    "three": { ... }
  },

  // Conversation members are easily accessible
  // and stored by chat conversation ID
  "members": {
    // we'll talk about indices like this below
    "one": {
      "ghopper": true,
      "alovelace": true,
      "eclarke": true
    },
    "two": { ... },
    "three": { ... }
  },

  // Messages are separate from data we may want to iterate quickly
  // but still easily paginated and queried, and organized by chat
  // conversation ID
  "messages": {
    "one": {
      "m1": {
        "name": "eclarke",
        "message": "The relay seems to be malfunctioning.",
        "timestamp": 1459361875337
      },
      "m2": { ... },
      "m3": { ... }
    },
    "two": { ... },
    "three": { ... }
  }
}
*/
export class DataAccess {

	private _userInfo: any;

	//Firebase User
	createUser(email: string, password: string) {
		return firebase.auth().createUserWithEmailAndPassword(email, password).then((result: any) => {return result;});
	}

	login(provider: string = 'email', email: string = '', password: string = '') {
		let _provider: any = null
		switch (provider) {
			case "google":
				_provider = new firebase.auth.GoogleAuthProvider();
				break;
			case "facebook":
				_provider = new firebase.auth.FacebookAuthProvider();
				break;
		}
		if (_provider) {
			return firebase.auth().signInWithPopup(_provider).then((result: any) => {
				return result;
			});
		} else {
			return firebase.auth().signInWithEmailAndPassword(email, password).then((result: any) => {return result;});
		}
	}

	checkLoggedIn() {
		return new Promise(resolve => {
			let unsubscribe = firebase.auth().onAuthStateChanged(function(user: any) {
				if (user) {
					this._userInfo = user;
					resolve(user);
				} else {
					resolve(null);
				}
				unsubscribe();
			});
		});
	}

	getUserInfo() {
		if (!this._userInfo) {
			this._userInfo = firebase.auth().currentUser;
		}
		return this._userInfo;
	}

	isLoggedIn() {
		return this.getUserInfo();
	}

	getUserId() {
		let user = this.getUserInfo();
		if (user) {
			return user.uid;
		}
		return null;
	}

	logout() {
		return firebase.auth().signOut().then((result:any) => {return result;});
	}

	sendPasswordResetEmail(email: string) {
		return firebase.auth().sendPasswordResetEmail(email).then((result:any) => {return result;});
	}

	getDataOnce(path: string) {
		let ref = firebase.database().ref(path);
		return ref.once('value').then((snapshot: any) => {return snapshot;});
	}

	getPath(pathName: string) {
		let path: any = CONS.path;
		return path[pathName];
	}

	getData(path: string) {
		return firebase.database().ref(path);
	}

	setData(path: string, value: any) {
		return this.getData(path).set(value);
	}

	/*
	The push() method generates a unique key every time a new child is added to the specified Firebase reference. 
	By using these auto-generated keys for each new element in the list, 
	several clients can add children to the same location at the same time without write conflicts. 
	The unique key generated by push() is based on a timestamp, 
	so list items are automatically ordered chronologically.
	*/
	addData(path: string, value: any) {
		return this.getData(path).push(value);
	}

	/*
	function writeNewPost(uid, username, picture, title, body) {
	  // A post entry.
	  var postData = {
	    author: username,
	    uid: uid,
	    body: body,
	    title: title,
	    starCount: 0,
	    authorPic: picture
	  };

	  // Get a key for a new Post.
	  var newPostKey = firebase.database().ref().child('posts').push().key;

	  // Write the new post's data simultaneously in the posts list and the user's post list.
	  var updates = {};
	  updates['/posts/' + newPostKey] = postData;
	  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

	  return firebase.database().ref().update(updates);
	}
	*/
	updateData(path: string, value: any) {
		return this.getData(path).update(value);
	}

	removeData(path: string) {
		return this.getData(path).remove();
	}

	//TODO: Firebase doesn't provide an array object?
	snapshotToArray(s: any) {
		let item: any;
		let items: Array<any> = [];
		s.forEach((sc:any) => {
			item = sc.val();
			item.id = sc.key;
			items.push(item);
		});
		return items;
	}
}