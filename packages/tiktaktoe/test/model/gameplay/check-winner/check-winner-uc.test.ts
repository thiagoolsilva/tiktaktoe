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

import { Player } from '../../../../src/cross-cutting';
import { BaseUseCaseInterface, CheckWinnerUC, TikTakToeWinner } from '../../../../src/model';

const matrixWinnerUC = (player?: TikTakToeWinner): BaseUseCaseInterface<TikTakToeWinner> => ({
  execute: jest.fn().mockReturnValue(player),
});

const fakeTikTakToeData = [
  Array(3).fill(Player.firstPlayer),
  Array(3).fill(Player.firstPlayer),
  Array(3).fill(Player.firstPlayer),
];

test('Check-Winner: Expected to checkDiagonalMatrixWinnerUC assign first player to win the game. ', () => {
  const realCheckWinnerUC = new CheckWinnerUC(
    matrixWinnerUC({ player: Player.firstPlayer }),
    matrixWinnerUC({}),
    matrixWinnerUC({}),
  );

  const expectedWinner = realCheckWinnerUC.execute(fakeTikTakToeData);
  expect(expectedWinner.player).toBe(Player.firstPlayer);
});
test('Check-Winner: Expected to checkHorizontalMatrixWinnerUC assign first player to win the game. ', () => {
  const realCheckWinnerUC = new CheckWinnerUC(
    matrixWinnerUC({}),
    matrixWinnerUC({ player: Player.firstPlayer }),
    matrixWinnerUC({}),
  );

  const expectedWinner = realCheckWinnerUC.execute(fakeTikTakToeData);
  expect(expectedWinner.player).toBe(Player.firstPlayer);
});
test('Check-Winner: Expected to CheckVerticalMatrixWinner assign first player to win the game. ', () => {
  const realCheckWinnerUC = new CheckWinnerUC(
    matrixWinnerUC({}),
    matrixWinnerUC({}),
    matrixWinnerUC({ player: Player.firstPlayer }),
  );

  const expectedWinner = realCheckWinnerUC.execute(fakeTikTakToeData);
  expect(expectedWinner.player).toBe(Player.firstPlayer);
});
test('Check-Winner: Expected to no one player win the game. ', () => {
  const realCheckWinnerUC = new CheckWinnerUC(
    matrixWinnerUC({}),
    matrixWinnerUC({}),
    matrixWinnerUC({}),
  );

  const expectedWinner = realCheckWinnerUC.execute(fakeTikTakToeData);
  expect(expectedWinner.player).toBeUndefined();
});
