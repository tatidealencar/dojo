document.addEventListener('DOMContentLoaded', function () {
    fetch("../data.json")
        .then(function (response) {
            response.json().then(function (json) {
                var array = Object.keys(json).map(i => json[Number(i)]);

                //percorrer o array e pegar somente as notícias da categoria desejada

                //agrupar as notícias em subcategorias

                //para cada subcategoria, criar um card

                //para cada conjunto de notícias de uma determinada subcategoria, criar lista de notícias

            });
        })
});