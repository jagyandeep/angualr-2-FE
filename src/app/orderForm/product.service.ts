import { Injectable, Injector } from '@angular/core';
import{Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class productService{
  constructor(private http: Http){}
    getProducts(){
      const headers = new Headers();
      headers.append('Access-Control-Allow-Methods', 'GET');
      headers.append('Access-Control-Allow-Origin', '*');
      return this.http.get("http://localhost:8000/api/getProductList",headers).map((res:Response) => res.json());
    }
  }
