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

import { Player } from '../../../../../src/cross-cutting';
import { TikTakToeWinner } from '../../../../../src/model';
import { CheckHorizontalMatrixWinner } from '../../../../../src/model/use-cases/matrix/check-horizontal-matrix/check-horizontal-matrix-winner-uc';

test('Horizontal: First player should win the game on first row.', () => {
  const horizontalData = [
    Array(3).fill(Player.firstPlayer),
    Array(3).fill(Player.notPlayed),
    Array(3).fill(Player.notPlayed),
  ];
  const horizontalResult = createRealObject(horizontalData);
  expect(horizontalResult.player).toBe(Player.firstPlayer);
});
test('Horizontal: First player should win the game on second row.', () => {
  const horizontalData = [
    Array(3).fill(Player.notPlayed),
    Array(3).fill(Player.firstPlayer),
    Array(3).fill(Player.notPlayed),
  ];
  const horizontalResult = createRealObject(horizontalData);
  expect(horizontalResult.player).toBe(Player.firstPlayer);
});
test('Horizontal: First player should win the game on Third row.', () => {
  const horizontalData = [
    Array(3).fill(Player.notPlayed),
    Array(3).fill(Player.notPlayed),
    Array(3).fill(Player.firstPlayer),
  ];
  const horizontalResult = createRealObject(horizontalData);
  expect(horizontalResult.player).toBe(Player.firstPlayer);
});
test('Horizontal: Second player should win the game on first row.', () => {
  const horizontalData = [
    Array(3).fill(Player.secondPlayer),
    Array(3).fill(Player.notPlayed),
    Array(3).fill(Player.notPlayed),
  ];
  const horizontalResult = createRealObject(horizontalData);
  expect(horizontalResult.player).toBe(Player.secondPlayer);
});
test('Horizontal: Second player should win the game on second row.', () => {
  const horizontalData = [
    Array(3).fill(Player.notPlayed),
    Array(3).fill(Player.secondPlayer),
    Array(3).fill(Player.notPlayed),
  ];
  const horizontalResult = createRealObject(horizontalData);
  expect(horizontalResult.player).toBe(Player.secondPlayer);
});
test('Horizontal: Second player should win the game on Third row.', () => {
  const horizontalData = [
    Array(3).fill(Player.notPlayed),
    Array(3).fill(Player.notPlayed),
    Array(3).fill(Player.secondPlayer),
  ];
  const horizontalResult = createRealObject(horizontalData);
  expect(horizontalResult.player).toBe(Player.secondPlayer);
});
test('Horizontal: No one should win the game when exists two secondPlayed rolled in first row.', () => {
  const horizontalData =
    [[Player.firstPlayer, Player.firstPlayer, 0],
    Array(3).fill(Player.notPlayed),
    Array(3).fill(Player.notPlayed)];

  const horizontalResult = createRealObject(horizontalData);
  expect(horizontalResult.player).toBe(undefined);
});
test('Horizontal: No user should win the game', () => {
  const horizontalData = [
    Array(3).fill(Player.notPlayed),
    Array(3).fill(Player.notPlayed),
    Array(3).fill(Player.notPlayed),
  ];
  const horizontalResult = createRealObject(horizontalData);
  expect(horizontalResult.player).toBeUndefined();
});

const createRealObject = (data: number[][]): TikTakToeWinner => {
  const realObject = new CheckHorizontalMatrixWinner(
    {
      log: jest.fn(),
    }
  );

  return realObject.execute(data);
};
