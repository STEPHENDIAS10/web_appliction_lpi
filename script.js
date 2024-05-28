document.getElementById("changeColorBtn").addEventListener("click", function() {
    var baseColor = ['#00008B', '#0000CD', '#4169E1', '#6495ED', '#87CEEB']; // Shades of blue
    var darkBlue = ['#00008B', '#000080', '#000066', '#000055', '#000044']; // Shades of dark blue

    var squares = document.querySelectorAll('.hero, .about, .social-media, button');
    squares.forEach(function(square) {
        var randomBaseIndex = Math.floor(Math.random() * baseColor.length);
        var randomDarkIndex = Math.floor(Math.random() * darkBlue.length);
        var randomColor = Math.random() < 0.5 ? baseColor[randomBaseIndex] : darkBlue[randomDarkIndex];
        square.style.backgroundColor = randomColor;
    });
});
