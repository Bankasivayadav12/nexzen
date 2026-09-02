export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export interface CertificationItem {
  name: string;
  fullName: string;
  tagline: string;
  duration: string;
  modules: string[];
}

export interface VerticalItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}
