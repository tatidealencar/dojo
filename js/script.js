carregaNoticias();

function criarCard(noticias, categoria, destaque, row, cor) {

    if (noticias.length > 0) {
        var foto_capa = "";
        var descricao_foto_capa = "";
        var titulo = "";
        var subtitulo = "";
        var data_hora = "";
        var id_noticia = "";

        destaque.forEach(function (element, index) {
            id_noticia = index;
        });

        if (id_noticia !== "") {
            foto_capa = destaque[id_noticia]['foto-capa'];
            descricao_foto_capa = destaque[id_noticia]['descricao-foto-capa'];
            titulo = destaque[id_noticia]['titulo'];
            subtitulo = destaque[id_noticia]['subtitulo'];
            data_hora = destaque[id_noticia]['data-hora'];
        } else {
            var noticia;
            noticias.forEach(function (element, index) {
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
        h5.textContent = categoria;
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

        let link_noticia = document.createElement('a');
        link_noticia.classList.add('text-decoration-none', 'text-dark');
        link_noticia.setAttribute('href', 'noticia.html?id=' + id_noticia);

        card.appendChild(card_body);
        link_noticia.appendChild(card);

        if (noticias.length > 1) {
            var list_group = document.createElement('div');
            list_group.classList.add('list-group', 'list-group-flush');
            noticias.forEach(function (element, index) {
                if (element['destaque'] != 'true' && list_group.getElementsByTagName('a').length < 3) {
                    let link = document.createElement('a');
                    link.classList.add('list-group-item', 'list-group-item-action');
                    link.textContent = element['titulo'];
                    link.setAttribute('href', 'noticia.html?id=' + index);
                    list_group.appendChild(link);
                }

            });
            card.appendChild(list_group);
        }

        col.appendChild(link_noticia);
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

function carregaNoticias() {

    fetch("../data.json")
        .then(function (response) {
            response.json().then(function (json) {
                var array = Object.keys(json).map(i => json[Number(i)]);
                var categorias = [];
                var noticias = [];

                for (let i = 0; i < Object.keys(array).length; i++) {
                    noticias[i] = array[i];
                    if (categorias.includes(array[i]['categoria']) == false) {
                        categorias.push(array[i]['categoria']);
                    }
                }

                var destaques = noticias.filterAssoc(function (noticia) {
                    return noticia['destaque'] == 'true';
                })

                let caroussel = document.getElementById('caroussel');
                let botoes = document.getElementById('botoes');

                var contador = 0;

                destaques.forEach(function (element, index) {
                    console.log(index);
                    let div = document.createElement('div');
                    div.classList.add('carousel-item');
                    if (index == 0) {
                        div.classList.add('active');
                    }
                    let img = document.createElement('img');
                    img.classList.add('d-block', 'w-100');
                    img.setAttribute('src', element['foto-capa']);
                    img.setAttribute('alt', element['descricao-foto-capa']);

                    let div2 = document.createElement('div');
                    div2.classList.add('carousel-caption', 'd-none', 'd-md-block', 'bg-title');
                    let h5 = document.createElement('h5');
                    h5.classList.add('c-title_1');
                    h5.textContent = element['titulo'];
                    let p = document.createElement('p');
                    p.classList.add('c-text-1');
                    p.textContent = element['subtitulo'];

                    div.appendChild(img);
                    div.appendChild(div2);
                    div2.appendChild(h5);
                    div2.appendChild(p);
                    caroussel.appendChild(div);

                    let button = document.createElement('button');
                    button.setAttribute('data-bs-target', 'carouselExampleCaptions');
                    button.setAttribute('data-bs-slide-to', contador);
                    button.setAttribute('aria-current', element['titulo']);
                    button.classList.add('active');

                    botoes.appendChild(button);
                    contador++;
                });


                console.log(caroussel);


                var bloco = document.getElementById('bloco');

                for (let i = 0; i < categorias.length; i = i + 3) {
                    var row = document.createElement('div');
                    row.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3');

                    let j = i;

                    for (j; j <= i + 2 && j < categorias.length; j++) {
                        criarCard(noticias.filterAssoc(function (noticia) {
                            return noticia['categoria'] == categorias[j]
                        }), getNomeCategoria(categorias[j]), noticias.filterAssoc(function (noticia) {
                            return noticia['destaque'] == 'true' && noticia['categoria'] == categorias[j]
                        }), row, getCor(categorias[j]));
                    }

                    bloco.appendChild(row);

                    if (i < categorias.length - 3) {
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

function getNomeCategoria(categoria) {
    let nome = ({
        1: "Economia",
        2: "Política",
        3: "Entretenimento",
        4: "Esporte",
        5: "Tecnologia",
        6: "Saúde",
        7: "Viagem & Gastronomia",
        8: "Educação",
        9: "Carros"

    })[categoria];

    return nome;
}