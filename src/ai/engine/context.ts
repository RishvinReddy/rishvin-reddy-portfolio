export interface Context {
  activeProject?: string; // id of the active project
  activeRepo?: string; // name of the repo currently opened in IDE
  activeFile?: string; // path of the file currently opened
  activeFileContent?: string; // raw content of the file
  activeLanguage?: string;
  
  // NEW V2 FEATURES
  activeTopic?: string; // can be project id, skill category, or general domain
  conversationHistory?: { intent: string, query: string, entities: string[] }[]; // Memory of intents
  sentiment?: 'GREETING' | 'QUESTION' | 'STATEMENT' | 'NEUTRAL';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  actions?: { label: string; action: string }[];
}

export interface ChatSession {
  messages: ChatMessage[];
  context: Context;
}
