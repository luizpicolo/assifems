![banner_markdown](https://user-images.githubusercontent.com/86114583/206916809-f5389454-e0af-4cb1-b902-e9a11990d1e7.png)

<h1 align="center"> Carteirinha Digital - ASSIFEMS </h1>

## Apresentação do Projeto

Este projeto consiste na elaboração de uma
Progressive Web App para a digitalização da
carteirinha da Associação dos Servidores do
Instituto Federal do Mato Grosso do Sul(ASSIFEMS).

## 🏆 - Conquistas
🥇 - 1º Lugar Fecinova 2021

## 🎨 - Protótipo

O protótipo da aplicação foi feito utilizando Figma
e pode ser acessado utilizando o link abaixo:

- [Protótipo - Figma](https://www.figma.com/community/file/1180882217288338090)

## 🖥️ - Demonstração


## 📈 - Pontuação da PWA
![pwa_scores](https://user-images.githubusercontent.com/86114583/206917545-3c5d4a7f-7a8b-4296-bb0e-4fe5f99c2b5e.png)

## 🔌 - Tecnologias

- NodeJS
- HTML
- JavaScript
- SCSS
- Express
- Docker
- EJS
- AdminJS
- Sequelize

## Requisitos

Abaixo você confere os requisitos para rodar o projeto localmente:

- Editor de Código
- NodeJS
- Git
- WSL
- Docker

## Rodando Localmente

Para rodar a aplicação na sua máquina, você deve seguir os passos abaixo:


### Clone o projeto e acesse o diretório
```bash
  git clone https://github.com/igorviniciussantana/assifems.git
  cd assifems
```
### Configure seus dados do banco

Utilizando o arquivo `.env.example`, insira os dados do seu banco
```bash
 # SECRET KEY
SECRET=

# Postgres Database
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_HOST=
DB_PORT=
DB_DIALECT=
```

### Configure o container

Utilize os comandos abaixo para criar o container e o banco de dados

```bash
docker compose -f docker-compose.yml -f compose/dev.yml build
docker compose -f docker-compose.yml -f compose/dev.yml run web yarn
docker compose -f docker-compose.yml -f compose/dev.yml run web yarn sequelize db:create
docker compose -f docker-compose.yml -f compose/dev.yml run web yarn sequelize db:migrate
```

### Semeie o banco

Utilize o comando abaixo para adicionar dados prontos no seu banco

```bash
docker-compose run web yarn sequelize db:seed:all  
```

Finalmente poderemos rodar a aplicação com o comando abaixo

```bash
docker compose -f docker-compose.yml -f compose/dev.yml up
```

## Como contribuir

## 👥 - Autores

<table>
  <tr>
  <td align="center"><a href="https://github.com/igorviniciussantana"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/86114583?v=4" width="100px;" alt=""/><br /><sub><b>Igor Vinicius</b></sub></a><br /><br /><a href="https://linkedin.com/in/igorviniciussantana"><img src="https://user-images.githubusercontent.com/86114583/192514843-1087a34f-74f9-46aa-94fa-e824950af81f.svg" width="20px"/></a>⠀<a href="mailto:igor.santana@estudante.ifms.edu.br"><img src="https://user-images.githubusercontent.com/86114583/192515071-4fa6bce6-6ee9-49ca-9395-c17e74075a20.svg" width="20px"/></a>⠀<a href="https://behance.net/igorvinicius8"><img src="https://user-images.githubusercontent.com/86114583/192515924-e754ab5f-d7bc-416f-a3f9-0b6e3e81eb6c.svg" width="20px"/></a>
    </td>
    <td align="center"><a href="https://github.com/andredochute"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/86085474?v=4" width="100px;" alt=""/><br /><sub><b>André Luís</b></sub></a><br /><br /><a href="https://www.linkedin.com/in/andr%C3%A9-lu%C3%ADs-7a6354247/"><img src="https://user-images.githubusercontent.com/86114583/192514843-1087a34f-74f9-46aa-94fa-e824950af81f.svg" width="20px"/></a>⠀<a href="mailto:andredochute@gmail.com"><img src="https://user-images.githubusercontent.com/86114583/192515071-4fa6bce6-6ee9-49ca-9395-c17e74075a20.svg" width="20px"/></a>
    </td>
    <td align="center"><a href="https://github.com/juan-wandressen"><img style="border-radius: 50%;" src="https://github.com/juan-wandressen.png" width="100px;" alt=""/><br /><sub><b>Juan Carlos</b></sub></a><br /><br /><a href="https://www.linkedin.com/in/juan-carlos-018106247/"><img src="https://user-images.githubusercontent.com/86114583/192514843-1087a34f-74f9-46aa-94fa-e824950af81f.svg" width="20px"/></a>⠀<a href="mailto:juan.wandressen@gmail.com"><img src="https://user-images.githubusercontent.com/86114583/192515071-4fa6bce6-6ee9-49ca-9395-c17e74075a20.svg" width="20px"/></a>
    </td>
    </tr>
    </table>
