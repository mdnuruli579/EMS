import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewManagerComponent } from './view-manager.component';

describe('ViewManagerComponent', () => {
  let component: ViewManagerComponent;
  let fixture: ComponentFixture<ViewManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
