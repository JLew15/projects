$(`.project`).each((z, a) => {
    a.parentNode.append($(`<a></a>`).attr(`href`, `${a.id}/index.html`)
    //.append($(`<div></div>`).html(($.ajax({url: `${window.location.href}/${a.id}/index.html`, type: "POST", crossDomain: true,}).val())))
    .append($(`<div></div>`).addClass(`project-link`).attr(`id`, `${a.id}`).text(`${a.id}`))
    [0]);
    a.remove();
    //$('#div1').html($('#txt1').val());
});