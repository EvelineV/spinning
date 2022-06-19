import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GristComponent } from './grist.component';

describe('GristComponent', () => {
  let component: GristComponent;
  let fixture: ComponentFixture<GristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GristComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
