import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyConfirmComponent } from './buy-confirm.component';

describe('BuyConfirmComponent', () => {
  let component: BuyConfirmComponent;
  let fixture: ComponentFixture<BuyConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
