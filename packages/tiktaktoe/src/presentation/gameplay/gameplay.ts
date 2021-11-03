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

import { injectable, singleton } from 'tsyringe';
import { TikTakToePlay, TikTakToeWinner } from '../../model';
import { GameplayInterface } from '../gameplay.interface';
import { PresentationDependencies } from './gameplay.dependencies';

@injectable()
@singleton()
export class GamePlay implements GameplayInterface {
  public constructor(public dependencies: PresentationDependencies) {}

  public startGame(): number[][] {
    return this.dependencies.startGameUC.execute();
  }

  public getWinner(): TikTakToeWinner {
    const gameStatus = this.dependencies.getGameStatusUC.execute();
    return this.dependencies.checkWinnerUC.execute(gameStatus);
  }

  public resetGame(): number[][] {
    return this.dependencies.resetGameUC.execute();
  }

  public gameStatus(): number[][] {
    return this.dependencies.getGameStatusUC.execute();
  }

  public playRound(play: TikTakToePlay): TikTakToeWinner {
    const playRound = this.dependencies.playRoundUC.execute(play);

    return this.dependencies.checkWinnerUC.execute(playRound);
  }
}
