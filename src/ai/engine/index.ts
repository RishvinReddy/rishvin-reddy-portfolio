import { parseIntent } from './router';
import { generateResponse, AIResponseData } from './response';
import { Context } from './context';

export function processUserMessage(message: string, currentContext: Context): { data: AIResponseData, newContext?: Context } {
  const isFileOpen = !!currentContext.activeFileContent;
  const parsed = parseIntent(message, currentContext.activeProject, isFileOpen);
  return generateResponse(parsed, currentContext);
}

export * from './context';
export * from './response';
