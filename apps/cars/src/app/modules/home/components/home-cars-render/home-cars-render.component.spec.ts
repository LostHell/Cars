import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarsRenderComponent } from './home-cars-render.component';

describe('HomeCarsRenderComponent', () => {
  let component: HomeCarsRenderComponent;
  let fixture: ComponentFixture<HomeCarsRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCarsRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCarsRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
