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

import { TableRepositoryInterface } from '../../../data/table-repository/table-repository.interface';
import { StartGameAdapterInterface } from '../../adapter/start-game-adapter/start-game-adapter.interface';
import { StartGameUCInterface } from './start-game-uc.interface';

export class StartGameUC implements StartGameUCInterface {
  public constructor(
    private readonly startGameAdapter: StartGameAdapterInterface,
    private readonly tableRepository: TableRepositoryInterface,
  ) {}

  public execute(): void {
    this.startGameAdapter.startGame();
    this.tableRepository.resetGameTable();
  }
}
