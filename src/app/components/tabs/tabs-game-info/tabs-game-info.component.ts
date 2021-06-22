import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-game-info',
  templateUrl: './tabs-game-info.component.html',
  styleUrls: ['./tabs-game-info.component.scss']
})
export class TabsGameInfoComponent implements OnInit {
  @Input() details:any;
  constructor() { }

  ngOnInit(): void {
  }

}
