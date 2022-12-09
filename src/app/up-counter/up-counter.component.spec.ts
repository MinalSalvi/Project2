import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCounterComponent } from './up-counter.component';

describe('UpCounterComponent', () => {
  let component: UpCounterComponent;
  let fixture: ComponentFixture<UpCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
