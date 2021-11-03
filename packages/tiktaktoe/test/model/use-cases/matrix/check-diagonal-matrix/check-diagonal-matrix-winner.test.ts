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

import { CheckDiagonalMatrixWinnerUC } from '../../../../../src/model/use-cases/matrix/check-diagonal-matrix/check-diagonal-matrix-winner-uc';
import { Player } from '../../../../../src/cross-cutting/index';
import { TikTakToeWinner } from '../../../../../src/model';

const createRealObject = (data: number[][]): TikTakToeWinner => {
  const realObject = new CheckDiagonalMatrixWinnerUC({
    log: jest.fn(),
  });

  return realObject.execute(data);
};

test('Principal Diagonal: second user Should win the game.', () => {
  const principalDiagonal: number[][] = [
    [Player.secondPlayer, Player.notPlayed, Player.notPlayed],
    [Player.notPlayed, Player.secondPlayer, Player.notPlayed],
    [Player.notPlayed, Player.notPlayed, Player.secondPlayer],
  ];
  const result = createRealObject(principalDiagonal);
  expect(result.player).toBe(Player.secondPlayer);
});
test('Principal Diagonal: first user Should win the game.', () => {
  const principalDiagonal: number[][] = [
    [Player.firstPlayer, Player.notPlayed, Player.notPlayed],
    [Player.notPlayed, Player.firstPlayer, Player.notPlayed],
    [Player.notPlayed, Player.notPlayed, Player.firstPlayer],
  ];
  const result = createRealObject(principalDiagonal);
  expect(result.player).toBe(Player.firstPlayer);
});
test('Principal|Inverse Diagonal: No user Should win the game.', () => {
  const principalDiagonal: number[][] = [
    [Player.notPlayed, Player.notPlayed, Player.notPlayed],
    [Player.secondPlayer, Player.notPlayed, Player.notPlayed],
    [Player.notPlayed, Player.notPlayed, Player.notPlayed],
  ];
  const result = createRealObject(principalDiagonal);
  expect(result.player).toBeUndefined();
});

test('Principal Diagonal: No user Should not win the game when exists two players in the same line.', () => {
  const principalDiagonal: number[][] = [
    [Player.secondPlayer, Player.notPlayed, Player.notPlayed],
    [Player.notPlayed, Player.notPlayed, Player.notPlayed],
    [Player.notPlayed, Player.notPlayed, Player.secondPlayer],
  ];
  const result = createRealObject(principalDiagonal);
  expect(result.player).toBeUndefined();
});

test('Inverse Diagonal: second user Should win the game.', () => {
  const principalDiagonal: number[][] = [
    [Player.notPlayed, Player.notPlayed, Player.secondPlayer],
    [Player.notPlayed, Player.secondPlayer, Player.notPlayed],
    [Player.secondPlayer, Player.notPlayed, Player.notPlayed],
  ];
  const result = createRealObject(principalDiagonal);
  expect(result.player).toBe(Player.secondPlayer);
});
test('Inverse Diagonal: first user Should win the game.', () => {
  const principalDiagonal: number[][] = [
    [Player.notPlayed, Player.notPlayed, Player.firstPlayer],
    [Player.notPlayed, Player.firstPlayer, Player.notPlayed],
    [Player.firstPlayer, Player.notPlayed, Player.notPlayed],
  ];
  const result = createRealObject(principalDiagonal);
  expect(result.player).toBe(Player.firstPlayer);
});
test('Inverse Diagonal: No user Should not win the game when exists two players in the same line.', () => {
  const principalDiagonal: number[][] = [
    [Player.notPlayed, Player.notPlayed, Player.secondPlayer],
    [Player.notPlayed, Player.notPlayed, Player.notPlayed],
    [Player.secondPlayer, Player.notPlayed, Player.notPlayed],
  ];
  const result = createRealObject(principalDiagonal);
  expect(result.player).toBeUndefined();
});
