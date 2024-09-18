import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AgendamentoExemploPage } from './agendamento-exemplo.page';

describe('AgendamentoExemploPage', () => {
  let component: AgendamentoExemploPage;
  let fixture: ComponentFixture<AgendamentoExemploPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendamentoExemploPage ],
      imports: [IonicModule.forRoot(), FormsModule] // Importa IonicModule e FormsModule para garantir que o componente funcione corretamente
    }).compileComponents();

    fixture = TestBed.createComponent(AgendamentoExemploPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

