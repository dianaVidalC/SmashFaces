/**
 * Created by ERIKA on 8/06/2017.
 */
'use strict';

const render = (root)=>{
    root.empty();

    const wrapper =$('<div class="wrapper"></div>');

    wrapper.append(Header(_=>{render(root)}));
    wrapper.append(empiezaJuego(_=>{render(root)}));

    root.append(wrapper);
}

const state = {
    coders: null,
    selectedCoder: null
};

$( _ => {

    getJSON('coders.json', (err, json) => {

        if (err) { return alert(err.message);}

        state.coders = json;

        const root = $('.root');
        render(root);
    });

});
