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

import { TableEntity } from "data/table-repository/persistent-object/table-entity";
import { TikTakToeTable } from "../business-object/tiktaktoe-table";
import { PlayGameParserInterface } from "./play-game-parser.interface";

export class PlayGameParser implements PlayGameParserInterface {
    public showTableBOToEntity(tikTakToeTable: TikTakToeTable): TableEntity {
        const { position, valueInPosition } = tikTakToeTable;
        const tableEntity: TableEntity = {
            xPosition: 0,
            yPosition: 0,
            valueInPosition: valueInPosition
        };
        switch (position) {
            case 2:
                tableEntity.yPosition = 1;
                break;
            case 3:
                tableEntity.yPosition = 2;
                break;
            case 4:
                tableEntity.xPosition = 1;
                break;
            case 5:
                tableEntity.xPosition = 1;
                tableEntity.yPosition = 1;
                break;
            case 6:
                tableEntity.xPosition = 1;
                tableEntity.yPosition = 2;
                break;
            case 7:
                tableEntity.xPosition = 2;
                break;
            case 8:
                tableEntity.xPosition = 2;
                tableEntity.yPosition = 1;
                break;
            case 9:
                tableEntity.xPosition = 2;
                tableEntity.yPosition = 2;
                break;
        }
        return tableEntity;
    }

}