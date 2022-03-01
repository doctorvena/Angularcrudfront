import { Component, OnInit } from '@angular/core';
import {PodaciPrikazVM, PodaciRow} from "../PodaciPrikaz-VM";
import {MyConfig} from "../MyConfig";
import {PagingInfo} from "../../helper/mypaging/pagingInfo";
import {HttpClient} from "@angular/common/http";
import {FormBuilder,FormGroup} from "@angular/forms";
import {map} from "rxjs";

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  podaciPrikaz:PodaciPrikazVM= null;
  trazi:string='';
  public pagingInfo:PagingInfo;
  editData: PodaciRow;
  addData:PodaciRow;
  constructor(private http:HttpClient) {

  }



  ngOnInit(): void {
    this.preuzmiPodatke();
  }


  preuzmiPodatke() {
    this.http.get<PodaciPrikazVM>(MyConfig.adresaservera+"/AngularUser/Index")
      .subscribe((result)=>{
        this.podaciPrikaz = result;
      });
  }

  Uredi(s) {
    this.editData=s;
  }

  Obrisi(s) {
    alert('briseno' + 's');
    let indexOf = this.podaciPrikaz.list.indexOf(s);
    this.podaciPrikaz.list.splice(indexOf, 1);

    this.http.get(MyConfig.adresaservera+"/AngularUser/Obrisi?itemId="+s.id)
      .subscribe((result)=>{
        alert('Obrisano'+ s.brand+ ' ' +s.model);
      });
  }

  getPodaci():PodaciRow[] {
    return this.podaciPrikaz.list.filter(x=>x.brand.startsWith(this.trazi));
  }

  Dodaj2(data: any) {
     this.http.post<any>(MyConfig.adresaservera+"/AngularUser/Dodaj",data)
      .pipe(map((result:any)=>
    {return  result}
      ))
  }

  Pripremi() {
    this.addData.brand='';
    this.addData.model='';
    this.addData.fuel='';
    this.addData.color='';
    this.addData.numberOfGears='';
  }
}
