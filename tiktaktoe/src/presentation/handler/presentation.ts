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

import { TikTakToePlay, TikTakToeWinner } from "../../model/index";

import { GameplayInterface } from "../gameplay.interface";
import { PresentationDependencies } from "./presentation.dependencies";

export class Handler implements GameplayInterface {

    constructor(private dependencies: PresentationDependencies) { }

    public startGame(): number[][] {
        return this.dependencies.startGameUC.execute();
    }
    public resetGame(): number[][] {
        return this.dependencies.resetGameUC.execute();
    }
    public gameStatus(): number[][] {
        return this.dependencies.source;
    }

    public playRound(data: number[][], play: TikTakToePlay): TikTakToeWinner {
        const playRound = this.dependencies.playRoundUC.execute(data, play);

        return this.dependencies.checkWinnerUC.execute(playRound);
    }
}