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
import { CheckVerticalMatrixWinner } from '../../../../../src/model/use-cases/matrix/check-vertical-matrix/check-vertical-matrix-winner-uc';

const createRealObject = (data: number[][]): TikTakToeWinner => {
  const realObject = new CheckVerticalMatrixWinner({
    log: jest.fn(),
  });

  return realObject.execute(data);
};

test('Vertical: First player should win the game on first column.', () => {
  const horizontalData = [
    [Player.firstPlayer, Player.notPlayed, Player.notPlayed],
    [Player.firstPlayer, Player.notPlayed, Player.notPlayed],
    [Player.firstPlayer, Player.notPlayed, Player.notPlayed],
  ];
  const horizontalResult = createRealObject(horizontalData);
  expect(horizontalResult.player).toBe(Player.firstPlayer);
});
test('Vertical: First player should win the game on Second column.', () => {
  const horizontalData = [
    [Player.notPlayed, Player.firstPlayer, Player.notPlayed],
    [Player.notPlayed, Player.firstPlayer, Player.notPlayed],
    [Player.notPlayed, Player.firstPlayer, Player.notPlayed],
  ];
  const horizontalResult = createRealObject(horizontalData);
  expect(horizontalResult.player).toBe(Player.firstPlayer);
});
test('Vertical: First player should win the game on Third column.', () => {
  const horizontalData = [
    [Player.notPlayed, Player.notPlayed, Player.firstPlayer],
    [Player.notPlayed, Player.notPlayed, Player.firstPlayer],
    [Player.notPlayed, Player.notPlayed, Player.firstPlayer],
  ];
  const horizontalResult = createRealObject(horizontalData);
  expect(horizontalResult.player).toBe(Player.firstPlayer);
});

test('Vertical: Second player should win the game on first column.', () => {
  const horizontalData = [
    [Player.secondPlayer, Player.notPlayed, Player.notPlayed],
    [Player.secondPlayer, Player.notPlayed, Player.notPlayed],
    [Player.secondPlayer, Player.notPlayed, Player.notPlayed],
  ];
  const horizontalResult = createRealObject(horizontalData);
  expect(horizontalResult.player).toBe(Player.secondPlayer);
});
test('Vertical: Second player should win the game on Second column.', () => {
  const horizontalData = [
    [Player.notPlayed, Player.secondPlayer, Player.notPlayed],
    [Player.notPlayed, Player.secondPlayer, Player.notPlayed],
    [Player.notPlayed, Player.secondPlayer, Player.notPlayed],
  ];
  const horizontalResult = createRealObject(horizontalData);
  expect(horizontalResult.player).toBe(Player.secondPlayer);
});
test('Vertical: Second player should win the game on Third column.', () => {
  const horizontalData = [
    [Player.notPlayed, Player.notPlayed, Player.secondPlayer],
    [Player.notPlayed, Player.notPlayed, Player.secondPlayer],
    [Player.notPlayed, Player.notPlayed, Player.secondPlayer],
  ];
  const horizontalResult = createRealObject(horizontalData);
  expect(horizontalResult.player).toBe(Player.secondPlayer);
});
test('Vertical: No player should win the game when exists different player in first column', () => {
  const horizontalData = [
    [Player.firstPlayer, Player.notPlayed, Player.notPlayed],
    [Player.notPlayed, Player.notPlayed, Player.notPlayed],
    [Player.secondPlayer, Player.notPlayed, Player.notPlayed],
  ];
  const horizontalResult = createRealObject(horizontalData);
  expect(horizontalResult.player).toBeUndefined();
});
test('Vertical: No player should win the game when exists different player in second column', () => {
  const horizontalData = [
    [Player.firstPlayer, Player.firstPlayer, Player.notPlayed],
    [Player.notPlayed, Player.notPlayed, Player.notPlayed],
    [Player.secondPlayer, Player.secondPlayer, Player.notPlayed],
  ];
  const horizontalResult = createRealObject(horizontalData);
  expect(horizontalResult.player).toBeUndefined();
});
test('Vertical: No player should win the game when exists different player in Third column', () => {
  const horizontalData = [
    [Player.firstPlayer, Player.firstPlayer, Player.firstPlayer],
    [Player.notPlayed, Player.notPlayed, Player.notPlayed],
    [Player.secondPlayer, Player.secondPlayer, Player.secondPlayer],
  ];
  const horizontalResult = createRealObject(horizontalData);
  expect(horizontalResult.player).toBeUndefined();
});
