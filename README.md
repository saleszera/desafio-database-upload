# 🚀️ Deafio 6 - Database/Upload 🚀️

Trata-se de um back-end onde é possivel salvar transações, similar ao [desafio 5](https://github.com/saleszera/fundamentos-node), porém, com algumas diferenças que poderão ser notadas na explicação abaixo.

## 🛠️ Principais ferramentas/tecnilogias utilizadas
- NodeJs
- Typescript
- Express: Para rodar o servidor
- Postgres: Banco de dados
- TypeORM: Manipulação do bando
- Multer: Upload de arquivos
- CSV-Parser: Para a leitura de arquivos do tipo CSV
- Eslint/Prettier: Formatação de código
- Docker: Container para o banco de dados
- Insomnia: Para testar a API
- DBeaver: Para acessar o banco de dados


## 💡️ Como usar
Para utilizar a aplicação é fundamental que estejam instalados as seguintes ferramentas:
- NodeJs
- Yarn ou NPM
- Docker
- DBeaver
- Insomnia
Com estas ferramentas instaladas, siga os passos abaixo!
1. Crie um container no docker para o postgres
<div>
  <img src="https://media.giphy.com/media/mfywAOZXm1558QQwfv/giphy.gif" alt="docker">
</div>
2. Abra o seu container com o DBeaver e crie o banco de dados com o nome de `gostack_desafio06`
<div>
  <img src="https://media.giphy.com/media/MZyhmLL8QAVhcWNX2L/giphy.gif" alt="db_create">
</div>
3. Faça o clone do repositório com o comando `git clone https://github.com/saleszera/desafio-database-upload.git`
4. Utilize o comando `yarn` ou `npm install` para fazer o download das dependencias
<div>
  <img src="https://media.giphy.com/media/StTAe8COE7wGiskUAt/giphy.gif" alt="instalando dependencias">
</div>
5. Abra o insomnia e teste as rotas
   - Cadastro de transactions
<div>
  <img src="https://media.giphy.com/media/mZ6FR182XBlfDZVH98/giphy.gif" alt="cadastro">
</div>
   - Listagem de transactions
<div>
  <img src="https://media.giphy.com/media/2yTYm9U77Vvtv6a0zA/giphy.gif" alt="busca">
</div>
   - Delete de transaction
<div>
  <img src="https://media.giphy.com/media/keTbnknKVE0cPanj60/giphy.gif" alt="delete">
</div>
   - Importando arquivo CSV para cadastro de transactions
<div>
  <img src="https://media.giphy.com/media/YgT725lJGwdJxJYYBG/giphy.gif" alt="import">
</div>
