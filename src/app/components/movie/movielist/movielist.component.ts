import { Component, OnInit } from '@angular/core';
import { Http, Jsonp, Headers } from '@angular/http';
import { MyhttpService } from '../../../services/myhttp.service';
import { ArrayType } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  editRow = null;
  _displayData = [];


  constructor(private http: Http, private jsonp: Jsonp, private myhttp: MyhttpService) { }
  ngOnInit() {
    this.myhttp.getRequestContact().subscribe(res => {
      this._displayData = JSON.parse(res['_body'])['subjects'];
      for (let i = 0; i < this._displayData.length; i++) {
        this._displayData[i]['aid'] = i;

      }
      console.log(this._displayData);
    }, function (err) {
      console.log('请求错误');
    });
  }
}
