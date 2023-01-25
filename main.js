const image = document.getElementById('image');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=YdtSlctFN1UBGmO9TJXFRqWjX6CY1MXK&s=cats', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        image.src = response.data.images.original.url;
    });

document.getElementById('newbtn').addEventListener('click', function() {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=YdtSlctFN1UBGmO9TJXFRqWjX6CY1MXK&s=cats', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        image.src = response.data.images.original.url;
    });
})