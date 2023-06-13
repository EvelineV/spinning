import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnitGaugeComponent } from './knit-gauge.component';

describe('KnitGaugeComponent', () => {
  let component: KnitGaugeComponent;
  let fixture: ComponentFixture<KnitGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnitGaugeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnitGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
