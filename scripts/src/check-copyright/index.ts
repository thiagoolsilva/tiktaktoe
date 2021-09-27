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

import { CheckCopyrightUseCase } from "./use-case/check-copyright-uc";
import { ReadFileContent } from "./use-case/data/read-file-content";
import { ReadFileContentInterface } from "./use-case/data/read-file-content.interface";
import { ReadContentFilename as ReadProjectFilename } from "./use-case/data/read-project-filenames";
import { ReadProjectFilenameInterface } from "./use-case/data/read-project-filenames.interface";

export class Index {

    async main(): Promise<void> {
        const readFileContentInterface: ReadFileContentInterface = new ReadFileContent();
        const readProjectFilenameInterface: ReadProjectFilenameInterface = new ReadProjectFilename();
        const checkCopyrightUseCase = new CheckCopyrightUseCase(readFileContentInterface, readProjectFilenameInterface);
        const rootProjectFolder = ".";
        await checkCopyrightUseCase.execute(rootProjectFolder);
    }
}


void new Index().main();
