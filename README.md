<p align="center">
  <img width="350" height="auto" src="https://raw.githubusercontent.com/Rocketseat/bootcamp-gostack-desafio-02/master/.github/logo.png">
</p>

# FastFeet - Delivery de Encomendas

> Desafio Final do GoStack da Rocketseat


## Instalação e utilização

### > Backend - Node.js

> Instalação e Configuração - Docker<br/>
>Realize a instalação e configuração do docker e permissão para o usuário da maquina rodar o docker conforme este <a href="https://docs.docker.com/">link!</a>

1.  Acesse a pasta server e siga os passos abaixos:
2.  Rodar esse comando para instalar as dependências:
```
yarn
```
3.  Instalar, criar e subir um banco de dados Postgres (Usei via docker):
```
docker run --name postgresfastfeet -e POSTGRES_PASSWORD=fastfeet -p 5432:5432 -d postgres:11
docker start postgresfastfeet
```
4.  Instalar, criar e subir um banco de dados Redis (Usei via docker):
```
docker run --name redisfastfeet -p 6379:6379 -d -t redis:alpine
docker start redisfastfeet
```
5.  Acesse o banco postgres com algum gerenciador como exemplo postbird, crie o banco com nome de fastfeet
6.  Alterar o arquivo .env.example para .env e alterar as informações
7. Rodar:
```
yarn sequelize db:migrate
```
8. Rodar:
```
yarn sequelize db:seed:all
```
9. Rodar: // Servidor
```
yarn dev
```
10. Rodar: // Servidor de envio de e-mails
```
yarn queue
```

### > Frontend WEB - REACTJS

1.  Acesse a pasta web
2.  Rodar para instalar as dependências:
```
yarn
```
3.  Rodar:
```
yarn start
```

### > Mobile APP - React Native

1.  Acesse a pasta app
2.  Rodar para instalar as dependências:
```
yarn
```
3.  Alterar o arquivo .env.example para .env e alterar as informações
4.  Com o emulador/celular conectado, rodar:
```
adb reverse tcp:8081 tcp:8081 // App
adb reverse tcp:3333 tcp:3333 // Api
adb reverse tcp:9090 tcp:9090 // Reactotron

react-native run-android
```
5.  Caso o MetroBundler não fique ativo, ou se precisar parar e conectar de novo, rodar:
```
react-native start
```

Obs: Projeto testado apenas no Android
