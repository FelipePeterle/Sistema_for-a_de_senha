$(function(){
    $('#senha').bind('keyup', function(){

        let txt = $(this).val();
        let forca = 0;
        let aceita = ''; 

        if (txt.length > 6) {
            forca += 25;
        }

        let regLetras = new RegExp(/[a-z]/i);
        if (regLetras.test(txt)) {
            forca += 25;
        }

        let regNumeros = new RegExp(/[0-9]/i);
        if (regNumeros.test(txt)) {
            forca += 25;
        }

        let caracterespecial = new RegExp(/[^a-z0-9]/i);
        if (caracterespecial.test(txt)) {
            forca += 25;
        }

        if (forca >= 75) {
            aceita = 'ACEITA!';
        } else {
            aceita = 'RECUSADA!';
        }

        $('#forca').html('Força da senha: ' + forca + ' (' + txt + ') - ' + aceita);
    });
});
