import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog0Component } from './blog0.component';

describe('Blog0Component', () => {
  let component: Blog0Component;
  let fixture: ComponentFixture<Blog0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blog0Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Blog0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
