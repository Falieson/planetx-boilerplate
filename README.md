# SETUP #
## OSX ##
```
$ curl https://install.meteor.com/ | sh
$ git clone https://github.com/Falieson/planetx-boilerplate.git
$ cd planetx-boilerplate
$ ln -s .meteor/packages meteor_packages && ls -lsa
$ npm i -g yarn
$ yarn
$ meteor npm i
$ meteor
```
## Windows ##
```
=> Download and Install Meteor from https://www.meteor.com/install
$ git clone https://github.com/Falieson/planetx-boilerplate.git
$ cd planetx-boilerplate
=> Edit packages.json and Remove Bcrypt
=> Edit .meteor/packages and change webpack:webpack to meteorcom:webpack
```

# CURRENT OUTPUT #
- Routed Layout
- Tabs Login/Register
- Login/Register Fields


# Modules / Features #
- [x] Home Page (Header, Footer, Content)
- [ ] Accounts
  - [x] Register
  - [x] Login
  - [ ] Profile
- [ ] Chat
  - [ ] Room(s)
  - [ ] Whisper
  - [ ] 1-1 Messaging
- [ ] Mobile Layout
- [ ] Deploy to Test Server

# Config / Libraries #
- [ ] Layout
- [x] React-Router
- [ ] Material-UI
- [ ] Less
- [x] Webpack
- [x] Babel:ES6 (es2017)
- [x] ESlint
- [x] Meteor
