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

import { Player } from '../../../src/cross-cutting';
import { GameRepository, LocalSourceGameRepositoryInterface } from '../../../src/data';

const localDataSource = (): LocalSourceGameRepositoryInterface => ({
  gameStatus: jest.fn(),
  initGame: jest.fn(),
  insertPlayRound: jest.fn(),
});

test('Game-repository: The game status method should be called once', () => {
  const mockLocalDataSource = localDataSource();
  const realGameRepository = new GameRepository(mockLocalDataSource);

  realGameRepository.gameStatus();

  expect(mockLocalDataSource.gameStatus).toBeCalledTimes(1);
});
test('Game-repository: The init game method should be called once', () => {
  const mockLocalDataSource = localDataSource();
  const realGameRepository = new GameRepository(mockLocalDataSource);

  realGameRepository.initGame();

  expect(mockLocalDataSource.initGame).toBeCalledTimes(1);
});
test('Game-repository: The insert play round method should be called once', () => {
  const mockLocalDataSource = localDataSource();
  const realGameRepository = new GameRepository(mockLocalDataSource);

  realGameRepository.insertPlayRound(0, 0, Player.firstPlayer);

  expect(mockLocalDataSource.insertPlayRound).toBeCalledTimes(1);
});
