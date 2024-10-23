import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacaoagendamentoPage } from './confirmacaoagendamento.page';

describe('ConfirmacaoagendamentoPage', () => {
  let component: ConfirmacaoagendamentoPage;
  let fixture: ComponentFixture<ConfirmacaoagendamentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmacaoagendamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
