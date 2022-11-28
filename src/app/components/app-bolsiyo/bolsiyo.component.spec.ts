import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBolsiyoComponent } from './bolsiyo.component';

describe('AppBolsiyoComponent', () => {
  let component: AppBolsiyoComponent;
  let fixture: ComponentFixture<AppBolsiyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBolsiyoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBolsiyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
