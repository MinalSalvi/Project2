import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourInOneComponent } from './four-in-one.component';

describe('FourInOneComponent', () => {
  let component: FourInOneComponent;
  let fixture: ComponentFixture<FourInOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourInOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourInOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
