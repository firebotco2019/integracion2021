//obtener el nodo del canvas y el contexto de dibujo
const canvas = document.getElementById("CanvasMatrix");
const ctx = canvas.getContext('2d');

//establecer el ancho y altura del canvas
const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;

//dibuja un rectángulo negro de ancho y alto igual que el del canvas
ctx.fillStyle = '#000';
ctx.fillRect (0, 0, w, h);

const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

function matrix () {
    //dibujar un rectángulo negro semitransparente en la parte superior del dibujo anterior
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h,);

    //establecer el color en verde y la fuente en monospace de 15 puntos en el contexto del dibujo
    ctx.fillStyle = '#0f0';
    ctx.font = '20pt monospace';

    //para cada columna ponga un carácter aleatorio al final
    ypos.forEach((y, ind) => {

        //generar un caractér aleatorio
        const text = String.fromCharCode(Math.random() * 122);
        
        // X coordenada de la columna, la coordenada Y ya está dada
        const x = ind * 20;
        //renderizar el carácter en (x, y)
        ctx.fillText(text, x, y);

        //restablece aleatoriamente el final de la columna si tiene al menos 100 puntos de altura
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        //de lo contrario, simplemente mueva la coordenada y de la columna 20 puntos hacia abajo
        else ypos[ind] = y + 20;
    });
}

//renderizar la animación a 20 fps
setInterval(matrix, 50);