document.getElementById('exercice-btn').addEventListener('click', function() {
    document.getElementById('iframe-container').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('download-btn').addEventListener('click', function() {
    document.getElementById('iframe-container').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('iframe-container').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('iframe-container').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});