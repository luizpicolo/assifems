const { User } = require('../app/models');
const translations = require('./translations');

const resources = [
  { resource: User, 
    options: { 
      listProperties: ['id', 'name', 'email', 'admin', 'createdAt', 'updatedAt']
    }
  }
];

const locale = {
  translations: translations
}

const options = {
  databases: [], 
  resources: resources,
  rootPath: '/admin',
  locale,
  branding: {
    companyName: 'ASSIFEMS - IFMS',
    softwareBrothers: false,
    logo: '/images/logo.png',
  },
}

module.exports = options