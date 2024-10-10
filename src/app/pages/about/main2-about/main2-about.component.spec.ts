import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main2AboutComponent } from './main2-about.component';

describe('Main2AboutComponent', () => {
  let component: Main2AboutComponent;
  let fixture: ComponentFixture<Main2AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Main2AboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Main2AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
