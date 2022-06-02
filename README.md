# Projeto it-monorepo-case

Foi criado como base na API de estudo [it-api-case](https://github.com/adelbs/it-api-case). 

Esse projeto foi desenvolvido com [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.

## Pré Requisitos 

* NodeJS: 14.15.4.
* Angular Cli: 11.2.9.
* Git.
* Docker
* Projeto [it-api-case](https://github.com/adelbs/it-api-case) rodando.

> **IMPORTANTE:** Utilizar a versão atualizada da API [it-api-case](https://github.com/tosipaulo/it-api-case) no meu [GitHub](https://github.com/tosipaulo/it-api-case), que foi adicionado nova funcionalidade de atualizar o objeto referente a **lançamento** e **categoria**.

## Projeto
---
Ele foi desenvolvido utilizando dois workspace do Angular no mesmo projeto. 

Primeiro workspace, foi uma construção do futuro Design System utilizando a arquitetura de Library do Angular e outro workspace base, utilizado com arquitetura modular do Angular.


## Como rodar
---
1. Clone esse projeto 
```bash
git clone git@github.com:tosipaulo/it-monorepo-case.git
```
2. Escolha um tipo.

    Existem duas forma de executar o projeto, Docker e Desenvolvimento.

* **Docker:** Crie sua imagem com o comando `docker build -t it-monorepo-case .` e depois execute `docker run -p 8081:80 it-monorepo-case`, agora abra o navegador e digíte o endereço `http://localhost:8081`.

* **Desenvolvimento:** 

    1. Rode 
    ```bash
    npm install
    ```

    2. Execute o projeto de libs 
    ```bash
    ng build ui --watch
    ```

    3. Execute o projeto princípal 
    ```bash
    ng serve
    ```
    3. Abra o navegador e digíte o endereço `http://localhost:4200
    `
## Pontos Extra
---
* **Escalabilidade:** Utilizando as duas arquiteturas, podemos ter posibilidade de adicionar novas features na Biblioteca de Componentes ou Modulos com times completamentes diferentes.
* **Alta disponibilidade:** Sim, possibilitando a analise separamente das partes do projeto. 
* **Observabilidade:** Sim, uso do Dynatrace.  
* **Acessibilidade:** Utilizando do padrão WCAG e tags para facilitar os leitores de tela.
* **Segurança e Esteira CI/CD:** Andam juntas, utilizando um CI/CD Git e AWS e SCAN nas dependencias do projeto.
