import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowKegComponent } from './low-keg.component';

describe('LowKegComponent', () => {
  let component: LowKegComponent;
  let fixture: ComponentFixture<LowKegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowKegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowKegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
