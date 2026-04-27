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
  region: "us" | "uk" | "eu" | "in";
  timezone: string;
  supportHours: string;
  currency: string;
  paymentGateways: string[];
  commerceStat: string;
  marketContext: string;
  population: string;
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
  // US Cities
  {
    slug: "new-york",
    name: "New York",
    localChallenge: "the competitive e-commerce landscape spanning Manhattan to Brooklyn",
    region: "us",
    timezone: "America/New_York",
    supportHours: "9 AM – 6 PM EST (UTC−5)",
    currency: "USD",
    paymentGateways: ["Stripe", "Shop Pay", "PayPal", "Afterpay", "Klarna"],
    commerceStat: "New York accounts for over $87 billion in annual e-commerce sales, making it the single largest metro e-commerce market in the United States.",
    marketContext: "NYC shoppers expect same-day shipping options, frictionless mobile checkout, and brand storytelling that speaks to borough-level identity.",
    population: "8.3 million (19 million metro)"
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    localChallenge: "high-volume DTC launches competing across coastal micro-segments",
    region: "us",
    timezone: "America/Los_Angeles",
    supportHours: "9 AM – 6 PM PST (UTC−8)",
    currency: "USD",
    paymentGateways: ["Stripe", "Shop Pay", "PayPal", "Sezzle", "Afterpay"],
    commerceStat: "Greater LA drives an estimated $60 billion in annual online retail, powered by the nation's densest concentration of DTC fashion and lifestyle brands.",
    marketContext: "LA shoppers are highly visual and mobile-first. Influencer-driven product drops, visual storytelling, and fast checkout are non-negotiable for brands in this market.",
    population: "3.9 million (13 million metro)"
  },
  {
    slug: "chicago",
    name: "Chicago",
    localChallenge: "midwest shopper expectations for speed during peak weather swings",
    region: "us",
    timezone: "America/Chicago",
    supportHours: "9 AM – 6 PM CST (UTC−6)",
    currency: "USD",
    paymentGateways: ["Stripe", "Shop Pay", "PayPal", "Afterpay", "Affirm"],
    commerceStat: "Chicago is the third-largest e-commerce market in the US, with online retail revenues exceeding $40 billion annually across the Chicagoland metro.",
    marketContext: "Chicago shoppers are value-driven and research-oriented. They respond strongly to transparent pricing, local fulfilment options, and clear return policies.",
    population: "2.7 million (9.5 million metro)"
  },
  {
    slug: "houston",
    name: "Houston",
    localChallenge: "logistics-heavy operations balancing Gulf-region fulfilment",
    region: "us",
    timezone: "America/Chicago",
    supportHours: "9 AM – 6 PM CST (UTC−6)",
    currency: "USD",
    paymentGateways: ["Stripe", "Shop Pay", "PayPal", "Affirm", "Afterpay"],
    commerceStat: "Houston's e-commerce market is growing at 14% year-over-year, driven by a young, diverse population and the city's role as a Gulf Coast logistics hub.",
    marketContext: "Houston brands serve a bilingual customer base with strong demand for Spanish-language checkout experiences and local same-day delivery integrations.",
    population: "2.3 million (7.3 million metro)"
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    localChallenge: "rapidly scaling sunbelt brands sensitive to mobile conversions",
    region: "us",
    timezone: "America/Phoenix",
    supportHours: "9 AM – 6 PM MST (UTC−7, no DST)",
    currency: "USD",
    paymentGateways: ["Stripe", "Shop Pay", "PayPal", "Afterpay", "Affirm"],
    commerceStat: "Phoenix is one of the fastest-growing e-commerce markets in the Southwest, with online retail expanding alongside the metro's 4.9% annual population growth.",
    marketContext: "Phoenix shoppers are mobile-first and heat-sensitive — outdoor and home goods categories surge seasonally. Stores optimised for 3G mobile perform significantly better here.",
    population: "1.6 million (5 million metro)"
  },
  {
    slug: "philadelphia",
    name: "Philadelphia",
    localChallenge: "omnichannel demand from Main Line to Center City shoppers",
    region: "us",
    timezone: "America/New_York",
    supportHours: "9 AM – 6 PM EST (UTC−5)",
    currency: "USD",
    paymentGateways: ["Stripe", "Shop Pay", "PayPal", "Afterpay", "Klarna"],
    commerceStat: "Philadelphia's metro e-commerce market generates over $22 billion annually, anchored by strong apparel, health, and food verticals.",
    marketContext: "Philly shoppers blend urban and suburban expectations. Brands that bridge online discovery with easy local pickup or next-day delivery see measurably higher conversion rates.",
    population: "1.6 million (6.2 million metro)"
  },
  {
    slug: "san-antonio",
    name: "San Antonio",
    localChallenge: "regional growth requiring bilingual experiences and smooth checkout",
    region: "us",
    timezone: "America/Chicago",
    supportHours: "9 AM – 6 PM CST (UTC−6)",
    currency: "USD",
    paymentGateways: ["Stripe", "Shop Pay", "PayPal", "Afterpay", "Sezzle"],
    commerceStat: "San Antonio's e-commerce sector is expanding at 11% annually, reflecting rapid population growth and increasing digital adoption among its large Hispanic consumer base.",
    marketContext: "Over 64% of San Antonio residents are Hispanic. Brands with bilingual storefronts, Spanish-language checkout, and culturally resonant product pages convert at significantly higher rates.",
    population: "1.5 million (2.6 million metro)"
  },
  {
    slug: "san-diego",
    name: "San Diego",
    localChallenge: "lifestyle-driven audiences expecting polished mobile UX",
    region: "us",
    timezone: "America/Los_Angeles",
    supportHours: "9 AM – 6 PM PST (UTC−8)",
    currency: "USD",
    paymentGateways: ["Stripe", "Shop Pay", "PayPal", "Afterpay", "Klarna"],
    commerceStat: "San Diego's outdoor, wellness, and surf verticals generate over $12 billion in annual e-commerce, with mobile accounting for 72% of all transactions.",
    marketContext: "San Diego shoppers skew younger and mobile-dominant. They expect Instagram-quality product imagery, one-tap checkout, and fast page loads even on mobile networks.",
    population: "1.4 million (3.3 million metro)"
  },
  {
    slug: "dallas",
    name: "Dallas",
    localChallenge: "enterprise retail ecosystems with complex system integrations",
    region: "us",
    timezone: "America/Chicago",
    supportHours: "9 AM – 6 PM CST (UTC−6)",
    currency: "USD",
    paymentGateways: ["Stripe", "Shop Pay", "PayPal", "Affirm", "Afterpay"],
    commerceStat: "The Dallas–Fort Worth metro is home to 23 Fortune 500 retailers and generates over $45 billion in annual e-commerce revenue, ranking it among the top five US markets.",
    marketContext: "Dallas brands frequently operate multi-brand or multi-channel architectures. ERP and OMS integrations are the norm, not the exception, for stores in this market.",
    population: "1.3 million (7.7 million metro)"
  },
  {
    slug: "san-jose",
    name: "San Jose",
    localChallenge: "tech-forward consumers with zero tolerance for latency",
    region: "us",
    timezone: "America/Los_Angeles",
    supportHours: "9 AM – 6 PM PST (UTC−8)",
    currency: "USD",
    paymentGateways: ["Stripe", "Shop Pay", "PayPal", "Apple Pay", "Google Pay"],
    commerceStat: "Silicon Valley's tech-savvy consumer base demands sub-second page loads. Studies show every 100 ms of latency costs Silicon Valley retailers approximately 1% in conversion rate.",
    marketContext: "San Jose shoppers are early adopters who test emerging payment methods and expect headless-speed storefronts. Core Web Vitals are a direct revenue lever here.",
    population: "1 million (2 million metro)"
  },
  // UK Cities
  {
    slug: "london",
    name: "London",
    localChallenge: "fierce DTC competition across a digitally mature market",
    region: "uk",
    timezone: "Europe/London",
    supportHours: "9 AM – 6 PM GMT/BST (UTC+0/+1)",
    currency: "GBP",
    paymentGateways: ["Stripe", "Klarna", "ClearPay", "PayPal", "Apple Pay"],
    commerceStat: "London is Europe's largest single city e-commerce market, generating over £60 billion in annual online retail and home to more than 300 active DTC brands.",
    marketContext: "London shoppers expect BNPL at checkout, VAT-inclusive pricing, and next-day delivery as standard. Brands without ClearPay or Klarna lose 15–20% of millennial baskets.",
    population: "9 million (14 million metro)"
  },
  {
    slug: "manchester",
    name: "Manchester",
    localChallenge: "fast-growing northern e-commerce brands scaling beyond local markets",
    region: "uk",
    timezone: "Europe/London",
    supportHours: "9 AM – 6 PM GMT/BST (UTC+0/+1)",
    currency: "GBP",
    paymentGateways: ["Stripe", "Klarna", "ClearPay", "PayPal", "Apple Pay"],
    commerceStat: "Manchester is the UK's second-largest digital economy hub, with e-commerce growing at 18% year-on-year and the Northern Powerhouse initiative attracting £1.4 billion in tech investment.",
    marketContext: "Manchester brands in fashion, sport, and food are scaling nationally. Retailers that pair strong Shopify infrastructure with robust logistics integrations are capturing market share quickly.",
    population: "560,000 (3.3 million metro)"
  },
  {
    slug: "birmingham",
    name: "Birmingham",
    localChallenge: "midlands retailers bridging high street and digital commerce",
    region: "uk",
    timezone: "Europe/London",
    supportHours: "9 AM – 6 PM GMT/BST (UTC+0/+1)",
    currency: "GBP",
    paymentGateways: ["Stripe", "Klarna", "ClearPay", "PayPal", "Apple Pay"],
    commerceStat: "Birmingham's retail sector, which includes the UK's largest shopping centre outside London, is seeing 22% of in-store purchasers switch to online channels annually.",
    marketContext: "Birmingham has the UK's youngest major city population. Mobile-first experiences, diverse product representation, and buy-now-pay-later options are key conversion drivers.",
    population: "1.1 million (4.3 million metro)"
  },
  {
    slug: "leeds",
    name: "Leeds",
    localChallenge: "Yorkshire brands competing with London-level digital expectations",
    region: "uk",
    timezone: "Europe/London",
    supportHours: "9 AM – 6 PM GMT/BST (UTC+0/+1)",
    currency: "GBP",
    paymentGateways: ["Stripe", "Klarna", "ClearPay", "PayPal", "Apple Pay"],
    commerceStat: "Leeds is a major UK financial and retail hub, generating over £8 billion in annual retail sales. E-commerce penetration in Yorkshire grew by 31% following the 2020 digital shift.",
    marketContext: "Leeds shoppers are fashion-conscious and value-driven. The city's ASOS-era generation expects fast load times, rich product imagery, and seamless returns.",
    population: "810,000 (2.9 million metro)"
  },
  {
    slug: "glasgow",
    name: "Glasgow",
    localChallenge: "Scottish merchants navigating cross-border UK and EU selling",
    region: "uk",
    timezone: "Europe/London",
    supportHours: "9 AM – 6 PM GMT/BST (UTC+0/+1)",
    currency: "GBP",
    paymentGateways: ["Stripe", "Klarna", "ClearPay", "PayPal", "Apple Pay"],
    commerceStat: "Glasgow's e-commerce market grew 27% post-Brexit as Scottish brands pivoted to direct online selling to bypass EU distribution disruptions.",
    marketContext: "Glasgow brands often serve both UK and residual EU markets. Multi-currency display, duty-clear pricing, and localised shipping calculators are expected features.",
    population: "630,000 (1.8 million metro)"
  },
  {
    slug: "bristol",
    name: "Bristol",
    localChallenge: "creative economy brands demanding standout shopping experiences",
    region: "uk",
    timezone: "Europe/London",
    supportHours: "9 AM – 6 PM GMT/BST (UTC+0/+1)",
    currency: "GBP",
    paymentGateways: ["Stripe", "Klarna", "ClearPay", "PayPal", "Apple Pay"],
    commerceStat: "Bristol has the highest density of B-Corp certified retailers in the UK, with sustainability-led brands driving a 35% premium on average order values versus national benchmarks.",
    marketContext: "Bristol shoppers actively seek ethical and transparent brands. Sustainability storytelling on product pages, carbon-offset shipping options, and clear supply chain info lift conversion.",
    population: "470,000 (1.1 million metro)"
  },
  {
    slug: "edinburgh",
    name: "Edinburgh",
    localChallenge: "heritage and lifestyle brands requiring premium digital presence",
    region: "uk",
    timezone: "Europe/London",
    supportHours: "9 AM – 6 PM GMT/BST (UTC+0/+1)",
    currency: "GBP",
    paymentGateways: ["Stripe", "Klarna", "ClearPay", "PayPal", "Apple Pay"],
    commerceStat: "Edinburgh's tourism-linked retail economy generates over £1.5 billion annually, with heritage whisky, tartan, and artisan food brands leading DTC e-commerce growth.",
    marketContext: "Edinburgh brands sell heavily to international buyers. Multi-currency support, international shipping calculators, and high-quality brand photography are essential conversion elements.",
    population: "530,000 (1 million metro)"
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    localChallenge: "retail-rich city with growing appetite for online commerce",
    region: "uk",
    timezone: "Europe/London",
    supportHours: "9 AM – 6 PM GMT/BST (UTC+0/+1)",
    currency: "GBP",
    paymentGateways: ["Stripe", "Klarna", "ClearPay", "PayPal", "Apple Pay"],
    commerceStat: "Liverpool's Mersey Estuary is one of the UK's busiest shipping hubs, enabling competitive shipping rates that Liverpool-based e-commerce brands leverage for UK-wide next-day delivery.",
    marketContext: "Liverpool brands benefit from strong port logistics. Stores that surface real-time delivery estimates and integrate with regional fulfilment partners see a measurable conversion uplift.",
    population: "500,000 (2.2 million metro)"
  },
  {
    slug: "newcastle",
    name: "Newcastle",
    localChallenge: "northeast brands needing mobile-first experiences for younger audiences",
    region: "uk",
    timezone: "Europe/London",
    supportHours: "9 AM – 6 PM GMT/BST (UTC+0/+1)",
    currency: "GBP",
    paymentGateways: ["Stripe", "Klarna", "ClearPay", "PayPal", "Apple Pay"],
    commerceStat: "Northeast England's e-commerce sector is expanding at 19% annually, outpacing the UK average, as younger Geordie shoppers shift purchasing online.",
    marketContext: "Newcastle has one of the UK's youngest average-age demographics. TikTok-driven product discovery and Instagram-to-checkout journeys are primary traffic sources for brands in this market.",
    population: "300,000 (1.6 million metro)"
  },
  {
    slug: "cardiff",
    name: "Cardiff",
    localChallenge: "Welsh businesses expanding reach through modern e-commerce",
    region: "uk",
    timezone: "Europe/London",
    supportHours: "9 AM – 6 PM GMT/BST (UTC+0/+1)",
    currency: "GBP",
    paymentGateways: ["Stripe", "Klarna", "ClearPay", "PayPal", "Apple Pay"],
    commerceStat: "Welsh e-commerce grew 24% in the last three years, with Cardiff-based brands benefiting from Welsh Government digital trade grants worth up to £10,000 per SME.",
    marketContext: "Cardiff brands increasingly serve bilingual Welsh–English audiences. Bilingual store copy and localised product descriptions improve both SEO and conversion in the Welsh market.",
    population: "370,000 (1.1 million metro)"
  },
  // EU Cities
  {
    slug: "amsterdam",
    name: "Amsterdam",
    localChallenge: "Dutch merchants optimising for multilingual European selling",
    region: "eu",
    timezone: "Europe/Amsterdam",
    supportHours: "9 AM – 6 PM CET/CEST (UTC+1/+2)",
    currency: "EUR",
    paymentGateways: ["Stripe", "iDEAL", "Klarna", "Mollie", "PayPal"],
    commerceStat: "The Netherlands has an 86% e-commerce adoption rate — the highest in continental Europe — with Amsterdam brands driving €28 billion in annual online retail.",
    marketContext: "iDEAL is the dominant payment method in the Netherlands, accounting for 69% of all Dutch online transactions. Stores without iDEAL integration lose the majority of Dutch shoppers at checkout.",
    population: "920,000 (2.5 million metro)"
  },
  {
    slug: "berlin",
    name: "Berlin",
    localChallenge: "German brands scaling across the EU's largest e-commerce market",
    region: "eu",
    timezone: "Europe/Berlin",
    supportHours: "9 AM – 6 PM CET/CEST (UTC+1/+2)",
    currency: "EUR",
    paymentGateways: ["Stripe", "SEPA Direct Debit", "Klarna", "Sofort", "PayPal"],
    commerceStat: "Germany is the EU's largest e-commerce market at €111 billion annually. Berlin brands lead in fashion, tech, and sustainable goods, and export widely across the DACH region.",
    marketContext: "German shoppers are privacy-conscious and prefer invoice payment (Kauf auf Rechnung). Klarna's Pay Later and SEPA Direct Debit are essential checkout options for conversion.",
    population: "3.7 million (6 million metro)"
  },
  {
    slug: "paris",
    name: "Paris",
    localChallenge: "French luxury and lifestyle brands requiring refined shopping experiences",
    region: "eu",
    timezone: "Europe/Paris",
    supportHours: "9 AM – 6 PM CET/CEST (UTC+1/+2)",
    currency: "EUR",
    paymentGateways: ["Stripe", "Klarna", "Alma", "PayPal", "Apple Pay"],
    commerceStat: "France is the EU's third-largest e-commerce market at €160 billion annually. Paris accounts for 23% of all French online retail, led by luxury goods, fashion, and beauty.",
    marketContext: "French shoppers expect storefronts in French, prices in EUR with tax included, and localised checkout flows. Brands that skip full localisation see 40% higher checkout abandonment.",
    population: "2.2 million (12 million metro)"
  },
  {
    slug: "dublin",
    name: "Dublin",
    localChallenge: "Irish companies leveraging English-language EU market access",
    region: "eu",
    timezone: "Europe/Dublin",
    supportHours: "9 AM – 6 PM GMT/IST (UTC+0/+1)",
    currency: "EUR",
    paymentGateways: ["Stripe", "Klarna", "PayPal", "Apple Pay", "Google Pay"],
    commerceStat: "Ireland's e-commerce market grew to €6.4 billion in 2024, with Dublin brands uniquely positioned as English-language EU sellers post-Brexit.",
    marketContext: "Dublin-based brands serve both UK and EU markets from a single storefront. Dual GBP/EUR pricing, smart geo-redirects, and EU VAT compliance are critical infrastructure requirements.",
    population: "1.4 million (2 million metro)"
  },
  {
    slug: "stockholm",
    name: "Stockholm",
    localChallenge: "Scandinavian brands with high digital adoption and UX expectations",
    region: "eu",
    timezone: "Europe/Stockholm",
    supportHours: "9 AM – 6 PM CET/CEST (UTC+1/+2)",
    currency: "SEK",
    paymentGateways: ["Stripe", "Klarna", "Swish", "PayPal", "Apple Pay"],
    commerceStat: "Sweden invented Klarna — and Stockholm shoppers expect BNPL as a default. Swedish e-commerce is worth SEK 130 billion annually, with 94% internet penetration driving exceptional conversion rates.",
    marketContext: "Stockholm is Klarna's home city. Stores without native Klarna checkout integration are immediately at a disadvantage. Swish mobile payments are also widely expected by Swedish consumers.",
    population: "980,000 (2.4 million metro)"
  },
  {
    slug: "barcelona",
    name: "Barcelona",
    localChallenge: "Spanish retailers expanding across Iberian and Latin markets",
    region: "eu",
    timezone: "Europe/Madrid",
    supportHours: "9 AM – 6 PM CET/CEST (UTC+1/+2)",
    currency: "EUR",
    paymentGateways: ["Stripe", "Bizum", "Klarna", "PayPal", "Apple Pay"],
    commerceStat: "Spain's e-commerce market reached €72 billion in 2024. Barcelona-based brands are leveraging shared language and culture to expand into 20 Latin American markets via single Shopify storefronts.",
    marketContext: "Bizum is Spain's dominant mobile payment app with 25 million users. Stores without Bizum integration miss a significant share of Spanish mobile checkouts.",
    population: "1.6 million (5.6 million metro)"
  },
  {
    slug: "milan",
    name: "Milan",
    localChallenge: "Italian fashion and design brands digitising premium commerce",
    region: "eu",
    timezone: "Europe/Rome",
    supportHours: "9 AM – 6 PM CET/CEST (UTC+1/+2)",
    currency: "EUR",
    paymentGateways: ["Stripe", "Klarna", "Satispay", "PayPal", "Apple Pay"],
    commerceStat: "Italy's fashion and design e-commerce is worth €25 billion. Milan brands account for 60% of Italian luxury DTC sales, driven by global demand for Made-in-Italy authenticity.",
    marketContext: "Milan shoppers value heritage and craftsmanship. Product pages with origin stories, artisan process videos, and material detail perform significantly above Italian e-commerce averages.",
    population: "1.4 million (5.4 million metro)"
  },
  {
    slug: "copenhagen",
    name: "Copenhagen",
    localChallenge: "Danish DTC brands known for design-driven digital experiences",
    region: "eu",
    timezone: "Europe/Copenhagen",
    supportHours: "9 AM – 6 PM CET/CEST (UTC+1/+2)",
    currency: "DKK",
    paymentGateways: ["Stripe", "MobilePay", "Klarna", "PayPal", "Apple Pay"],
    commerceStat: "Denmark has the highest e-commerce spending per capita in the Nordics at DKK 32,000 per household annually. Copenhagen brands in design, furniture, and fashion lead export volumes.",
    marketContext: "MobilePay is used by 92% of Danish adults — making it the most important mobile payment integration for Copenhagen storefronts. Stores without it see a material drop in conversion.",
    population: "810,000 (1.3 million metro)"
  },
  {
    slug: "lisbon",
    name: "Lisbon",
    localChallenge: "Portuguese businesses tapping into Southern European e-commerce growth",
    region: "eu",
    timezone: "Europe/Lisbon",
    supportHours: "9 AM – 6 PM WET/WEST (UTC+0/+1)",
    currency: "EUR",
    paymentGateways: ["Stripe", "MB Way", "Klarna", "PayPal", "Apple Pay"],
    commerceStat: "Portugal's e-commerce market grew 25% in 2024 to reach €6.5 billion. Lisbon's startup ecosystem and growing tech talent pool are accelerating the shift of traditional retailers online.",
    marketContext: "MB Way is Portugal's national mobile payment network, used by over 6 million Portuguese. Stores integrating MB Way alongside Stripe see 28% higher checkout completion from Portuguese shoppers.",
    population: "550,000 (2.8 million metro)"
  },
  {
    slug: "vienna",
    name: "Vienna",
    localChallenge: "Austrian merchants serving the DACH region with localised storefronts",
    region: "eu",
    timezone: "Europe/Vienna",
    supportHours: "9 AM – 6 PM CET/CEST (UTC+1/+2)",
    currency: "EUR",
    paymentGateways: ["Stripe", "EPS", "Klarna", "PayPal", "Apple Pay"],
    commerceStat: "Austria's e-commerce market is worth €11 billion annually. Vienna brands sell heavily into Germany and Switzerland, making DACH-localised checkout and German-language UX a baseline requirement.",
    marketContext: "EPS (Electronic Payment Standard) is Austria's national online bank transfer scheme. Integrating EPS alongside Klarna reduces checkout abandonment by an average of 18% for Austrian shoppers.",
    population: "1.9 million (2.9 million metro)"
  },
  // Indian Cities
  {
    slug: "mumbai",
    name: "Mumbai",
    localChallenge: "India's commercial capital with high-volume cross-border commerce",
    region: "in",
    timezone: "Asia/Kolkata",
    supportHours: "9 AM – 6 PM IST (UTC+5:30)",
    currency: "INR",
    paymentGateways: ["Razorpay", "Paytm", "UPI", "PayPal", "Cash on Delivery"],
    commerceStat: "Mumbai generates approximately ₹2.4 trillion in annual e-commerce GMV — more than 18% of India's total online retail — driven by fashion, electronics, and FMCG brands.",
    marketContext: "UPI accounts for 74% of all digital transactions in Mumbai. Brands without UPI and Razorpay integration lose the majority of mobile checkout attempts from Indian shoppers.",
    population: "12.5 million (21 million metro)"
  },
  {
    slug: "delhi",
    name: "Delhi",
    localChallenge: "NCR brands scaling rapidly across India's largest consumer market",
    region: "in",
    timezone: "Asia/Kolkata",
    supportHours: "9 AM – 6 PM IST (UTC+5:30)",
    currency: "INR",
    paymentGateways: ["Razorpay", "Paytm", "UPI", "PayPal", "Cash on Delivery"],
    commerceStat: "Delhi NCR is India's largest consumer market with 45 million residents. Online retail penetration in the NCR reached 38% in 2024, with fashion and electronics leading category growth.",
    marketContext: "Delhi shoppers are price-sensitive and comparison-heavy. Cash on Delivery (COD) still accounts for 35% of NCR orders. Brands that offer COD alongside UPI see significantly higher conversion.",
    population: "11 million (32 million metro)"
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    localChallenge: "tech-savvy DTC brands building modern e-commerce experiences",
    region: "in",
    timezone: "Asia/Kolkata",
    supportHours: "9 AM – 6 PM IST (UTC+5:30)",
    currency: "INR",
    paymentGateways: ["Razorpay", "Stripe", "UPI", "PayPal", "Apple Pay"],
    commerceStat: "Bangalore is India's startup capital and home to over 12,000 tech companies. Its e-commerce market is growing at 28% annually, the fastest of any Indian metro, driven by high disposable incomes.",
    marketContext: "Bangalore shoppers are early adopters with high AOV. They expect instant checkout via UPI apps, Apple Pay on iOS, and Stripe for international purchases — often within the same session.",
    population: "8.4 million (13 million metro)"
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    localChallenge: "emerging e-commerce hub with growing international selling ambitions",
    region: "in",
    timezone: "Asia/Kolkata",
    supportHours: "9 AM – 6 PM IST (UTC+5:30)",
    currency: "INR",
    paymentGateways: ["Razorpay", "Paytm", "UPI", "PayPal", "Cash on Delivery"],
    commerceStat: "Hyderabad's e-commerce market grew 31% in 2024, fuelled by the HITEC City tech corridor and a rapidly expanding middle class of 6 million digital-first consumers.",
    marketContext: "Hyderabad brands in pharma, biryani foods, and pearls are building direct export channels. Multi-currency support and international shipping integrations are a growing priority for local Shopify stores.",
    population: "6.9 million (10 million metro)"
  },
  {
    slug: "chennai",
    name: "Chennai",
    localChallenge: "South Indian brands expanding into pan-India and global markets",
    region: "in",
    timezone: "Asia/Kolkata",
    supportHours: "9 AM – 6 PM IST (UTC+5:30)",
    currency: "INR",
    paymentGateways: ["Razorpay", "Paytm", "UPI", "PayPal", "Cash on Delivery"],
    commerceStat: "Chennai is South India's largest e-commerce hub, with auto-parts, textiles, and electronics brands generating ₹380 billion in annual online sales through domestic and export channels.",
    marketContext: "Chennai's manufacturing heritage means many brands are B2B-to-DTC transitions. Wholesale pricing tiers, minimum order quantity logic, and trade account portals are common Shopify requirements here.",
    population: "7.1 million (10.7 million metro)"
  },
  {
    slug: "pune",
    name: "Pune",
    localChallenge: "startup ecosystem driving innovative e-commerce solutions",
    region: "in",
    timezone: "Asia/Kolkata",
    supportHours: "9 AM – 6 PM IST (UTC+5:30)",
    currency: "INR",
    paymentGateways: ["Razorpay", "Paytm", "UPI", "PayPal", "Cash on Delivery"],
    commerceStat: "Pune is India's fastest-growing startup hub after Bangalore, with over 4,500 active startups. D2C brands emerging from Pune's incubators are scaling to national reach within 18 months on average.",
    marketContext: "Pune shoppers are young (median age 29), highly educated, and digital-native. Subscription commerce, loyalty programmes, and personalisation features generate above-average LTV improvements here.",
    population: "3.1 million (7.4 million metro)"
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    localChallenge: "eastern India's retail hub transitioning to digital commerce",
    region: "in",
    timezone: "Asia/Kolkata",
    supportHours: "9 AM – 6 PM IST (UTC+5:30)",
    currency: "INR",
    paymentGateways: ["Razorpay", "Paytm", "UPI", "PayPal", "Cash on Delivery"],
    commerceStat: "Kolkata's e-commerce penetration reached 29% in 2024 — up from 18% three years prior — driven by the city's traditional textile and handicraft trade moving online.",
    marketContext: "Kolkata brands in sarees, sweets, and artisan goods are building national DTC channels. Product origin stories, artisan certification badges, and COD options are key conversion drivers for this market.",
    population: "4.5 million (15 million metro)"
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    localChallenge: "Gujarat's manufacturing and textile brands going direct-to-consumer",
    region: "in",
    timezone: "Asia/Kolkata",
    supportHours: "9 AM – 6 PM IST (UTC+5:30)",
    currency: "INR",
    paymentGateways: ["Razorpay", "Paytm", "UPI", "PayPal", "Cash on Delivery"],
    commerceStat: "Ahmedabad is home to India's largest textile market and is the fifth-largest e-commerce city by GMV. Brands in textiles, diamonds, and chemicals are driving ₹210 billion in online trade annually.",
    marketContext: "Ahmedabad has a high density of manufacturing-to-DTC transitions. B2B wholesale features, bulk-order pricing, and GST-compliant invoice generation are frequently required Shopify customisations.",
    population: "5.5 million (8 million metro)"
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    localChallenge: "artisan and heritage brands scaling through modern online storefronts",
    region: "in",
    timezone: "Asia/Kolkata",
    supportHours: "9 AM – 6 PM IST (UTC+5:30)",
    currency: "INR",
    paymentGateways: ["Razorpay", "Paytm", "UPI", "PayPal", "Cash on Delivery"],
    commerceStat: "Jaipur's handicraft and gemstone export market reached ₹85 billion in 2024, with Shopify powering over 600 artisan brands selling globally from the Pink City.",
    marketContext: "Jaipur brands sell heavily to international buyers in the US, UK, and UAE. Multi-currency pricing, international shipping rate calculators, and certificates of authenticity integration are high-priority features.",
    population: "3.1 million (5 million metro)"
  },
  {
    slug: "kochi",
    name: "Kochi",
    localChallenge: "Kerala's export-oriented businesses building global Shopify presence",
    region: "in",
    timezone: "Asia/Kolkata",
    supportHours: "9 AM – 6 PM IST (UTC+5:30)",
    currency: "INR",
    paymentGateways: ["Razorpay", "Paytm", "UPI", "PayPal", "Cash on Delivery"],
    commerceStat: "Kerala has the highest NRI remittance inflow in India at ₹1.8 trillion annually, creating a large diaspora buyer base for Kochi brands selling spices, Ayurvedic products, and handicrafts globally.",
    marketContext: "Kochi brands serve a significant international diaspora. Multi-language storefronts in Malayalam and English, international payment support, and export-compliant packaging integrations are common requirements.",
    population: "2.1 million (3 million metro)"
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
