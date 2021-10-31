import { BusService } from '@services/bus.service';
import { Component, OnInit } from '@angular/core';
import { City } from 'app/model/city.model';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss'],
})
export class BusComponent implements OnInit {
  city: City = {
    Taipei: 'Taipei',
    NewTaipei: 'NewTaipei',
    Taoyuan: 'Taoyuan',
    Taichung: 'Taichung',
    Tainan: 'Tainan',
    Kaohsiung: 'Kaohsiung',
    Keelung: 'Keelung',
    Hsinchu: 'Hsinchu',
    HsinchuCounty: 'HsinchuCounty',
    MiaoliCounty: 'MiaoliCounty',
    ChanghuaCounty: 'ChanghuaCounty',
    NantouCounty: 'NantouCounty',
    YunlinCounty: 'YunlinCounty',
    ChiayiCounty: 'ChiayiCounty',
    Chiayi: 'Chiayi',
    PingtungCounty: 'PingtungCounty',
    YilanCounty: 'YilanCounty',
    HualienCounty: 'HualienCounty',
    TaitungCounty: 'TaitungCounty',
    KinmenCounty: 'KinmenCounty',
    PenghuCounty: 'PenghuCounty',
    LienchiangCounty: 'LienchiangCounty',
  };
  cityID: number;
  constructor(private _busSvc: BusService) {}
  ngOnInit(): void {
    this.getCity();
  }

  //*取得指定縣市
  getCity() {
    this._busSvc.getCity().subscribe((res) => {
      this.cityID = res['VersionID'];
    });
  }

  getCustomCityBus() {
    // let req: City = {
    //   Taipei: 'Taipei',
    //   NewTaipei: 'NewTaipei',
    //   Taoyuan: 'Taoyuan',
    //   Taichung: 'Taichung',
    //   Tainan: 'Tainan',
    //   Kaohsiung: 'Kaohsiung',
    //   Keelung: 'Keelung',
    //   Hsinchu: 'Hsinchu',
    //   HsinchuCounty: 'HsinchuCounty',
    //   MiaoliCounty: 'MiaoliCounty',
    //   ChanghuaCounty: 'ChanghuaCounty',
    //   NantouCounty: 'NantouCounty',
    //   YunlinCounty: 'YunlinCounty',
    //   ChiayiCounty: 'ChiayiCounty',
    //   Chiayi: 'Chiayi',
    //   PingtungCounty: 'PingtungCounty',
    //   YilanCounty: 'YilanCounty',
    //   HualienCounty: 'HualienCounty',
    //   TaitungCounty: 'TaitungCounty',
    //   KinmenCounty: 'KinmenCounty',
    //   PenghuCounty: 'PenghuCounty',
    //   LienchiangCounty: 'LienchiangCounty',
    // };
    this._busSvc.getCustomCityBus(this.cityID).subscribe((res) => {
      console.log(res);
    });
  }
}
