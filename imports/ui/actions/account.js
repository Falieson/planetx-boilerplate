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
