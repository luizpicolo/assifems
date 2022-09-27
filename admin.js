const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSSequelize = require('@adminjs/sequelize')
const options = require('./config/options.js');
AdminJS.registerAdapter(AdminJSSequelize);
const { User } = require('./app/models');
const bcrypt = require('bcryptjs');

const adminJs = new AdminJS(options)

if (process.env.NODE_ENV == 'production'){
  module.exports = adminRouter = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
    authenticate: async (email, password) => {
      const user = await User.findOne({ email })
      if (user) {
        const matched = await bcrypt.compare(password, user.password)
        if (matched) {
          return user
        }
      }
      return false
    },
    cookieName: 'adminjs',
    cookiePassword: process.env.SECRET,
  })
} else {
  module.exports = adminRouter = AdminJSExpress.buildRouter(adminJs);
}