//Metodos de propiedad toman parametros y argumentos
const reproductor ={
    reproducir : function (id){
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function(){
        console.log('pausando....');
    },
    borrar:  function(id){
        console.log(`Borrando cancion ${id}`);
    },
    crearPlaylist : function(nombre){
        console.log(`Creando el nombre ${nombre}`);
    },
    reproducirPlaylist:function(nombre){
        console.log(`Reproduciendo la playlisy ${nombre}`)
    }
}



reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('heavy metal');
reproductor.crearPlaylist('metal');
reproductor.reproducirPlaylist('Heavy metal');


