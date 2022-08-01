import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RegisterDealerComponent } from './register-dealer.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegisterDealerComponent', () => {
  let component: RegisterDealerComponent;
  let fixture: ComponentFixture<RegisterDealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule , HttpClientTestingModule,RouterTestingModule, FormsModule],
      declarations: [ RegisterDealerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
