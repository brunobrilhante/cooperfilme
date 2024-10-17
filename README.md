# COOPERFILME

## Descrição
O Cooperfilme é um sistema de gerenciamento de roteiros de filmes que permite aos usuários criar, editar e visualizar roteiros de forma fácil e eficiente.

## Funcionalidades
* Cliente pode:
  - Submeter roteiros.
  - Consultar o status do roteiro.
* Usuários internos (Analistas, Revisores, Aprovadores) podem:
  - Fazer login no sistema.
  - Ver e filtrar os roteiros por status, data de envio e e-mail do cliente.
  - Alterar o status do roteiro de acordo com seu cargo.

## Tecnologias Utilizadas
* Backend: Node.js com Express.js
* Frontend: React.js
* Banco de Dados: PostgreSQL
* Autenticação: JWT (JSON Web Token)
* Docker: Docker Compose para orquestração dos serviços*
* ORM: Sequelize

## Instruções para Executar

*Observação: Não consegui rodar pelo docker, para isso vamos executar manualmente o sistema.

### 1. Clone este repositório.

```bash
git clone https://github.com/brunobrilhante/cooperfilme.git
cd cooperfilme
```
### 2. Instalação das depedências do backend e do frontend

```bash
cd frontend
npm install
```

```bash
cd backend
npm install
```

### 3. Executando o projeto

Dentro do diretório backend, crie um arquivo .env com as seguintes variáveis de ambiente:
```bash
JWT_SECRET="HS256"
DB_HOST="localhost"
DB_USER="postgres"
DB_PASSWORD="admin"
DB_NAME="cooperfilme"
```

Backend:
```bash
npm start
```

Frontend:
```bash
npm start
```

A aplicação estará disponível nos seguintes endpoints:

Frontend: http://localhost:3000 <br/>
Backend: http://localhost:5000 <br/>
PostgreSQL: localhost:5432

## Inserindo Usuários Padrão no Banco de Dados:

O sistema precisa de usuários padrão para testar o fluxo de aprovação. Use o seguinte script SQL para inserir os usuários diretamente no banco de dados PostgreSQL:


```bash
-- Inserir Analista
INSERT INTO "Users" (nome, email, senha, cargo, createdAt, updatedAt) VALUES
('Analista 1', 'analista@cooperfilme.com', '123456', 'ANALISTA', now(), now()));

-- Inserir Revisor
INSERT INTO "Users" (nome, email, senha, cargo, createdAt, updatedAt) VALUES
('Revisor 1', 'revisor@cooperfilme.com', '123456', 'REVISOR', now(), now()));

-- Inserir Aprovadores
INSERT INTO "Users" (nome, email, senha, cargo, createdAt, updatedAt) VALUES
('Aprovador 1', 'aprovador1@cooperfilme.com', '123456', 'APROVADOR', now(), now()),
('Aprovador 2', 'aprovador2@cooperfilme.com', '123456', 'APROVADOR', now(), now())),
('Aprovador 3', 'aprovador3@cooperfilme.com', '123456', 'APROVADOR', now(), now()));

```
## Credenciais de Acesso

### Analista

Email: analista@cooperfilme.com <br/>
Senha: 123456

### Revisor

Email: revisor@cooperfilme.com <br/>
Senha: 123456

### Aprovador

Email: aprovador1@cooperfilme.com <br/>
Senha: 123456

Email: aprovador2@cooperfilme.com <br/>
Senha: 123456

Email: aprovador3@cooperfilme.com <br/>
Senha: 123456

## Melhorias Futuras
* Implementação de criptografia de senha (usando bcrypt).
* Rodar com o Docker
* Implementação de testes automatizados.
* Melhorias na interface para gestão de usuários e roteiros.
* Melhorias na alteração do Status
