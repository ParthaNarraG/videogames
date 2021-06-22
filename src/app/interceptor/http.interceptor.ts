import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataRetrieveService } from '../services/data-retrieve.service';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {

  constructor(private dataRetrieval:DataRetrieveService) {
   
  }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let search="";
    this.dataRetrieval.searchParam.subscribe((data)=>{
      search=data;
    })
    let params="2aa7ce1c33ba4bf5b4ba3e974fd2725c";
    // if(search===""){
      let newUrl=request.clone({
        params:request.params.set("key",params)
      });
      return next.handle(newUrl);
    // }
  /*   else{
      let newUrl=request.clone({
        params:request.params.set("key",params).set("search",search)
      });
      return next.handle(newUrl);
    } */
  }
}
