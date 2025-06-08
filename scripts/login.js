// Usuários de teste (poderia vir de um backend futuramente)
const usuarios = [
    { email: "joao@example.com", senha: "senha123" },
    { email: "maria@example.com", senha: "abc123" },
    { email: "admin@teste.com", senha: "admin2025" }
  ];
  
  const form = document.getElementById("loginForm");
  const alertContainer = document.getElementById("alert-container");
  
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
  
    const usuarioValido = usuarios.find(
      (usuario) => usuario.email === email && usuario.senha === senha
    );
  
    if (usuarioValido) {
      alertContainer.innerHTML = "";
      exibirAlerta("Login realizado com sucesso! Redirecionando...", "success");

      // Aguarda 2 segundos antes de redirecionar
      setTimeout(() => {
        window.location.href = "index.html"; // troque pelo nome da próxima página
      }, 3000);
      // Redirecionar ou lógica pós-login
    } else {
      exibirAlerta("Usuário ou senha inválidos.", "danger");
    }
  });
  
  function exibirAlerta(mensagem, tipo) {
    alertContainer.innerHTML = `
      <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
        ${mensagem}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
      </div>
    `;
  }
  