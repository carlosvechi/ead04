var usuarioModule = (function() {
    var usuariosArray = [];
    var listaUsers = document.getElementById("listaUsers");

    function renderizarUsuarios() {
        if (!listaUsers) return;
        
        // Limpa o conteúdo atual do container
        listaUsers.innerHTML = "";
        
        // Cria a tabela
        var table = document.createElement("table");
        table.style.width = "100%";
        table.setAttribute("border", "1");
        
        // Cria o cabeçalho da tabela
        var thead = document.createElement("thead");
        var headerRow = document.createElement("tr");
    
        var thNome = document.createElement("th");
        thNome.textContent = "Nome";
        var thEmail = document.createElement("th");
        thEmail.textContent = "Email";
        var thAcoes = document.createElement("th");
        thAcoes.textContent = "Ações";
    
        headerRow.appendChild(thNome);
        headerRow.appendChild(thEmail);
        headerRow.appendChild(thAcoes);
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Cria o corpo da tabela
        var tbody = document.createElement("tbody");
        for (var i = 0; i < usuariosArray.length; i++) {
            var usuario = usuariosArray[i];
            var row = document.createElement("tr");
            
            // Coluna do Nome
            var tdNome = document.createElement("td");
            tdNome.textContent = usuario.nome;
            row.appendChild(tdNome);
            
            // Coluna do Email
            var tdEmail = document.createElement("td");
            tdEmail.textContent = usuario.email;
            row.appendChild(tdEmail);
            
            // Coluna das Ações
            var tdAcoes = document.createElement("td");
            var btnRemover = document.createElement("button");
            btnRemover.textContent = "Remover";
            btnRemover.setAttribute("onclick", "usuarioModule.removerUsuario('" + usuario.email + "')");
            tdAcoes.appendChild(btnRemover);
            row.appendChild(tdAcoes);
            
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
        listaUsers.appendChild(table);
    }
    

    function adicionarUsuario() {
        var nomeInput = document.getElementById("nomeUsuario");
        var emailInput = document.getElementById("emailUsuario");

        if (!nomeInput || !emailInput) return;

        var nome = nomeInput.value.trim();
        var email = emailInput.value.trim();

        if (nome === "" || email === "") {
            alert("Preencha todos os campos!");
            return;
        }

        usuariosArray.push({ nome: nome, email: email });
        renderizarUsuarios();

        nomeInput.value = "";
        emailInput.value = "";
    }

    function removerUsuario(email) {
        for (var i = 0; i < usuariosArray.length; i++) {
            if (usuariosArray[i].email === email) {
                usuariosArray.splice(i, 1);
                break;
            }
        }
        renderizarUsuarios();
    }

    return {
        adicionarUsuario: adicionarUsuario,
        removerUsuario: removerUsuario
    };
})();

document.getElementById("btnAdicionar").addEventListener("click", usuarioModule.adicionarUsuario);

document.getElementById("navigateBtn").addEventListener("click", function () {
    window.location.href = "paginas/contato.html";
});
