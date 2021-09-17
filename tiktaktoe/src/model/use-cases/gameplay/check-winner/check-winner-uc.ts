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

import { TikTakToeWinner } from "../../../type/game-types";
import { BaseUseCaseInterface } from "../../base-uc.interface";
import { CheckWinnerDependency } from "./check-winner.dependency";

export class CheckWinnerUC implements BaseUseCaseInterface<TikTakToeWinner> {

    public constructor(private readonly checkWinnerDependency: CheckWinnerDependency) { }

    public execute(data: number[][]): TikTakToeWinner {
        for (let matrixUC of this.checkWinnerDependency.checkMatrixUC) {
            let result = matrixUC.execute(data);
            if (result.player) {
                return result;
            }
        }

        return {};
    }
}

