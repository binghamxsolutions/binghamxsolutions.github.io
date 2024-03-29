import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsupportedMessageComponent } from './unsupported-message.component';

describe('UnsupportedMessageComponent', () => {
  let component: UnsupportedMessageComponent;
  let fixture: ComponentFixture<UnsupportedMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsupportedMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsupportedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
