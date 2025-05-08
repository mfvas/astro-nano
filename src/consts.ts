import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "youcanjust.build",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_DID_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_IDEAS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "youcanjust.build",
  DESCRIPTION: "Just do it.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const IDEAS: Metadata = {
  TITLE: "Ideas",
  DESCRIPTION: "Rules for life.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter/x",
    HREF: "https://x.com/MattiSchroder",
  },

  {
    NAME: "linkedin (god forbid)",
    HREF: "https://www.linkedin.com/in/mathiasschroder/",
  },
];
