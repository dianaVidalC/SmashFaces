/**
 * Created by ERIKA on 8/06/2017.
 */

'use strict';

const Header = (update)=>{

    const header   = $('<header></header>');
    const container= $('<div class="container"></div>');
    const row      = $('<div class="row"></div>');
    const title    = $('<h2 class="col-xs-12"><strong>Smash Faces</strong></h2>');
    const parrafo  = $('<p class="col-xs-12">Bienvenidas al juego de Smash Faces, tu misión es poder identificar a todas tus compañeras de clase ingresando para ello sus nombre. Tienes 5 oportunidades antes de perder un punto y pasar a la siguiente.</p>');

    row.append(title);
    row.append(parrafo);
    container.append(row);
    header.append(container);


    return header;
}