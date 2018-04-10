import {Injectable} from '@angular/core';
import {IpinfoInterface} from '../interfaces/ipinfo.interface';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class IpinfoService {

  constructor(private http: HttpClient) {
  }

  public getIPInfo(ip?: string): any {
    let apiUrl = `https://ipinfo.io/${ip}/json`;
    if (ip === '0.0.0.0') {
      apiUrl = `https://ipinfo.io/json`;
    }
    return  this.http.get<IpinfoInterface>(apiUrl);
  }

}
