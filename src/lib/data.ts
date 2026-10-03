export const GENERAL_INFO = {
  name: 'Hemanth Karlapati',
  title: 'Web Developer, SEO Executive & Digital Marketing Specialist',
  email: 'karlapati.hemanth@gmail.com',
  phone: '+91 7569483528',
  phoneLink: 'tel:+917569483528',
  location: 'Hyderabad, India',
  emailSubject: "Let's collaborate on a project",
  emailBody: 'Hi Hemanth, I am reaching out to you because...',
  portfolio: 'https://hemanth-portfolio.local',
  linkedin: 'https://www.linkedin.com/',
};

export const ROLE_TITLES = [
  'Web Developer',
  'SEO Executive',
  'Digital Marketing Specialist',
];

export const SOCIAL_LINKS = [
  { name: 'github', url: '#' },
  { name: 'linkedin', url: GENERAL_INFO.linkedin },
  { name: 'email', url: `mailto:${GENERAL_INFO.email}` },
  { name: 'call', url: GENERAL_INFO.phoneLink },
];

export const MY_STACK = {
  frontend: [
    { name: 'HTML', icon: '/logo/html.svg' },
    { name: 'CSS', icon: '/logo/css.svg' },
    { name: 'JavaScript', icon: '/logo/js.png' },
    { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
    { name: 'Bootstrap', icon: '/logo/bootstrap.svg' },
    { name: 'React.js', icon: '/logo/react.png' },
    { name: 'Redux Toolkit', icon: '/logo/redux.png' },
    { name: 'React Router', icon: '/logo/react.png' },
  ],
  cms: [
    { name: 'WordPress', icon: '/logo/wordpress.svg' },
    { name: 'Elementor', icon: '/logo/elementor.svg' },
    { name: 'WooCommerce', icon: '/logo/woocommerce.svg' },
    { name: 'Shopify', icon: '/logo/shopify.svg' },
    { name: 'WIX', icon: '/logo/wix.svg' },
    { name: 'Drupal', icon: '/logo/drupal.svg' },
    { name: 'Joomla', icon: '/logo/joomla.svg' },
  ],
  hosting: [
    { name: 'cPanel', icon: '/logo/cpanel.svg' },
    { name: 'WHM', icon: '/logo/cpanel.svg' },
    { name: 'Plesk', icon: '/logo/plesk.svg' },
    { name: 'Linux', icon: '/logo/linux.svg' },
    { name: 'VPS hosting', icon: '/logo/server.svg' },
    { name: 'Nginx', icon: '/logo/server.svg' },
    { name: 'DNS management', icon: '/logo/cloudflare.svg' },
    { name: 'Cloudflare', icon: '/logo/cloudflare.svg' },
    { name: 'FileZilla', icon: '/logo/filezilla.svg' },
  ],
  marketing: [
    { name: 'SEO', icon: '/logo/search.svg' },
    { name: 'GA4', icon: '/logo/google.svg' },
    { name: 'Google Ads', icon: '/logo/google.svg' },
    { name: 'Bing Ads', icon: '/logo/bing.svg' },
    { name: 'Meta Ads', icon: '/logo/meta.svg' },
    { name: 'LinkedIn Ads', icon: '/logo/linkedin.svg' },
    { name: 'Email marketing', icon: '/logo/mail.svg' },
    { name: 'Search Console', icon: '/logo/google.svg' },
    { name: 'Tag Manager', icon: '/logo/google.svg' },
    { name: 'SEMrush', icon: '/logo/search.svg' },
    { name: 'Ahrefs', icon: '/logo/search.svg' },
    { name: 'Microsoft Clarity', icon: '/logo/microsoft.svg' },
  ],
  productivity: [
    { name: 'Git & GitHub', icon: '/logo/github.png' },
    { name: 'VS Code', icon: '/logo/code.svg' },
    { name: 'Vercel', icon: '/logo/vercel.svg' },
    { name: 'Render', icon: '/logo/server.svg' },
    { name: 'Netlify', icon: '/logo/netlify.svg' },
    { name: 'Microsoft 365', icon: '/logo/microsoft.svg' },
    { name: 'Google Workspace', icon: '/logo/google.svg' },
    { name: 'Zoho Mail', icon: '/logo/mail.svg' },
    { name: 'Email hosting', icon: '/logo/mail.svg' },
    { name: 'Payment gateways', icon: '/logo/payment.svg' },
  ],
  cloud: [
    { name: 'AWS', icon: '/logo/aws.png' },
    { name: 'EC2', icon: '/logo/aws.png' },
    { name: 'S3', icon: '/logo/aws.png' },
    { name: 'Virtual machines', icon: '/logo/server.svg' },
  ],
};

export interface IProject {
  title: string;
  slug: string;
  liveUrl?: string;
  sourceCode?: string;
  year: number;
  description: string;
  role?: string;
  techStack: string[];
  thumbnail: string;
  longThumbnail: string;
  images: string[];
  category?: 'frontend' | 'marketing' | 'infrastructure';
}

export const PROJECTS: IProject[] = [
  {
    title: 'Invite Engine',
    slug: 'invite-engine',
    liveUrl: 'https://www.inviteengine.com/',
    year: 2025,
    category: 'frontend',
    description: `Built a modern, interactive invitation and event management platform using ReactJS, React Router, and Tailwind CSS with smooth animations powered by GSAP and Lenis scroll effects.<br/><br/>
      Implemented dynamic routing, responsive design, and optimized performance. Integrated analytics tracking and SEO-friendly metadata for search visibility.`,
    role: `Front-End Developer & SEO Executive<br/>
      <ul>
        <li>Developed using ReactJS, React Router for seamless navigation.</li>
        <li>Designed responsive layouts with Tailwind CSS and GSAP animations.</li>
        <li>Implemented SEO best practices including meta tags, structured data, and performance optimization.</li>
        <li>Optimized Core Web Vitals and page speed for better search rankings.</li>
      </ul>`,
    techStack: ['React.js', 'React Router', 'Tailwind CSS', 'GSAP', 'SEO'],
    thumbnail: '/projects/thumbnail/portfolio-react.svg',
    longThumbnail: '/projects/long/portfolio-react.svg',
    images: ['/projects/images/portfolio-react.svg'],
  },
  {
    title: 'Srivani Agros',
    slug: 'srivani-agros',
    liveUrl: 'https://srivaniagros.in/',
    year: 2025,
    category: 'frontend',
    description: `Created a comprehensive agricultural e-commerce platform using ReactJS and React Router with real-time product listings, cart management, and order tracking features.<br/><br/>
      Implemented state management with Redux Toolkit, responsive UI components, and integrated API endpoints for seamless backend communication.`,
    role: `Front-End Developer & SEO Executive<br/>
      <ul>
        <li>Built with ReactJS and React Router for dynamic page transitions.</li>
        <li>Developed reusable component architecture for scalability and maintainability.</li>
        <li>Implemented responsive design with mobile-first approach and accessibility standards.</li>
        <li>Added SEO-friendly meta descriptions and structured data for better discoverability.</li>
      </ul>`,
    techStack: ['React.js', 'React Router', 'Redux Toolkit', 'Tailwind CSS', 'SEO'],
    thumbnail: '/projects/thumbnail/ecommerce-dashboard.svg',
    longThumbnail: '/projects/long/ecommerce-dashboard.svg',
    images: ['/projects/images/ecommerce-dashboard.svg'],
  },
  {
    title: 'RN Embedded E-Commerce',
    slug: 'rnembedded-ecommerce',
    liveUrl: 'https://rnembedded.com',
    year: 2025,
    category: 'frontend',
    description: `Modernized a WordPress website into a cleaner, mobile-responsive layout while improving loading speed, site structure, and engagement-focused presentation.`,
    role: `Front-End Developer & SEO Executive<br/>
      <ul>
        <li>Updated page layouts and refreshed UI sections based on business requirements.</li>
        <li>Fixed design issues and improved responsive behavior across devices.</li>
        <li>Optimized images, CSS, and content structure for performance and SEO.</li>
        <li>Improved site speed and technical SEO for better search rankings.</li>
      </ul>`,
    techStack: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'SEO'],
    thumbnail: '/projects/thumbnail/rnembedded.svg',
    longThumbnail: '/projects/long/rnembedded.svg',
    images: ['/projects/images/rnembedded.svg'],
  },
  {
    title: 'RN Embedded Europe',
    slug: 'rnembedded-europe',
    liveUrl: 'https://rnembeddedeurope.com/',
    year: 2025,
    category: 'frontend',
    description: `Developed a professional WordPress business website with service pages, contact forms, responsive layouts, and an SEO-friendly content structure.`,
    role: `Front-End Developer & SEO Executive<br/>
      <ul>
        <li>Created business-focused page layouts and navigation.</li>
        <li>Added structured service content and enquiry paths.</li>
        <li>Prepared the site for mobile users and search discovery with SEO optimization.</li>
        <li>Implemented on-page SEO strategies for improved visibility.</li>
      </ul>`,
    techStack: ['WordPress', 'Elementor', 'SEO', 'Responsive Design'],
    thumbnail: '/projects/thumbnail/rnembedded-europe.svg',
    longThumbnail: '/projects/long/rnembedded-europe.svg',
    images: ['/projects/images/rnembedded-europe.svg'],
  },
  {
    title: 'Listing Website',
    slug: 'miryalaguda-listing',
    liveUrl: 'https://miryalaguda.co.in',
    year: 2025,
    category: 'frontend',
    description: `Built a listing website using WordPress and Elementor with category-based listings, advanced filters, search functionality, structured listing pages, submission forms, custom fields, and location-based discovery.`,
    role: `Front-End Developer & SEO Executive<br/>
      <ul>
        <li>Configured listing categories, custom fields, and search/filter behavior.</li>
        <li>Designed responsive Elementor layouts for listing and detail pages.</li>
        <li>Optimized for local SEO with structured data and location-based keywords.</li>
        <li>Improved site speed, mobile usability, and search visibility.</li>
      </ul>`,
    techStack: ['WordPress', 'Elementor', 'Local SEO', 'Custom Fields'],
    thumbnail: '/projects/thumbnail/miryalaguda.svg',
    longThumbnail: '/projects/long/miryalaguda.svg',
    images: ['/projects/images/miryalaguda.svg'],
  },
  {
    title: 'Shree Krishna Cables',
    slug: 'shree-krishna-cables',
    liveUrl: 'https://shreekrishnacables.in/',
    year: 2025,
    category: 'frontend',
    description: `Created a simple and professional WordPress website with clean layouts, essential pages, mobile responsiveness, fast loading behavior, and user-friendly navigation.`,
    role: `Front-End Developer & SEO Executive<br/>
      <ul>
        <li>Built essential pages using Elementor with clean design.</li>
        <li>Prepared mobile-friendly layouts and clear navigation structure.</li>
        <li>Optimized for SEO with meta tags, keyword research, and site performance improvements.</li>
        <li>Improved loading speed and overall site presentation for better search rankings.</li>
      </ul>`,
    techStack: ['WordPress', 'Elementor', 'SEO', 'Responsive Design'],
    thumbnail: '/projects/thumbnail/shree-krishna-cables.svg',
    longThumbnail: '/projects/long/shree-krishna-cables.svg',
    images: ['/projects/images/shree-krishna-cables.svg'],
  },
  {
    title: 'SEO Optimization & Organic Growth',
    slug: 'seo-organic-growth',
    year: 2025,
    category: 'marketing',
    description: `Demo digital marketing project focused on organic growth for service and local-business websites.<br/><br/>
      Work included on-page SEO, meta tag improvements, keyword mapping, content updates, sitemap checks, indexing fixes, broken-link cleanup, and basic backlink activity.`,
    role: `SEO Specialist<br/>
      <ul>
        <li>Used Google Search Console, GA4, Ahrefs, and SEMrush to track performance and keyword movement.</li>
        <li>Fixed technical SEO issues including sitemap, indexing, broken links, and heading hierarchy.</li>
        <li>Improved search visibility through content optimization and mobile-friendly structure.</li>
      </ul>`,
    techStack: ['SEO', 'GA4', 'Search Console', 'Ahrefs', 'SEMrush'],
    thumbnail: '/projects/thumbnail/seo-organic-growth.svg',
    longThumbnail: '/projects/long/seo-organic-growth.svg',
    images: ['/projects/images/seo-organic-growth.svg'],
  },
  {
    title: 'Google Ads Lead Generation',
    slug: 'google-ads-lead-generation',
    year: 2025,
    category: 'marketing',
    description: `Demo lead-generation campaign for business services and local clients using Google Search and Display Ads.<br/><br/>
      Work included campaign setup, keyword research, ad copy testing, conversion-focused landing page checks, performance monitoring, and cost-per-lead optimization.`,
    role: `Digital Marketing Executive<br/>
      <ul>
        <li>Created Search and Display campaigns for lead generation.</li>
        <li>Optimized keywords, ads, and targeting to improve CTR and conversions.</li>
        <li>Tracked campaign performance and reduced cost per lead through weekly improvements.</li>
      </ul>`,
    techStack: ['Google Ads', 'Keyword Planner', 'GA4', 'Tag Manager'],
    thumbnail: '/projects/thumbnail/google-ads-lead-generation.svg',
    longThumbnail: '/projects/long/google-ads-lead-generation.svg',
    images: ['/projects/images/google-ads-lead-generation.svg'],
  },
  {
    title: 'Meta Ads Business Growth',
    slug: 'meta-ads-business-growth',
    year: 2025,
    category: 'marketing',
    description: `Demo paid-social project for brand awareness and lead generation using Meta Ads.<br/><br/>
      Work included audience targeting, campaign structure, creative testing, engagement tracking, and conversion-focused optimization.`,
    role: `Digital Marketing Executive<br/>
      <ul>
        <li>Designed awareness and lead-generation campaigns for targeted audiences.</li>
        <li>Optimized creatives and audience segments to improve engagement and conversions.</li>
        <li>Reviewed performance metrics to improve campaign ROI.</li>
      </ul>`,
    techStack: ['Meta Ads', 'Social Media Marketing', 'Lead Generation', 'Analytics'],
    thumbnail: '/projects/thumbnail/meta-ads-business-growth.svg',
    longThumbnail: '/projects/long/meta-ads-business-growth.svg',
    images: ['/projects/images/meta-ads-business-growth.svg'],
  },
  {
    title: 'Website Design & SEO Setup',
    slug: 'website-design-seo-setup',
    year: 2025,
    category: 'frontend',
    description: `Demo project combining responsive website design with SEO setup for lead-generation pages.<br/><br/>
      Work included page structure, mobile responsiveness, speed checks, meta tags, search-friendly headings, conversion sections, and analytics setup.`,
    role: `Front-End Developer and SEO Specialist<br/>
      <ul>
        <li>Designed responsive pages with SEO-friendly structure and clear conversion flow.</li>
        <li>Optimized website speed, mobile usability, headings, and metadata.</li>
        <li>Connected basic tracking tools for search and campaign performance review.</li>
      </ul>`,
    techStack: ['WordPress', 'Elementor', 'SEO', 'GA4', 'Search Console'],
    thumbnail: '/projects/thumbnail/website-design-seo-setup.svg',
    longThumbnail: '/projects/long/website-design-seo-setup.svg',
    images: ['/projects/images/website-design-seo-setup.svg'],
  },
  {
    title: 'Google Workspace & Microsoft 365',
    slug: 'google-workspace-microsoft-365',
    year: 2025,
    category: 'infrastructure',
    description: `Managed enterprise-level email and collaboration solutions using Google Workspace and Microsoft 365 platforms.<br/><br/>
      Work included user account provisioning, domain configuration, security settings, authentication setup, organizational structure, and team collaboration feature implementation.`,
    role: `Infrastructure & Workspace Administrator<br/>
      <ul>
        <li>Provisioned and managed Google Workspace and Microsoft 365 user accounts.</li>
        <li>Configured domain settings, DNS records, and security policies for enterprise use.</li>
        <li>Set up multi-factor authentication, role-based access controls, and data protection.</li>
        <li>Managed team collaboration features, shared drives, and communication tools.</li>
      </ul>`,
    techStack: ['Google Workspace', 'Microsoft 365', 'Admin Console', 'DNS', 'Security'],
    thumbnail: '/projects/thumbnail/google-workspace-microsoft-365.svg',
    longThumbnail: '/projects/long/google-workspace-microsoft-365.svg',
    images: ['/projects/images/google-workspace-microsoft-365.svg'],
  },
  {
    title: 'Zoho Workplace Migration',
    slug: 'zoho-workplace-migration',
    year: 2025,
    category: 'infrastructure',
    description: `Executed comprehensive migration of email and collaboration services to Zoho Workplace platform from legacy systems.<br/><br/>
      Work included data assessment, migration planning, user account setup, bulk data transfer, email forwarding configuration, and post-migration validation.`,
    role: `Migration & Infrastructure Specialist<br/>
      <ul>
        <li>Planned and executed full migration from existing email systems to Zoho Workplace.</li>
        <li>Provisioned user accounts, configured organizational units, and set up security policies.</li>
        <li>Managed bulk user data transfer and email forwarding during migration window.</li>
        <li>Validated migration success and provided user training on new platform features.</li>
      </ul>`,
    techStack: ['Zoho Workplace', 'Migration Tools', 'Email Configuration', 'Admin Panel'],
    thumbnail: '/projects/thumbnail/zoho-workplace-migration.svg',
    longThumbnail: '/projects/long/zoho-workplace-migration.svg',
    images: ['/projects/images/zoho-workplace-migration.svg'],
  },
  {
    title: 'DNS Management',
    slug: 'dns-management',
    year: 2025,
    category: 'infrastructure',
    description: `Handled comprehensive DNS management and domain configuration for multiple clients across various registrars and hosting providers.<br/><br/>
      Work included DNS record configuration, domain pointing, email routing setup, SSL certificate validation, and DNS troubleshooting.`,
    role: `DNS & Domain Administrator<br/>
      <ul>
        <li>Configured and managed DNS records (A, CNAME, MX, TXT, SPF, DKIM) for multiple domains.</li>
        <li>Set up email routing through MX records and verified SPF/DKIM for deliverability.</li>
        <li>Managed domain registrations and renewals across GoDaddy, Namecheap, BigRock, and Cloudflare.</li>
        <li>Troubleshot DNS propagation issues and ensured high email/website uptime.</li>
      </ul>`,
    techStack: ['DNS', 'Domain Management', 'Cloudflare', 'cPanel', 'WHM'],
    thumbnail: '/projects/thumbnail/dns-management.svg',
    longThumbnail: '/projects/long/dns-management.svg',
    images: ['/projects/images/dns-management.svg'],
  },
];

