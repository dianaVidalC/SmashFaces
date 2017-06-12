/**
 * Created by LABORATORIA 0017le on 9/06/2017.
 */

'use strict';

const empiezaJuego =(update)=>{
    const container     = $('<div class="container"></div>');
    const rowSelect     = $('<div class="row"></div>');
    const divSelect     = $('<div class="col-xs-12 seleccionar"></div>');
    const sede          = $('<strong>Elige tu sede: </strong>');
    const select        = $('<select class="elige"></select>');
    const eligeOption   = $('<option></option>');
    const arequipaOption= $('<option>Arequipa</option>');
    const chileOption   = $('<option>Chile</option>');
    const limaOption    = $('<option>Lima</option>');
    const mexicoOption  = $('<option>México</option>');
    const puntos        = $('<div class="pull-right"><strong><span>Puntos: </span><span class="puntaje"> 0 </span><span>puntos</span></strong></div>');
    const row           = $('<div class="row imagen"></div>');
    const divImg        = $('<div class="col-xs-6"></div>');
    const img           = $('<img class="img">');
    const rowForm       = $('<div class="col-xs-6 formulario"></div>');
    const form          = $('<form></form>');
    const div           = $('<div class="form-group"></div>');
    const label         = $('<label>Ingresa su nombre:</label>');
    const input         = $('<input type="text" class="form-control" id="nombre-coder" placeholder="Nombre">');
    const button        = $('<button type="submit" class="btn color">Comprobar</button>');
    const mensajeResult = $('<p class="resultado"></p>');

    divSelect.append(sede);
    select.append(eligeOption);
    select.append(arequipaOption);
    select.append(chileOption);
    select.append(limaOption);
    select.append(mexicoOption);
    divSelect.append(select);
    divSelect.append(puntos);
    rowSelect.append(divSelect);
    div.append(label);
    div.append(input);
    div.append(button);
    div.append(mensajeResult);
    form.append(div);
    rowForm.append(form);
    divImg.append(img);
    row.append(divImg);
    row.append(rowForm);
    container.append(rowSelect);
    container.append(row);

    let selector;
    select.on("change",_=>{

        selector=$("select option:selected").text();

        const sede=state.coders.filter((e)=>{
           return e.sede==selector;
        });
        const array = sede[Math.floor(Math.random() * sede.length)];
        mostrarImagen(selector,array,img,update);
        state.coders =array;

        //mostrarImagen(selector,array,img,update);
        state.selectedSede=selector;
    })

    button.on("click",(e)=>{

        e.preventDefault();

        const mensaje=muestraPuntaje(input.val(),state.coders,selector,img,update);

        mensajeResult.append(mensaje);

        //mensajeResult.empty();

    })

    return container;
}

const mostrarImagen=(valorSelect,coder,img,update)=> {

        img.attr("src", coder.image);

}

const muestraPuntaje = (inputVal,coder,selector,img,update)=>{
    let puntaje = 0;
    let contador = 0;
    let mensaje = "";

    if(inputVal.toLowerCase()===coder.name.toLowerCase()){

          puntaje++;

          $(".puntaje").empty().append(puntaje);
          $(".resultado").empty();
           mensaje= "Excelente";

        setTimeout(mostrarImagen(selector,coder,img,update),2000);

        }else {

            contador++;
        $(".resultado").empty();
            mensaje= "Sigue intentando";

            if (contador == 5) {

                puntaje--;

                $(".puntaje").empty().append(puntaje);


            }
        }
    return mensaje;
      // coder.forEach((element,i)=>{
           //const i = Math.floor(Math.random()*40);

    //})

      //console.log(img);
        //return img;
}

