import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-screenshots',
  templateUrl: './tabs-screenshots.component.html',
  styleUrls: ['./tabs-screenshots.component.scss']
})
export class TabsScreenshotsComponent implements OnInit {
  @Input() details:any;
  constructor() { }

  ngOnInit(): void {
  }

}
