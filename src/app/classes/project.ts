export class Project {
  id: number;
  name: string;
  description: number[];
  images: string[];
  technologies: string[];
  githubLink?: string;
  liveLink?: string;

  constructor(
    id: number,
    name: string,
    description: number[],
    images: string[],
    technologies: string[],
    githubLink?: string,
    liveLink?: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.images = images;
    this.technologies = technologies;
    if (githubLink) this.githubLink = githubLink;
    if (liveLink) this.liveLink = liveLink;
  }
}
