# Portfolio System Architecture

This document outlines the technical architecture of the personal portfolio website. 

## System Architecture

The portfolio uses a modern, server-rendered React architecture powered by Next.js.

```mermaid
flowchart LR
    U[User Browser]
    U --> CDN[Vercel Edge CDN]
    CDN --> NEXT[Next.js Server]
    
    subgraph Frontend Architecture
        NEXT --> APP[App Router]
        APP --> LAY[Layouts]
        APP --> PG[Pages]
        PG --> COMP[React Components]
    end
    
    subgraph Data & Assets
        COMP --> DATA[TS Data Modules]
        COMP --> ASSETS[Public Static Assets]
    end
    
    subgraph Design System
        COMP --> TW[Tailwind CSS]
        COMP --> FM[Framer Motion]
    end
```

## Application Flow

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Vercel
    participant NextJS
    
    User->>Browser: Request rishvinreddy.vercel.app
    Browser->>Vercel: HTTP GET Request
    Vercel->>NextJS: Route Request
    NextJS->>NextJS: Generate/Serve HTML
    NextJS-->>Vercel: Return Optimized HTML
    Vercel-->>Browser: Deliver Payload
    Browser->>Browser: Hydrate React Components
    Browser-->>User: Interactive Experience
```

## Content Architecture

Portfolio information is separated from presentation logic using static TypeScript data files (e.g., `src/data/portfolio.ts`).

```mermaid
flowchart TD
    DATA[src/data/portfolio.ts]
    DATA --> PROJECTS[Projects]
    DATA --> SKILLS[Skills]
    DATA --> EXPERIENCE[Experience]
    
    PROJECTS --> UI[UI Components]
    SKILLS --> UI
    EXPERIENCE --> UI
    
    UI --> PORTFOLIO[Next.js Pages]
```
