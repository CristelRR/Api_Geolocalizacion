import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//COMPATIBILIDAD CON LOS NAVEGADORES
if(!navigator.geolocation){
  alert('El navegador no soporta la geolocalización')
  throw new Error ('El navegador no soporta la geolocalización');
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
