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

1. Crie um container no docker para o postgres.  
![docker](https://media.giphy.com/media/mfywAOZXm1558QQwfv/giphy.gif)

2. Abra o seu container com o DBeaver e crie o banco de dados com o nome de `gostack_desafio06`.  

![create_DB](https://media.giphy.com/media/MZyhmLL8QAVhcWNX2L/giphy.gif)

3. Faça o clone do repositório com o comando `git clone https://github.com/saleszera/desafio-database-upload.git`

4. Utilize o comando `yarn` ou `npm install` para fazer o download das dependencias.  

![instalando dependencias](https://media.giphy.com/media/StTAe8COE7wGiskUAt/giphy.gif)

5. Rode as migrations com o comando `yarn typeorm migration:run`.  

![migrations](https://media.giphy.com/media/2N5XCE94ySiWrZIGAB/giphy.gif)

6. Abra o insomnia e teste as rotas
   - Cadastro de transactions. Utilize o metodo POST para `http://localhost:3333/transactions`.  
   ```JSON
    {
      "title": "Pagamento",
      "value": 2000,
      "type": "income",
      "category": "Other"
    }
   ```

   - Listagem de transactions. Selecione o metodo GET para `http://localhost:3333/transacions`.
     ![listagem](https://media.giphy.com/media/2yTYm9U77Vvtv6a0zA/giphy.gif)

   - Delete de transaction. Utilize o metodo DELETE para `http://localhost:3333/transactions/(id da transaction)`
     ![delete](https://media.giphy.com/media/keTbnknKVE0cPanj60/giphy.gif)

   - Importando arquivo CSV para cadastro de transactions. Utilize o metodo POST e selecione a opção Multipart Form para testar a rota.
     ![import](https://media.giphy.com/media/YgT725lJGwdJxJYYBG/giphy.gif)
### ⚠️ Observação ⚠️
O arquivo .CSV deve estar no seguinte formato:
   ```plain-text
   title, type, value, category
   Loan, income, 1500, Others
   Website Hosting, outcome, 50, Others
   Ice cream, outcome, 3, Food
   ```
## Obrigado por testar a API 😁️
&nbsp;
![the end](https://media.giphy.com/media/lD76yTC5zxZPG/giphy.gif)

