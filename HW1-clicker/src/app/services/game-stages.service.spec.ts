import { TestBed } from '@angular/core/testing';

import { GameStagesService } from './game-stages.service';

describe('GameStagesService', () => {
  let service: GameStagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameStagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
