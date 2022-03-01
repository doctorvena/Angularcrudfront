import {HttpHeaders} from '@angular/common/http';

export class MyConfig{
  static httpOpcije= {
    headers:new HttpHeaders({
      "Content-Type": "application/json",
    })
  };
  static adresaservera:string ="https://localhost:44315";
}
