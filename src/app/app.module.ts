import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HomeComponent } from './components/home/home.component';
import { MovielistComponent } from './components/movie/movielist/movielist.component';
import { MoviehotComponent } from './components/movie/moviehot/moviehot.component';
import { MoviehomeComponent } from './components/movie/moviehome/moviehome.component';
import { NovelhomeComponent } from './components/novel/novelhome/novelhome.component';
import { NovellistComponent } from './components/novel/novellist/novellist.component';
import { NovelhotComponent } from './components/novel/novelhot/novelhot.component';
import { MyhttpService } from './services/myhttp.service';
import { MoviedetailsComponent } from './components/movie/moviedetails/moviedetails.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovielistComponent,
    MoviehotComponent,
    MoviehomeComponent,
    NovelhomeComponent,
    NovellistComponent,
    NovelhotComponent,
    MoviedetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [
    MyhttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
