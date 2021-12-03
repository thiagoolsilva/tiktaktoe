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

import { ReadFileContentInterface } from './data/read-file-content.interface';
import { ReadProjectFilenameInterface } from './data/read-project-filenames.interface';
import config from './config.json';
import path from 'path';
import { exit } from 'yargs';

export class CheckCopyrightUseCase {
  public constructor(
    private readonly readFileContentInterface: ReadFileContentInterface,
    private readonly readContentFilenameInterface: ReadProjectFilenameInterface,
  ) {}

  public async execute(rootPath: string): Promise<void> {
    const result: fileCheckResult[] = [];
    const filesToBeChecked = this.readContentFilenameInterface.getProjectFilenames(rootPath);

    for await (let item of filesToBeChecked) {
      const fullPath = path.join(rootPath, item);
      const fileContent = await this.readFileContentInterface.readAsyncContentFile(fullPath);
      result.push({
        filename: item,
        hasValidCopyright: fileContent.includes(config.copyright),
      });
    }

    const filesWithoutExpectedCopyright = result.filter(item => item.hasValidCopyright === false);
    if (filesWithoutExpectedCopyright.length) {
      console.log(
        'files Without Expected Copyright',
        JSON.stringify(filesWithoutExpectedCopyright, null, 2),
      );
      const exitError = 1;
      exit(exitError, new Error('there is some files without the expected copyright'));
    }
  }
}

type fileCheckResult = {
  filename: string;
  hasValidCopyright: boolean;
};
