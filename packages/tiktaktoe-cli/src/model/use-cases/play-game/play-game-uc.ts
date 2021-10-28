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

import { TableRepositoryInterface } from "../../../data/table-repository/table-repository.interface";
import { GamePlayInterfaceAdapter } from "../../adapter/game-play-adapter/game-play-adapter.interface";
import { TikTakToeTable } from "./business-object/tiktaktoe-table";
import { PlayGameParserInterface } from "./parser/play-game-parser.interface";
import { PlayGameUCInterface } from "./play-game-uc.interface";

export class PlayGameUC implements PlayGameUCInterface {

    public constructor(
        private readonly playRoleAdapter: GamePlayInterfaceAdapter,
        private readonly tableRepository: TableRepositoryInterface,
        private readonly parser: PlayGameParserInterface) { }

    public execute(tableRole: TikTakToeTable): string {
        const { position, playerCli } = tableRole;

        this.playRoleAdapter.play(position, playerCli);

        const showTableEntity = this.parser.showTableBOToEntity(tableRole);
        return this.tableRepository.save(showTableEntity);
    }

}