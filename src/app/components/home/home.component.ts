import { Component, OnInit } from '@angular/core';
import { DataRetrieveService } from 'src/app/services/data-retrieve.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gamesArray:any;
  constructor(private dataRetrieve:DataRetrieveService) { }

  ngOnInit(): void {
    this.dataRetrieve.searchParam.subscribe((data)=>{
      this.getGameData();
    })
  }

  /**
   * @description to get all the game details
   * @params no params were used
   * @returns a promise holding game details
   */
  async getGameData(){
    try{
      const gameData:any=await this.dataRetrieve.getGameDetails();
      this.gamesArray=gameData.results
      this.dataRetrieve.fullGameArray.next(this.gamesArray);
    }
    catch(error:any){
      console.log(error);
    }
  }
}
