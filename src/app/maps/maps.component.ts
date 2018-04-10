import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import {DataService} from '../services/data.service';
import {IpinfoService} from '../services/ipinfo.service';

declare var L: any;

const defaultCoords: number[] = [-1.2765, 36.7753];
const defaultZoom = 13;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  map: any;

  constructor(private dataService: DataService, private ipInfoService: IpinfoService, private mapService: MapService) { }

  ngOnInit() {
    this.map  = L.map('map').setView(defaultCoords, defaultZoom);
    this.dataService.currentMessage.subscribe(ip => {
      this.ipInfoService.getIPInfo(ip).subscribe(data => {
        const loc = data.loc.split(',');
        this.mapService.renderMap(this.map, [Number(loc[0]), Number(loc[1])]);
      }, err => {
        console.log(err);
      });
    });
  }

}
