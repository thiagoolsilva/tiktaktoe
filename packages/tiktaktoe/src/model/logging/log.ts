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

import { singleton } from 'tsyringe';
import { Logging } from './log.interface';

@singleton()
export class Log implements Logging {
  private shouldLog: boolean = false;

  public setMessageStatus(shouldLog: boolean) {
    this.shouldLog = shouldLog;
  }

  public log(message: string): void {
    if (this.shouldLog) {
      console.log(message);
    }
  }
}
