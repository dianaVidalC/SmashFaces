/**
 * Created by LABORATORIA 0017le on 9/06/2017.
 */

'use strict';

const empiezaJuego =(coder,update)=>{
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
    const rowForm       = $('<div class="col-xs-6"></div>');
    const form          = $('<form></form>');
    const div           = $('<div class="form-group"></div>');
    const label         = $('<label>Ingresa su nombre:</label>');
    const input         = $('<input type="text" class="form-control" id="nombre-coder" placeholder="Nombre">');
    const button        = $('<button type="submit" class="btn btn-primary">Comprobar</button>');

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
    form.append(div);
    rowForm.append(form);
    divImg.append(img);
    row.append(divImg);
    row.append(rowForm);
    container.append(rowSelect);
    container.append(row);

    select.on("change",_=>{
        state.selectedCoder=coder;
        $(".hide").removeClass("hide");
        mostrarImagen(select.val(),input.val(),state.coders,img,update);
        //filtrado(select.val(),state.coders,img,update);
        //console.log(select.val());
    })

    button.on("click",(e)=>{
        e.preventDefault();
        mostrarImagen(select.val(),input.val(),state.coders,img,update);
    })
    return container;
}

const mostrarImagen=(valorSelect,inputVal,coder,img,update)=>{
    let contador=0;

     coder.forEach((e)=> {
        if (valorSelect === e.sede) {
            img.attr("src",e.image);

            return false;
        }
        if(inputVal.toLowerCase()===e.name.toLowerCase()){
            contador++;
            $(".puntaje").empty().append(contador);
            return false;
        }else{
            contador--;
            $(".puntaje").empty().append(contador);
            return false;
        }
    })
      // coder.forEach((element,i)=>{
           //const i = Math.floor(Math.random()*40);

    //})

      //console.log(img);
        //return img;
}

