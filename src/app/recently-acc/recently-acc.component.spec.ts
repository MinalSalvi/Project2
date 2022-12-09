import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyAccComponent } from './recently-acc.component';

describe('RecentlyAccComponent', () => {
  let component: RecentlyAccComponent;
  let fixture: ComponentFixture<RecentlyAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyAccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlyAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
