// Libraries
import { throttle } from 'lodash';

// Colors
import { lightGreenA400, cyanA200, pink400 } from 'material-ui/styles/colors';

// DRY up code reused in ui/account/
export const tabStyles = {
  headline: {
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 16,
    margin: '0 12px',
    fontWeight: 400,
  },
};

export const inputStyles = {
  container: {
    textAlign: 'center',
    paddingTop: 16,
    margin: '0 12px',
  },
  textField: {
    field: {
      width: '100%',
    },
    floatingLabel: {
      color: lightGreenA400,
      fontSize: 'larger',
    },
    floatingLabelFocus: {
      color: cyanA200,
    },
    underlineStyle: {
      border: 2,
    },
    errorLabel: {
      color: pink400,
    },
  },
};

export const regexes = {
  username: /^(?=.{8,20}$)(?![_.-])(?!.*[_.-]{2})[a-zA-Z0-9_-]+([^._-])$/,
  usernameError: '8-20 Symbols: James_Bond_007 or James-Bond-007',
  email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  emailError: 'Should be like: James.Bond@bss.gov',
  password: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{7,})\S$/,
  passwordError: '1 Uppercase, 1 Lowercase, 1 Number, no spaces',
};

/**
 * Don't run an action on every key stroke
 *
 * @param  {[type]} func    [the action to slow]
 * @param  {[type]} msSpeed [speed in MS to slow]
 * @return {[type]}         [throttled function]
 */
export function slow(func, msSpeed = 150) {
  return throttle(func, msSpeed, { leading: false });
}
