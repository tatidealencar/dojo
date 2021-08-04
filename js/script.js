document.addEventListener('DOMContentLoaded', function () {
    fetch("../data.json")
        .then(function (response) {
            response.json().then(function (json) {

                var categoria_economia = document.querySelector('#categoria_economia');
                var categoria_politica = document.querySelector('#categoria_politica');
                var categoria_entretenimento = document.querySelector('#categoria_entretenimento');
                var categoria_esporte = document.querySelector('#categoria_esporte');
                var categoria_tecnologia = document.querySelector('#categoria_tecnologia');
                var categoria_saude = document.querySelector('#categoria_saude');
                var categoria_viagem = document.querySelector('#categoria_viagem');
                var categoria_educacao = document.querySelector('#categoria_educacao');
                var categoria_carros = document.querySelector('#categoria_carros');

                var array = Object.keys(json).map(i => json[Number(i)]);
                for (let i = 0; i < Object.keys(array).length; i++) {

                    if (array[i]['categoria'] == 1) {
                        if (categoria_economia.getElementsByTagName('li').length < 4) {
                            var li = document.createElement('li');
                            li.classList.add('list-group-item');
                            li.textContent = array[i]['titulo'];
                            categoria_economia.appendChild(li);
                        }
                    }

                    if (array[i]['categoria'] == 2) {
                        if (categoria_politica.getElementsByTagName('li').length < 4) {
                            var li = document.createElement('li');
                            li.classList.add('list-group-item');
                            li.textContent = array[i]['titulo'];
                            categoria_politica.appendChild(li);
                        }
                    }

                    if (array[i]['categoria'] == 3) {
                        if (categoria_entretenimento.getElementsByTagName('li').length < 4) {
                            var li = document.createElement('li');
                            li.classList.add('list-group-item');
                            li.textContent = array[i]['titulo'];
                            categoria_entretenimento.appendChild(li);
                        }
                    }

                    if (array[i]['categoria'] == 4) {
                        if (categoria_esporte.getElementsByTagName('li').length < 4) {
                            var li = document.createElement('li');
                            li.classList.add('list-group-item');
                            li.textContent = array[i]['titulo'];
                            categoria_esporte.appendChild(li);
                        }
                    }

                    if (array[i]['categoria'] == 5) {
                        if (categoria_tecnologia.getElementsByTagName('li').length < 4) {
                            var li = document.createElement('li');
                            li.classList.add('list-group-item');
                            li.textContent = array[i]['titulo'];
                            categoria_tecnologia.appendChild(li);
                        }
                    }

                    if (array[i]['categoria'] == 6) {
                        if (categoria_saude.getElementsByTagName('li').length < 4) {
                            var li = document.createElement('li');
                            li.classList.add('list-group-item');
                            li.textContent = array[i]['titulo'];
                            categoria_saude.appendChild(li);
                        }
                    }

                    if (array[i]['categoria'] == 7) {
                        if (categoria_viagem.getElementsByTagName('li').length < 4) {
                            var li = document.createElement('li');
                            li.classList.add('list-group-item');
                            li.textContent = array[i]['titulo'];
                            categoria_viagem.appendChild(li);
                        }
                    }

                    if (array[i]['categoria'] == 8) {
                        if (categoria_educacao.getElementsByTagName('li').length < 4) {
                            var li = document.createElement('li');
                            li.classList.add('list-group-item');
                            li.textContent = array[i]['titulo'];
                            categoria_educacao.appendChild(li);
                        }
                    }

                    if (array[i]['categoria'] == 9) {
                        if (categoria_carros.getElementsByTagName('li').length < 4) {
                            var li = document.createElement('li');
                            li.classList.add('list-group-item');
                            li.textContent = array[i]['titulo'];
                            categoria_carros.appendChild(li);
                        }
                    }
                }
            });
        })
});