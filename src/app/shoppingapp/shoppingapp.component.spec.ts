import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingappComponent } from './shoppingapp.component';

describe('ShoppingappComponent', () => {
  let component: ShoppingappComponent;
  let fixture: ComponentFixture<ShoppingappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
