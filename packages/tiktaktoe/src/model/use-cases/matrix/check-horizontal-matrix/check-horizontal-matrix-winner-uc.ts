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

import { Logging } from '../../../logging/log.interface';
import { TikTakToeWinner } from '../../../type/game-types';
import { delay, inject, injectable } from 'tsyringe';
import { GameUtil } from '../../../util/game-util';
import { BaseUseCaseInterface } from '../../base-uc.interface';
import { Log } from '../../../logging/log';

@injectable()
export class CheckHorizontalMatrixWinner implements BaseUseCaseInterface<TikTakToeWinner> {
  public constructor(@inject(delay(() => Log)) private readonly logWrapper: Logging) {}

  public execute(data: number[][]): TikTakToeWinner {
    this.logWrapper.log(`--------->Executing CheckHorizontalMatrixWinner<----------`);
    for (let count = 0; count <= data.length - 1; count++) {
      const horizontalSumScore = data[count].reduce((previous, currentValue) => {
        return previous + currentValue;
      });
      const winner = GameUtil.getWinner(horizontalSumScore);
      this.logWrapper.log(`horizontalSumScore: ${horizontalSumScore}}, winnerObject: ${JSON.stringify(winner, null, 2)}, winner: ${JSON.stringify(winner.player)}`);

      if (winner.player) {
        return winner;
      }
    }
    this.logWrapper.log(`--------->End CheckHorizontalMatrixWinner<----------\n`);

    return {};
  }
}
