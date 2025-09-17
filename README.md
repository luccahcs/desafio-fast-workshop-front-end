# Desafio Fast Workshop - Front End

Repositório contendo o **front-end** do projeto **Desafio Fast Workshop**, desenvolvido com **Angular**.  
> ⚠️ Este front-end depende do back-end hospedado neste repositório: [Fast Workshops Back-End](https://github.com/luccahcs/fast-workshops-back-end/tree/main/FastWorkshops.Api)

---

## 📝 Descrição

Este projeto implementa a interface web do Desafio Fast Workshop, consumindo APIs fornecidas pelo back-end.  
O front-end foi desenvolvido seguindo boas práticas de Angular e arquitetura modular, incluindo componentes reutilizáveis, rotas e serviços para comunicação com a API.

---

## ⚙️ Tecnologias

- **Angular**: Framework principal
- **TypeScript**: Linguagem de desenvolvimento
- **Node.js / npm**: Gerenciamento de pacotes
- **HTML5 & SCSS**: Estrutura e estilos
- **Git/GitHub**: Controle de versão

---

## 🛠️ Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/)
- [Angular CLI](https://angular.io/cli)
- Back-end rodando localmente ou acessível via URL

Instalação do Angular CLI (se necessário):

npm install -g @angular/cli
📥 Instalação do projeto
Clone o repositório:

git clone https://github.com/luccahcs/desafio-fast-workshop-front-end.git
Acesse a pasta do projeto:

cd desafio-fast-workshop-front-end
Instale as dependências:

npm install
🚀 Executando o projeto
Certifique-se de que o back-end esteja rodando.
Exemplo: http://localhost:5000/api (ou a porta configurada).

Rodar o front-end:

ng serve
O servidor será iniciado em:

http://localhost:4200
🔹 A aplicação consumirá as APIs do back-end para exibir dados corretamente.

📂 Estrutura do Projeto

desafio-fast-workshop-front-end/
│
├─ src/app/            # Componentes, módulos e serviços do Angular
├─ src/assets/         # Arquivos estáticos (imagens, fontes, etc.)
├─ angular.json        # Configurações do Angular CLI
├─ package.json        # Dependências e scripts
└─ README.md           # Documentação do projeto
🔧 Boas práticas
Seguir padrão Angular Style Guide

Componentes e serviços reutilizáveis

Uso de SCSS modular para estilos

Comentários claros e código legível

Separação clara entre front-end e consumo de APIs

🤝 Contribuição
Faça um fork do repositório

Crie uma branch para sua feature:

git checkout -b minha-feature
Commit suas alterações:

git commit -m "Descrição da alteração"
Envie para seu fork:

git push origin minha-feature
Abra um Pull Request no repositório principal


📌 Referências
Angular Documentation

TypeScript Documentation

Node.js Documentation

Fast Workshops Back-End
