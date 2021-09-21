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

import {
  BaseUseCaseInterface,
  ModelTokenCheckWinnerUC,
  ModelTokenGetGameStatusUC,
  ModelTokenLogging,
  ModelTokenPlayRoundUC,
  ModelTokenResetGameUC,
  ModelTokenStartGameUC,
  PlayRoundUseCaseInterface,
  ResetGameInterface,
  StartGameUseCaseInterface,
  TikTakToePlay,
  TikTakToeWinner,
} from '../../model/index';

import { injectable, inject } from 'tsyringe';
import { Logging } from '../../model/logging/log.interface';
import { GetGameInterface } from '../../model/use-cases/get-game-uc.interface';

@injectable()
export class PresentationDependencies {
  public constructor(
    @inject(ModelTokenLogging) public logWrapper: Logging,
    @inject(ModelTokenResetGameUC) public resetGameUC: ResetGameInterface,
    @inject(ModelTokenPlayRoundUC)
    public playRoundUC: PlayRoundUseCaseInterface<number[][], TikTakToePlay>,
    @inject(ModelTokenStartGameUC) public startGameUC: StartGameUseCaseInterface,
    @inject(ModelTokenCheckWinnerUC) public checkWinnerUC: BaseUseCaseInterface<TikTakToeWinner>,
    @inject(ModelTokenGetGameStatusUC) public getGameStatusUC: GetGameInterface,
  ) {}

  // @inject() checkWinnerUC: BaseUseCaseInterface<TikTakToeWinner>
}
