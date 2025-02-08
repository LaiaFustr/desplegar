import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTodosCliComponent } from './ver-todos.component';

describe('VerTodosComponent', () => {
  let component: VerTodosCliComponent;
  let fixture: ComponentFixture<VerTodosCliComponent>;

<<<<<<< HEAD
=======

>>>>>>> 19a59af5c5e26d64e323f727be73825c1ffcab23
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerTodosCliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerTodosCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
<<<<<<< HEAD
=======
// 
>>>>>>> 19a59af5c5e26d64e323f727be73825c1ffcab23