export const MY_FULL_TIME_EXPERIENCE = [
  {
    title: 'Front-End Developer & Digital Marketing Executive',
    company: 'Growcline Global Solutions, Hyderabad',
    duration: 'April 13 2026 - Present',
    details: [
      'Developed and maintained responsive websites and e-commerce platforms using HTML, CSS, JavaScript with Flexbox/Grid layouts.',
      'Programmed interactive front-end features including dynamic forms, sliders, modals, and client-side data validation using vanilla JavaScript. ',
      'Built cross-device layouts using Flexbox, Grid, Tailwind CSS, Bootstrap, and media queries.',
      'Implemented dynamic UI features including forms, sliders, modals, validations, and interactive sections.',
      'Customized WordPress themes and plugins, integrated WooCommerce, and optimized speed using caching, image compression, and CDN setup.',
      'Managed high-performance Google Ads and Meta Ads campaigns to maximize lead generation while lowering Cost Per Lead (CPL).',
      'Conducted market research, competitor analysis, and site audits using Semrush to discover high-intent keywords and plan growth strategies.',
      'Driven organic multimedia growth through data-driven video SEO, targeted keyword research, and audience analytics for YouTube channels.',
    ],
  },
  {
    title: 'Front-End Developer & Digital Marketing Executive',
    company: 'RN Embedded Solutions Private Limited, Hyderabad',
    duration: 'Dec 06 2023 - Oct 18 2025',
    details: [
      'Executed SEO strategies including on-page SEO, technical SEO, keyword research, and basic backlinking.',
      'Assisted multi-channel campaigns across Google Ads, Bing Ads, Meta Ads, and LinkedIn Ads for B2B and B2C lead generation.',
      'Monitored keyword rankings, traffic performance, campaign results, CTR, conversions, and cost per lead.',
      'Worked with Google Search Console, GA4, Tag Manager, Keyword Planner, Microsoft Clarity, SEMrush, Ahrefs, Yoast SEO, and Bing Webmaster Tools.',
      'Optimized marketplace listings, YouTube content, website copy, and CMS pages to improve visibility and lead generation.',
    ],
  },
];

