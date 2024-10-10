import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main2ServicesComponent } from './main2-services.component';

describe('Main2ServicesComponent', () => {
  let component: Main2ServicesComponent;
  let fixture: ComponentFixture<Main2ServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Main2ServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Main2ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
