import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickMortyApiComponent } from './rick-morty-api.component';

describe('RickMortyApiComponent', () => {
  let component: RickMortyApiComponent;
  let fixture: ComponentFixture<RickMortyApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickMortyApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickMortyApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
