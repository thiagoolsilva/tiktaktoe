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

import { ReadProjectFilenameInterface } from './read-project-filenames.interface';
import path from 'path';
import read from 'fs-readdir-recursive';
import config from '../config.json';

export class ReadContentFilename implements ReadProjectFilenameInterface {
  getProjectFilenames(rootFolder: string): string[] {
    const absoluteDirectory = path.resolve(rootFolder);
    return read(absoluteDirectory, filter => {
      const excludeFilePattern: string[] = config.excludeFilePattern;

      let containsFilePath = false;
      excludeFilePattern.forEach(item => {
        if (filter.includes(item)) {
          containsFilePath = true;
        }
      });

      return !config.excludeFromSearch.includes(filter) && !containsFilePath;
    });
  }
}
