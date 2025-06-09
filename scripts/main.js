const estoqueLivros = [
    {
        "id": 1,
        "titulo": "Dom Casmurro",
        "escritor": "Machado de Assis",
        "quantidade": 42,
        "avaliacoes": "4/5",
        "capaUrl": "OL22170762M"
    },
    {
        "id": 2,
        "titulo": "O Alquimista",
        "escritor": "Paulo Coelho",
        "quantidade": 39,
        "avaliacoes": "3/5",
        "capaUrl": "OL35669258M"
    },
    {
        "id": 3,
        "titulo": "1984",
        "escritor": "George Orwell",
        "quantidade": 36,
        "avaliacoes": "5/5",
        "capaUrl": "OL36632156M"
    },
    {
        "id": 4,
        "titulo": "A Revolução dos Bichos",
        "escritor": "George Orwell",
        "quantidade": 44,
        "avaliacoes": "4/5",
        "capaUrl": "OL33019280M"
    },
    {
        "id": 5,
        "titulo": "O Pequeno Príncipe",
        "escritor": "Antoine de Saint-Exupéry",
        "quantidade": 48,
        "avaliacoes": "5/5",
        "capaUrl": "OL35664014M"
    },
    {
        "id": 6,
        "titulo": "O Senhor dos Anéis",
        "escritor": "J.R.R. Tolkien",
        "quantidade": 35,
        "avaliacoes": "5/5",
        "capaUrl": "OL53723416M"
    },
    {
        "id": 7,
        "titulo": "Harry Potter e a Pedra Filosofal",
        "escritor": "J.K. Rowling",
        "quantidade": 47,
        "avaliacoes": "5/5",
        "capaUrl": "OL39492768M"
    },
    {
        "id": 8,
        "titulo": "A Menina que Roubava Livros",
        "escritor": "Markus Zusak",
        "quantidade": 40,
        "avaliacoes": "4/5",
        "capaUrl": "OL32116049M"
    },
    {
        "id": 9,
        "titulo": "O Hobbit",
        "escritor": "J.R.R. Tolkien",
        "quantidade": 33,
        "avaliacoes": "5/5",
        "capaUrl": "OL39202180M"
    },
    {
        "id": 10,
        "titulo": "Orgulho e Preconceito",
        "escritor": "Jane Austen",
        "quantidade": 38,
        "avaliacoes": "4/5",
        "capaUrl": "OL55742682M"
    },
    {
        "id": 11,
        "titulo": "Pai Rico, Pai Pobre",
        "escritor": "Robert Kiyosaki",
        "quantidade": 46,
        "avaliacoes": "4/5",
        "capaUrl": "OL53477790M"
    },
    {
        "id": 12,
        "titulo": "Quem Pensa Enriquece",
        "escritor": "Napoleon Hill",
        "quantidade": 34,
        "avaliacoes": "3/5",
        "capaUrl": "OL46966682M"
    },
    {
        "id": 13,
        "titulo": "A Arte da Guerra",
        "escritor": "Sun Tzu",
        "quantidade": 45,
        "avaliacoes": "4/5",
        "capaUrl": "OL45603913M"
    },
    {
        "id": 14,
        "titulo": "O Poder do Hábito",
        "escritor": "Charles Duhigg",
        "quantidade": 41,
        "avaliacoes": "5/5",
        "capaUrl": "OL44970263M"
    },
    {
        "id": 15,
        "titulo": "A Sutil Arte de Ligar o F*da-se",
        "escritor": "Mark Manson",
        "quantidade": 43,
        "avaliacoes": "4/5",
        "capaUrl": "OL26948417M"
    },
    {
        "id": 16,
        "titulo": "Mindset",
        "escritor": "Carol S. Dweck",
        "quantidade": 36,
        "avaliacoes": "4/5",
        "capaUrl": "OL23002324M"
    },
    {
        "id": 17,
        "titulo": "A Cabana",
        "escritor": "William P. Young",
        "quantidade": 30,
        "avaliacoes": "3/5",
        "capaUrl": "OL28278748M"
    },
    {
        "id": 18,
        "titulo": "It: A Coisa",
        "escritor": "Stephen King",
        "quantidade": 32,
        "avaliacoes": "4/5",
        "capaUrl": "OL7573104M"
    },
    {
        "id": 19,
        "titulo": "Sob a Redoma",
        "escritor": "Stephen King",
        "quantidade": 35,
        "avaliacoes": "4/5",
        "capaUrl": "OL23224107M"
    },
    {
        "id": 20,
        "titulo": "O Código Da Vinci",
        "escritor": "Dan Brown",
        "quantidade": 49,
        "avaliacoes": "4/5",
        "capaUrl": "OL37876009M"
    },
    {
        "id": 21,
        "titulo": "Inferno",
        "escritor": "Dan Brown",
        "quantidade": 38,
        "avaliacoes": "3/5",
        "capaUrl": "OL47741459M"
    },
    {
        "id": 22,
        "titulo": "A Garota no Trem",
        "escritor": "Paula Hawkins",
        "quantidade": 34,
        "avaliacoes": "3/5",
        "capaUrl": "OL37761649M"
    },
    {
        "id": 23,
        "titulo": "É Assim que Acaba",
        "escritor": "Colleen Hoover",
        "quantidade": 48,
        "avaliacoes": "5/5",
        "capaUrl": "OL53001389M"
    },
    {
        "id": 24,
        "titulo": "Teto para Dois",
        "escritor": "Beth O’Leary",
        "quantidade": 33,
        "avaliacoes": "3/5",
        "capaUrl": ""
    },
    {
        "id": 25,
        "titulo": "O Homem Mais Rico da Babilônia",
        "escritor": "George S. Clason",
        "quantidade": 45,
        "avaliacoes": "4/5",
        "capaUrl": "OL40218587M"
    },
    {
        "id": 26,
        "titulo": "Ansiedade: Como Enfrentar o Mal do Século",
        "escritor": "Augusto Cury",
        "quantidade": 37,
        "avaliacoes": "3/5",
        "capaUrl": "OL32196343M"
    },
    {
        "id": 27,
        "titulo": "Cem Anos de Solidão",
        "escritor": "Gabriel García Márquez",
        "quantidade": 30,
        "avaliacoes": "5/5",
        "capaUrl": "OL364041M"
    },
    {
        "id": 28,
        "titulo": "Veronika Decide Morrer",
        "escritor": "Paulo Coelho",
        "quantidade": 39,
        "avaliacoes": "3/5",
        "capaUrl": "OL118061M"
    },
    {
        "id": 29,
        "titulo": "Ensaio Sobre a Cegueira",
        "escritor": "José Saramago",
        "quantidade": 41,
        "avaliacoes": "4/5",
        "capaUrl": "OL352517M"
    },
    {
        "id": 30,
        "titulo": "O Nome do Vento",
        "escritor": "Patrick Rothfuss",
        "quantidade": 38,
        "avaliacoes": "5/5",
        "capaUrl": "OL46535585M"
    }]

