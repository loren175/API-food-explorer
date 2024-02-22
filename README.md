<div align="center">
 <h1>Food Explorer </h1>
 <img src="./public/food-explorer.svg"></img> 
</div>

<div align="center"> 
<a align="center" href="#📁-sobre-o-projeto">Sobre</a> |
<a align="center" href="#⚙️-tecnologias">Tecnologias</a> |
<a align="center" href="#🔎-visualização">Visualização</a> |
<a align="center" href="#📄-tabelas">Tabelas</a> |
<a align="center" href="#💻-instalação">Instalação</a> |
<a align="center" href="#📞-contato">Contato</a> 
</div>

## 📁 Sobre o projeto

O projeto Food explorer é um cardápio digital para uma empresa fictícia, sendo o desafio final da RocketSeat Explorer. Este é o back-end do projeto, com banco de dados e lógica por trás do funcionamento da aplicação.

O front-end do projeto pode ser acessado por <a href="https://github.com/loren175/front-food-explorer">aqui</a>.

## ⚙️ Tecnologias

- JavaScript
- Bcrypt.js
- CORS
- Dotenv
- JSON Web Token
- Knex.js
- Node.js
- Multer
- PM2
- SQLite3
- Cookie-parser
- Express.js
  - Express-async-errors

## 🔎 Visualização

Para visualizar as rotas com os **HTTP Methods** (GET, POST, PUT, DELETE, ETC) e visualizar o **banco de dados** utilizei os seguintes aplicativos:
- Insomnia
- Beekeeper Studio

⚠️ **IMPORTANTE:** No diretório do projeto dentro da pasta **public** há uma exportação do arquivo que utilizei no Insomnia em JSON para visualizar as rotas com todas as configurações feitas.

## 📄 Tabelas

- Usuários
- Pratos
- Ingredientes dos pratos

## 💻 Instalação

O projeto teve seu deploy feito utilizando o Render e está disponível <a href="https://api-food-explorer-njhs.onrender.com/">aqui</a>. Mas você pode realizar o clone do projeto e instalar ele seguindo estes passos:

> **1. Clone o projeto:**

```bash
$ git clone https://github.com/loren175/API-food-explorer
```

> **2. Acesse a pasta do projeto:**

```bash
$ cd API-food-explorer
```

> **3. Instale as dependências:**

```bash
$ npm install
```

> **4. Execute as migrations do Knex com o script:**

```bash
$ npm run migrate
```

> **5. Inicie o servidor com o script:**

```bash
$ npm run dev
```

⚠️ **IMPORTANTE:** Siga as intruções de **.env.example** e crie um **.env** respeitando as configurações passadas no exemplo.

- Você pode gerar uma sequência segura de caracteres para **AUTH_SECRET** com **MD5 Hash Generator**.
- **PORT** utilizará a porta de sua preferência (exemplo: 4444).

> > ❓ Tenha em mente que é necessário ter instalado em sua máquina o **NodeJS** e o **NPM** para utilizar este projeto localmente.

> > ❗O back-end do projeto utiliza hospedagem gratuita com o **Render**, portanto o carregamento pode ser lento e alguns itens do banco de dados podem acabar não sendo salvos e renderizados. Mas **localmente** ele irá renderizar e salvar normalmente.

## 📞 Contato

> rafael.loren175@gmail.com

> +55 (11) 99959-9140

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafael-mota-084825211/)
