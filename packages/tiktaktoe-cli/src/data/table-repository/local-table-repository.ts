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

import { table } from 'table';
import { TableEntity } from './persistent-object/table-entity';
import { LocalTableRepositoryInterface } from './table-repository.interface';

export class LocalTableRepository implements LocalTableRepositoryInterface {
  private readonly tableSize = 3;

  private readonly initialTableValue = '-';

  private data: string[][] = [];

  public save(rolePosition: TableEntity): string {
    const { xPosition, yPosition, valueInPosition } = rolePosition;
    this.data[xPosition][yPosition] = valueInPosition;

    return this.getGameTable();
  }

  public getGameTable(): string {
    return table(this.data);
  }

  public resetGameTable(): void {
    this.data = [
      Array(this.tableSize).fill(this.initialTableValue),
      Array(this.tableSize).fill(this.initialTableValue),
      Array(this.tableSize).fill(this.initialTableValue),
    ];
  }
}
