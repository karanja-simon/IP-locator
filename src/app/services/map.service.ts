import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

const API_KEY = environment.MAPBOX_API_KEY;
declare var L: any;


@Injectable()
export class MapService {

  marker: any;
  tileLayer: any;

  constructor() {
  }


  public renderMap(map: any, latlon: number[]): void {

    map.maxZoom = 100;

    if (this.marker != null) {
      map.removeLayer(this.marker);
    }

    this.tileLayer = L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.light',
      accessToken: API_KEY
    }).addTo(map);

    const icon = L.icon({
      iconUrl: './assets/images/leaflet/marker-icon.png',
      shadowUrl: './assets/images/leaflet/marker-shadow.png',
    });

    map.panTo(new L.LatLng(latlon[0], latlon[1]));

    this.marker = L.marker(latlon, {
      icon: icon,
      bounceOnAdd: true,
      bounceOnAddOptions: {duration: 500, height: 100}
    }).addTo(map);
  }
}
