export class Project {
  id: number;
  name: string;
  description: number[];
  images: string[];
  technologies: string[];
  services: string[];
  githubLink?: string;
  liveLink?: string;
  pdfUrl?: string;

  constructor(
    id: number,
    name: string,
    description: number[],
    images: string[],
    technologies: string[],
    services: string[],
    githubLink?: string,
    liveLink?: string,
    pdfUrl?: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.images = images;
    this.technologies = technologies;
    this.services = services;
    if (githubLink) this.githubLink = githubLink;
    if (liveLink) this.liveLink = liveLink;
    if (pdfUrl) this.pdfUrl = pdfUrl;
  }
}
