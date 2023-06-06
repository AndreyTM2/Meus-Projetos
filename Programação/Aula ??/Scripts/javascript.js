function load () {

    const lista = document.getElementById("4165");
    const produtos = [{
        name: "Livros",
        preço: 19.20,
    }, {
        name: "OLD SPICE",
        preço: 15.99
    }, {
        name: "Gta V",
        preço: 325.99,
    }, {
        name: "Anão",
        preço: 400000
    }];

    
    const possivelTamanhos = [48, 38, 21, 5];

    const listaProdutos = Array(possivelTamanhos[Math.floor(Math.random() * possivelTamanhos.length)]).fill(false).map((i) => {
        let { name, preço } = produtos[Math.floor(Math.random() * produtos.length)];
        preço = (preço * Math.random() * 45).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        const imagem = `../Assets/${ Math.floor(Math.random() * 4 + 1)}.jpg`
        return `<li class="product-box"><img src="${imagem}" alt="001"><div class="product-name">${name}</div><div class="product-price">${preço}</div></li>`
    });

    lista.innerHTML = listaProdutos;
}



/*/
async function load () { 
    const lista = document.getElementById("4165");
    const link = `https://pokeapi.co/api/v2/pokemon?limit=${[20, 40, 65, 591, 327, 1000, 5000, 6000, 100000][Math.floor(Math.random() * 5)]}`
    const _fetch = await fetch(link).then(async (_) => _.json());
    const pokemon = await Promise.all(_fetch.results.map(async ({ name, url }) => {
        const pokemonReal = await fetch(url).then(async (i) => i.json());
        const at = (pokemonReal.abilities.map((i) => i.ability.name)).join(", ");
        const nome = name[0].toUpperCase() + name.slice(1);
        const preço = (((Math.random() * pokemonReal.base_experience)) * Math.random() * 45).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        return `<li class="product-box"><img src="${pokemonReal.sprites.front_default}" alt="${at}"><div class="product-name">${nome}</div><div class="product-price">${preço}</div></li>`
    }))

    
    lista.innerHTML = pokemon    
}
/*/
