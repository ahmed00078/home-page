import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact0Component } from './contact0.component';

describe('Contact0Component', () => {
  let component: Contact0Component;
  let fixture: ComponentFixture<Contact0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact0Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Contact0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
