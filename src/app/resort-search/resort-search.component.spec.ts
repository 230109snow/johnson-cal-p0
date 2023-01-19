import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortSearchComponent } from './resort-search.component';

describe('ResortSearchComponent', () => {
  let component: ResortSearchComponent;
  let fixture: ComponentFixture<ResortSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResortSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResortSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
