import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should counter init as 0 and when call increase method should add 1 on the counter', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;

    expect(app.counter).toBe(0);

    app.increase();

    expect(app.counter).toBe(1);
  });

  it('should counter init as 0 and when call decrease method should subtract 1 on the counter', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;

    expect(app.counter).toBe(0);

    app.decrease();

    expect(app.counter).toBe(-1);
  });

  it('should reset counter when counter is bigger than 10', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;

    expect(app.counter).toBe(0);

    Array.from({ length: 12 }).forEach(() => {
      app.increase();
    });

    expect(app.counter).toBe(0);
  });
});
