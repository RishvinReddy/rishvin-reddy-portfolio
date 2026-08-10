/* eslint-disable @typescript-eslint/no-explicit-any */
import { Project } from '../data/portfolio';

const USERNAME = 'RishvinReddy';

// Instead of Partial<Project>, we can just use a type that matches what we want to override
interface ProjectOverride {
  theme?: "violet" | "blue" | "emerald" | "teal";
  categoryLabel?: string;
  bgIcon?: string;
  manualTags?: string[];
  customStats?: { label: string; value: string | number }[];
}

const PROJECT_OVERRIDES: Record<string, ProjectOverride> = {
  "Prism-Transfer": {
    theme: "blue",
    categoryLabel: "FILE TRANSFER",
    bgIcon: "file-transfer",
    manualTags: ["P2P", "QR"]
  },
  "EcoBin-Smart-Waste-Management-System": {
    theme: "emerald",
    categoryLabel: "IoT PROJECT",
    bgIcon: "recycle",
    manualTags: ["IoT", "Hardware"],
    customStats: [
      { label: "Sensors", value: 4 },
      { label: "Models", value: 3 },
      { label: "Routes", value: 2 },
      { label: "Accuracy", value: "94%" }
    ]
  },
  "TechSphere-2026-WBOS-Presentation": {
    theme: "emerald",
    categoryLabel: "PRESENTATION",
    bgIcon: "presentation",
    customStats: [
      { label: "Views", value: 450 },
      { label: "Likes", value: 32 },
      { label: "Downloads", value: 12 }
    ]
  },
  "Rishvin-Labs": {
    theme: "violet",
    categoryLabel: "TECH STUDIO",
    bgIcon: "code",
    customStats: [
      { label: "Projects", value: 15 },
      { label: "Clients", value: 4 },
      { label: "Deploys", value: 120 }
    ]
  },
  "RishvinReddy": {
    theme: "violet",
    categoryLabel: "PROFILE / PORTFOLIO",
    bgIcon: "github"
  },
  "rishvin-reddy-portfolio": {
    theme: "blue",
    categoryLabel: "PORTFOLIO",
    bgIcon: "code"
  }
};

export async function getRawGithubRepos(): Promise<any[]> {
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
        const overrides = PROJECT_OVERRIDES[repo.name] || {};

        // Merge tags from GitHub Topics, Primary Language, and Manual Overrides
        const rawTopics = repo.topics || [];
        if (repo.language) rawTopics.push(repo.language);
        if (overrides.manualTags) rawTopics.push(...overrides.manualTags);
        
        // Clean up and deduplicate topics
        const topics = Array.from(new Set(rawTopics.map((t: string) => 
          // Format basic tags (e.g. "machine-learning" -> "Machine Learning")
          t.replace(/-/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
        )));

        // Use repo description or fallback
        const description = (repo.description && repo.description.trim())
          ? repo.description
          : "No repository description available.";

        const title = repo.name.replace(/-/g, " ").replace(/_/g, " ");

        // Determine default theme based on basic inference
        let defaultTheme: "violet" | "blue" | "emerald" | "teal" = "blue";
        const searchText = (repo.name + " " + description + " " + topics.join(" ")).toLowerCase();
        if (searchText.includes("iot") || searchText.includes("system") || searchText.includes("ai") || searchText.includes("machine learning")) {
          defaultTheme = "emerald";
        } else if (searchText.includes("security") || searchText.includes("cyber") || searchText.includes("blockchain")) {
          defaultTheme = "violet";
        }

        return {
          title: title.charAt(0).toUpperCase() + title.slice(1),
          name: repo.name,
          fullName: repo.full_name || `${USERNAME}/${repo.name}`,
          owner: repo.owner?.login || USERNAME,
          ownerAvatar: repo.owner?.avatar_url,
          description,
          htmlUrl: repo.html_url,
          repoUrl: repo.html_url,
          
          stars: repo.stargazers_count || 0,
          forks: repo.forks_count || 0,
          issues: repo.open_issues_count || 0,
          watchers: repo.watchers_count || 0,
          
          language: repo.language || undefined,
          topics,
          tags: topics,
          
          visibility: repo.visibility || (repo.private ? "private" : "public"),
          defaultBranch: repo.default_branch || "main",
          createdAt: repo.created_at,
          updatedAt: repo.updated_at,
          
          homepage: repo.homepage || undefined,
          liveUrl: repo.homepage || undefined,
          
          theme: overrides.theme || defaultTheme,
          categoryLabel: overrides.categoryLabel || "PROJECT",
          bgIcon: overrides.bgIcon || "code",
          customStats: overrides.customStats,
          
          repoName: repo.name, // alias for older usage
        };
      });

    // Merge static slugs into the dynamically fetched projects
    const { projects: staticProjects } = await import('../data/projects');
    const projectsWithSlugs = projects.map(p => {
      const match = staticProjects.find(sp => 
        sp.github.toLowerCase() === p.name.toLowerCase() ||
        sp.title.toLowerCase() === p.title.toLowerCase()
      );
      if (match) {
        return { ...p, slug: match.slug };
      }
      return p;
    });

    return projectsWithSlugs;
  } catch (error) {
    console.error("Failed to fetch GitHub projects:", error);
    return [];
  }
}
