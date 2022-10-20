const { User, Category, Establishment, Associate } = require('../app/models');
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
  { resource: Establishment, 
    options: { 
      listProperties: ['id', 'name', 'cnpj', 'address', 'addressURL', 'cell', 'imgURL', 'createdAt', 'updatedAt']
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
    logo: '/images/assifems.png',
  },
}

module.exports = options