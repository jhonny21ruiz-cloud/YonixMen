// SLIDER DE IMAGENES UNA POR UNA CADA 2 SEGUNDOS

let imagen = document.getElementById("imagenCambio");


let imagenes = [

    "img/YONIX.png",

    "https://blog.logomyway.com/wp-content/uploads/2021/09/hot-wheels-logo.png",

    "img/MATCHBOX.png"

];


let posicion = 0;



if(imagen){


    setInterval(function(){


        // desaparecer imagen

        imagen.style.opacity = "0";



        setTimeout(function(){


            posicion++;


            if(posicion >= imagenes.length){

                posicion = 0;

            }



            imagen.src = imagenes[posicion];



            // aparecer imagen

            imagen.style.opacity = "1";



        },400);



    },2000);


}