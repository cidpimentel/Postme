const CACHE_NAME='CACHE-V1';
const   CACHE_FILES=[

    "src/js/app.js",
    "src/css/app.css",
    "/",
    "src/images/icons/icon-144x144.png",
    "/index.html",

];

const CACHE_NAME_INMUTABLE='inmutable-v1';
const CACHE_FILES_INMUTABLE=[
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://code.getmdl.io/1.3.0/material.teal-green.min.css",
    "https://code.getmdl.io/1.3.0/material.min.js",
    "https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2",
    "https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
    "https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",

];


//cuando se instala
self.addEventListener('install', (event)=>{
    //agregar al cache nuestros archivos
    const guardandoCache=caches.open(CACHE_NAME_CORE)
    .then(cache => cache.addAll(CACHE_FILES_CORE);
    .catch
    
    catch

    self.skipWaiting();
    event.waitUntil(guardandoCache);
}
    /*
    
const ins=new Promise((resolve,reject)=>{
         try{
            setTimeout(()=>{
                const adicionandoMisArchivos='';
                const adocionarVariablesDinamicas='';
                console.log('Service worker se instalo correctamente');
             resolve();
            }, 1000);
            self.skipWaiting();
         }catch(error){
            reject(error.message);
         }

    })
    event.waitUntil(ins);*/
});


//Cuando el sw toma el control de la aplicación

self.addEventListener('activate', event =>{
    // borrar la cache vieja

    console.log('sw: Activo y listo para controlar la app');

});

// escuchar peticiones http
self.addEventListener('fetch', event =>{
 //event.respondWith(fetch(event.request))
/* if(event.request.url.includes('main.jpg')){
     event.respondWith(fetch('img/Secuestro.jpg'));
} else{
     event.respondWith(fetch(event.request));
}*/
    //primera estraegia 
    const soloCache=caches.match(event.request);
    event.responWith(soloCache);
});

//cuando recueramos la conexion

self.addEventListener('sync', event=>{
    console.log('tenemos conexion');
    console.log(event);
    console.log(event.tag);
});




//Manejar las push notifications
self.addEventListener('push', event =>{
    console.log('Notificación recibida');


});

