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

import { Log } from '../../../src/model/logging/log';

test('Logging: The message should be print out when log is enabled.', () => {
  const expectedMessageLog = 'Hello from Log class.';
  const consoleSpy = jest.spyOn(console, 'log');

  const concreteLog = new Log();
  concreteLog.setMessageStatus(true);
  concreteLog.log(expectedMessageLog);

  expect(consoleSpy).toHaveBeenCalledWith(expectedMessageLog);
});
test('Logging: The message should not be print out when log is disabled.', () => {
  const expectedMessageLog = 'Hello from Log class.';
  const consoleSpy = jest.spyOn(console, 'log');

  const concreteLog = new Log();
  concreteLog.setMessageStatus(false);
  concreteLog.log(expectedMessageLog);

  expect(consoleSpy).not.toHaveBeenCalled();
});
test('Logging: The message should not be print out after call method setMessageStatus. ', () => {
  const expectedMessageLog = 'Hello from Log class.';
  const consoleSpy = jest.spyOn(console, 'log');

  const concreteLog = new Log();
  concreteLog.setMessageStatus(false);
  concreteLog.log(expectedMessageLog);

  expect(consoleSpy).not.toHaveBeenCalled();
});
test('Logging: The message should be print out after call method setMessageStatus. ', () => {
  const expectedMessageLog = 'Hello from Log class.';
  const consoleSpy = jest.spyOn(console, 'log');

  const concreteLog = new Log();
  concreteLog.setMessageStatus(true);
  concreteLog.log(expectedMessageLog);

  expect(consoleSpy).toHaveBeenCalledWith(expectedMessageLog);
});
