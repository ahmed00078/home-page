import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardComponent } from './gard.component';

describe('GardComponent', () => {
  let component: GardComponent;
  let fixture: ComponentFixture<GardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
