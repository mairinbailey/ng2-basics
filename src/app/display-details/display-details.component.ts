import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  showDetails = false;
  detailsCount = 0;
  log= [];

  constructor() { }

  ngOnInit() {
  }
  onDisplayDetails(){
    this.detailsCount++;

    this.log.push(this.detailsCount)

    this.showDetails =!this.showDetails
  }
}
