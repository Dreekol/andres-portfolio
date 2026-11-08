// Work history shown on the About page. Keep in step with the PDF résumé.
export type Role = { title: string; org?: string; dates?: string; points?: string[]; groups?: { client: string; points: string[] }[] };
export const roles: Role[] = [
  { title: 'Consultant', org: 'SDG (Solution Design Group)', dates: 'March 2020 – present',
    groups: [
        { client: "Cargill: customer portal, consumer app, sales tools, design system", points: [
          "Aquí + Frescos (UX designer and researcher): mapped the registration flow, the order workflow and the user journey for Cargill’s food shopping app in Central America. Grouped findings by area into prioritized opportunities, then redesigned guest browsing, city-first local pricing, sign-up and sign-in (social or email, password help, Touch ID).",
          "Defined a work cadence that takes each ticket through research, concepts, team validation, prototyping, stakeholder validation and developer handoff with QA, and organized the Figma file by stage. Sketched next-feature concepts for home, search, checkout and profile.",
          "Cross Sell: ran a listen, prototype and test cycle with sales reps, coordinators and customers. Designed the MVP (target customers ranked by potential value and geographic advantage, an account view with suggested products, quick actions) and a future state where rep feedback improves each suggestion.",
          "myCargill: with the product owner, business analyst and developers, designed the portal’s front door and a three-step self-serve access request that replaced emailing someone and waiting for an account. It is still live.",
          "Design system: audited the legacy system and its product teams, wrote documentation and onboarded new members. Created global ceremonies, town halls and office hours that built a community of designers, and set up QA and feasibility negotiation with developers. Helped stand up the white-label system now used across Cargill’s global products.",
          "Designed a role-based Power BI dashboard with global IT that turns application health data into views for each level of the organization, with data-visualization standards and components.",
        ] },
        { client: "Revo Health / Twin Cities Orthopedics: Habits to Health and EXCEL", points: [
          "Interviewed stakeholders, mapped each group’s part in the current process, ran workflow workshops, and documented the new process in a service blueprint.",
          "Habits to Health: designed weekly email challenges tailored by an initial health assessment, with incentives for taking part.",
          "EXCEL: reshaped the app around how nurses work, prioritized disqualifying factors to speed up patient qualification, and automated patient reminders.",
        ] },
        { client: "HealthPartners: three internal tools replacing spreadsheets and manual steps", points: [
          "Specialty pharmacy contracting: interviewed stakeholders about needs, pain points and expected workflows, then designed the data model and user journeys that replaced manual contract and pricing steps. Tested mid-fidelity designs early with stakeholders, designed to accessibility guidelines, and worked with developers and data analysts through implementation. The application reduces errors and makes pricing calculations more accurate.",
          "Also designed a medication-optimization registry and a member incentives tool on one shared visual language, in Figma and Power Platform.",
        ] },
        { client: "ProAg: UX strategy, research and design system for a crop insurer", points: [
          "Led the design system team and project. Ran planning workshops, interviewed stakeholders, and pitched approaches so IT and product management could weigh feasibility before committing. Set the system’s principles, organized the Figma workspace, and created documentation, templates, governance, ceremonies and onboarding.",
          "Contributed to a two-phase UX strategy: interviewed stakeholders and agents across roles and regions, affinity-mapped findings into themes, ran “How might we” workshops and co-concepting sessions, and plotted ideas on an impact and effort matrix. Helped write an agent archetype and test it with a survey, map the agent journey, concept a starting point for agents’ daily work, and identify quick wins. Strategy sessions with leaders produced a phased roadmap for product strategy, research and design.",
          "Contributed to a heuristic evaluation of the quoting flow against Nielsen’s 10 heuristics with severity scoring, reviewed quoter concepts with agents and stakeholders, and helped define requirements, evaluate tools and recommend a shared research repository.",
        ] },
        { client: "Component Assembly Systems: website redesign", points: [
          "Led modernization of the company website to improve usability, functionality and engagement.",
          "Evaluated the existing site for pain points, strengths and user needs, and set goals and success metrics for the new site.",
          "Researched industry practices and technologies for the rebuild, and built the project roadmap, milestones and deliverables.",
          "Led critiques and brainstorms with junior designers, pushing the work creatively while keeping it usable.",
          "Created low-fidelity wireframes to align on layout and functionality, and wrote the content strategy and migration plan.",
          "Chose the build platform (Wix) for usability, accessibility, responsiveness and easy upkeep.",
          "Tested with users throughout development, and tested the site for functionality, compatibility and security.",
        ] },
        { client: "Human Powered Health: athlete training app", points: [
          "Led modernization of an existing training app for athletes.",
          "Audited the app’s technology stack, infrastructure limits and user behavior.",
          "Introduced consistent design patterns to improve performance, usability and scalability.",
          "Defined scope, timeline and resources for each modernization phase.",
          "Refreshed the interface within the Material UI framework, with responsive layouts for mobile.",
        ] },
        { client: "Holmes Corporation: learning system and SAGE portal", points: [
          "Ran a heuristic review of a learning system and its assessments to find where the design most needed work.",
          "Redesigned login, product selection, loading screens, the main learning flows, lesson readings, inline definitions, and search and glossary for a micro-credential product.",
          "Drew original icon sets for the interface.",
          "Facilitated stakeholder workshops on SAGE, a professional development portal, and analyzed what its users need.",
          "Turned the findings into themes and a prioritized set of recommendations.",
          "Made the case for user-centered development of SAGE while addressing stakeholder concerns about integration and data management.",
        ] },
        { client: "Partners in Excellence: role-based Power BI reporting", points: [
          "Assessed clinical, financial and HR data sources with cross-functional stakeholders and designed the framework for one role-aware reporting dashboard across all three.",
          "Designed five role-based Power BI views in a “cascade of granularity” layout, from the whole organization down to individual teams, so people drill down instead of switching between reports.",
          "Worked with the technical team to match relational data sources to what Power BI can show, within row-level security (RLS) rules.",
          "Set design system guidelines, component structures and chart standards for accessible reports on desktop and mobile.",
        ] },
      ] },
  { title: 'Freelance Designer',
    groups: [
        { client: "American National: online annuity purchase", points: [
          "Designed the direct-to-consumer buying flow for a Multi-Year Guaranteed Annuity: a landing page, an estimate calculator and a signed application, so buyers can estimate, understand and apply without an agent. The flow is live.",
          "Set expectations before asking for anything: the application lists what buyers need, and disclosures appear in a readable panel before any personal details.",
          "Designed responsively for phone and desktop in Figma with the design system.",
        ] },
        { client: "Intact Insurance: broker account setup and quote flow", points: [
          "Designed a six-step account setup and quote flow for brokers opening a commercial trucking account, with client lookup that pre-fills known details and plain-language questions.",
        ] },
        { client: "Manifold Public Design: website", points: [
          "Shaped content, layout and visual style through workshops and co-working sessions with a creative studio that works across digital and physical space, then built the site in Wix.",
        ] },
        { client: "Next Level Partners: website", points: [
          "Built the website for a volunteer-led impact-investing firm, with separate paths for investors and business owners, and explored its logo, color and type.",
        ] },
      ] },
  { title: "Senior Designer / Web Master", org: "Harris County Public Health", dates: "2015 – 2020",
    points: [
      "Created the brand identity for one of the largest public health departments in the US and set brand standards across the organization, extending the brand to Harris County Pets, the county animal shelter.",
      "Applied the brand across campaigns, print, web, billboards and displays, including a disaster-preparedness campaign and the Food Safety Summit identity.",
      "Co-designed print and digital materials, displays and lighting for several recurring annual conferences.",
      "Designed print and digital materials for the organization and its divisions.",
      "Managed and maintained the website that informs 4.7 million county residents, tracked site performance in Google Analytics and presented the results.",
      "Set up intake and task-management processes between work groups.",
      "Technologies used: DotNetNuke, Google Analytics, Adobe Creative Suite, SketchUp, photography and video equipment",
    ] },
  { title: "Graphic Designer", org: "Raintree Resorts International", dates: "2014 – 2015",
    points: [
      "Designed a monthly digital-magazine newsletter emailed to members and produced bi-monthly email campaigns.",
      "Designed responsive HTML landing pages for resort promotions tied to Google and Facebook ads.",
      "Designed and monitored Facebook ads and posts.",
      "Edited resort photography for print and digital use.",
      "Designed menus, flyers and banners for proprietary bars and restaurants.",
      "Technologies used: Adobe Creative Suite, WordPress",
    ] },
  { title: "Graphic Lead", org: "Hudson Trail Outfitters", dates: "2013 – 2014",
    points: [
      "Designed store promotions for web and print, coordinated with print shops and organized distribution.",
      "Created a display standard and an interior layout flow for stores to follow.",
      "Entered product data and images in Magento.",
      "Reported on top-selling products online and recommended ways to increase engagement.",
      "Technologies used: Magento, Adobe Creative Suite",
    ] },
  { title: "Graphic Designer", org: "Monte Zucker Photographic Education", dates: "2012 – 2013",
    points: [
      "Worked with Saturday Night Live personnel on a masterclass tour that traveled the US teaching filmmakers.",
      "Tailored designs for event sponsors using their marketing kits.",
      "Helped the creative director design event posters, email campaigns, websites and widgets, animated banners, film-tour props, and Facebook and Twitter graphics, and maintained the website.",
      "Technologies used: Adobe Creative Suite, photography and video equipment",
    ] },
];

export const skills = 'Journey mapping, service blueprinting, needs analysis, stakeholder interviews and workshops, UX strategy and roadmaps, heuristic evaluation, design systems, wireframing, prototyping, usability and UAT testing, accessibility, brand identity, data visualization';
export const industries = 'Healthcare, insurance, agricultural commodities and insurance, HR & learning, public health, manufacturing, marketing & advertising';
