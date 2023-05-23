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