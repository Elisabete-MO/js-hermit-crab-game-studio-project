# 🎮 Hermit Crab Game Studio - Multiplayer Match API

API RESTful para gerenciamento de jogadores e partidas multiplayer.  
Desenvolvida como parte do teste técnico para a vaga de Desenvolvedora Backend na **Hermit Crab Game Studio**.

---

## 🛠 Visão Geral da Arquitetura

O projeto segue uma arquitetura **modular** baseada em **MVC simplificado**, visando organização e manutenção do código:
```b́ash
src/
├── app.js # Configuração principal do Express
├── routes/ # Definição das rotas (Players e Matches)
├── controllers/ # Lógica de controle e resposta HTTP
├── services/ # Regras de negócio e manipulação dos dados
├── models/ # Estrutura das entidades (Player, Match)
├── storage/ # Persistência em memória
├── constants/ # Constantes globais (ex: estados de partidas)
├── swaggerConfig.js # Configuração do Swagger/OpenAPI
server.js # Ponto de entrada da aplicação
```
---

## 📐 Padrões Utilizados

- **MVC simplificado**: Separação de responsabilidades entre Rotas, Controllers, Models e Services.  
- **Service Layer Pattern**: Regras de negócio concentradas em *services*, isolando lógica de persistência.  
- **Constants Pattern**: Definição de valores fixos (ex: estados de partida) em arquivos separados para reuso.  
- **Swagger/OpenAPI**: Documentação automatizada das rotas.  
- **RESTful**: Estrutura de endpoints seguindo boas práticas REST.

---

## 🚀 Instruções para Rodar o Projeto Localmente

### 1️⃣ Pré-requisitos
- [Node.js](https://nodejs.org/) v16+  
- [npm](https://www.npmjs.com/)  

### 2️⃣ Clonar o repositório
```bash
git clone https://github.com/SEU-USUARIO/js-hermit-crab-game-studio-project.git
cd js-hermit-crab-game-studio-project
```
### 3️⃣ Instalar dependências
```bash
npm install
```

### 4️⃣ Rodar o servidor
```bash
npm start
```

Servidor disponível em:
```bash
http://localhost:3000
```

Swagger UI disponível em:
```bash
http://localhost:3000/api-docs
```
---
### 📋 Endpoints Principais
* **Players**
  * ```POST /players``` → Cria jogador
  * ```GET /players``` → Lista jogadores
  * ```GET /players/{id}``` → Busca jogador por ID
  * ```PUT /players/{id}``` → Atualiza jogador
  * ```DELETE /players/{id}``` → Remove jogador

* **Matches**
  * ```POST /matches``` → Cria partida
  * ```POST /matches/{matchId}/join/{playerId}``` → Jogador entra na partida
  * ```PATCH /matches/{id}/state``` → Atualiza estado da partida (ex: cancelamento)
  * ```GET /matches``` → Lista partidas
  * ```GET /matches/{id}``` → Busca partida por ID

> Documentação completa disponível em ```/api-docs```
___
### ⏳ Tempo Gasto
* **Planejamento do projeto**: 3h30
* **Configuração inicial do projeto**: 1h30
* **Implementação de Models, Controllers, Services e Rotas**: 4h
* **Integração Swagger/OpenAPI**: 3h
* **Testes e ajustes finais**: 1h
* **Documentação**: 2h
Total aproximado: ~15h00
___

### 🧠 Maiores Dificuldades
* **Falta de familiriadade com JavaScript:**
   Por estar mais acostumada com Java + Spring Boot, houve necessidade de relembrar práticas de Node.js puro.

* **Diferença de ferramentas:**
   O uso de frameworks como Spring Boot costuma oferecer abstrações prontas (ex: persistência, documentação, validação), enquanto no Node foi necessário configurar manualmente partes do projeto.

* **Swagger:**
   Ajuste de configuração e anotações para exibir corretamente as rotas no UI.
___
### 💡 Melhorias Futuras
* Adicionar persistência real (SQLite, PostgreSQL, MongoDB)
* Implementar testes unitários com Jest
* Adicionar autenticação e autorização (JWT)
* Melhorar validações com middleware customizado
* Adicionar front-end

  ---
  ### Autora
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Elisabete-MO">
        <img loading="lazy" src="https://avatars.githubusercontent.com/Elisabete-MO?v=4" width="115"/><br />
        <sub><b>Elisabete Oliveira</b></sub>
      </a>
    </td>
  </tr>
</table>

