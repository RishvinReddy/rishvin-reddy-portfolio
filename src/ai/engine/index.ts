import { parseIntent } from './router';
import { generateResponse } from './response';
import { Context } from './context';

export function processUserMessage(message: string, currentContext: Context) {
  const isFileOpen = !!currentContext.activeFileContent;
  const parsed = parseIntent(message, currentContext.activeProject, isFileOpen);
  return generateResponse(parsed, currentContext);
}

export * from './context';
