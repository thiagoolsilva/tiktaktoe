/*
 * Copyright (c) 2021  Thiago Lopes da Silva
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { GameplayInterface, PresentationFactory } from '@tiktaktoe/core';
import { GetWinnerAdapter } from '../adapter/get-winner-adapter/get-winner-adapter';
import { GetWinnerUC } from '../use-cases/get-winner/get-winner-uc';
import { GetWinnerUCInterface } from '../use-cases/get-winner/get-winner-uc.interface';
import { LocalTableRepository } from '../../data/table-repository/local-table-repository';
import { TableRepository } from '../../data/table-repository/table-repository';
import { TableRepositoryInterface } from '../../data/table-repository/table-repository.interface';
import { GamePlayAdapter } from '../adapter/game-play-adapter/game-play-adapter';
import { GamePlayInterfaceAdapter } from '../adapter/game-play-adapter/game-play-adapter.interface';
import { ResetGameAdapter } from '../adapter/reset-game-adapter/reset-game-adapter';
import { StartGameAdapter } from '../adapter/start-game-adapter/start-game-adapter';
import { PlayGameParser } from '../use-cases/play-game/parser/play-game-parser';
import { PlayGameUC } from '../use-cases/play-game/play-game-uc';
import { PlayGameUCInterface } from '../use-cases/play-game/play-game-uc.interface';
import { ResetGameUC } from '../use-cases/reset-game/reset-game-uc';
import { ResetGameUCInterface } from '../use-cases/reset-game/reset-game-uc.interface';
import { StartGameUC } from '../use-cases/start-game/start-game-uc';
import { StartGameUCInterface } from '../use-cases/start-game/start-game-uc.interface';
import { StatusGameUC } from '../use-cases/status-game/status-game-uc';
import { StatusGameUCInterface } from '../use-cases/status-game/status-game-uc.interface';

class CoreGamePlay {
  private static instance: CoreGamePlay;

  private readonly gamePlayInterface: GameplayInterface;

  private readonly tableRepositoryInterface: TableRepositoryInterface;

  private constructor() {
    this.gamePlayInterface = new PresentationFactory().createGame();
    this.tableRepositoryInterface = new TableRepository(new LocalTableRepository());
  }

  public static getInstance(): CoreGamePlay {
    if (!this.instance) {
      this.instance = new CoreGamePlay();
    }
    return this.instance;
  }

  public getGamePlayCore(): GameplayInterface {
    return this.gamePlayInterface;
  }

  public getTableRepository(): TableRepositoryInterface {
    return this.tableRepositoryInterface;
  }
}

export function createPlayGameUCFactory(): PlayGameUCInterface {
  const coreGameplay = CoreGamePlay.getInstance().getGamePlayCore();
  const tableRepository = CoreGamePlay.getInstance().getTableRepository();
  const tableParser = new PlayGameParser();

  const gamePlayAdapter: GamePlayInterfaceAdapter = new GamePlayAdapter(coreGameplay);
  const playGameUC: PlayGameUCInterface = new PlayGameUC(
    gamePlayAdapter,
    tableRepository,
    tableParser,
  );

  return playGameUC;
}

export function createResetGameUCFactory(): ResetGameUCInterface {
  const coreGameplay = CoreGamePlay.getInstance().getGamePlayCore();
  const tableRepository = CoreGamePlay.getInstance().getTableRepository();

  const resetGameAdapter = new ResetGameAdapter(coreGameplay);
  const resetGameUC: ResetGameUCInterface = new ResetGameUC(
    resetGameAdapter,
    tableRepository,
  );

  return resetGameUC;
}

export function createStartGameUCFactory(): StartGameUCInterface {
  const coreGameplay = CoreGamePlay.getInstance().getGamePlayCore();
  const tableRepository = CoreGamePlay.getInstance().getTableRepository();

  const startGameAdapter = new StartGameAdapter(coreGameplay);
  const startGameUC: StartGameUCInterface = new StartGameUC(
    startGameAdapter,
    tableRepository,
  );

  return startGameUC;
}

export function createStatusGameUCFactory(): StatusGameUCInterface {
  const tableRepository = CoreGamePlay.getInstance().getTableRepository();

  return new StatusGameUC(tableRepository);
}

export function createWinnerGameUCFactory(): GetWinnerUCInterface {
  const coreGameplay = CoreGamePlay.getInstance().getGamePlayCore();
  const getWinnerAdapter = new GetWinnerAdapter(coreGameplay);

  return new GetWinnerUC(getWinnerAdapter);
}
