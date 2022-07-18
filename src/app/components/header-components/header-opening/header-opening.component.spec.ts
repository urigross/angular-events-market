import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOpeningComponent } from './header-opening.component';

describe('HeaderOpeningComponent', () => {
  let component: HeaderOpeningComponent;
  let fixture: ComponentFixture<HeaderOpeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderOpeningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
