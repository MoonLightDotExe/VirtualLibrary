import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeBooksComponent } from './fe-books.component';

describe('FeBooksComponent', () => {
  let component: FeBooksComponent;
  let fixture: ComponentFixture<FeBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
