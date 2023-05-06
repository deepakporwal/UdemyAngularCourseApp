import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports : [FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("and has a positive case", function () {
    expect(true).toBe(true);
  });

  it("and can have a negative case", function () {
    expect(false).not.toBe(true);
  });

  it('should have username value',()=>{
    let val = component.username;
    let x ='test';
    component.validateform(x);
    expect(val.length>0).toBe(true);
  });

  it('should execute sample mock testFunc',()=>{

  })

});
