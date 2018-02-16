# Barbecue Company! Be happy :D

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/MarcelLZ/barbecue-company.svg?branch=master)](https://travis-ci.org/MarcelLZ/barbecue-company) [![Coverage Status](https://coveralls.io/repos/github/MarcelLZ/barbecue-company/badge.svg?branch=master)](https://coveralls.io/github/MarcelLZ/barbecue-company?branch=master)

## Sobre
E ae pessoal! Este é o teste pra [Taller Negócios Digitais](https://taller.net.br/) - Empresa nota 5 na LoveMondays :D Achei o teste maneiro e além de submeter para avaliação, deixarei aqui no github (se possível) pra ir evoluindo ele, a medida que evoluo minhas skills, tais como *arquitetura fractal*, *testes*, *recompose* e outras coisas mais que pretendo estudar. Aproveitando o espaço, queria mandar um abraço pro Rafael, que fez a primeira entrevista comigo e que fez com que eu me lembrasse da minha infância na casa dos meus avós, ao tomar um gole de café, em uma daquelas pequenas xícaras [duralex](https://goo.gl/RSnnYH) =P

## Uma palinha
![](https://github.com/MarcelLZ/barbecue-company/blob/master/assets/app.gif)

No gif você pode ter uma ideia de como a app é. No fim das contas é simples e pequena, possuindo 3 interfaces distintas. São elas: *Empresas*, *Pedidos* e *Minha Conta*. Em *Empresas* você pode visualizar as empresas cadastradas por você, pode cadastrar novas clicando no botão adicionar (+) e na lista, há ainda um botão que te leva para a tela de *Pedidos* com um filtro da empresa selecionada, aplicado. Nesta interface de pedidos, você pode visualizar os ativos ou ainda adicionar um novo mudando para a aba **Novo Pedido**. Ali você encontra o mesmo botão que ao ser clicado mostra um pequeno formulário para que você escolha para qual empresa deseja efetuar o pedido, qual o produto desejado e a quantidade. Depois de escolhido todos os items, por favor, sinta-se a vontade para ***Fechar Pedido***. Por fim, e não menos importante, pelo menu lateral, você pode acessar a área *Minha Conta* e alterar sua senha se assim desejar. Bom, como você pode notar, a app é responsiva, o que significa que você pode acessa-la pelo smartphone e você terá uma boa experiência (Que tal uma PWA?). No mais, o backend é todo escrito com javascript assim como no frontend, usando [react](https://reactjs.org/).

## Demo
Aposto que você que ter o gostinho de usar a aplicação você mesmo. Tudo bem, tudo bem! Mas por favor, use com moderação, combinados? Ótimo!! Segue o link pra você acessar: [Barbecue Company ONLINE]()

## Up&Running
Se você é desenvolvedor, e deseja rodar a aplicação localmente, não se preocupe, é tudo muito fácil :D Basta clonar este repositório e depois disso ir no diretório *frontend* e executar:
```javascript
yarn
```
Isso vai fazer com que todas as dependências sejam instalas. O mesmo você pode fazer no diretório do *backend*. Para rodar a aplicação, basta navegar até o diretório do *frontend* e executar:
```javascript
yarn start
```
Porém no diretório do *backend*, é necessário adicionar um único parâmetro no comando anterior, perceba:
```javascript
yarn start:dev
```
Isso vai levantar um servidor e usará o [nodemon](https://nodemon.io/) para reiniciar a aplicação se ela cair e também, se houverem alterações no código.
É isso aí! Agora você pode ir ao seu navegador e acessar http://localhost:8080

## Considerações
Ao meu corpo, por ter aguentado as madrugadas acordado. Value man!

Abraço pessoas! :D