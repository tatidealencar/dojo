document.addEventListener('DOMContentLoaded', function () {
    fetch("../data.json")
        .then(function (response) {
            response.json().then(function(json) {
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
            });
        })
});