//Metodos de propiedad a ArrowFuctions
const reproductor ={
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () =>      console.log('pausando....'),
    borrar: id =>      console.log(`Borrando cancion ${id}`),
    crearPlaylist : nombre => console.log(`Creando el nombre ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlisy ${nombre}`),

    //Forma de agregar valores
    set nuevaCancion(cancion){ 
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    //Forma de obtener esos valaores
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'Enter Sadman';
reproductor.obtenerCancion;


reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('heavy metal');
reproductor.crearPlaylist('metal');
reproductor.reproducirPlaylist('Heavy metal');