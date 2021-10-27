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

import { container } from 'tsyringe';
import { CheckWinnerUC, PlayRoundUC, ResetGameUseCase, StartGameUC } from '..';
import { Log } from '../logging/log';
import { GetGameStatusUC } from '../use-cases/gameplay/get-game-status/get-game-uc';

export const ModelTokenLogging = 'modelTokenLogging';
container.register(ModelTokenLogging, {
  useClass: Log,
});

// use cases
export const ModelTokenResetGameUC = 'ModelTokenResetGameUC';
container.register(ModelTokenResetGameUC, {
  useClass: ResetGameUseCase,
});

export const ModelTokenPlayRoundUC = 'ModelTokenPlayRoundUC';
container.register(ModelTokenPlayRoundUC, {
  useClass: PlayRoundUC,
});

export const ModelTokenStartGameUC = 'ModelTokenStartGameUC';
container.register(ModelTokenStartGameUC, {
  useClass: StartGameUC,
});

export const ModelTokenGetGameStatusUC = 'ModelTokenGetGameStatusUC';
container.register(ModelTokenGetGameStatusUC, {
  useClass: GetGameStatusUC,
});

export const ModelTokenCheckWinnerUC = 'ModelTokenCheckWinnerUC';
container.register(ModelTokenCheckWinnerUC, {
  useClass: CheckWinnerUC,
});
