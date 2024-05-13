# Script para limpeza de collection do mongodb com Node.js

## Resumo
- Ao me deparar com um cenário onde deveria limpar uma grande quantidade de bases no mongobd, decidi estudar uma forma de fazer um script para realizar a tarefa. O uso do node.js me coube como uma luva, rápido, simples e fácil.

## Recursos utilizados:
- Node.js (v20.12.2)
- mongodb (pacote do Node.js para acesso ao servidor mongodb, via MongoClient)
- dotenv (pacote do Node.js para criação de um arquivo de configuração da aplicação, .env)

## O que é necessário para rodar o script
- Em seu arquivo package.json, adicione a seguinte propriedade:
    - "Type": "Module"
- Após isso já é possível rodar a o script, após configurado para as suas necessidades, com o seguinte comando
    - node .\src\index.js