const usuarios = [
    {
        id: 1,
        nome: "João Silva",
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
    const tbody = $('#estoque tbody');
    estoqueLivros.forEach(l => {
        const tr = $('<tr>');
        tr.append(`<td>${l.id}</td>`);
        tr.append(`<td><img src="https://covers.openlibrary.org/b/olid/${l.capaUrl}-S.jpg" alt="Capa" style="width:40px; vertical-align:middle; margin-right:8px;"></td>`);
        tr.append(`<td>${l.titulo}</td>`);
        tr.append(`<td>${l.escritor}</td>`);
        tr.append(`<td>${l.quantidade}</td>`);
        tr.append(`<td>${l.avaliacoes}</td>`);
        tr.append(`
            <td>
            <div class="campo-btn">
                <button class="btn btn-sm btn-editar"
                        data-toggle="modal" data-target="#editarModal"
                        onclick="editar(${l.id})">
                        Editar
                </button>              
                <button class="btn btn-sm btn-emprestar"
                        data-toggle="modal" data-target="#modalEmprestar"
                        onclick="emprestar(${l.id})">
                        Emprestar
                </button>   
                <button class="btn btn-sm btn-apagar"
                        data-toggle="modal" data-target="#modalExcluir"
                        onclick="excluir(${l.id})">
                        Apagar
                </button>
            </div>
            </td>
        `);
        tbody.append(tr);
    });
    $("#estoque").DataTable({
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
    const livro = estoqueLivros.find(l => l.id === id);
    const body = document.getElementById('modalContentEdit');
    body.innerHTML = `
        <div class="modal-header">
            <p>Você está editando <span class="title">${livro.titulo}</span></p>
            <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        <div class="modal-body">
            <form>
                <div class="form-group">
                    <label for="editarTitulo">Título</label>
                    <input type="text" class="form-control" id="editarTitulo" value="${livro.titulo}">
                </div>
                <div class="form-group">
                    <label for="editarAutor">Autor</label>
                    <input type="text" class="form-control" id="editarAutor" value="${livro.escritor}">
                </div>
                <div class="form-group">
                    <label for="editarQuantidade">Quantidade</label>
                    <input type="number" class="form-control" id="editarQuantidade" value="${livro.quantidade}">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="submit" onclick="salvarEdicao(${livro.id})" class="btn btn-primary">Salvar Alterações</button>
                </div>
            </form>
        </div>
    `;
}

function emprestar(id) {
    const livro = estoqueLivros.find(l => l.id === id);
    const body = document.getElementById('modalContentEmprestar');
    const hoje = new Date();
    const dataAtual = hoje.toLocaleDateString("pt-BR");
    const horaAtual = hoje.toLocaleTimeString("pt-BR");
    const dataDevolucao = new Date();
    dataDevolucao.setDate(dataDevolucao.getDate() + 90);
    const dataDevolucaoFormatada = dataDevolucao.toLocaleDateString("pt-BR");

    body.innerHTML = `
        <div class="modal-header">
            <p><span class="title">${livro.titulo}</span></p>
            <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        <div class="modal-body">
            <img src="https://covers.openlibrary.org/b/olid/${livro.capaUrl}-S.jpg" alt="Capa" style="width:100px; margin:0 auto;padding:8px;">
            <form>
                <div class="form-group">
                    <label for="autorLivro">Autor</label>
                    <input type="text" class="form-control" disabled value="${livro.escritor}">
                </div>
                <div class="form-group">
                    <label for="sel1">Selecione usuário:</label>
                    <select class="form-control" id="sel1">
                        <option> - Selecione o usuário - </option>
                        ${usuarios.map(u => `<option value="${u.id}">${u.nome}</option>`).join("")}
                    </select>
                </div>
                <div class="form-group">
                    <label for="quantidadeLivro">Quantidade</label>
                    <input type="number" class="form-control" max="3" min="1">
                </div>
                <p>
                    Empréstimo em: <strong>${dataAtual}</strong> às <strong>${horaAtual}</strong>. 
                    Devolução até: <strong>${dataDevolucaoFormatada}</strong>.
                </p>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="submit" onclick="confirmarEmprestar(${livro.id})" class="btn btn-primary">Emprestar</button>
                </div>
            </form>
        </div>
    `;
}

function excluir(id) {
    const livro = estoqueLivros.find(l => l.id === id);
    const body = document.getElementById('modalContentExcluir');
    body.innerHTML = `
        <div class="modal-header">
            <p><span class="title">${livro.titulo}</span></p>
            <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        <div class="modal-body">
            <img src="https://covers.openlibrary.org/b/olid/${livro.capaUrl}-S.jpg" alt="Capa" style="width:100px; margin:0 auto;padding:8px;">
            <form>
                <div class="form-group">
                    <label for="autorLivro">Título</label>
                    <input type="text" class="form-control" disabled value="${livro.titulo}">
                </div>
                <div class="form-group">
                    <label for="autorLivro">Autor</label>
                    <input type="text" class="form-control" disabled value="${livro.escritor}">
                </div>
                <div class="form-group">
                    <label for="quantidadeLivro">Quantidade</label>
                    <input type="number" class="form-control" disabled value="${livro.quantidade}">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="submit" onclick="confirmarExcluir(${livro.id})" class="btn btn-danger">Apagar livro</button>
                </div>
            </form>
        </div>
    `;
}

// Funções de confirmação (placeholder - a serem implementadas)
function salvarEdicao(id) {
    // Lógica para salvar edição
    console.log(`Salvando edição do livro com ID ${id}`);
    // Atualize o estoqueLivros aqui com os valores dos inputs
    $('#editarModal').modal('hide');
}

function confirmarEmprestar(id) {
    // Lógica para confirmar empréstimo
    console.log(`Confirmando empréstimo do livro com ID ${id}`);
    $('#modalEmprestar').modal('hide');
}

function confirmarExcluir(id) {
    // Lógica para confirmar exclusão
    console.log(`Confirmando exclusão do livro com ID ${id}`);
    // Remova o livro do estoqueLivros se confirmado
    $('#modalExcluir').modal('hide');
}

fetchLivros();