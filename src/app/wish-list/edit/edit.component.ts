import {Component, Input, OnInit} from '@angular/core';
import {PodaciRow} from '../../PodaciPrikaz-VM';
import {MyConfig} from '../../MyConfig';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() editData: PodaciRow;

  constructor(private http:HttpClient) {
  }

  Snimi() {

    this.http.post(MyConfig.adresaservera+"/AngularUser/Snimi",this.editData, MyConfig.httpOpcije).subscribe((result)=>
      {alert("Uspjesno Snimljeno")}
    )
    this.editData=null;
  };

  ngOnInit(): void {
  }

}
