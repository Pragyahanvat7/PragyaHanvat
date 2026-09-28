export const profile = {
  name: "Pragya Hanvat",
  role: "Software Engineer",
  location: "Chennai, India",
  phone: "+91-7583091245",
  email: "pragyahanvat7@gmail.com",
  linkedin: "https://linkedin.com/in/pragya-hanvat-071787220",
  summary:
    "Software Engineer with 3 years of experience in fintech applications, specializing in microservices architecture, REST APIs, and MS SQL Server. Experienced in developing and supporting secure payment processing systems handling 1000+ daily transactions for enterprise clients. Skilled in C#/.NET, SQL, CI/CD pipelines, production support, and secure backend application development.",
};

export const impactStats = [
  { value: "1000+", label: "Secure daily transactions supported" },
  { value: "50%", label: "Faster deployments after CI/CD rollout" },
  { value: "30%", label: "Less manual effort via cron microservices" },
  { value: "70%", label: "Less manual SQL scripting through automation" },
];

export const skillGroups = [
  {
    label: "Languages & Frameworks",
    items: ["C#", "SQL", "C++", ".NET", "ASP.NET Core", "Entity Framework Core"],
  },
  {
    label: "Backend Technologies",
    items: ["Web API", "REST APIs", "Microservices", "LINQ", "Dependency Injection", "Middleware"],
  },
  {
    label: "Database",
    items: ["MS SQL Server (SSMS)", "Stored Procedures", "Query Optimization", "Indexing"],
  },
  {
    label: "Concepts",
    items: ["OOP", "DBMS", "System Design"],
  },
  {
    label: "Tools & Practices",
    items: [
      "Git",
      "GitLab",
      "Jira",
      "ServiceNow",
      "Agile (Scrum, Kanban, PI Planning)",
      "CI/CD",
      "SSDLC",
      "Fortify",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    org: "Fiserv",
    team: "Network Service Provider Platform",
    location: "Chennai, India",
    period: "Jul 2023 – Present",
    points: [
      "Managed and supported 10+ enterprise payment processing applications for merchant onboarding, billing, reporting, and settlement operations",
      "Worked on payment processing systems handling 1000+ secure daily transactions for the merchant acquiring business",
      "Developed and maintained REST APIs and backend services using C#/.NET and MS SQL Server for payment and merchant data management",
      "Built cron-based microservices to automate scheduled client report generation, reducing manual operational effort by 30%",
      "Enhanced microservices architecture and backend processing to improve application scalability, performance, and reliability",
      "Implemented CI/CD pipelines using GitLab, Docker, and Kubernetes to automate build, testing, security scanning, and deployment, reducing deployment time by 50%",
      "Resolved security vulnerabilities using Fortify while following SSDLC and secure coding practices",
      "Worked in Agile (Scrum, Kanban, PI Planning) teams, collaborating with cross-functional stakeholders",
    ],
  },
];

export const projects = [
  {
    name: "SQL Script Automation",
    year: "2025",
    points: [
      "Developed an ASP.NET Core Web API to automate SQL script generation for business requests",
      "Used predefined SQL templates to generate deployment scripts based on input parameters",
      "Implemented database validation to verify existing data and generate SQL scripts for INSERT and UPDATE operations",
      "Reduced manual SQL script creation by 70% through automation",
      "Improved deployment efficiency, data accuracy, and minimized manual errors",
    ],
    stack: ["ASP.NET Core", "Web API", "SQL Server", "C#"],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "Shri Ram Institute of Technology, Jabalpur",
    period: "2019 – 2023",
    detail: "CGPA: 8.6",
  },
];

export const achievements = [
  "Earned the Microsoft Azure Fundamentals (AZ-900) certification",
  "Solved 200+ DSA problems on GeeksforGeeks",
];
