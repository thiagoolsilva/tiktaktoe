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

import { inject, injectable } from 'tsyringe';
import { DataTokenLocalGameRepository } from '../di/data-token-provider';
import {
  GameRepositoryInterface,
  LocalSourceGameRepositoryInterface,
} from './game-repository.interface';

@injectable()
export class GameRepository implements GameRepositoryInterface {
  public constructor(
    @inject(DataTokenLocalGameRepository)
    public readonly localSource: LocalSourceGameRepositoryInterface,
  ) {}

  public initGame(): number[][] {
    return this.localSource.initGame();
  }

  public gameStatus(): number[][] {
    return this.localSource.gameStatus();
  }

  public insertPlayRound(xPos: number, yPos: number, value: number): number[][] {
    return this.localSource.insertPlayRound(xPos, yPos, value);
  }
}
