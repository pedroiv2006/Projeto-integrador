import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ListaUsuarioPage } from './lista-usuario.page';

describe('ListaUsuarioPage', () => {
  let component: ListaUsuarioPage;
  let fixture: ComponentFixture<ListaUsuarioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaUsuarioPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
