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

            console.log(noticia);

            var titulo = document.getElementById('titulo');
            titulo.textContent = noticia[0]['titulo'];

            var subtitulo = document.getElementById('subtitulo');
            subtitulo.textContent = noticia[0]['subtitulo'];

            console.log(noticia[0]['foto-capa']);
            if (noticia[0]['foto-capa'] != "") {
                var div_imagem = document.getElementById('imagem');
                div_imagem.classList.add("card ", "bg-dark", "text-white");
                var img = document.createElement('img');
                img.classList.add("card-img");
                img.setAttribute("src", noticia[0]['foto-capa']);
                img.setAttribute("alt", noticia[0]['descricao-foto-capa']);
                div_imagem.appendChild(img);
            }
        });
    })