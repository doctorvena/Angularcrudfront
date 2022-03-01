import {Component, Input, OnInit} from '@angular/core';
import {PodaciRow} from "../../PodaciPrikaz-VM";
import {HttpClient} from "@angular/common/http";
import {MyConfig} from "../../MyConfig";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() addData:PodaciRow;

  lista= new PodaciRow();

  constructor(private http:HttpClient ) { }

  ngOnInit(): void {
  }
  SpremiPodatke(){
    this.addData=this.lista;
    this.Dodaj();
  }
  Dodaj() {
    this.http.post(MyConfig.adresaservera + "/AngularUser/Dodaj", this.addData, MyConfig.httpOpcije)
      .subscribe((result) => {
          alert("Uspjesno Dodano")
        }
      )

  }
}
