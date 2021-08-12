var parametro = new URLSearchParams(document.location.search.substring(1));
var id = parametro.get('id');

fetch("../data.json")
    .then(function (response) {
        response.json().then(function (json) {
            var noticias = Object.keys(json).map(i => json[Number(i)]);

            //noticia correspondente ao id passado via URL
            var noticia = noticias.filter(function (noticia, index) {
                return index == id;
            });

            var titulo = document.getElementById('titulo');
            titulo.textContent = noticia[0]['titulo'];

            var subtitulo = document.getElementById('subtitulo');
            subtitulo.textContent = noticia[0]['subtitulo'];

            if (noticia[0]['foto-capa'] != "") {
                var div_imagem = document.getElementById('imagem');
                div_imagem.classList.add("card", "bg-dark", "text-white");
                var img = document.createElement('img');
                img.classList.add("card-img");
                img.setAttribute("src", noticia[0]['foto-capa']);
                img.setAttribute("alt", noticia[0]['descricao-foto-capa']);
                div_imagem.appendChild(img);
            }

            var texto = document.getElementById('texto_noticia');
            texto.innerHTML = noticia[0]['texto'];

            var autor_local = document.getElementById('autor_local');
            autor_local.textContent = noticia[0]['autor'] + ', ' + noticia[0]['local'];

            var data_hora = document.getElementById('data_hora');
            data_hora.textContent = "Criado em: " + noticia[0]['data-hora'] + (noticia[0]['data-hora-atualizacao'] != "" ? ' | Atualizado em: ' : "") + noticia[0]['data-hora-atualizacao'];

            var link_twitter = document.getElementById('twitter');
            link_twitter.setAttribute('data-url', 'http://127.0.0.1:5500/noticia.html?id=' + id);
            link_twitter.setAttribute('data-text', noticia[0]['titulo']);

            var link_facebook = document.getElementById('facebook');
            link_facebook.setAttribute('data-href', 'http://127.0.0.1:5500/noticia.html?id=' + id);

            var scripts = document.getElementsByTagName('script');
            console.log(scripts);
            scripts[5].setAttribute('data-url', 'http://127.0.0.1:5500/noticia.html?id=' + id);

            /*
            pegar o elemento outras_noticias pelo id
            percorrer o array de noticias e para cada notícia vai criar um elemento 'a' (link)
            para cada elemento a, setar atributo href com link para a notícia, texto do 
            link (textContent) e o atributo target (com _blank) se quiser que abra em outra página
            adicionar cada elemento ao elemento outras_noticias
            para pegar o id da notícia, usar o segundo parâmetro do foreach
            */
        });
    })