export const MY_INTERNSHIPS = [
  {
    title: 'Server Admin & Domains Expert',
    company: 'Friends Web Hosting | Intern Remote',
    duration: 'Aug 2023 - Nov 2023',
    details: [
      'Managed domain registration, renewal, DNS configuration, name servers, WHOIS updates, and redirections.',
      'Worked with registrars including GoDaddy, Namecheap, BigRock, and Cloudflare.',
      'Configured A, CNAME, MX, SPF, DKIM, and TXT records for website and email reliability.',
      'Managed email services including Google Workspace, Microsoft 365, and Zoho Mail setup',
      'Troubleshooted hosting, domain, and email-related issues for clients',
      'Assisted clients in merchant account setup, KYC verification, and payment activation.',
      'Created subdomains, supported client hosting operations, and integrated payment gateways including Razorpay, PayU, CCAvenue, and Stripe.',
    ],
  },
];

export const MY_EXPERIENCE = [...MY_FULL_TIME_EXPERIENCE, ...MY_INTERNSHIPS];

export const EDUCATION = [
  {
    degree: 'B.Tech - Computer Science & Engineering',
    institution: 'Gandhi Academy of Technical Engineering, Kodad, Telangana',
    duration: 'July 2019 - Nov 2023',
    description:
      'Completed computer science coursework with practical foundation for web development, hosting, server administration, and cloud technologies.',
  },
  {
    degree: 'Govt JR College - CSE Intermediate',
    institution: 'Intermediate',
    duration: 'Year of Passing: 2019 - GPA: 84%',
    description: 'Strong academic performance with focus on core computing topics.',
  },
];

