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
import { Log } from "../../../logging/log";
import { Logging } from "../../../logging/log.interface";
import { TikTakToeWinner } from "../../../type/game-types";
import { GameUtil } from "../../../util/game-util";
import { BaseUseCaseInterface } from "../../base-uc.interface";

@injectable()
export class CheckDiagonalMatrixWinnerUC implements BaseUseCaseInterface<TikTakToeWinner> {

    constructor(@inject(delay(() => Log)) private readonly logWrapper: Logging) { }

    public execute(data: number[][]): TikTakToeWinner {
        let diagonalWinner = this.getPrincipalDiagonalWinner(data);
        if (diagonalWinner.player) {
            return diagonalWinner;
        }

        diagonalWinner = this.getInverseDiagonalWinner(data);
        if (diagonalWinner.player) {
            return diagonalWinner;
        }

        return {};
    }

    private getPrincipalDiagonalWinner(data: number[][]): TikTakToeWinner {
        let result = 0;
        let subIndex = data.length;
        for (let count = 0; count < data.length; count++) {
            result += data[count][subIndex - 1];
            this.logWrapper.log(`principal count, ${count}, subIndex, ${subIndex}, value, ${data[count][subIndex - 1]},result, ${result}`);
            subIndex--;
        }

        return GameUtil.getWinner(result);
    }

    private getInverseDiagonalWinner(data: number[][]): TikTakToeWinner {
        let result = 0;
        for (let count = 0; count < data.length; count++) {
            result += data[count][count];
            this.logWrapper.log(`inverse [index][index], ${count}, value, ${data[count][count]}, result, ${result}`);
        }

        return GameUtil.getWinner(result);
    }
}