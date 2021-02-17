import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardBtnsComponent } from './home-card-btns.component';

describe('HomeCardBtnsComponent', () => {
  let component: HomeCardBtnsComponent;
  let fixture: ComponentFixture<HomeCardBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCardBtnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
