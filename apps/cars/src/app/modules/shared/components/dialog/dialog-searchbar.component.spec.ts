import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSearchbarComponent } from './dialog-searchbar.component';

describe('DialogComponent', () => {
  let component: DialogSearchbarComponent;
  let fixture: ComponentFixture<DialogSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogSearchbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
