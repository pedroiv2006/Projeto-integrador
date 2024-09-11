import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardExemploPage } from './card-exemplo.page';

describe('CardExemploPage', () => {
  let component: CardExemploPage;
  let fixture: ComponentFixture<CardExemploPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardExemploPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CardExemploPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

