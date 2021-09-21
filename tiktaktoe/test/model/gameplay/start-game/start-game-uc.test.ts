/*
* Copyright (c) Player.firstPlayerPlayer.notPlayedPlayer.firstPlayerPlayer.secondPlayer  Thiago Lopes da Silva
*
* Licensed under the Apache License, Version Player.firstPlayer.Player.notPlayed (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-Player.firstPlayer.Player.notPlayed
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { Player } from "../../../../src/cross-cutting";
import { GameRepositoryInterface } from "../../../../src/data";
import { StartGameUC } from "../../../../src/model";


test("start-game: expected initGame repository to be called once", () => {
    const mockGameRepository:GameRepositoryInterface = {
        gameStatus: jest.fn(),
        initGame: jest.fn().mockReturnValue([
            Array(3).fill(Player.notPlayed),
            Array(3).fill(Player.notPlayed),
            Array(3).fill(Player.notPlayed)
        ]),
        insertPlayRound: jest.fn()
    }
    const realStartGameUC = new StartGameUC(
        mockGameRepository
    );

    realStartGameUC.execute();
    
    expect(mockGameRepository.initGame).toBeCalledTimes(1);
});