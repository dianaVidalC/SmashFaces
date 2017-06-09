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
    const div      = $('<div class="col-xs-12 seleccionar"></div>');
    const sede     = $('<strong>Elige tu sede: </strong>');
    const select   = $('<select class="elige"></select>');
    const eligeOption = $('<option></option>');
    const arequipaOption=$('<option>Arequipa</option>');
    const chileOption=$('<option>Chile</option>');
    const limaOption= $('<option>Lima</option>');
    const mexicoOption=$('<option>México</option>');
    const puntos= $('<div class="pull-right"><strong><span>Puntos: </span><span> 0 </span><span>puntos</span></strong></div>');

    row.append(title);
    row.append(parrafo);
    div.append(sede);
    select.append(eligeOption);
    select.append(arequipaOption);
    select.append(chileOption);
    select.append(limaOption);
    select.append(mexicoOption);
    div.append(select);
    div.append(puntos);
    row.append(div);
    container.append(row);
    header.append(container);

    return header;
}