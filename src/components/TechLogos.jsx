import React from "react";

const base = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function LogoCSharp(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.5 20.5 7.3v9.4L12 21.5 3.5 16.7V7.3L12 2.5Z" />
      <path d="M14 9v1.6M14 13.4V15M17 9v1.6M17 13.4V15" />
      <path d="M13 10.2h2M13 13.8h2M16 10.2h2M16 13.8h2" />
    </svg>
  );
}

export function LogoDotNet(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 9v6M16 9v6M11.2 9l1.6 6M13.6 9l-1.6 6" />
    </svg>
  );
}

export function LogoDatabase(props) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.7" />
      <path d="M4.5 5.5V18c0 1.5 3.4 2.7 7.5 2.7s7.5-1.2 7.5-2.7V5.5" />
      <path d="M4.5 12c0 1.5 3.4 2.7 7.5 2.7s7.5-1.2 7.5-2.7" />
    </svg>
  );
}

export function LogoGit(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="7" cy="6" r="2" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="12" r="2" />
      <path d="M7 8v8M7 8c0 4 4 4 8 4" />
    </svg>
  );
}

export function LogoGitLab(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20 4.5 10.5 7 4l1.8 6.5h6.4L17 4l2.5 6.5L12 20Z" />
    </svg>
  );
}

export function LogoDocker(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="11" width="3.4" height="3.4" />
      <rect x="7" y="11" width="3.4" height="3.4" />
      <rect x="11" y="11" width="3.4" height="3.4" />
      <rect x="7" y="7" width="3.4" height="3.4" />
      <rect x="11" y="7" width="3.4" height="3.4" />
      <path d="M2 14.6c1 3.4 4.4 5.4 9.2 5.4 6 0 9.6-2.9 10.8-7.4-1-.5-2.4-.6-3.5-.1" />
    </svg>
  );
}

export function LogoKubernetes(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5Z" />
      <path d="M12 7v10M7 9.5l10 5M17 9.5 7 14.5" />
    </svg>
  );
}

export function LogoCloud(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 18h10a4 4 0 0 0 .5-8 5.5 5.5 0 0 0-10.8 1.2A3.8 3.8 0 0 0 7 18Z" />
    </svg>
  );
}

export const techLogos = [
  { name: "C#", Icon: LogoCSharp, color: "#35C28F" },
  { name: ".NET", Icon: LogoDotNet, color: "#E4B363" },
  { name: "MS SQL Server", Icon: LogoDatabase, color: "#D96C4F" },
  { name: "Git", Icon: LogoGit, color: "#35C28F" },
  { name: "GitLab", Icon: LogoGitLab, color: "#E4B363" },
  { name: "Docker", Icon: LogoDocker, color: "#35C28F" },
  { name: "Kubernetes", Icon: LogoKubernetes, color: "#D96C4F" },
  { name: "Azure", Icon: LogoCloud, color: "#E4B363" },
];
