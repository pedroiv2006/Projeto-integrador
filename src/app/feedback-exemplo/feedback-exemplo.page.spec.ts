import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FeedbackExemploPage } from './feedback-exemplo.page';

describe('FeedbackExemploPage', () => {
  let component: FeedbackExemploPage;
  let fixture: ComponentFixture<FeedbackExemploPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackExemploPage],
      imports: [IonicModule.forRoot()], // Importa o módulo Ionic necessário para o teste
    }).compileComponents(); // Compila os componentes declarados
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackExemploPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica se o componente foi criado com sucesso
  });
});

