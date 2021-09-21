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

import { delay, inject, injectable } from "tsyringe";
import { DataTokenGameRepository, GameRepositoryInterface } from "../../../../data/index";
import { TikTakToePlay } from "../../../type/game-types";
import { PlayRoundValidation } from "./validation/play-round-validation";
import { PlayRoundValidationInterface } from "./validation/play-round-validation.interface";


@injectable()
export class PlayRoundDependencyUC {

    public constructor(
        @inject(delay(() => PlayRoundValidation)) public playRoundValidation: PlayRoundValidationInterface<TikTakToePlay>,
        @inject(DataTokenGameRepository) public gameRepository: GameRepositoryInterface
    ) { }
}