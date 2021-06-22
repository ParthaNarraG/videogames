import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataRetrieveService } from 'src/app/services/data-retrieve.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  @Input() details:any;
  gameViews:any=[];
  subscription:Subscription | undefined;
  constructor(private dataRetrieval:DataRetrieveService,
    private router:Router,private activatedRoute:ActivatedRoute  ) { }

  ngOnInit(): void {
    
  }

  gameDetails(details:any){
    this.router.navigate([`details/${this.details.id}`])
  }
}