export interface IMarketingProject {
  id: string;
  title: string;
  company: string;
  industry: 'it-services' | 'education' | 'health' | 'electronics' | 'ecommerce' | 'saas';
  platforms: ('google-ads' | 'meta-ads' | 'seo')[];
  adSpend: number;
  revenue: number;
  roi: number;
  clicks: number;
  conversions: number;
  averageCPC: number;
  conversionRate: number;
  duration: string;
  description: string;
  keyMetrics: {
    label: string;
    value: string;
    icon: string;
  }[];
  campaignTypes: string[];
  results?: {
    metric: string;
    achievement: string;
  }[];
}

export const MARKETING_PROJECTS: IMarketingProject[] = [
  {
    id: 'google-ads-it-services',
    title: 'IT Services Lead Generation',
    company: 'TechFlow Solutions',
    industry: 'it-services',
    platforms: ['google-ads'],
    adSpend: 45000,
    revenue: 380000,
    roi: 744,
    clicks: 2340,
    conversions: 58,
    averageCPC: 19.23,
    conversionRate: 2.48,
    duration: '6 months',
    description: 'Comprehensive Google Ads campaign for IT consulting services targeting B2B clients across India.',
    keyMetrics: [
      { label: 'Qualified Leads', value: '58', icon: '📊' },
      { label: 'Avg Lead Value', value: '₹6,550', icon: '💰' },
      { label: 'ROAS', value: '8.4x', icon: '📈' },
    ],
    campaignTypes: ['Search Ads', 'Display Ads', 'Remarketing'],
    results: [
      { metric: 'Lead Generation', achievement: 'Generated 58 qualified leads from IT industry' },
      { metric: 'Cost Optimization', achievement: 'Reduced CPC from ₹35 to ₹19.23 through optimization' },
      { metric: 'Campaign Scaling', achievement: 'Scaled daily budget from ₹3000 to ₹6000 with maintained efficiency' },
    ],
  },
  {
    id: 'meta-ads-education',
    title: 'Online Education Course Promotion',
    company: 'LearnHub Academy',
    industry: 'education',
    platforms: ['meta-ads'],
    adSpend: 32000,
    revenue: 425000,
    roi: 1228,
    clicks: 3100,
    conversions: 142,
    averageCPC: 10.32,
    conversionRate: 4.58,
    duration: '4 months',
    description: 'Meta Ads (Facebook & Instagram) campaign for online course enrollment targeting student demographics.',
    keyMetrics: [
      { label: 'Course Enrollments', value: '142', icon: '🎓' },
      { label: 'Avg Enrollment Value', value: '₹3,000', icon: '💳' },
      { label: 'Video Views', value: '24.5K', icon: '🎥' },
    ],
    campaignTypes: ['Feed Ads', 'Stories Ads', 'Video Ads', 'Carousel Ads'],
    results: [
      { metric: 'Student Acquisition', achievement: '142 students enrolled through Meta Ads' },
      { metric: 'Video Engagement', achievement: '24,500+ video views with 68% watch-through rate' },
      { metric: 'Cost Per Enrollment', achievement: 'Optimized to ₹225 per enrollment' },
    ],
  },
  {
    id: 'google-meta-health-physio',
    title: 'Physiotherapy Clinic Growth',
    company: 'HealthCare Plus Physio',
    industry: 'health',
    platforms: ['google-ads', 'meta-ads'],
    adSpend: 28000,
    revenue: 280000,
    roi: 900,
    clicks: 1850,
    conversions: 95,
    averageCPC: 15.14,
    conversionRate: 5.14,
    duration: '5 months',
    description: 'Integrated Google Ads and Meta Ads campaign for physiotherapy clinic appointments and services.',
    keyMetrics: [
      { label: 'Appointments Booked', value: '95', icon: '📅' },
      { label: 'Avg Appointment Value', value: '₹2,950', icon: '💊' },
      { label: 'Service Inquiries', value: '187', icon: '💬' },
    ],
    campaignTypes: ['Local Search Ads', 'Ads for Healthcare', 'Community Posts'],
    results: [
      { metric: 'Clinic Bookings', achievement: '95 appointments booked through digital campaigns' },
      { metric: 'Patient Inquiries', achievement: '187 service inquiries from targeted local audience' },
      { metric: 'Service Expansion', achievement: 'Promoted 8 new physiotherapy services' },
    ],
  },
  {
    id: 'google-ads-electronics',
    title: 'Electronics E-Commerce Sales',
    company: 'TechHub Retail',
    industry: 'electronics',
    platforms: ['google-ads'],
    adSpend: 55000,
    revenue: 620000,
    roi: 1027,
    clicks: 4200,
    conversions: 180,
    averageCPC: 13.1,
    conversionRate: 4.29,
    duration: '3 months',
    description: 'Google Shopping and Search Ads for electronics e-commerce store with focus on high-ticket items.',
    keyMetrics: [
      { label: 'Products Sold', value: '180', icon: '📦' },
      { label: 'Avg Order Value', value: '₹3,444', icon: '🛒' },
      { label: 'Revenue', value: '₹6.2L', icon: '💵' },
    ],
    campaignTypes: ['Shopping Ads', 'Search Ads', 'Performance Max'],
    results: [
      { metric: 'Sales Generation', achievement: '180 products sold generating ₹6,20,000 revenue' },
      { metric: 'AOV Increase', achievement: 'Increased Average Order Value by 35% through upselling' },
      { metric: 'Inventory Turnover', achievement: 'Cleared 850+ units within 3 months' },
    ],
  },
  {
    id: 'meta-ads-ecommerce-fashion',
    title: 'Fashion E-Commerce Social Commerce',
    company: 'StyleWear Co.',
    industry: 'ecommerce',
    platforms: ['meta-ads'],
    adSpend: 38000,
    revenue: 510000,
    roi: 1242,
    clicks: 5600,
    conversions: 165,
    averageCPC: 6.79,
    conversionRate: 2.95,
    duration: '4 months',
    description: 'Meta Ads and Instagram Shopping for fashion e-commerce with influencer-style content.',
    keyMetrics: [
      { label: 'Fashion Items Sold', value: '165', icon: '👗' },
      { label: 'Avg Price Point', value: '₹3,091', icon: '👟' },
      { label: 'Repeat Customers', value: '32%', icon: '👥' },
    ],
    campaignTypes: ['Instagram Shopping', 'Collections Ads', 'Reels Ads', 'Influencer Collaborations'],
    results: [
      { metric: 'Social Commerce Sales', achievement: '₹5,10,000 in sales directly from Instagram' },
      { metric: 'Repeat Customer Rate', achievement: '32% of customers made repeat purchases' },
      { metric: 'User-Generated Content', achievement: 'Leveraged 45+ customer posts for social proof' },
    ],
  },
  {
    id: 'google-ads-saas',
    title: 'SaaS Software Trial Signup',
    company: 'CloudSync Pro',
    industry: 'saas',
    platforms: ['google-ads'],
    adSpend: 42000,
    revenue: 525000,
    roi: 1150,
    clicks: 1620,
    conversions: 124,
    averageCPC: 25.93,
    conversionRate: 7.65,
    duration: '6 months',
    description: 'B2B SaaS lead generation and trial signup campaign targeting business decision makers.',
    keyMetrics: [
      { label: 'Trial Signups', value: '124', icon: '🔐' },
      { label: 'Free to Paid Rate', value: '68%', icon: '📊' },
      { label: 'ARR Generated', value: '₹5.25L', icon: '📈' },
    ],
    campaignTypes: ['Search Ads', 'Display Ads', 'LinkedIn Ads Integration'],
    results: [
      { metric: 'Trial Conversions', achievement: '124 free trial signups from B2B audience' },
      { metric: 'Conversion to Paid', achievement: '68% of trials converted to paid subscriptions' },
      { metric: 'Account Retention', achievement: '92% 3-month retention rate' },
    ],
  },
  {
    id: 'combined-campaign-education-platform',
    title: 'Skill Development Platform - Multi-Channel',
    company: 'SkillMaster Academy',
    industry: 'education',
    platforms: ['google-ads', 'meta-ads'],
    adSpend: 48000,
    revenue: 720000,
    roi: 1400,
    clicks: 4800,
    conversions: 210,
    averageCPC: 10.0,
    conversionRate: 4.38,
    duration: '5 months',
    description: 'Integrated Google Ads and Meta Ads campaign for skill development platform across multiple skill categories.',
    keyMetrics: [
      { label: 'Course Registrations', value: '210', icon: '🎯' },
      { label: 'Channel Attribution', value: 'G:45% M:55%', icon: '📊' },
      { label: 'Student LTV', value: '₹3,428', icon: '💎' },
    ],
    campaignTypes: ['Video Ads', 'Search Ads', 'Retargeting', 'Lookalike Audiences'],
    results: [
      { metric: 'Multi-Channel Success', achievement: 'Meta Ads (55%) slightly outperformed Google Ads (45%)' },
      { metric: 'Student Lifetime Value', achievement: 'Average student spends ₹3,428 across courses' },
      { metric: 'Skill Categories', achievement: 'Promoted 12 skill categories with balanced distribution' },
    ],
  },
];