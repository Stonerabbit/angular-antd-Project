import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyhttpService {

  constructor(private httpService: Http) { }
  getRequestContact() {
    return this.httpService.get('assets/data/response.json');
  }
}
