export const profile = {
  name: "Nicolas Stirnemann",
  role: "Software developer",
  location: "La Plata, Argentina",
  summary: "I build practical software with a bias for simple systems, readable code, and product-minded delivery.",
  avatar: "https://github.com/BatmiBoom.png",
  links: [
    ["GitHub", "https://github.com/BatmiBoom"],
    ["LinkedIn", "https://www.linkedin.com/in/nstirnemann/"],
  ],
  strengths: ["Full-stack development", "Backend architecture", "Automation", "Clean, maintainable code"],
  principles: ["SOLID where it reduces change cost", "DRY after duplication proves real", "Patterns as tools, not ceremony"],
  work: [
    ["Build", "Shipping focused web apps and developer tools."],
    ["Refine", "Improving codebases through smaller APIs and clearer boundaries."],
    ["Learn", "Exploring game development, systems design, and practical AI workflows."],
  ],
} as const;
