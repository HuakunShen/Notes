# Redux Overview

> A predictable state container for JavaScript apps.

We will use authentication as an example.



## Store

A store can store states.

```js
// Example
{
    auth: {
        name:"user",
        space:null,
        avatar:"/img/user_profile_icon.png",
        motto:"Welcome to your story space with your partner, you can change this in setting",
        _id:"5e6372adc6a33e10150769da",
        username:"user",
        email:"user@user.com",
        isAuthenticated:true
    }
}
```



## Action

Some functions that take an **action type constant** and any custom parameter as inputs, and return an object containing **action type** and some payload (other data).

```js
// actionTypes.js
export const LOAD_AUTH = 'LOAD_AUTH';
export const CLEAR_AUTH = 'CLEAR_AUTH';
// actions/index.js
export const changeAuth = (auth_action, user) => {
  if (auth_action === actionTypes.LOAD_AUTH) {
    return { type: actionTypes.LOAD_AUTH, user };
  } else if (auth_action === actionTypes.CLEAR_AUTH) {
    console.log("logout");
    return { type: actionTypes.CLEAR_AUTH, user };
  }
};

// return 的内容
{
    type: actionType,
    user: user 	// user object that is passed in as an object, containing some user info
}
```

## Reducer

**Reducers** specify how the application's state changes in response to **action** sent to the store. Remember that actions only describe *what happened*, but don't describe how the application's state changes.

```js
// reducers/index.js
import { combineReducers } from 'redux';
import page from './page';
import space from './space';
import auth from './auth';

export default combineReducers({ page, space, auth });	
// combine many reducers for different content
// each type of info has a separate reducer
```

### Auth reducer

```js
import { LOAD_AUTH, CLEAR_AUTH } from "../actions/actionTypes";

const auth = (state = { isAuthenticated: false }, action) => {
  switch (action.type) {
    case LOAD_AUTH:
      return Object.assign({isAuthenticated: true}, action.user);
    case CLEAR_AUTH:
      return { isAuthenticated: false }; // clear user/auth, set space to empty object
    default:
      return state;
  }
};

export default auth;
```

In input parameters, the state parameter is the auth state from the previous state, default to be `{ isAuthenticated: false }`. The action is the action object returned by an action function, which contains an **action type**, and potentially some other object.

Eventually some processed current state is returned. The state returned is not the entire state stored in the store, but the auth state only, which is a part of the entire state.

For example, suppose we are logging in. The action function will return an object

```js
{
    type: actionTypes.LOAD_AUTH, 
    user: user
}
```

The user object is an object including user info. 

Then, since the action.type is LOAD_AUTH (we are signing in), the reducer returns action.user, with **isAuthenticated** set to false, the action.user will be updated to the "auth" key in the entire state store.

## Process

`store.dispatch(action)` runs the entire process.

Action function returns an object

```js
// return 的内容
{
    type: actionType,
    user: user 	// user object that is passed in as an object, containing some user info
}
```

Reducer get the returned object and return the new state of a specific part of the entire state.



## Configure Store (With Redux)

```js
// configureStore.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['page']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);
export default store;
```

`redux-devtools-extension` is for debugging in browsers.

`persistStore` and `persistReducer` are for persistant state. The state won't be lost after refreshing, and will be loaded in the first place, no lag.



























