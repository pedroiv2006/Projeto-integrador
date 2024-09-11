import { TestBed } from '@angular/core/testing';

import { AgendamentomanutencaoService } from './agendamentomanutencao.service';

describe('AgendamentomanutencaoService', () => {
  let service: AgendamentomanutencaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendamentomanutencaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
