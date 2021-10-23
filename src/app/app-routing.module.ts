import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusComponent } from './main/bus/bus.component';
import { TourismComponent } from './main/tourism/tourism.component';

const routes: Routes = [
  {
    path: 'main/bus',
    component: BusComponent,
  },
  {
    path: 'main/tourism',
    component: TourismComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
