window.addEventListener("load",function(){
    var spans = this.document.getElementsByTagName("span");
    spans[0].style.top="0";
    spans[6].style.bottom="0";

    spans[3].style.right="0";
    spans[9].style.left="0";

    spans[1].style.top="5%";
    spans[1].style.right="25%";
    spans[5].style.right="25%";
    spans[5].style.bottom="5%";

    spans[2].style.top="20%";
    spans[2].style.right="8%";
    spans[4].style.right="8%";
    spans[4].style.bottom="20%";

    spans[10].style.top="20%";
    spans[10].style.left="8%";
    spans[8].style.left="8%";
    spans[8].style.bottom="20%";

    spans[11].style.top="5%";
    spans[11].style.left="25%";
    spans[7].style.left="25%";
    spans[7].style.bottom="5%";
});
function mostrarHora() {
    var hoy = new Date();

    var hora = hoy.getHours();
    var minuto = hoy.getMinutes();
    var segundo = hoy.getSeconds();

    var seg = (segundo * 6) - 90;
    var minu = (minuto * 6) - 90;
    if (hora == 1 || hora == 13) {
        var hor = 300 + (minuto * .5);
        $("#segundo").css("transform", "rotate(" + seg + "deg)");
        $("#hora").css("transform", "rotate(" + hor + "deg)");
        $("#min").css("transform", "rotate(" + minu + "deg)")
    }else if(hora == 2 || hora == 14){
        var hor = 330 + (minuto * .5);
        $("#segundo").css("transform", "rotate(" + seg + "deg)");
        $("#hora").css("transform", "rotate(" + hor + "deg)");
        $("#min").css("transform", "rotate(" + minu + "deg)")
    }else if(hora == 3 || hora == 15){
        var hor = 0 + (minuto * .5);
        $("#segundo").css("transform", "rotate(" + seg + "deg)");
        $("#hora").css("transform", "rotate(" + hor + "deg)");
        $("#min").css("transform", "rotate(" + minu + "deg)")
    }else if(hora == 4 || hora == 16){
        var hor = 30 + (minuto * .5);
        $("#segundo").css("transform", "rotate(" + seg + "deg)");
        $("#hora").css("transform", "rotate(" + hor + "deg)");
        $("#min").css("transform", "rotate(" + minu + "deg)")
    }else if(hora == 5 || hora == 17){
        var hor = 60 + (minuto * .5);
        $("#segundo").css("transform", "rotate(" + seg + "deg)");
        $("#hora").css("transform", "rotate(" + hor + "deg)");
        $("#min").css("transform", "rotate(" + minu + "deg)")
    }else if(hora == 6 || hora == 18){
        var hor = 90 + (minuto * .5);
        $("#segundo").css("transform", "rotate(" + seg + "deg)");
        $("#hora").css("transform", "rotate(" + hor + "deg)");
        $("#min").css("transform", "rotate(" + minu + "deg)")
    }else if(hora == 7 || hora == 19){
        var hor = 120 + (minuto * .5);
        $("#segundo").css("transform", "rotate(" + seg + "deg)");
        $("#hora").css("transform", "rotate(" + hor + "deg)");
        $("#min").css("transform", "rotate(" + minu + "deg)")
    }else if(hora == 8 || hora == 20){
        var hor = 150 + (minuto * .5);
        $("#segundo").css("transform", "rotate(" + seg + "deg)");
        $("#hora").css("transform", "rotate(" + hor + "deg)");
        $("#min").css("transform", "rotate(" + minu + "deg)")
    }else if(hora == 9 || hora == 21){
        var hor = 180 + (minuto * .5);
        $("#segundo").css("transform", "rotate(" + seg + "deg)");
        $("#hora").css("transform", "rotate(" + hor + "deg)");
        $("#min").css("transform", "rotate(" + minu + "deg)")
    }else if(hora == 10 || hora == 22){
        var hor = 210 + (minuto * .5);
        $("#segundo").css("transform", "rotate(" + seg + "deg)");
        $("#hora").css("transform", "rotate(" + hor + "deg)");
        $("#min").css("transform", "rotate(" + minu + "deg)")
    }else if(hora == 11 || hora == 23){
        var hor = 240 + (minuto * .5);
        $("#segundo").css("transform", "rotate(" + seg + "deg)");
        $("#hora").css("transform", "rotate(" + hor + "deg)");
        $("#min").css("transform", "rotate(" + minu + "deg)")
    }else if(hora == 12 || hora == 24){
        var hor = 270 + (minuto * .5);
        $("#segundo").css("transform", "rotate(" + seg + "deg)");
        $("#hora").css("transform", "rotate(" + hor + "deg)");
        $("#min").css("transform", "rotate(" + minu + "deg)")
    }
}
setInterval(mostrarHora, 1000);
    

