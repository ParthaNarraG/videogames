import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataRetrieveService } from 'src/app/services/data-retrieve.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit,OnDestroy {
  gameRating:number=0;
  showContent:boolean=false;
  responseInfo:any={};
  paramSubscription:any;
  detailSubscription:any;
  id:string="";
  gameFullDetails:Object={}
  constructor(private dataRetrievel:DataRetrieveService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.paramSubscription=this.activatedRoute.params.subscribe((params):any=>{
      this.id=params['id'];
      this.getSingleGameDetails();
      setTimeout(()=>{
        this.showContent=true;
      },2000),
      setTimeout(()=>{
        this.gameRating=this.responseInfo.gameInfo.metacritic;
      },3000)
    });
  }

  ngOnDestroy(){
    this.paramSubscription.unsubscribe();
    this.detailSubscription.unsubscribe();
  }

  async getSingleGameDetails(){
    try{
      this.detailSubscription=await this.dataRetrievel.getSingleGameDetails(this.id).subscribe((value:any)=>{
        this.responseInfo=value;
      });
    }
    catch(error:any){
      console.log(error);
    }
  }

  getColor(value: number): string {
    if (value > 75) {
      return '#5ee432';
    } else if (value > 50) {
      return '#fffa50';
    } else if (value > 30) {
      return '#f7aa38';
    } else {
      return '#ef4655';
    }
  }

}
