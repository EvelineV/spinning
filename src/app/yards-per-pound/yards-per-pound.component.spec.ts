import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardsPerPoundComponent } from './yards-per-pound.component';

describe('YardsPerPoundComponent', () => {
  let component: YardsPerPoundComponent;
  let fixture: ComponentFixture<YardsPerPoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardsPerPoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YardsPerPoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
