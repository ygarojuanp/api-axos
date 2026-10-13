const api = axios.create({
    baseUrl: "https://api-axos.onrender.com/"
});

let section = "users";
let records = [];

const $ = selector => document.querySelector(selector);

async function listar (endpoint = `/${section}`) {
    try {
        const {data } = await api.get(endpoint);
        return data;
    } catch (error) {
        console.log("Erro da consulta: ", erro.message)
    }
}