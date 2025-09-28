export interface PSEOService {
  slug: string;
  name: string;
  serviceBenefit: string;
  uniqueValueProps: string[];
  metaDescription: string;
}

export interface PSEOCity {
  slug: string;
  name: string;
  localChallenge: string;
}

export const pseoServices: PSEOService[] = [
  {
    slug: "development",
    name: "Shopify Development",
    serviceBenefit: "High-converting storefronts engineered for velocity",
    uniqueValueProps: [
      "modular Liquid architecture that keeps technical debt low",
      "Hydrogen-ready component patterns for seamless headless expansion",
      "collaborative sprints that align development roadmaps with revenue goals"
    ],
    metaDescription: "Full-fidelity Shopify development services including custom themes, feature buildouts, and performance-first storefront engineering."
  },
  {
    slug: "migration",
    name: "Shopify Migration",
    serviceBenefit: "Zero-downtime replatforming with preserved SEO equity",
    uniqueValueProps: [
      "systematic data migration playbooks for orders, customers, and catalogs",
      "redirect matrices engineered to protect organic rankings",
      "QA flows that validate omnichannel integrations before launch"
    ],
    metaDescription: "Expert Shopify migration for brands moving from Magento, WooCommerce, BigCommerce, and custom stacks with full data fidelity."
  },
  {
    slug: "theme-customization",
    name: "Shopify Theme Customization",
    serviceBenefit: "Experience-led storefronts tuned for conversion",
    uniqueValueProps: [
      "mobile-first experience design anchored in CRO heuristics",
      "modular sections crafted for flexible merchandising",
      "theme governance that keeps brand consistency across releases"
    ],
    metaDescription: "Tailored Shopify theme customization covering UX audits, section builds, and brand-aligned design systems for scaling teams."
  },
  {
    slug: "speed-optimization",
    name: "Shopify Speed Optimization",
    serviceBenefit: "Lightning-fast Core Web Vitals that lift revenue",
    uniqueValueProps: [
      "render pipeline cleanup eliminating unused scripts and blocking assets",
      "media optimization workflows leveraging next-gen compression",
      "continuous monitoring dashboards for shipping measurable velocity"
    ],
    metaDescription: "Comprehensive Shopify performance optimization tackling Core Web Vitals, liquid efficiency, and asset delivery for faster storefronts."
  },
  {
    slug: "app-integration",
    name: "Shopify App Integration",
    serviceBenefit: "Unified tech stacks without operational friction",
    uniqueValueProps: [
      "robust middleware architecture for ERP, CRM, and OMS sync",
      "secure API orchestration respecting Shopify rate limits",
      "automation frameworks that streamline back-office workflows"
    ],
    metaDescription: "Specialized Shopify app integration services connecting ERP, CRM, OMS, and marketing stacks with resilient automations."
  }
];

export const pseoCities: PSEOCity[] = [
  {
    slug: "new-york",
    name: "New York",
    localChallenge: "the competitive e-commerce landscape spanning Manhattan to Brooklyn"
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    localChallenge: "high-volume DTC launches competing across coastal micro-segments"
  },
  {
    slug: "chicago",
    name: "Chicago",
    localChallenge: "midwest shopper expectations for speed during peak weather swings"
  },
  {
    slug: "houston",
    name: "Houston",
    localChallenge: "logistics-heavy operations balancing Gulf-region fulfillment"
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    localChallenge: "rapidly scaling sunbelt brands sensitive to mobile conversions"
  },
  {
    slug: "philadelphia",
    name: "Philadelphia",
    localChallenge: "omnichannel demand from Main Line to Center City shoppers"
  },
  {
    slug: "san-antonio",
    name: "San Antonio",
    localChallenge: "regional growth requiring bilingual experiences and smooth checkout"
  },
  {
    slug: "san-diego",
    name: "San Diego",
    localChallenge: "lifestyle-driven audiences expecting polished mobile UX"
  },
  {
    slug: "dallas",
    name: "Dallas",
    localChallenge: "enterprise retail ecosystems with complex system integrations"
  },
  {
    slug: "san-jose",
    name: "San Jose",
    localChallenge: "tech-forward consumers with zero tolerance for latency"
  }
];

export function getServiceBySlug(slug: string): PSEOService | undefined {
  return pseoServices.find((service) => service.slug === slug);
}

export function getCityBySlug(slug: string): PSEOCity | undefined {
  return pseoCities.find((city) => city.slug === slug);
}

export function buildTargetKeywords(service: PSEOService, city: PSEOCity): string[] {
  return [
    `${service.name} ${city.name}`,
    `Shopify Experts ${city.name}`,
    `${service.name} agency ${city.name}`,
    `Best ${service.name} provider for Shopify ${city.name}`
  ];
}
