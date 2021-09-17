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

import { PositionAlreadyUsedException } from "../../../../../cross-cutting/index";
import { TikTakToePlay } from "../../../../type/game-types";
import { PlayRoundValidationInterface } from "./play-round-validation.interface";

export class PlayRoundValidation implements PlayRoundValidationInterface<TikTakToePlay> {

    public checkIfPositionIsAlreadyFilledOrThrow(data: number[][], play: TikTakToePlay): void {
        const isPositionAlreadyFilled = data[play.xPosition][play.yPosition];

        if (isPositionAlreadyFilled !== 0) {
            throw new PositionAlreadyUsedException(`The position x ${play.xPosition}, y ${play.yPosition} is already filled`);
        }
    }

}