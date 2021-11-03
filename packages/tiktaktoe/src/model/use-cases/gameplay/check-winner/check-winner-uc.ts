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

import { autoInjectable, delay, inject } from 'tsyringe';
import { TikTakToeWinner } from '../../../type/game-types';
import { BaseUseCaseInterface } from '../../base-uc.interface';
import { CheckDiagonalMatrixWinnerUC } from '../../matrix/check-diagonal-matrix/check-diagonal-matrix-winner-uc';
import { CheckHorizontalMatrixWinner } from '../../matrix/check-horizontal-matrix/check-horizontal-matrix-winner-uc';
import { CheckVerticalMatrixWinner } from '../../matrix/check-vertical-matrix/check-vertical-matrix-winner-uc';

@autoInjectable()
export class CheckWinnerUC implements BaseUseCaseInterface<TikTakToeWinner> {
  private readonly matrixUC: BaseUseCaseInterface<TikTakToeWinner>[];

  public constructor(
    @inject(delay(() => CheckDiagonalMatrixWinnerUC))
    private checkDiagonalUC: BaseUseCaseInterface<TikTakToeWinner>,
    @inject(delay(() => CheckHorizontalMatrixWinner))
    private checkHorizontalUC: BaseUseCaseInterface<TikTakToeWinner>,
    @inject(delay(() => CheckVerticalMatrixWinner))
    private checkVerticalUC: BaseUseCaseInterface<TikTakToeWinner>,
  ) {
    this.matrixUC = [this.checkDiagonalUC, this.checkHorizontalUC, this.checkVerticalUC];
  }

  public execute(data: number[][]): TikTakToeWinner {
    // eslint-disable-next-line no-restricted-syntax
    for (const matrixUC of this.matrixUC) {
      const result = matrixUC.execute(data);
      if (result.player) {
        return result;
      }
    }

    return {};
  }
}
