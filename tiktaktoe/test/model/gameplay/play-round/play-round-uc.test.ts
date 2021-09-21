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

import { Player, PositionAlreadyUsedException } from "../../../../src/cross-cutting";
import { GameRepositoryInterface } from "../../../../src/data";
import { PlayRoundUC } from "../../../../src/model";
import { PlayRoundDependencyUC } from "../../../../src/model/use-cases/gameplay/play-round/play-round.dependency";
import { PlayRoundValidation } from "../../../../src/model/use-cases/gameplay/play-round/validation/play-round-validation";


test("Play-round: It should be possible to insert the game round.", () => {
    const expectedInitGameData = [
        Array(3).fill(Player.notPlayed),
        Array(3).fill(Player.notPlayed),
        Array(3).fill(Player.notPlayed)
    ];
    const mockGameRepository: GameRepositoryInterface = {
        gameStatus: jest.fn().mockReturnValue(expectedInitGameData),
        initGame: jest.fn(),
        insertPlayRound: jest.fn()
    }
    const dependencies = new PlayRoundDependencyUC(
        new PlayRoundValidation(),
        mockGameRepository
    )
    const realPlayGroundUC = new PlayRoundUC(dependencies);

    realPlayGroundUC.execute({
        player: Player.firstPlayer,
        xPosition: 0,
        yPosition: 0
    });

    expect(mockGameRepository.gameStatus).toBeCalledTimes(2);
    expect(mockGameRepository.insertPlayRound).toBeCalledTimes(1);
});

test("Play-round: It should not be possible to insert the game round.", () => {
    const expectedInitGameData = [
        Array(3).fill(Player.firstPlayer),
        Array(3).fill(Player.notPlayed),
        Array(3).fill(Player.notPlayed)
    ];
    const mockGameRepository: GameRepositoryInterface = {
        gameStatus: jest.fn().mockReturnValue(expectedInitGameData),
        initGame: jest.fn(),
        insertPlayRound: jest.fn()
    }
    const dependencies = new PlayRoundDependencyUC(
        new PlayRoundValidation(),
        mockGameRepository
    )
    const realPlayGroundUC = new PlayRoundUC(dependencies);
    expect(() =>
        realPlayGroundUC.execute({
            player: Player.firstPlayer,
            xPosition: 0,
            yPosition: 0
        })).toThrow(PositionAlreadyUsedException);
});