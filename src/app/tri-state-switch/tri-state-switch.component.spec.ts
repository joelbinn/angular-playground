import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriStateSwitchComponent } from './tri-state-switch.component';

describe('TriStateSwitchComponent', () => {
  let component: TriStateSwitchComponent;
  let fixture: ComponentFixture<TriStateSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriStateSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriStateSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
