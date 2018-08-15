import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapkegComponent } from './tapkeg.component';

describe('TapkegComponent', () => {
  let component: TapkegComponent;
  let fixture: ComponentFixture<TapkegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapkegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapkegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
