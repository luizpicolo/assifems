const { User, Category } = require('../app/models');
const translations = require('./translations');

const resources = [
  { resource: User, 
    options: { 
      listProperties: ['id', 'name', 'email', 'admin', 'createdAt', 'updatedAt']
    }
  },
  { resource: Category, 
    options: { 
      listProperties: ['id', 'name', 'createdAt', 'updatedAt']
    }
  },
  { resource: Estabilishment, 
    options: { 
      listProperties: ['id', 'name', 'cnpj', 'adress', 'createdAt', 'updatedAt']
    }
  },
  { resource: Associate, 
    options: { 
      listProperties: ['id', 'name', 'birth_date', 'role', 'cpf', 'rg', 'status', 'validity', 'siape']
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