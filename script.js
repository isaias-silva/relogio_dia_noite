function relgio() {
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var sec = data.getSeconds();
    var ho = document.getElementById("hours");
    var sa = document.getElementById("saudacao");
    var bodyy = document.body.style;
    var bor = document.getElementById("conteudo");
    var a = "";
    var b = "";
    var c = "";

    if (hora >= 07) {
        ho.style.color = "orange";
        sa.style.color = "orange";
        bor.style.borderColor = "orange";
        sa.innerHTML = "bom dia";
        bodyy.background = "rgb(204, 99, 0)"
    }

    if (hora >= 19) {
        ho.style.color = " purple";
        sa.style.color = " purple";
        bor.style.borderColor = " purple";
        sa.innerHTML = "boa noite";
        bodyy.background = "black"
    }

    if (hora < 10) {
        a = 0;
    }
    if (min < 10) {
        b = 0;
    }
    if (sec < 10) {
        c = 0;
    }

    ho.innerHTML = `${a}${hora}:${b}${min}:${c}${sec}`;
}

setInterval(relgio, 1000);