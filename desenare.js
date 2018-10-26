document.getElementById("id_business_version").innerHTML= "Bussiness verion 2018.10.26.8"
document.getElementById("id_start").addEventListener("click", start);
document.getElementById("id_stop").addEventListener("click", stop);
var intervalId;
document.getElementById("id_start").disabled = false;
document.getElementById("id_stop").disabled = true;
//---------------------------------------------------------------------
 var alpha = {unghi:0};
function deseneaza_cerc(context, w, h, alpha)
{
    context.clearRect(0, 0, w, h);

    context.beginPath();
    context.arc(w / 2 + 100 * Math.cos(alpha.unghi * Math.PI / 180),
                h / 2 + 100 * Math.sin(alpha.unghi * Math.PI / 180), 
                50, 0, 2 * Math.PI);
    context.stroke();

    alpha.unghi++;
}

//----------------------------------------------------------------------
function start()
{
    var canvas = document.getElementById("id_canvas");
    var context = canvas.getContext('2d');

    document.getElementById("id_start").disabled = true;
    document.getElementById("id_stop").disabled = false;
 

    
   intervalId = setInterval(deseneaza_cerc, 10, context, canvas.width, canvas.height, alpha, 100);
}

function stop(){
    clearInterval(intervalId);
    document.getElementById("id_start").disabled = false;
   document.getElementById("id_stop").disabled = true;
}
