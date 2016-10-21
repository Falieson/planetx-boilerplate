/**
 * ACCOUNT_UPDATE_USERNAME & USERNAME_INVALID
 * update the store with these states
 */
export const ACCOUNT_UPDATE_USERNAME = 'ACCOUNT_UPDATE_USERNAME';
export const ACCOUNT_UPDATE_USERNAME_INVALID = 'ACCOUNT_UPDATE_USERNAME_INVALID';

function updateUsername(username) {
  return {
    type: ACCOUNT_UPDATE_USERNAME,
    username,
    valid: true,
    updatedAt: Date.now(),
  };
}
export function updateAccountUsername(username) {
  return (dispatch) => {
    dispatch(updateUsername(username));
  };
}
function invalidUsername(username) {
  return {
    type: ACCOUNT_UPDATE_USERNAME_INVALID,
    username,
    valid: false,
    updatedAt: Date.now(),
  };
}
export function updateAccountUsernameInvalid(username) {
  return (dispatch) => {
    dispatch(invalidUsername(username));
  };
}

/**
 * ACCOUNT_UPDATE_PASSWORD & PASSWORD_INVALID
 * update the store with these states
 */
export const ACCOUNT_UPDATE_PASSWORD = 'ACCOUNT_UPDATE_PASSWORD';
export const ACCOUNT_UPDATE_PASSWORD_INVALID = 'ACCOUNT_UPDATE_PASSWORD_INVALID';

function updatePassword(password) {
  return {
    type: ACCOUNT_UPDATE_PASSWORD,
    password,
    valid: true,
    updatedAt: Date.now(),
  };
}
export function updateAccountPassword(password) {
  return (dispatch) => {
    dispatch(updatePassword(password));
  };
}
function invalidPassword(password) {
  return {
    type: ACCOUNT_UPDATE_PASSWORD_INVALID,
    password,
    valid: false,
    updatedAt: Date.now(),
  };
}
export function updateAccountPasswordInvalid(password) {
  return (dispatch) => {
    dispatch(invalidPassword(password));
  };
}


/**
 * ACCOUNT_UPDATE_EMAIL & EMAIL_INVALID
 * update the store with these states
 */
export const ACCOUNT_UPDATE_EMAIL = 'ACCOUNT_UPDATE_EMAIL';
export const ACCOUNT_UPDATE_EMAIL_INVALID = 'ACCOUNT_UPDATE_EMAIL_INVALID';

function updateEmail(email) {
  return {
    type: ACCOUNT_UPDATE_EMAIL,
    email,
    valid: true,
    updatedAt: Date.now(),
  };
}
export function updateAccountEmail(email) {
  return (dispatch) => {
    dispatch(updateEmail(email));
  };
}
function invalidEmail(email) {
  return {
    type: ACCOUNT_UPDATE_EMAIL_INVALID,
    email,
    valid: false,
    updatedAt: Date.now(),
  };
}
export function updateAccountEmailInvalid(email) {
  return (dispatch) => {
    dispatch(invalidEmail(email));
  };
}


/**
 * ACCOUNT_CREATE_OPTIMIST & SUCCESS & ERROR
 * update the store with these states
 */
import { Meteor } from 'meteor/meteor';
import { newAccount } from '../../api/accounts/methods.js';

export const ACCOUNT_CREATE_OPTIMIST = 'ACCOUNT_CREATE_OPTIMIST';
export const ACCOUNT_CREATE_SUCCESS = 'ACCOUNT_CREATE_SUCCESS';
export const ACCOUNT_CREATE_ERROR = 'ACCOUNT_CREATE_ERROR';

function submitAccount(username) {
  return {
    type: ACCOUNT_CREATE_OPTIMIST,
    updatedAt: Date.now(),
    username,
    error: {},
    errorMessage: 'contacting server to save...',
    savingOptimisticly: true,
    saved: false,
  };
}
function newAccountSaved(userId) {
  return {
    type: ACCOUNT_CREATE_SUCCESS,
    updatedAt: Date.now(),
    userId,
    password: '',
    error: {},
    errorMessage: 'Your account has been created!',
    savingOptimisticly: false,
    saved: true,
  };
}
function newAccountNotSaved(error, errorMessage) {
  return {
    type: ACCOUNT_CREATE_ERROR,
    updatedAt: Date.now(),
    error,
    errorMessage,
    savingOptimisticly: false,
    saved: false,
  };
}
export function submitNewAccount(user) {
  return (dispatch) => {
    const { username, email, password } = user;
    dispatch(submitAccount(username));

    newAccount.call({ username, email, password }, (error, result) => {
      if(error) {
        let message = '';
        if(error.message && error.message.length > 0) {
          message = error.message;
        }
        else {
          message = 'check error field';
        }
        dispatch(newAccountNotSaved(error, message));
      }

      else {
        const userId = result;
        dispatch(newAccountSaved(userId));

        // Server side account creation means explictely logging in on the client
        Meteor.loginWithPassword(username, password);
      }
    });
  };
}


/**
 * ACCOUNT_LOGIN_OPTIMIST & SUCCESS & ERROR
 * update the store with these states
 */
export const ACCOUNT_LOGIN_OPTIMIST = 'ACCOUNT_LOGIN_OPTIMIST';
export const ACCOUNT_LOGIN_SUCCESS = 'ACCOUNT_LOGIN_SUCCESS';
export const ACCOUNT_LOGIN_ERROR = 'ACCOUNT_LOGIN_ERROR';

function submitLogin(username) {
  return {
    type: ACCOUNT_LOGIN_OPTIMIST,
    updatedAt: Date.now(),
    username,
    error: {},
    errorMessage: 'contacting server to save...',
    savingOptimisticly: true,
    saved: false,
  };
}
function loginSuccesful(userId) {
  return {
    type: ACCOUNT_LOGIN_SUCCESS,
    updatedAt: Date.now(),
    userId,
    password: '',
    error: {},
    errorMessage: 'Your account has been created!',
    savingOptimisticly: false,
    saved: true,
  };
}
function loginNotSuccesful(error, errorMessage) {
  return {
    type: ACCOUNT_LOGIN_ERROR,
    updatedAt: Date.now(),
    error,
    errorMessage,
    savingOptimisticly: false,
    saved: false,
  };
}
export function submitAccountLogin(user) {
  return (dispatch) => {
    const { username, password } = user;
    dispatch(submitLogin(username));

    Meteor.loginWithPassword(username, password, (error) => {
      if(error) {
        let message = '';

        if(error.message && error.message.length > 0) message = error.message;
        else message = 'check error field';

        dispatch(loginNotSuccesful(error, message));
      } else {
        const userId = Meteor.userId();

        dispatch(loginSuccesful(userId));
      }
    });
  };
}
