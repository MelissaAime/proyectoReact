export const Hoy = new Date().getDay();

const dias = [
    'domingos',     //0
    'lunes',        //1
    'martes',       //2
    'miércoles',    //3
    'jueves',       //4
    'viernes',      //5
    'sábados',      //6
]

const cuando = 4 //dia de la oferta

export const nombreDia= dias[cuando]

export const conDescuento = Hoy === cuando; 

export const minEnvio = 8000;