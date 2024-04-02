import Album from './album.js';
import Disco from './disco.js';

const cancionesAmorProhibido = new Album("Amor Prohibido", "Selena Quintanilla");
const discoSelena = new Disco("Amor Prohibido", "Selena Quintanilla", cancionesAmorProhibido);

console.log(discoSelena.getAlbum().getNombre());    

