import { Project } from '../data/portfolio';

const USERNAME = 'RishvinReddy';

const TAG_RULES = [
  { tag: "IoT", words: ["iot", "arduino", "esp32", "esp8266", "sensor", "embedded", "nodemcu"] },
  { tag: "AI / ML", words: ["ai", "ml", "machine learning", "deep learning", "tensorflow", "pytorch", "opencv", "neural"] },
  { tag: "Web3", words: ["blockchain", "solidity", "ethereum", "web3", "nft", "smart contract", "crypto"] },
  { tag: "Cybersecurity", words: ["security", "cyber", "pentest", "encryption", "ctf", "firewall", "intrusion"] },
  { tag: "Web", words: ["web", "html", "css", "react", "next", "frontend", "backend", "fullstack", "api"] },
  { tag: "Python", words: ["python", "django", "flask", "fastapi", "automation", "script"] },
  { tag: "Systems", words: ["c++", "cpp", "os", "kernel", "memory", "process", "scheduling", "operating system"] },
  { tag: "Data", words: ["data", "sql", "database", "analytics", "visualization", "pandas", "numpy"] },
];

const LANG_SUMMARIES: Record<string, string> = {
  "Python": "Python-based automation, data processing, or machine learning system.",
  "C++": "High-performance systems-level or embedded hardware project.",
  "JavaScript": "Web application or interactive frontend experience.",
  "TypeScript": "Type-safe web application or fullstack project.",
  "HTML": "Web-based interactive UI or static site project.",
  "Solidity": "Smart contract or decentralized blockchain application.",
  "C": "Low-level systems or embedded systems project.",
  "Java": "Object-oriented application or Android-native project.",
  "Shell": "Automation shell script or DevOps utility.",
};

export async function getRawGithubRepos(): Promise<Record<string, unknown>[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated&type=owner`,
      { next: { revalidate: 3600 } } // Cache for 1 hour to prevent rate limiting
    );

    if (!res.ok) {
      console.error(`GitHub API error: ${res.status}`);
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch raw GitHub repos:", error);
    return [];
  }
}

export async function getGithubProjects(): Promise<Project[]> {
  try {
    const repos = await getRawGithubRepos();
    
    // Filter out forks and map to our Project type
    const projects: Project[] = repos
      .filter(repo => !repo.fork)
      .map(repo => {
        const searchText = [
          repo.name,
          repo.description || "",
          repo.language || "",
          ...(repo.topics || []),
        ].join(" ").toLowerCase();

        const tags = TAG_RULES
          .filter(rule => rule.words.some(w => searchText.includes(w)))
          .map(rule => rule.tag);

        const description = (repo.description && repo.description.trim())
          ? repo.description
          : (repo.language ? LANG_SUMMARIES[repo.language] || "Software development project." : "Software development project.");

        // Clean up project name to be display-friendly
        const title = repo.name.replace(/-/g, " ").replace(/_/g, " ");

        return {
          title: title.charAt(0).toUpperCase() + title.slice(1),
          description,
          tags: Array.from(new Set(tags)),
          repoUrl: repo.html_url,
          liveUrl: repo.homepage || undefined,
          stars: repo.stargazers_count || 0,
          forks: repo.forks_count || 0,
          language: repo.language || undefined,
          openIssues: repo.open_issues_count || 0,
          repoName: repo.name || '',
          ownerAvatar: repo.owner?.avatar_url || `https://github.com/${USERNAME}.png`,
          contributors: 1,
        };
      });

    // The user requested ALL repos to be shown in the featured projects sections
    return projects;
  } catch (error) {
    console.error("Failed to fetch GitHub projects:", error);
    return [];
  }
}
