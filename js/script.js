document.addEventListener('DOMContentLoaded', function () {
    fetch("../data.json")
        .then(function (response) {
            response.json().then(function(json) {

                //Economia
                var categoria_economia = document.querySelector('#categoria_economia');
                var array = Object.keys(json).map(i => json[Number(i)]);
                for (let i = 0; i < Object.keys(array).length; i++) {
                    if (array[i]['categoria'] == 1) {
                        var li = document.createElement('li');
                        li.classList.add('list-group-item');
                        li.textContent = array[i]['titulo'];
                        categoria_economia.appendChild(li);
                    }
                }

                //Política
                var categoria_politica = document.querySelector('#categoria_politica');
                var array = Object.keys(json).map(i => json[Number(i)]);
                for (let i = 0; i < Object.keys(array).length; i++) {
                    if (array[i]['categoria'] == 2) {
                        var li = document.createElement('li');
                        li.classList.add('list-group-item');
                        li.textContent = array[i]['titulo'];
                        categoria_politica.appendChild(li);
                    }
                }
                //Entretenimento
                var categoria_entretenimento = document.querySelector('#categoria_entretenimento');
                var array = Object.keys(json).map(i => json[Number(i)]);
                for (let i = 0; i < Object.keys(array).length; i++) {
                    if (array[i]['categoria'] == 3) {
                        var li = document.createElement('li');
                        li.classList.add('list-group-item');
                        li.textContent = array[i]['titulo'];
                        categoria_entretenimento.appendChild(li);
                    }
                }
                //Esporte
                var categoria_esporte = document.querySelector('#categoria_esporte');
                var array = Object.keys(json).map(i => json[Number(i)]);
                for (let i = 0; i < Object.keys(array).length; i++) {
                    if (array[i]['categoria'] == 4) {
                        var li = document.createElement('li');
                        li.classList.add('list-group-item');
                        li.textContent = array[i]['titulo'];
                        categoria_esporte.appendChild(li);
                    }
                }
                //Tecnologia
                var categoria_tecnologia = document.querySelector('#categoria_tecnologia');
                var array = Object.keys(json).map(i => json[Number(i)]);
                for (let i = 0; i < Object.keys(array).length; i++) {
                    if (array[i]['categoria'] == 5) {
                        var li = document.createElement('li');
                        li.classList.add('list-group-item');
                        li.textContent = array[i]['titulo'];
                        categoria_tecnologia.appendChild(li);
                    }
                }
                //Saúde
                var categoria_saude = document.querySelector('#categoria_saude');
                var array = Object.keys(json).map(i => json[Number(i)]);
                for (let i = 0; i < Object.keys(array).length; i++) {
                    if (array[i]['categoria'] == 6) {
                        var li = document.createElement('li');
                        li.classList.add('list-group-item');
                        li.textContent = array[i]['titulo'];
                        categoria_saude.appendChild(li);
                    }
                }
                //Viagem e Turismo
                var categoria_viagem = document.querySelector('#categoria_viagem');
                var array = Object.keys(json).map(i => json[Number(i)]);
                for (let i = 0; i < Object.keys(array).length; i++) {
                    if (array[i]['categoria'] == 7) {
                        var li = document.createElement('li');
                        li.classList.add('list-group-item');
                        li.textContent = array[i]['titulo'];
                        categoria_viagem.appendChild(li);
                    }
                }
                //Educação
                var categoria_educacao = document.querySelector('#categoria_educacao');
                var array = Object.keys(json).map(i => json[Number(i)]);
                for (let i = 0; i < Object.keys(array).length; i++) {
                    if (array[i]['categoria'] == 8) {
                        var li = document.createElement('li');
                        li.classList.add('list-group-item');
                        li.textContent = array[i]['titulo'];
                        categoria_educacao.appendChild(li);
                    }
                }
                //Carros
                var categoria_carros = document.querySelector('#categoria_carros');
                var array = Object.keys(json).map(i => json[Number(i)]);
                for (let i = 0; i < Object.keys(array).length; i++) {
                    if (array[i]['categoria'] == 9) {
                        var li = document.createElement('li');
                        li.classList.add('list-group-item');
                        li.textContent = array[i]['titulo'];
                        categoria_carros.appendChild(li);
                    }
                }
            });
        })
});