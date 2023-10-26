import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatlobbyComponent } from './chatlobby.component';

describe('ChatlobbyComponent', () => {
  let component: ChatlobbyComponent;
  let fixture: ComponentFixture<ChatlobbyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatlobbyComponent]
    });
    fixture = TestBed.createComponent(ChatlobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
