/**
 * Created by LABORATORIA 0017le on 9/06/2017.
 */

'use strict';

const empiezaJuego =(coder,mensaje,update)=>{
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
    const row           = $('<div class="row hide"></div>');
    const divImg        = $('<div class="col-xs-6"></div>');
    const img           = $('<img class="img-responsive">');
    const rowForm       = $('<div class="col-xs-6 formulario"></div>');
    const form          = $('<form></form>');
    const div           = $('<div class="form-group"></div>');
    const label         = $('<label>Ingresa su nombre:</label>');
    const input         = $('<input type="text" class="form-control" id="nombre-coder" placeholder="Nombre">');
    const button        = $('<button type="submit" class="btn btn-primary">Comprobar</button>');
    const mensajeResult = $('<p></p>');

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
        state.selectedCoder=coder;

        $(".hide").removeClass("hide");

        mostrarImagen(selector,input.val(),state.coders,img,update);
    })

    button.on("click",(e)=>{

        e.preventDefault();

        const mensaje=muestraPuntaje(input.val(),state.coders,selector,img,update);

        mensajeResult.append(mensaje);

    })

    return container;
}

const mostrarImagen=(valorSelect,inputVal,coder,img,update)=> {

    const array = coder[Math.floor(Math.random() * coder.length)];
    console.log(array);

    if (valorSelect === array.sede) {

        img.attr("src", array.image);

    }
    state.coders=array;

}

const muestraPuntaje = (inputVal,coder,selector,img,update)=>{
    let puntaje = 0;
    let contador = 0;
    let mensaje = "";
console.log(coder);
    if(inputVal.toLowerCase()===coder.name.toLowerCase()){

          puntaje++;

          $(".puntaje").empty().append(puntaje);
           mensaje= "Excelente";

        mostrarImagen(selector,inputVal,state.coders,img,update);
           return mensaje;

        }else {

            contador++;
            mensaje= "Sigue intentando";

            if (contador == 5) {

                puntaje--;

                $(".puntaje").empty().append(puntaje);

                return mensaje;
            }
        }
      // coder.forEach((element,i)=>{
           //const i = Math.floor(Math.random()*40);

    //})

      //console.log(img);
        //return img;
}

