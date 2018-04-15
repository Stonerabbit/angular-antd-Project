import { Component, OnInit } from '@angular/core';
import { MyhttpService } from '../../../services/myhttp.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  public _displayData = [];
  public thatId;
  public movieContent: any = {};
  public moviename;
  public movieImage;
  public moviepoint;
  public movierole;
  public moviegenres;
  public moviehref;
  constructor(private myhttp: MyhttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.myhttp.getRequestContact().subscribe(res => {
      this._displayData = JSON.parse(res['_body'])['subjects'];
      this.route.params.subscribe(data => this.thatId = data.id);
      this.movieContent = this._displayData[this.thatId];
      this.moviename = this.movieContent.title;
      this.movieImage = this.movieContent.images.large;
      this.moviepoint = this.movieContent.rating.average;
      this.movierole = this.movieContent.directors[0]['name'];
      this.moviegenres = this.movieContent.genres;
      this.moviehref = this.movieContent.alt;
      console.log(this.movieContent);
    }, function (err) {
      console.log('请求错误');
    });
  }

}
