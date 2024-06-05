import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideMenuComponent } from './left-side-menu.component';

describe('LeftSideMenuComponent', () => {
  let component: LeftSideMenuComponent;
  let fixture: ComponentFixture<LeftSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSideMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
