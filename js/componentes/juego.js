/**
 * Created by LABORATORIA 0017le on 9/06/2017.
 */

'use strict';

const empiezaJuego =()=>{
    const container = $('<div class="container"></div>');
    const row       = $('<div class="row"></div>');
    const img       = $('<img class="col-sx-4 img-responsive" src="img/gatito.jpg">');
    const rowForm   = $('<div class="col-sx-4"></div>');
    const form      = $('<form></form>');
    const div       = $('<div class="form-group"></div>');
    const label     = $('<label>Ingresa su nombre:</label>');
    const input     = $('<input type="text" class="form-control" id="nombre-coder" placeholder="Nombre">');
    const button    = $('<button type="submit" class="btn btn-primary">Comprobar</button>');

    div.append(label);
    div.append(input);
    div.append(button);
    form.append(div);
    rowForm.append(form);
    row.append(img);
    row.append(rowForm);
    container.append(row);

    return container;
}