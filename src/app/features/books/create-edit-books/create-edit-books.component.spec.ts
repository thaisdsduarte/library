import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditBooksComponent } from './create-edit-books.component';

describe('CreateEditBooksComponent', () => {
  let component: CreateEditBooksComponent;
  let fixture: ComponentFixture<CreateEditBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
