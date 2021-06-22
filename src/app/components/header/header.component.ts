import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataRetrieveService } from 'src/app/services/data-retrieve.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataRetrieval:DataRetrieveService) { }
  
  ngOnInit(): void {
  }

  onSubmit(data:NgForm){
    this.dataRetrieval.searchParam.next(data.value.searchParam);
  }

}
