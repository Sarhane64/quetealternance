import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormworkshopComponent } from './formworkshop.component';

describe('FormworkshopComponent', () => {
  let component: FormworkshopComponent;
  let fixture: ComponentFixture<FormworkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormworkshopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormworkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
