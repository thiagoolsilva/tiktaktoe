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

import { injectable } from "tsyringe";
import { MatrixSquareLength, Player } from "../../cross-cutting/index";
import { LocalSourceGameRepositoryInterface } from "./game-repository.interface";

@injectable()
export class LocalSourceGameRepository implements LocalSourceGameRepositoryInterface {

    private data: number[][] = [];

    public initGame(): number[][] {
        this.data = [
            Array(MatrixSquareLength).fill(Player.notPlayed),
            Array(MatrixSquareLength).fill(Player.notPlayed),
            Array(MatrixSquareLength).fill(Player.notPlayed)
        ];

        return this.data;
    }

    public gameStatus(): number[][] {
        return this.data;
    }

    public insertPlayRound(xPos: number, yPos: number, value: number): number[][] {
        this.data[xPos][yPos] = value;

        return this.data;
    }
}
