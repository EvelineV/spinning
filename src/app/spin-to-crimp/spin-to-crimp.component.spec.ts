import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinToCrimpComponent } from './spin-to-crimp.component';

describe('SpinToCrimpComponent', () => {
  let component: SpinToCrimpComponent;
  let fixture: ComponentFixture<SpinToCrimpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinToCrimpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinToCrimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
