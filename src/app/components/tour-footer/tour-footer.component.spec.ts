import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourFooterComponent } from './tour-footer.component';

describe('TourFooterComponent', () => {
  let component: TourFooterComponent;
  let fixture: ComponentFixture<TourFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
