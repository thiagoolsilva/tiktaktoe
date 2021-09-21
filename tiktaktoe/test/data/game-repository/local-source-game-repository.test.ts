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

import { MatrixSquareLength, Player } from "../../../src/cross-cutting";
import { LocalSourceGameRepository } from "../../../src/data";

test("LocalSourceGameRepository: The method initGame should return a valid data source", () => {
    const expectedLocalSource = [
        Array(MatrixSquareLength).fill(Player.notPlayed),
        Array(MatrixSquareLength).fill(Player.notPlayed),
        Array(MatrixSquareLength).fill(Player.notPlayed)
    ];
    const realLocalSourceGameRepository = new LocalSourceGameRepository();
    expect(realLocalSourceGameRepository.initGame()).toEqual(expectedLocalSource);
});
test("LocalSourceGameRepository: The method getStatus should return a valid data source afted call initGame()", () => {
    const expectedLocalSource = [
        Array(MatrixSquareLength).fill(Player.notPlayed),
        Array(MatrixSquareLength).fill(Player.notPlayed),
        Array(MatrixSquareLength).fill(Player.notPlayed)
    ];
    const realLocalSourceGameRepository = new LocalSourceGameRepository();
    expect(realLocalSourceGameRepository.initGame()).toEqual(expectedLocalSource);
    expect(realLocalSourceGameRepository.gameStatus()).toEqual(expectedLocalSource);
});
test("LocalSourceGameRepository: The method getStatus should return a valid data source after call initGame()", () => {
    const expectedLocalSource = [
        Array(MatrixSquareLength).fill(Player.notPlayed),
        [Player.notPlayed, Player.firstPlayer, Player.notPlayed],
        Array(MatrixSquareLength).fill(Player.notPlayed)
    ];

    const realLocalSourceGameRepository = new LocalSourceGameRepository();

    realLocalSourceGameRepository.initGame()
    realLocalSourceGameRepository.insertPlayRound(1,1,Player.firstPlayer);

    expect(realLocalSourceGameRepository.gameStatus()).toEqual(expectedLocalSource);
});
test("LocalSourceGameRepository: The method getStatus should return a empty data when initGame is not called.", () => {
    const realLocalSourceGameRepository = new LocalSourceGameRepository();
    expect(realLocalSourceGameRepository.gameStatus()).toEqual([]);
});