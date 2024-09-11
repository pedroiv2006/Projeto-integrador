import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {
  public nome: string = '';
  public cpf: string = '';
  public telefone: string = '';
  public CEP: string = '';
  public estado: string = '';
  public cidade: string = '';
  public tipopessoa: string = '';
  public senha: string = '';
  public confirmarSenha: string = '';

  // Lista de cidades em ordem alfabética
  public cidades: string[] = [
    'Abdon Batista', 'Abelardo Luz', 'Agronômica', 'Agrolândia', 'Água Doce', 'Águas de Chapecó', 'Águas Frias',
    'Águas Mornas', 'Alfredo Wagner', 'Alto Bela Vista', 'Anchieta', 'Angelina', 'Anita Garibaldi', 'Antônio Carlos',
    'Arabutã', 'Araquari', 'Araranguá', 'Armazém', 'Ascurra', 'Atalanta', 'Aurora', 'Balneário Arroio do Silva',
    'Balneário Barra do Sul', 'Balneário Camboriú', 'Balneário Gaivota', 'Balneário Piçarras', 'Bandeirante',
    'Barra Bonita', 'Barra Velha', 'Bela Vista do Toldo', 'Belmonte', 'Benedito Novo', 'Biguaçu', 'Blumenau',
    'Bocaina do Sul', 'Bom Jardim da Serra', 'Bom Jesus', 'Bom Jesus do Oeste', 'Bom Retiro', 'Bombinhas', 'Botuverá',
    'Braço do Norte', 'Braço do Trombudo', 'Brunópolis', 'Brusque', 'Caçador', 'Calmon', 'Camboriú', 'Campo Alegre',
    'Campo Belo do Sul', 'Campo Erê', 'Canelinha', 'Canoinhas', 'Capão Alto', 'Capinzal', 'Capivari de Baixo',
    'Catanduvas', 'Caxambu do Sul', 'Celso Ramos', 'Cerro Negro', 'Chapadão do Lageado', 'Chapecó', 'Cocal do Sul',
    'Concórdia', 'Cordilheira Alta', 'Coronel Freitas', 'Coronel Martins', 'Correia Pinto', 'Corupá', 'Criciúma',
    'Cunha Porã', 'Cunhataí', 'Curitibanos', 'Dona Emma', 'Doutor Pedrinho', 'Entre Rios', 'Ermo', 'Erval Velho',
    'Faxinal dos Guedes', 'Florianópolis', 'Formosa do Sul', 'Forquilhinha', 'Fraiburgo', 'Frei Rogério', 'Galvão',
    'Garopaba', 'Garuva', 'Gaspar', 'Governador Celso Ramos', 'Gravatal', 'Guabiruba', 'Guaramirim', 'Guarujá do Sul',
    'Guatambu', 'Herval d\'Oeste', 'Ibiam', 'Ibicaré', 'Ibirama', 'Içara', 'Ilhota', 'Imaruí', 'Imbituba', 'Imbuia',
    'Indaial', 'Iomerê', 'Ipira', 'Iporã do Oeste', 'Ipuaçu', 'Iraceminha', 'Irani', 'Irati', 'Irineópolis', 'Itá',
    'Itaiópolis', 'Itajaí', 'Itapema', 'Itapiranga', 'Itapoá', 'Ituporanga', 'Jacinto Machado', 'Jaguaruna',
    'Jaraguá do Sul', 'Joaçaba', 'Joinville', 'José Boiteux', 'Jupiá', 'Lacerdópolis', 'Lages', 'Laguna', 'Laurentino',
    'Lauro Muller', 'Lebon Régis', 'Leoberto Leal', 'Lindóia do Sul', 'Lontras', 'Luiz Alves', 'Luzerna', 'Macieira',
    'Mafra', 'Major Gercino', 'Major Vieira', 'Maracajá', 'Maravilha', 'Marema', 'Massaranduba', 'Matos Costa',
    'Meleiro', 'Mirim Doce', 'Modelo', 'Mondaí', 'Monte Carlo', 'Monte Castelo', 'Morro da Fumaça', 'Navegantes',
    'Nova Erechim', 'Nova Itaberaba', 'Nova Trento', 'Nova Veneza', 'Palhoça', 'Palma Sola', 'Palmitos', 'Papanduva',
    'Paulo Lopes', 'Pedras Grandes', 'Penha', 'Peritiba', 'Petrolândia', 'Pinhalzinho', 'Pinheiro Preto', 'Piratuba',
    'Planalto Alegre', 'Pomerode', 'Ponte Alta', 'Ponte Alta do Norte', 'Ponte Serrada', 'Porto Belo', 'Porto União',
    'Pouso Redondo', 'Praia Grande', 'Presidente Castelo Branco', 'Presidente Getúlio', 'Presidente Nereu',
    'Princesa', 'Quilombo', 'Rancho Queimado', 'Rio das Antas', 'Rio do Campo', 'Rio do Oeste', 'Rio do Sul',
    'Rio dos Cedros', 'Rio Fortuna', 'Rio Negrinho', 'Rodeio', 'Romelândia', 'Salete', 'Saltinho', 'Salto Veloso',
    'Sangão', 'Santa Cecília', 'Santa Helena', 'Santa Rosa de Lima', 'Santa Rosa do Sul', 'Santa Terezinha',
    'Santa Terezinha do Progresso', 'Santiago do Sul', 'Santo Amaro da Imperatriz', 'São Bento do Sul', 'São Bernardino',
    'São Bonifácio', 'São Carlos', 'São Cristovão do Sul', 'São Domingos', 'São Francisco do Sul', 'São João Batista',
    'São João do Itaperiú', 'São João do Oeste', 'São Joaquim', 'São José', 'São José do Cedro', 'São José do Cerrito',
    'São Lourenço d\'Oeste', 'São Ludgero', 'São Martinho', 'São Miguel da Boa Vista', 'São Miguel do Oeste',
    'São Pedro de Alcântara', 'Saudades', 'Schroeder', 'Seara', 'Serra Alta', 'Siderópolis', 'Sombrio', 'Sul Brasil',
    'Taió', 'Tangará', 'Tigrinhos', 'Tijucas', 'Timbé do Sul', 'Timbó', 'Timbó Grande', 'Três Barras', 'Treviso',
    'Treze de Maio', 'Treze Tílias', 'Trombudo Central', 'Tubarão', 'Tunápolis', 'Turvo', 'União do Oeste', 'Urubici',
    'Urupema', 'Urussanga', 'Vargem', 'Vargem Bonita', 'Vidal Ramos', 'Videira', 'Vitor Meireles', 'Witmarsum',
    'Xanxerê', 'Xavantina', 'Xaxim', 'Zortéa'
  ].sort();

  constructor() {}

  ngOnInit() {}

  salvar() {
    // Lógica para salvar o cadastro de usuário
    console.log('Usuário salvo:', {
      nome: this.nome,
      cpf: this.cpf,
      telefone: this.telefone,
      CEP: this.CEP,
      estado: this.estado,
      cidade: this.cidade,
      tipopessoa: this.tipopessoa,
      senha: this.senha,
      confirmarSenha: this.confirmarSenha,
    });
  }

  atualizarCidades() {
    // Implementar lógica para atualizar cidades, se aplicável
  }
}
