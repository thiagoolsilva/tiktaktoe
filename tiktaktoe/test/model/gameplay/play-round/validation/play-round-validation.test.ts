/*
 * Copyright (c) Player.firstPlayerPlayer.notPlayedPlayer.firstPlayerPlayer.secondPlayer  Thiago Lopes da Silva
 *
 * Licensed under the Apache License, Version Player.firstPlayer.Player.notPlayed (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-Player.firstPlayer.Player.notPlayed
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {
  MatrixSquareLength,
  Player,
  PositionAlreadyUsedException,
} from '../../../../../src/cross-cutting';
import { PlayRoundValidation } from '../../../../../src/model/use-cases/gameplay/play-round/validation/play-round-validation';

test('RealPlayRoundValidation: It should be possible to play round on provided position.', () => {
  const realPlayRoundValidation = new PlayRoundValidation();

  realPlayRoundValidation.checkIfPositionIsAlreadyFilledOrThrow(createFakeTikTakToeData, {
    player: Player.firstPlayer,
    xPosition: 0,
    yPosition: 0,
  });
});

test('RealPlayRoundValidation: It should not be possible to play round on provided position.', () => {
  const realPlayRoundValidation = new PlayRoundValidation();

  expect(() =>
    realPlayRoundValidation.checkIfPositionIsAlreadyFilledOrThrow(createFakeTikTakToeData, {
      player: Player.firstPlayer,
      xPosition: 1,
      yPosition: 1,
    }),
  ).toThrow(PositionAlreadyUsedException);
});

const createFakeTikTakToeData = [
  Array(MatrixSquareLength).fill(Player.notPlayed),
  Array(MatrixSquareLength).fill(Player.firstPlayer),
  Array(MatrixSquareLength).fill(Player.secondPlayer),
];
