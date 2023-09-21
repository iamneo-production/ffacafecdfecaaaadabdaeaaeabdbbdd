import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test_case1', () => {
    component.age = -1;
    component.checkAge();
    expect(component.ageGroup).toEqual('Invalid age');
  });

  it('test_case2', () => {
    component.age = 0;
    component.checkAge();
    expect(component.ageGroup).toEqual('Foetus Infancy');
  });

  it('test_case3', () => {
    component.age = 2;
    component.checkAge();
    expect(component.ageGroup).toEqual('Toddler years');
  });

  it('test_case4', () => {
    component.age = 15;
    component.checkAge();
    expect(component.ageGroup).toEqual('Teenage');
  });

  it('test_case5', () => {
    component.age = 30;
    component.checkAge();
    expect(component.ageGroup).toEqual('Adult');
  });

  it('test_case6', () => {
    component.age = 70;
    component.checkAge();
    expect(component.ageGroup).toEqual('Senior citizen');
  });
});
