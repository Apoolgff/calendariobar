document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('gridContainer');

    // Objeto con números y textos correspondientes
    const numeroTexto = {
        1: "BUENOOO BABARRR hoy se arranco el camino, a darlo todo",
        2: "llegamos al 2do dia babarr, que no decaiga que ya falta menos, te amo!",
        3: "NO HAY 2 SIN 3 babarrrr a seguir metiendole con tuti!!",
        4: "OPPAAA ya el 4to dia paparrrrrr, dale que vaaaa bubiii",
        5: "ojooo 5to dia babubi, esto es una cosita de locos, a seguir",
        6: "pero mirala a la babar llegando al 6to dia, ya queda menos bubs vamo vamo vamo",
        7: "VAMOS BABUBI TODAVIAAAA, VAMOS CON LA FUERZA DE UN CICLOOOON!!",
        8: "8vo dia porque es la babar babar que no se come ni unaa, vamo arribaaa!",
        9: "pero si es la camelsprubi llegando al noveno dia, muy bien bubi",
        10: "10 como el puntaje que le doy a la sensualidad de la babar, 1/3 completado!",
        11: "bueno bubetaaa ya estamos por llegar a la mitad, a no aflojar babarrr",
        12: "otro dia mas que pasa y la babar cada dia mas cerca de su objetivo, vamos bubi",
        13: "llegamos al dia trece, cuando veo a la babar pepe se estremece",
        14: "dos semanitas completadas babarrrrr, muy biennnn, ya queda menos para el objetivo",
        15: "BUENO BABAR LLEGAMOS A LA MITAD, te mereces unos besiros de premio",
        16: "vamos bubi que se nos acaban las ideas para escribir aca, vamoosss babarrr",
        17: "otro dia mas superado buba, quien lo diria, a no aflojar que queda poquito, masajiro!!",
        18: "dia 18 a nadie le sorprende, yo la miro a la babar y pepe se me prende",
        19: "superaste otro dia babuterrungui, quedan ya muy poquitos, no aflojar babar!!",
        20: "entramos ya a trancitar los ultimos 10 dias babubi, muy orgulloso de usted",
        21: "quien supero su dia numero 21? la babar? ziiiiiii, vamo arriba bubiii",
        22: "y todo el pueblo canto LA BABAR LA BABAR! vamos sensualibar que ya estamos ahi",
        23: "dia 23 babarrr, ya arrancamos con la ultima semanita, vamos con el ultimo esfuerzo",
        24: "hoy se arranca la ultima semana babar, a no aflojar y meterle meterle que ya falta nada",
        25: "llegamos al dia VEINTICIN...CO! estamos orgullosos de usted babar vamos con todo",
        26: "la bella y sensual babar llego al dia 26, con 4 dias mas terminamos babar dale dale dale",
        27: "bueno bubiiii comenzo la cuenta regresiva, 3 dias mas, solo 3 y cumplis el objetivo",
        28: "PAPAAAAAARRRRRR ya estamos en el dia 28 que emocionante, ni se te ocurra aflojar ahora!",
        29: "PENULTIMO DIA BABAAARRRRRR y la barra esta que arde, esperando para gritar dale campeona",
        30: "NO VALE HACER TRAMPA!"
        /*2: "llegamos al 2do dia babarr, que no decaiga que ya falta menos",
        3: "NO HAY 2 SIN 3 babarrrr a seguir metiendole con tuti!!",
        4: "OPPAAA ya el 4to dia paparrrrrr, dale que vaaaa bubiii",
        5: "ojooo 5to dia babubi, esto es una cosita de locos, a seguir",
        6: "pero mirala a la babar llegando al 6to dia, ya queda menos bubs vamo vamo vamo",
        7: "VAMOS BABUBI TODAVIAAAA, VAMOS CON LA FUERZA DE UN CICLOOOON!!",
        8: "8vo dia porque es la babar babar que no se come ni unaa, vamo arribaaa!",
        9: "pero si es la camelsprubi llegando al noveno dia, muy bien bubi",
        10: "10 como el puntaje que le doy a la sensualidad de la babar",
        11: "bueno bubetaaa ya estamos por llegar a la mitad, a no aflojar babarrr",
        12: "otro dia mas que pasa y la babar cada dia mas cerca de su objetivo, vamos bubi",
        13: "llegamos al dia trece, cuando veo a la babar pepe se estremece",
        14: "dos semanitas compeltadas babarrrrr, muy biennnn, ya queda menos para el objetivo",
        15: "BUENO BABAR LLEGAMOS A LA MITAD, te mereces unos besiros de premio",
        16: "vamos bubi que se nos acaban las ideas para escribir aca, vamoosss babarrr",
        17: "otro dia mas superado buba, quien lo diria, a no aflojar que queda poquito",
        18: "dia 18 a nadie le sorprende, yo la miro a la babar y pepe se me prende",
        19: "superaste otro dia babuterrungui, quedan ya muy poquitos, no aflojar babar!!",
        20: "entramos ya a trancitar los ultimos 10 dias babubi, muy orgulloso de usted",
        21: "quien supero su dia numero 21? la babar? ziiiiiii, vamo arriba bubiii",
        22: "y todo el pueblo canto LA BABAR LA BABAR! vamos sensualibar que ya estamos ahi",
        23: "dia 23 babarrr, ya arrancamos con la ultima semanita, vamos con el ultimo esfuerzo",
        24: "hoy se arranca la ultima semana babar, a no aflojar y meterle meterle que ya falta nada",
        25: "llegamos al dia VEINTICIN...CO! estamos orgullosos de usted babar vamos con todo",
        26: "la bella y sensual babar llego al dia 26, con 4 dias mas terminamos babar dale dale dale",
        27: "bueno bubiiii comenzo la cuenta regresiva, 3 dias mas, solo 3 y cumplis el objetivo",
        28: "PAPAAAAAARRRRRR ya estamos en el dia 28 que emocionante, ni se te ocurra aflojar ahora",
        29: "PENULTIMO DIA BABAAARRRRRR y la barra esta que arde, esperando para gritar dale campeona",
        30: "FELICITACIONES BABAR!! cumpliste tu objetivo, estoy muy orgulloso de vos, TE AMO!"*/
    };

     // Crear las celdas con número del 1 al 30
     for (let i = 1; i <= 30; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.textContent = i;

        // Añadir evento click para mostrar texto correspondiente
        gridItem.addEventListener('click', function() {
            showText(this, i);
        });

        gridContainer.appendChild(gridItem);
    }

    // Función para mostrar texto correspondiente en la celda
    function showText(element, numero) {
        const texto = numeroTexto[numero];
        element.textContent = texto;
        // Opcionalmente, puedes restaurar el número original después de un tiempo
        
    }
});