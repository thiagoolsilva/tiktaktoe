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

import { GetWinnerUCInterface } from "model/use-cases/get-winner/get-winner-uc.interface";
import { PlayGameUCInterface } from "model/use-cases/play-game/play-game-uc.interface"
import { ResetGameUCInterface } from "model/use-cases/reset-game/reset-game-uc.interface"
import { StartGameUCInterface } from "model/use-cases/start-game/start-game-uc.interface"
import { StatusGameUCInterface } from "model/use-cases/status-game/status-game-uc.interface"

export class GameplayParams {
    readonly playGameUCInterface: PlayGameUCInterface;
    readonly resetGameUCInterface: ResetGameUCInterface;
    readonly startGameUCInterface: StartGameUCInterface;
    readonly statusGameUCInterface: StatusGameUCInterface;
    readonly getWinnerUCInterface: GetWinnerUCInterface;
}