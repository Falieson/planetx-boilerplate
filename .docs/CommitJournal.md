# 7) Account Register and Login Work
Message: `7) Account Register and Login Work`
- A) `Removed "slow" function because added value from props to the fields`
- B) `SubmitButton enables when fields are valid`
- C) `Password field now has a type to disguise the password being entered`
- D) `Account Registration is validated server side before the account is created`

# 6) Account Register and Email Field created - REDUX
Message: `6) Register Tab and created Email Field, Everything REDUXing now`
- A) `Separated account UI into components and containers`
- B) `Reused username/password in Registration Tab`
- C) `Added tab based propTypes to login/register component, and username/submit containers`
- D) `FIXED: Redux for password wasn't added on the previous commit`

# 5) Account Login Password Field and Submit Button - REDUX
Message: `5) Create Password field and Validation as well as placeholder SubmitBtn`
- A) `Submit Button doesn't do anything yet`
- B) `Password and Username/Email validators come from the helper file`

# 4) Account Login Username Field - REDUX
Message: `4) Setup Redux(Actions/Redux/Store) and create Username field`
- A) `Store brought into client/main.jsx`
- B) `account actions go in the ui/actions directory`
- C) `account reducer goes in the ui/reducers directory`
- D) `slow() helper function makes sure the store isn't spammed unnecessarily`
- E) `accounts/username/ field will be re-used in the registration and profile pages`
- F) `redux-logger (instrumented in 'store.dev.js') outputs state changes to your chrome console`

# 3) Account Auth Tabs w/ Material-UI #
Message: `3) Using Tabs component to create an Auth container`

# 2) Responsive Layout and Material-UI #
Message: `2) Material-UI and Responsive Grid Layout`
Notes:
- A) `Material-UI provides a fast way to build a lot of neat looking UI`
- B) `MuiCSS provides mediaQueries and helper components for doing <Col>&<Row>`

# 1) Simple Layout and Router #
Message: `1) React-Router and basic layout`
Notes:
- A) `use <Link> instead of <a> to avoid page refreshes`
- B) `ESLint helps a lot to deliver on the react styleguide`
- C) `We haven't used react-component or redux yet`

# 0) Setup #
Message: `0) ESLint, Webpack, Client&Server EntryPoints`
