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

import chalk from 'chalk';
import readlineSync from "readline-sync";
import { PlayerCli } from "../model/business-object/player-cli";
import { GameplayParams } from "./view-object/gameplay-params";
import { PlayPositions } from "../cross-cutting/types/constants";

export class GamePlayCli {

    private currentPlayer: PlayerCli = PlayerCli.firstPlayer;

    public constructor(
        private readonly gameplayParams: GameplayParams
    ) {
        this.gameplayParams.startGameUCInterface.execute();
    }

    public main(): void {
        const matrixSize = 9;
        const invalidChooseOptionIndex = -1;
        const playRoleOptions = [...Array(matrixSize).keys()].map(value => value + 1).map(value => value.toString());
        try {
            while (true) {
                const valueInPosition = this.currentPlayer == PlayerCli.firstPlayer ? PlayPositions.POSITION_2 : PlayPositions.POSITION_1;
                const currentGameStatus = this.gameplayParams.statusGameUCInterface.getCurrentGameStatus();
                readlineSync.keyInPause(`Hi [${this.currentPlayer}]. Your key is [${valueInPosition}] \n${currentGameStatus}\n`)

                const playChooseIndex = readlineSync.keyInSelect(playRoleOptions, 'Please choose one option.');
                if (Number(playChooseIndex) !== invalidChooseOptionIndex) {
                    const userOption = Number(playRoleOptions[playChooseIndex]);

                    this.gameplayParams.playGameUCInterface.execute({
                        playerCli: this.currentPlayer,
                        position: userOption,
                        valueInPosition
                    });

                    const checkWinner = this.gameplayParams.getWinnerUCInterface.getWinner();
                    if (checkWinner?.playerCli) {
                        console.log(chalk.blueBright(`The winner is ${this.currentPlayer}`));
                        break;
                    }

                    this.currentPlayer = this.currentPlayer === PlayerCli.firstPlayer ? PlayerCli.secondPlayer : PlayerCli.firstPlayer;
                }
            }
        }
        catch (error:any) {
            console.log(chalk.redBright(`The position was already chosen.`));
        }
    }
}
