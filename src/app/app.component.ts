import {Component, OnInit} from '@angular/core';
import {PodaciPrikazVM, PodaciRow} from "./PodaciPrikaz-VM";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MyConfig} from "./MyConfig";
import {PagingInfo} from "../helper/mypaging/pagingInfo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularRS1';

  constructor() {
  }

  ngOnInit() {
  }

  Dodaj() {

  }
}
