const UsersService = require('./users.service')

module.exports = router => {
  router.use('/users', UsersService);
  // router.use('/users/login', {
  //   create: UsersService.login
  // })
}