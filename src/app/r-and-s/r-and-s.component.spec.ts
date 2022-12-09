import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RAndSComponent } from './r-and-s.component';

describe('RAndSComponent', () => {
  let component: RAndSComponent;
  let fixture: ComponentFixture<RAndSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RAndSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RAndSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
