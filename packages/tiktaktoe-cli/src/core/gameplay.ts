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

import readlineSync from "readline-sync";
import { PresentationFactory, GamePlay, Player } from "@tiktaktoe/core";
import { PlayRoleAdapter } from "./game-adapter/play-role-adapter";

export class GamePlayCli {

    private gameplay: GamePlay;

    public constructor() {
        this.gameplay = new PresentationFactory().createGame();
    }

    public main(): void {
        const playRoleOptions = [...Array(9).keys()].map(value => value + 1).map(value => value.toString());
        const playRoleAdapter = new PlayRoleAdapter(this.gameplay);
        this.gameplay.startGame();
        while (true) {
            const playType = readlineSync.keyInYN('Are you first Player?');
            const playTypeConverted = typeof playType === 'boolean' && playType === true ? Player.firstPlayer : Player.secondPlayer;

            const playChooseIndex = readlineSync.keyInSelect(playRoleOptions, 'Please choose one option below.');
            playRoleAdapter.play(Number(playRoleOptions[playChooseIndex]), playTypeConverted);

            const status = this.gameplay.getWinner();
            if (status.player) {
                const winnerStr = status.player === Player.firstPlayer ? 'First Player Won the game' : 'Second Player Won the game';
                console.log(`------------->${winnerStr}<----------`);
                break;
            }
        }
    }
}
