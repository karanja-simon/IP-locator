import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  message: string;
  ip: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => {
      this.message = message;
    });
  }

  public searchByIp(): void {
    console.log('IP: ', this.ip);
    this.dataService.changeMessage(this.ip);
  }

}
