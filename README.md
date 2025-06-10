# 📚 Biblioteca Saber Livre

Bem-vindo ao projeto **Biblioteca Saber Livre**! 🚀 Um sistema web para gerenciar bibliotecas, controlando livros, usuários e empréstimos. Desenvolvido com HTML, CSS, JavaScript e bibliotecas como Bootstrap e DataTables, oferece uma interface intuitiva e funcional.

## 📂 Estrutura do Projeto

O projeto está organizado assim:

```
/projeto
├── assets
│   └── imgs
│       └── livrariabg.webp
├── scripts
│   ├── login.js
│   ├── main.js
│   ├── user.js
├── index.html
├── login-session.html
├── usuarios.html
└── README.md
```

### Descrição dos Arquivos

- **login-session.html**: Página de login para autenticação 🔐  
- **index.html**: Página principal para gerenciar o estoque de livros 📖  
- **usuarios.html**: Página para gerenciar usuários 👥  
- **scripts/login.js**: Lógica de autenticação do login  
- **scripts/main.js**: Gerenciamento de livros (listagem, edição, empréstimo, exclusão)  
- **scripts/user.js**: Gerenciamento de usuários (listagem, edição, exclusão)  
- **assets/imgs/livrariabg.webp**: Imagem de fundo do cabeçalho 🖼️  

## 🛠️ Pré-requisitos

Para rodar o projeto, você vai precisar de:

1. Navegador moderno (Chrome, Firefox, Edge, etc.) 🌐  
2. Conexão à internet para carregar dependências externas (Bootstrap, jQuery, DataTables) 📡

## 🚀 Como Configurar e Executar

### 1. Baixe o Projeto
- Clone ou faça o download do repositório 📥

### 2. Acesse o Sistema
- Abra o navegador e vá para `login-session.html` 🌐  
- Credenciais de teste:
  - E-mail: `joao@example.com`, Senha: `senha123`
  - E-mail: `maria@example.com`, Senha: `abc123`
  - E-mail: `admin@teste.com`, Senha: `admin2025`
- Após login, você será redirecionado para `index.html` 🏠

## ✨ Funcionalidades

### 🔐 Página de Login (`login-session.html`)
- Autentica usuários com base em `login.js`
- Exibe mensagens de erro ou sucesso com alertas Bootstrap

### 📖 Página de Livros (`index.html`)
- Lista livros com título, autor, quantidade e avaliações
- Permite cadastrar, editar, emprestar e excluir livros
- Usa DataTables para tabelas interativas com busca e paginação 🔍

### 👥 Página de Usuários (`usuarios.html`)
- Lista usuários com nome, e-mail, telefone e endereço
- Permite cadastrar, editar e excluir usuários
- Usa DataTables para tabelas interativas

### 📅 Empréstimos
- Parcialmente implementado em `main.js`
- Permite selecionar um usuário e registrar um empréstimo
- Lógica de salvamento precisa ser completada

## 🌐 Dependências Externas

Carregadas via CDN:

- **Bootstrap 4.6.2**: Estilização, modais e alertas 🎨  
- **jQuery 3.7.1 (slim)**: Manipulação do DOM e integração com DataTables  
- **Popper.js 1.16.1**: Suporte a tooltips e popovers  
- **DataTables 2.3.2**: Tabelas interativas com busca e paginação  
- **Google Fonts (Inter)**: Fonte da interface  

## ⚠️ Observações

- **Backend**: Usa dados estáticos em `main.js` e `user.js`. Para uso real, implemente um backend (ex.: Node.js com Express ou PHP) com banco de dados 🗄️  
- **Imagem de Fundo**: Verifique se `livrariabg.webp` está em `assets/imgs/`. Caso contrário, substitua o caminho no CSS ou remova a referência.  
- **Funcionalidades Incompletas**:
  - Funções `salvarEdicao`, `confirmarEmprestar` e `confirmarExcluir` são placeholders.
  - Formulários enviam dados para endpoints fictícios (`/action_page.php`, `/api/cadastrar_usuario`). Configure um backend para processá-los.  
- **Melhorias Futuras**:
  - Implementar backend para persistência de dados  
  - Adicionar validação de formulários no frontend  
  - Completar lógica de empréstimos e devoluções  
  - Criar relatórios em `relatorios.html`  

## 🛠️ Resolução de Problemas

- **Dependências não carregam**: Verifique a conexão com a internet (CDNs).  
- **Imagem de fundo não aparece**: Confirme o caminho de `livrariabg.webp`.  
- **DataTables não funciona**: Verifique a ordem de carregamento dos scripts (jQuery antes de DataTables).  

## 🤝 Contribuições

Quer ajudar? Envie sugestões, correções ou pull requests! 💡

## 📜 Licença

Projeto para fins educacionais, sem licença específica. Use e modifique para aprendizado! 🎓
