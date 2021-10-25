import { TourService } from '@services/tour.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tourism',
  templateUrl: './tourism.component.html',
  styleUrls: ['./tourism.component.scss'],
})
export class TourismComponent implements OnInit {
  constructor(private _tourSvc: TourService) {}

  ngOnInit(): void {
    this.getAllTour();
  }

  getAllTour() {
    this._tourSvc.getAllScenicSpot().subscribe((res) => {
      console.log(res);
    });
  }
}
