const fs = require('fs');

fs.writeFile("C:\\Users\\ANDERSON\\zoomdev\\api-news-express\\temp\\cache.txt", "Hello, txt!", function(erro) {

    if(erro) {
        throw erro;
    }

    console.log("Arquivo salvo");
}); 