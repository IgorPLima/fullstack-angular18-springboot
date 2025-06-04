# FullStack Angular 18 + Spring Boot

Projeto FullStack com frontend em **Angular 18** e backend em **Spring Boot**, desenvolvido como parte de estudos e portfólio para demonstração de habilidades com tecnologias modernas de desenvolvimento web.

---

## ⚠️ Avisos Importantes

- 🚧 **Este projeto está em andamento** e receberá **atualizações constantes**.  
- 🔁 No arquivo `frontend/src/app/courses/service/courses.service.ts`, existem duas opções para consumir os dados:

```ts
// Para testes locais, sem precisar rodar o backend:
private readonly API = 'assets/courses.json';

// Para utilizar a API real, é necessário que o backend esteja rodando:
private readonly API = 'api/courses';
```

Para rodar a API real, o frontend deve ser iniciado com:

```bash
npm run server
```

---

## 🧠 Objetivo do Projeto

Este projeto é um **CRUD completo** (Create, Read, Update, Delete), com funcionalidades de cadastro, edição, listagem e exclusão de registros. Ele demonstra a integração entre o front-end Angular e o back-end Java com Spring Boot, incluindo comunicação via API REST.

---

## 🚀 Tecnologias Utilizadas

### Front-end
- Angular 18
- TypeScript
- HTML5 + CSS3
- Angular CLI

### Back-end
- Java 17+
- Spring Boot
- Spring Web
- Spring Data JPA
- Banco de dados (ex: H2, MySQL)

---

## 🔧 Como Executar

### Pré-requisitos
- Node.js e Angular CLI
- Java 17+ e Maven

### 1. Clone o projeto

```bash
git clone https://github.com/seu-usuario/fullstack-angular18-springboot.git
cd fullstack-angular18-springboot
```

Substitua `seu-usuario` pelo seu usuário do GitHub.

### 2. Inicie o Backend

```bash
cd backend
./mvnw spring-boot:run
```

A API estará disponível em: `http://localhost:8080`

### 3. Inicie o Frontend

#### ✅ Para testar com JSON local:
```bash
cd ../frontend
npm install
ng serve
```

#### 🔁 Para usar a API real (necessita backend rodando):
```bash
npm run server
```

A aplicação estará disponível em: `http://localhost:4200`

---

## 📂 Estrutura do Projeto

```
fullstack-angular18-springboot/
├── frontend/    → Projeto Angular
└── backend/     → Projeto Spring Boot
```

---

## 💡 Funcionalidades

- Cadastro de registros
- Listagem com paginação (opcional)
- Edição de dados
- Exclusão com confirmação
- Validações de formulário

---

## 📚 Aprendizados

Este projeto me ajudou a praticar:
- Integração entre front e back com API REST
- Componentização e serviços no Angular
- Padrões de projeto com Spring Boot
- Boas práticas com Git e GitHub

---

## 📬 Contato

Você pode falar comigo via:
- [LinkedIn](https://www.linkedin.com/in/seu-usuario) <!-- Substitua pelo seu LinkedIn -->
- [E-mail](mailto:seuemail@exemplo.com)

---

## 🔖 Licença

Este projeto está sob a licença MIT.