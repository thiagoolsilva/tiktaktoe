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

import { Player } from '../../cross-cutting/index';
import {
  TikTakToeWinner,
  FirstPlayerWinnerScore,
  SecondPlayerWinnerScore,
} from '../type/game-types';

export class GameUtil {
  public static getWinner(value: number): TikTakToeWinner {
    let winner: TikTakToeWinner = {};

    if (value === FirstPlayerWinnerScore) {
      winner = { player: Player.firstPlayer };
    } else if (value === SecondPlayerWinnerScore) {
      winner = { player: Player.secondPlayer };
    }

    return winner;
  }
}
