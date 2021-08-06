var parametro = new URLSearchParams(document.location.search.substring(1));
var categoria = parametro.get('categoria');

setCategoria(categoria);
carregaNoticias(categoria);

function criarCard(noticias, subcategoria, destaque, row, cor) {

    if (noticias.length > 0) {
        var foto_capa = "";
        var descricao_foto_capa = "";
        var titulo = "";
        var subtitulo = "";
        var data_hora = "";
        var id_noticia = "";

        destaque.forEach(function (element, index) {
            id_noticia = index;
        })

        if (id_noticia !== "") {
            foto_capa = destaque[id_noticia]['foto-capa'];
            descricao_foto_capa = destaque[id_noticia]['descricao-foto-capa'];
            titulo = destaque[id_noticia]['titulo'];
            subtitulo = destaque[id_noticia]['subtitulo'];
            data_hora = destaque[id_noticia]['data-hora'];
            destaque.forEach(function (element, index) {

            })
        } else {
            var noticia;
            noticias.forEach(function(element, index) {
                noticia = element;
                id_noticia = index;
            });
            noticias.splice(id_noticia, 1);
            foto_capa = noticia['foto-capa'];
            descricao_foto_capa = noticia['descricao-foto-capa'];
            titulo = noticia['titulo'];
            subtitulo = noticia['subtitulo'];
            data_hora = noticia['data-hora'];
        }

        var col = document.createElement('col');
        col.classList.add('col');

        var card = document.createElement('card');
        card.classList.add('card');

        var img = document.createElement('img');
        img.classList.add('card-img-top');
        img.setAttribute('src', foto_capa);
        img.setAttribute('alt', descricao_foto_capa);

        var card_image = document.createElement('div');
        card_image.classList.add('card-img-overlay', 'd-flex', 'flex-row-reverse');

        var h5 = document.createElement('h5');
        h5.classList.add('card-title', 'p-2', 'position-absolute', 'end-0', 'badge-img-categoria');
        h5.textContent = subcategoria;
        h5.classList.add(cor);

        card_image.appendChild(h5);

        var card_body = document.createElement('div');
        card_body.classList.add('card-body', 'bg-card');

        var card_title = document.createElement('h5');
        card_title.classList.add('card-title');
        card_title.textContent = titulo;

        var card_text = document.createElement('p');
        card_text.classList.add('card-text');
        card_text.textContent = subtitulo;

        var card_small = document.createElement('small');
        card_small.classList.add('text-muted');
        card_small.textContent = "Publicado dia " + data_hora;

        card_body.appendChild(card_title);
        card_body.appendChild(card_text);
        card_body.appendChild(card_small);
        card.appendChild(img);
        card.appendChild(card_image);
        card.appendChild(card_body);

        if (noticias.length > 1) {
            var list_group = document.createElement('div');
            list_group.classList.add('list-group', 'list-group-flush');
            noticias.forEach(function (element, index) {
                if (element['destaque'] != 'true') {
                    let link = document.createElement('a');
                    link.classList.add('list-group-item', 'list-group-item-action');
                    link.textContent = element['titulo'];
                    link.setAttribute('href', 'noticia.html?id=' + index);
                    list_group.appendChild(link);
                }

            });
            card.appendChild(list_group);
        }

        col.appendChild(card);
        row.appendChild(col);
    }
}

Array.prototype.filterAssoc = function (callback) {
    var a = this.slice();
    a.map(function (v, k, a) {
        if (!callback(v, k, a)) delete a[k];
    });
    return a;
};

function carregaNoticias(categoria) {

    fetch("../data.json")
        .then(function (response) {
            response.json().then(function (json) {
                var array = Object.keys(json).map(i => json[Number(i)]);
                var subcategorias = [];
                var noticias = [];

                for (let i = 0; i < Object.keys(array).length; i++) {
                    if (array[i]['categoria'] == categoria) {
                        noticias[i] = array[i];
                        if (subcategorias.includes(array[i]['subcategoria']) == false) {
                            subcategorias.push(array[i]['subcategoria']);
                        }
                    }
                }

                var bloco = document.getElementById('bloco');

                for (let i = 0; i < subcategorias.length; i = i + 3) {
                    var row = document.createElement('div');
                    row.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3');

                    let j = i;

                    for (j; j <= i + 2 && j < subcategorias.length; j++) {
                        criarCard(noticias.filterAssoc(function (noticia) {
                            return noticia['subcategoria'] == subcategorias[j]
                        }), subcategorias[j], noticias.filterAssoc(function (noticia) {
                            return noticia['destaque'] == 'true' && noticia['subcategoria'] == subcategorias[j]
                        }), row, getCor(categoria));
                    }

                    bloco.appendChild(row);

                    if (i < subcategorias.length - 3) {
                        let hr = document.createElement('hr');
                        hr.classList.add('card-line');
                        bloco.append(hr);
                    }


                }

            });
        })
}

function getCor(categoria) {
    let cor = ({
        1: "bg-economia",
        2: "bg-politica",
        3: "bg-entretenimento",
        4: "bg-esporte",
        5: "bg-tecnologia",
        6: "bg-saude",
        7: "bg-viagem-gastro",
        8: "bg-educacao",
        9: "bg-carros"

    })[categoria];

    return cor;
}

function setCategoria(categoria) {

    var nome_categoria = document.getElementById('nome_categoria');

    switch (categoria) {
        case '1':
            nome_categoria.innerText = "Economia";
            let link_economia = document.getElementById('link_economia');
            link_economia.classList.add('active');
            break;
        case '2':
            nome_categoria.innerText = "Política";
            let link_politica = document.getElementById('link_politica');
            link_politica.classList.add('active');
            break;
        case '3':
            nome_categoria.innerText = "Entretenimento";
            let link_entretenimento = document.getElementById('link_entretenimento');
            link_entretenimento.classList.add('active');
            break;
        case '4':
            nome_categoria.innerText = "Esporte";
            let link_esporte = document.getElementById('link_esporte');
            link_esporte.classList.add('active');
            break;
        case '5':
            nome_categoria.innerText = "Tecnologia";
            break;
        case '6':
            nome_categoria.innerText = "Saúde";
            break;
        case '7':
            nome_categoria.innerText = "Viagens & Gastronomia";
            break;
        case '8':
            nome_categoria.innerText = "Educação";
            break;
        case '9':
            nome_categoria.innerText = "Carros";
            break;
    }
}