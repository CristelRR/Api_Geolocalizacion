import { Component, OnInit } from '@angular/core';
import { LugaresService } from 'src/app/servicios/lugares.service';
import { icon, Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent {
  constructor(private lugaresService:LugaresService){}

  geo:any;
  map:any;
  
  ngOnInit(){
    setTimeout(() =>{
      this.geo = this.lugaresService.useLocation;
    }, 2000 //SE HACE UNA PAUSA PARA QUE SE PUEDA TRAER LA GEOLOCALIZACION
    ); 
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.map = new Map('map').setView(this.geo, 13);

      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
      
    },2000);
  }

  ubicar(){
    setTimeout(() => {
      /**
       * PARA CAMBIAR EL ICONO
       * const myIcon = icon({
       * iconUrl:'/assets/',
       * iconSize:[25,41]
       * }),
       */

      //marker(this.geo, {icon:myIcon}).addTo(this.map).bindPopup("<strong>Esta es mi ubicación</strong>").openPopup(); 
      marker(this.geo).addTo(this.map).bindPopup("<strong>Esta es mi ubicación</strong>").openPopup(); 
    })
  }

  recargar(){
    location.reload();
  }
}
