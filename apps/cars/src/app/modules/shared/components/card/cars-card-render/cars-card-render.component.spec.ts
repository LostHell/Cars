import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsCardRenderComponent } from './cars-card-render.component';

describe('CarsCardRenderComponent', () => {
  let component: CarsCardRenderComponent;
  let fixture: ComponentFixture<CarsCardRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsCardRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsCardRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
