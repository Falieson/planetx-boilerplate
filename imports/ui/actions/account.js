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
function invalidPassword() {
  return {
    type: ACCOUNT_UPDATE_PASSWORD_INVALID,
    valid: false,
    updatedAt: Date.now(),
  };
}
export function updateAccountPasswordInvalid() {
  return (dispatch) => {
    dispatch(invalidPassword());
  };
}
