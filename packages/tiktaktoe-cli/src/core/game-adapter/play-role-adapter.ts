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

import { GamePlay, TikTakToePlay, Player } from "@tiktaktoe/core";
import { PlayRoleInterfaceAdapter } from "./play-role.interface";

export class PlayRoleAdapter implements PlayRoleInterfaceAdapter {

    public constructor(private gamePlay: GamePlay) { }

    public play(play: number, player: Player): void {
        let nextPlay: TikTakToePlay = {
            player: player,
            xPosition: 0,
            yPosition: 0
        };
        switch (play) {
            case 2:
                nextPlay.yPosition = 1
                break;
            case 3:
                nextPlay.yPosition = 2;
                break;
            case 4:
                nextPlay.xPosition = 1
                break;
            case 5:
                nextPlay.xPosition = 1
                nextPlay.yPosition = 1
                break;
            case 6:
                nextPlay.xPosition = 1
                nextPlay.yPosition = 2
                break;
            case 7:
                nextPlay.xPosition = 2
                break;
            case 8:
                nextPlay.xPosition = 2
                nextPlay.yPosition = 1
                break;
            case 9:
                nextPlay.xPosition = 2
                nextPlay.yPosition = 2
                break;

        }
        this.gamePlay.playRound(nextPlay);
    }
}