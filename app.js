const api = axios.create({
    baseURL: "https://api-axos.onrender.com"
});

let section = "Users";
let records = [];
let isUsers = section === "Users";

const $ = selector => document.querySelector(selector);

async function listar(endpoint = `/${section}`) {
    try {
        const { data } = await api.get(endpoint);
        return data;
    } catch (error) {
        console.log("Error da consulta:", error.message);
        throw error;
    }
}

function render() {
    if (!$('#page-title') || !$('#table-head')) return;

    $('#page-title').textContent = isUsers ? "Usuários" : "Produtos";
    $('#table-head').innerHTML = isUsers
        ? '<tr><th>ID</th></tr><tr><th>Nome</th></tr><tr><th>E-mail</th></tr>'
        : '<tr><th>ID</th></tr><tr><th>produtos</th></tr><tr><th>Preços</th></tr>';
        $('#table-body').innerHTML = records
}

async function carregar() {
    try {
        records = await listar();
        render();
        console.log(records);
    } catch (error) {
        console.error("Falha ao carregar registros:", error.message);
    }
}

carregar();