/**
 * Created by ERIKA on 8/06/2017.
 */
'use strict';

const render = (root)=>{
    root.empty();

    const wrapper =$('<div class="wrapper"></div>');

    wrapper.append(Header(_=>{render(update)}));

    root.append(wrapper);
}
$(_=>{
    const root= $(".root");
    render(root);
})