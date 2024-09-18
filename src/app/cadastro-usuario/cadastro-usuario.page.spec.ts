import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroUsuarioPage } from './cadastro-usuario.page';

describe('CadastroUsuarioPage', () => {
  let component: CadastroUsuarioPage;
  let fixture: ComponentFixture<CadastroUsuarioPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ CadastroUsuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial values empty', () => {
    expect(component.nome).toBe('');
    expect(component.cpf).toBe('');
    expect(component.telefone).toBe('');
    expect(component.CEP).toBe('');
    expect(component.estado).toBe('');
    expect(component.cidade).toBe('');
    expect(component.tipopessoa).toBe('');
    expect(component.senha).toBe('');
    expect(component.confirmarSenha).toBe('');
  });
});
