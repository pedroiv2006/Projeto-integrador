import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing'; // Importa para simular rotas
import { ListaUsuarioPage } from './lista-usuario.page';

describe('ListaUsuarioPage', () => {
  let component: ListaUsuarioPage;
  let fixture: ComponentFixture<ListaUsuarioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaUsuarioPage],
      imports: [IonicModule.forRoot(), RouterTestingModule] // Adiciona RouterTestingModule para simular a navegação
    }).compileComponents();

    fixture = TestBed.createComponent(ListaUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of users', () => {
    expect(component.usuarios.length).toBeGreaterThan(0); // Verifica se há usuários na lista
  });

  it('should navigate to create user page when button is clicked', () => {
    spyOn(component, 'criarUsuario');
    
    const button = fixture.nativeElement.querySelector('ion-button');
    button.click();

    expect(component.criarUsuario).toHaveBeenCalled();
  });

  it('should show user details when details button is clicked', () => {
    spyOn(component, 'detalhesUsuario');
    
    const buttons = fixture.nativeElement.querySelectorAll('ion-button');
    const detalhesButton = buttons[1]; // Considerando que o segundo botão é o de detalhes
    detalhesButton.click();

    expect(component.detalhesUsuario).toHaveBeenCalledWith(component.usuarios[0]);
  });
});
