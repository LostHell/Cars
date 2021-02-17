import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCardBtnsComponent } from './account-card-btns.component';

describe('AccountCardBtnsComponent', () => {
  let component: AccountCardBtnsComponent;
  let fixture: ComponentFixture<AccountCardBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCardBtnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCardBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
