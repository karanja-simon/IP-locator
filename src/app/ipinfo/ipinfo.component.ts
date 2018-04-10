import {Component, OnInit} from '@angular/core';
import { IpinfoService } from '../services/ipinfo.service';
import { IpinfoInterface } from '../interfaces/ipinfo.interface';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-ipinfo',
  templateUrl: './ipinfo.component.html',
  styleUrls: ['./ipinfo.component.css'],
})
export class IpinfoComponent implements OnInit {

  ipInfo: IpinfoInterface[];
  message: string;

  constructor(private dataService: DataService, private ipInfoService: IpinfoService) { }

  ngOnInit() {
   this.dataService.currentMessage.subscribe(ip => {
      this.message = ip;
        this.pullIpInfo(ip);
   });
  }


  private pullIpInfo(ip?: string): void {
    this.ipInfoService.getIPInfo(ip).subscribe(data => {
      console.log([data]);
      this.ipInfo = [data];
    }, err => {
      console.log(err);
    });
  }


}
