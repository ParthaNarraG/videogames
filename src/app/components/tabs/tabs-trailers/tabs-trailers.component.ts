import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-trailers',
  templateUrl: './tabs-trailers.component.html',
  styleUrls: ['./tabs-trailers.component.scss']
})
export class TabsTrailersComponent implements OnInit {
  @Input() details:any;
  constructor() { }

  ngOnInit(): void {
  }

}
