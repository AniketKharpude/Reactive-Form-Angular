import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaitanComponent } from './chaitan.component';

describe('ChaitanComponent', () => {
  let component: ChaitanComponent;
  let fixture: ComponentFixture<ChaitanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaitanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaitanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
