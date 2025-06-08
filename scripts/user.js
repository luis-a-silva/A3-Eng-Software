const usuarios = [
    {
        id: 1,
        nome: "João Silva",
        telefone: "(11) 9 8885-9996",
        email: "joao@example.com",
        endereco: {
            cep: "01001-000",
            rua: "Rua das Flores",
            bairro: "Centro",
            municipio: "São Paulo",
            estado: "SP",
            numero: 123
        }
    },
    {
        id: 2,
        nome: "Maria Oliveira",
        telefone: "(21) 9 9968-5996",
        email: "maria@example.com",
        endereco: {
            cep: "20040-020",
            rua: "Av. Atlântica",
            bairro: "Copacabana",
            municipio: "Rio de Janeiro",
            estado: "RJ",
            numero: 456
        }
    }
];

const emprestimos = [
    {
        livro: {
            id: 2,
            titulo: "O Pequeno Príncipe",
            autor: "Antoine de Saint-Exupéry"
        },
        usuario: {
            id: 1,
            nome: "João Silva"
        },
        dataHora: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
    },
    {
        livro: {
            id: 1,
            titulo: "Dom Casmurro",
            autor: "Machado de Assis"
        },
        usuario: {
            id: 2,
            nome: "Maria Oliveira"
        },
        dataHora: new Date("2025-06-08T10:30:00-03:00").toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
    }
];


function fetchLivros() {
    
    const tbody = $('#usuarios tbody');
    usuarios.forEach(u=> {
        const tr = $('<tr>');
        tr.append(`<td>${u.id}</td>`);
        tr.append(`<td>${u.nome}</td>`);
        tr.append(`<td>${u.email}</td>`);
        tr.append(`<td>${u.telefone}</td>`);
        tr.append(`<td>${u.endereco.rua}, ${u.endereco.bairro}, ${u.endereco.municipio} </td>`);
        tr.append(`
            <td>
            <div class="campo-btn">
                <button class="btn btn-sm btn-info"
                        data-toggle="modal" data-target="#editarModal"
                        onclick="editar(${u.id})">
                        Editar
                </button>              
                
                <button class="btn btn-sm btn-secondary"
                        data-toggle="modal" data-target="#modalExcluir"
                         onclick="excluir(${u.id})">
                        Apagar
                </button>
            </div>
            </td>
          `);
        tbody.append(tr);
    })
    $("#usuarios").DataTable({
        language: {
            sEmptyTable: "Nenhum registro encontrado",
            sInfo: "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            sInfoEmpty: "Mostrando 0 até 0 de 0 registros",
            sInfoFiltered: "(Filtrados de _MAX_ registros)",
            sInfoThousands: ".",
            sLengthMenu: "Mostrar _MENU_ registros",
            sLoadingRecords: "Carregando...",
            sProcessing: "Processando...",
            sZeroRecords: "Nenhum registro encontrado",
            sSearch: "Pesquisar:",
            oPaginate: {
                sNext: "Próximo",
                sPrevious: "Anterior",
                sFirst: "Primeiro",
                sLast: "Último",
            },
            oAria: {
                sSortAscending: ": Ordenar colunas de forma ascendente",
                sSortDescending: ": Ordenar colunas de forma descendente",
            },
        },
    });
}


function editar(id) {
    const usuario = usuarios.find(u=> u.id === id);

    const body = document.getElementById('modalContentEdit');

    body.innerHTML = `
          <!-- Modal Header -->
          <div class="modal-header">
            <p>Você está editando <span  class="title"> ${usuario.nome}</span></p>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
          


        <form>
            <div class="form-group">
            <label for="tituloLivro">Nome:</label>
            <input type="text" class="form-control" value="${usuario.nome}">
            </div>
            <div class="form-group">
                <label for="autorLivro">E-mail:</label>
                <input type="email" class="form-control" value="${usuario.email}">
            </div>
            <div class="form-group">
                <label for="quantidadeLivro">Telefone:</label>
                <input type="text" class="form-control" value="${usuario.telefone}">
            </div>
             <div class="form-group">
                <label for="quantidadeLivro">Rua:</label>
                <input type="text" class="form-control" value="${usuario.endereco.rua}">
            </div>
            <div class="form-group">
                <label for="quantidadeLivro">Bairro:</label>
                <input type="text" class="form-control" value="${usuario.endereco.bairro}">
            </div>
            <div class="form-group">
                <label for="quantidadeLivro">Município</label>
                <input type="text" class="form-control" value="${usuario.endereco.municipio}">
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="submit" onclick="salvarEdicao(${usuario.id})" class="btn btn-primary">Salvar Alterações</button>
            </div>
        </form>
    `
}


function excluir(id) {

    const usuario = usuarios.find(u => u.id === id);

    const body = document.getElementById('modalContentExcluir');

    body.innerHTML = `
          <!-- Modal Header -->
          <div class="modal-header">
            <p><span  class="title"> ${usuario.nome}</span></p>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <!-- Modal body -->
          <div class="modal-body">
        <form>
        <div class="form-group">
            <label for="tituloLivro">Nome:</label>
            <input type="text" class="form-control" disabled value="${usuario.nome}">
            </div>
            <div class="form-group">
                <label for="autorLivro">E-mail:</label>
                <input type="email" class="form-control" disabled value="${usuario.email}">
            </div>
            <div class="form-group">
                <label for="quantidadeLivro">Número:</label>
                <input type="text" class="form-control" disabled value="${usuario.telefone}">
            </div>

            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="submit" onclick="salvarEdicao(${usuario.id})" class="btn btn-danger">Apagar usuario</button>
            </div>
        </form>
    `
}



fetchLivros();