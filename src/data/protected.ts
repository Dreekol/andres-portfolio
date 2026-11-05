// Generated from the case studies: figures that sit behind the /private gate.
// Images are in public/private/work/<slug>/ and are only served to visitors with the password.
export type PImage = { src: string; width: number; height: number; alt: string };
export type PFigure = { images: PImage[]; caption?: string };
export type PSection = { heading?: string | null; figures: PFigure[] };
export const protectedWork: Record<string, { title: string; intro: string; sections: PSection[] }> = {
  "cargill/cross-sell": {
    "title": "Cross Sell screens",
    "intro": "The company details view from Cross Sell. All names and figures are placeholders.",
    "sections": [
      {
        "heading": "What I designed",
        "figures": [
          {
            "images": [
              {
                "src": "/private/work/cargill/cross-sell/cross-sell.jpg",
                "width": 1240,
                "height": 3020,
                "alt": "Expanded company information form with sold-to and bill-to sections"
              }
            ],
            "caption": "Company details, expanded."
          }
        ]
      }
    ]
  },
  "cargill/design-system": {
    "title": "Data-visualization standards",
    "intro": "The style guidelines and chart-type reference from Cargill’s white-label design system.",
    "sections": [
      {
        "heading": "What I did",
        "figures": [
          {
            "images": [
              {
                "src": "/private/work/cargill/design-system/dataviz-style.jpg",
                "width": 2000,
                "height": 5000,
                "alt": "Data visualization style guidelines"
              }
            ],
            "caption": "Data-viz style guidelines."
          },
          {
            "images": [
              {
                "src": "/private/work/cargill/design-system/dataviz-types.jpg",
                "width": 1600,
                "height": 8018,
                "alt": "Chart types reference: when to use each chart"
              }
            ],
            "caption": "Chart types and when to use them."
          }
        ]
      }
    ]
  },
  "healthpartners/medication-registry": {
    "title": "Medication optimization registry screens",
    "intro": "The rest of the registry: call invites and logging, reports, weekly hours, and the navigation change for other payors.",
    "sections": [
      {
        "heading": "What I designed",
        "figures": [
          {
            "images": [
              {
                "src": "/private/work/healthpartners/medication-registry/medopt-calls.jpg",
                "width": 1366,
                "height": 768,
                "alt": "Call invites list with counts and filters"
              },
              {
                "src": "/private/work/healthpartners/medication-registry/medopt-log-call.jpg",
                "width": 1366,
                "height": 768,
                "alt": "Log call form"
              }
            ],
            "caption": "Call invites, and logging a call."
          },
          {
            "images": [
              {
                "src": "/private/work/healthpartners/medication-registry/medopt-reports.jpg",
                "width": 1366,
                "height": 768,
                "alt": "Reports list"
              },
              {
                "src": "/private/work/healthpartners/medication-registry/medopt-hours.jpg",
                "width": 1366,
                "height": 768,
                "alt": "Weekly record hours table"
              }
            ],
            "caption": "Reports and weekly hours."
          },
          {
            "images": [
              {
                "src": "/private/work/healthpartners/medication-registry/medopt-before.jpg",
                "width": 1369,
                "height": 771,
                "alt": "Before: payor options hidden in a popup"
              },
              {
                "src": "/private/work/healthpartners/medication-registry/medopt-after.jpg",
                "width": 1366,
                "height": 768,
                "alt": "After: payors in the navigation"
              }
            ],
            "caption": "Before and after."
          }
        ]
      }
    ]
  },
  "healthpartners/member-incentives": {
    "title": "Member incentives screens",
    "intro": "Enrollment, the member record and reporting.",
    "sections": [
      {
        "heading": "What I designed",
        "figures": [
          {
            "images": [
              {
                "src": "/private/work/healthpartners/member-incentives/incentives-enroll.jpg",
                "width": 1366,
                "height": 768,
                "alt": "New enrollment form"
              },
              {
                "src": "/private/work/healthpartners/member-incentives/incentives-member.jpg",
                "width": 1366,
                "height": 1040,
                "alt": "Member information view"
              }
            ],
            "caption": "Enrolling a member, and the member record."
          },
          {
            "images": [
              {
                "src": "/private/work/healthpartners/member-incentives/incentives-reports.jpg",
                "width": 1366,
                "height": 768,
                "alt": "Incentive reports list"
              }
            ],
            "caption": "Reports, filtered by type."
          }
        ]
      }
    ]
  },
  "healthpartners/pharmacy-contracting": {
    "title": "Pharmacy contracting screens",
    "intro": "The contract detail and fee schedule screens.",
    "sections": [
      {
        "heading": "What I did",
        "figures": [
          {
            "images": [
              {
                "src": "/private/work/healthpartners/pharmacy-contracting/contract.jpg",
                "width": 1366,
                "height": 769,
                "alt": "Contract detail screen"
              },
              {
                "src": "/private/work/healthpartners/pharmacy-contracting/fee-schedule.jpg",
                "width": 1366,
                "height": 769,
                "alt": "Fee schedule screen"
              }
            ],
            "caption": "Contracts and fee schedules."
          }
        ]
      }
    ]
  },
  "proag/ux-strategy": {
    "title": "UX strategy research and roadmap",
    "intro": "The research behind ProAg’s UX strategy: who we interviewed, how we prioritized, the survey, early concepts and the horizon map.",
    "sections": [
      {
        "heading": "Phase 1: discovery",
        "figures": [
          {
            "images": [
              {
                "src": "/private/work/proag/ux-strategy/s-interviews.jpg",
                "width": 2000,
                "height": 1422,
                "alt": "Interview breakdown: 14 stakeholders and 9 agents, with roles, regions and how many other insurers each agent works with"
              }
            ],
            "caption": "Who we spoke to."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/ux-strategy/s-hmw.jpg",
                "width": 2000,
                "height": 1422,
                "alt": "How Might We outcome: an impact versus effort matrix of idea themes, with the high-impact, low-effort themes listed"
              }
            ],
            "caption": "High impact, low effort first: consistent navigation, fewer entry points, clearer printouts."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/ux-strategy/s-paths.jpg",
                "width": 2000,
                "height": 1422,
                "alt": "Path to competitive advantage chart: agent satisfaction against importance, with three paths moving from disadvantage to advantage"
              }
            ],
            "caption": "Three paths, from patching to consolidation."
          }
        ]
      },
      {
        "heading": "Phase 2: a plan for the plan",
        "figures": [
          {
            "images": [
              {
                "src": "/private/work/proag/ux-strategy/s-survey.jpg",
                "width": 2000,
                "height": 1453,
                "alt": "Survey outcome charts showing which tools agents use first and how they rate the experience"
              }
            ],
            "caption": "Survey outcome: how agents get into ProAg’s tools."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/ux-strategy/s-dashboard.jpg",
                "width": 2000,
                "height": 1453,
                "alt": "Wireframe of a dashboard home base with policyholders, updates, news and recent activity"
              }
            ],
            "caption": "A dashboard as a home base."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/ux-strategy/s-printout.jpg",
                "width": 2000,
                "height": 1453,
                "alt": "Annotated printout redesign: branding moved left, previous year shown for comparison and a summary of total premium by crop. Policy and contact details are blurred."
              }
            ],
            "caption": "A printout improvement. Policy and contact details are blurred."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/ux-strategy/s-horizon.jpg",
                "width": 2000,
                "height": 1453,
                "alt": "ProAg UX Strategy Horizon Map with Now, Next and Later columns"
              }
            ],
            "caption": "The UX strategy horizon map."
          }
        ]
      }
    ]
  },
  "proag/quoting-experience": {
    "title": "Quoting research findings",
    "intro": "What agents and stakeholders said about the quoter and printout concepts.",
    "sections": [
      {
        "heading": "Quoter and printout concepts",
        "figures": [
          {
            "images": [
              {
                "src": "/private/work/proag/quoting-experience/q-quoter-research.jpg",
                "width": 1920,
                "height": 1080,
                "alt": "Quoter research summary: positive feedback on look and feel and on streamlined navigation, mixed feedback on customer versus quote orientation"
              }
            ],
            "caption": "Quoter concepts: what agents and stakeholders said."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/quoting-experience/q-printout-research.jpg",
                "width": 1920,
                "height": 1080,
                "alt": "Printout research summary: positive feedback on formatting, mixed feedback on which summaries are useful, and support for a live quote preview"
              }
            ],
            "caption": "Printouts: agents differ, which pointed to the need for more personas."
          }
        ]
      }
    ]
  },
  "proag/research-repository": {
    "title": "Research repository recommendation",
    "intro": "ProAg’s research history, the requirements, the tool shortlist and recommendation, and the repository in use.",
    "sections": [
      {
        "heading": null,
        "figures": [
          {
            "images": [
              {
                "src": "/private/work/proag/research-repository/r-history.jpg",
                "width": 1920,
                "height": 1080,
                "alt": "Timeline of research at ProAg from 2018: data-driven insights, then customer-experience research, then UX research"
              }
            ],
            "caption": "Where UX research fits in ProAg’s research history."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/research-repository/r-requirements.jpg",
                "width": 1920,
                "height": 1080,
                "alt": "Requirements: easy to access and share, flexible taxonomy, self-service onboarding, organized storage, scalable features and cross-study insights"
              }
            ],
            "caption": "Requirements for ProAg."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/research-repository/r-shortlist.jpg",
                "width": 1920,
                "height": 1080,
                "alt": "The shortlist: Dovetail, UserBit, EnjoyHQ and Condens"
              }
            ],
            "caption": "The shortlist."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/research-repository/r-recommendation.jpg",
                "width": 1920,
                "height": 1080,
                "alt": "Recommendation slide: UserBit, with a diagram of how the tools overlap across storing, analyzing and conducting research"
              }
            ],
            "caption": "The recommendation."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/research-repository/r-tags.jpg",
                "width": 1920,
                "height": 1080,
                "alt": "Repository tag boards grouping findings by frustrations, dashboard focus and confidence navigating systems"
              }
            ],
            "caption": "Insights surfaced with tags."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/research-repository/r-surveys.jpg",
                "width": 1920,
                "height": 1080,
                "alt": "Survey responses uploaded and charted inside the repository"
              }
            ],
            "caption": "Survey results, charted in the repository."
          }
        ]
      }
    ]
  },
  "proag/design-system": {
    "title": "Design system library and specs",
    "intro": "The library, component states and documentation, the working cadence and the handoff from Figma to code.",
    "sections": [
      {
        "heading": "Components and documentation",
        "figures": [
          {
            "images": [
              {
                "src": "/private/work/proag/design-system/library.jpg",
                "width": 2000,
                "height": 1125,
                "alt": "Design system library: developer onboarding, what’s new changelog, foundations and components"
              }
            ],
            "caption": "The library: Figma onboarding, changelog and monthly updates, foundations and components."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/design-system/ds-states.jpg",
                "width": 2000,
                "height": 1125,
                "alt": "Button states, interactions and variations laid out in a grid"
              }
            ],
            "caption": "States, interactions and variations for every component."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/design-system/ds-docs.jpg",
                "width": 2000,
                "height": 1125,
                "alt": "Component documentation for text fields and dropdowns, with specs and usage"
              }
            ],
            "caption": "Each component documented with specs and usage."
          }
        ]
      },
      {
        "heading": "How teams use it",
        "figures": [
          {
            "images": [
              {
                "src": "/private/work/proag/design-system/cadence.jpg",
                "width": 2000,
                "height": 1125,
                "alt": "Working cadence diagram: planning, design, spec and document, negotiate, handoff, develop, QA, with revise loops"
              }
            ],
            "caption": "The working cadence, from planning to QA. Avatars stand in for team members."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/design-system/ds-implementation.jpg",
                "width": 2000,
                "height": 1125,
                "alt": "Implementation diagram: a component in Figma, its inspected properties, and the matching code"
              }
            ],
            "caption": "From Figma component to code."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/design-system/language.jpg",
                "width": 2000,
                "height": 1125,
                "alt": "Button and icon button specs across two variant themes, with sizing and token annotations"
              }
            ],
            "caption": "Component specs across variant themes."
          }
        ]
      }
    ]
  },
  "intact": {
    "title": "Account setup, steps three to five",
    "intro": "Eligibility, product selection and quoting in the Specialty360 setup flow.",
    "sections": [
      {
        "heading": null,
        "figures": [
          {
            "images": [
              {
                "src": "/private/work/intact/setup-3.jpg",
                "width": 2000,
                "height": 3668,
                "alt": "Step three: yes or no questions on driver affiliation, a commodities picker, a hazardous materials question and a loss history table"
              }
            ],
            "caption": "Step three: eligibility, from driver affiliation to loss history."
          },
          {
            "images": [
              {
                "src": "/private/work/intact/setup-4.jpg",
                "width": 2000,
                "height": 4525,
                "alt": "Step four: product checkboxes, owner-operator and contract-driver counts by state, and an equipment percentage table"
              }
            ],
            "caption": "Step four: products, drivers and equipment."
          },
          {
            "images": [
              {
                "src": "/private/work/intact/setup-5.jpg",
                "width": 2000,
                "height": 4264,
                "alt": "Step five: benefit and limit options for occupational accident and non-trucking liability"
              }
            ],
            "caption": "Step five: limits and benefits for each product."
          }
        ]
      }
    ]
  },
  "revo-health": {
    "title": "EXCEL and Habits to Health screens",
    "intro": "More of both products: patient records, care suites and intake in EXCEL, then the Habits to Health service blueprint, health reports, tasks and the department view. Names and figures are placeholders.",
    "sections": [
      {
        "heading": "EXCEL",
        "figures": [
          {
            "images": [
              {
                "src": "/private/work/revo-health/excel-patient.jpg",
                "width": 1366,
                "height": 768,
                "alt": "Patient information page with tabs for profile, pre-op info, labs, financials, notes and assessment"
              }
            ],
            "caption": "A patient record, organized by tabs."
          },
          {
            "images": [
              {
                "src": "/private/work/revo-health/excel-care-suites.jpg",
                "width": 1366,
                "height": 768,
                "alt": "Care Suites list of patients filtered by location, with surgery date, procedure, surgeon and payor"
              }
            ],
            "caption": "Care suites: patients by location and surgery date."
          },
          {
            "images": [
              {
                "src": "/private/work/revo-health/excel-new-patient.jpg",
                "width": 1366,
                "height": 768,
                "alt": "New patient intake form with a step list for patient, hospital, surgery and primary care information"
              }
            ],
            "caption": "Adding a new patient, one section at a time."
          }
        ]
      },
      {
        "heading": "Habits to Health",
        "figures": [
          {
            "images": [
              {
                "src": "/private/work/revo-health/hh-workflow.jpg",
                "width": 2000,
                "height": 3000,
                "alt": "Habits to Health service blueprint"
              }
            ],
            "caption": "The blueprint behind the program."
          },
          {
            "images": [
              {
                "src": "/private/work/revo-health/hh-report-entry.jpg",
                "width": 1440,
                "height": 1024,
                "alt": "Participant profile with an empty health report form for InBody metrics, blood pressure and cholesterol"
              }
            ],
            "caption": "Entering a participant’s health report."
          },
          {
            "images": [
              {
                "src": "/private/work/revo-health/hh-report-filled.jpg",
                "width": 1440,
                "height": 1024,
                "alt": "Participant profile with a completed health report"
              }
            ],
            "caption": "The same report, completed."
          },
          {
            "images": [
              {
                "src": "/private/work/revo-health/hh-tasks.jpg",
                "width": 1440,
                "height": 1024,
                "alt": "Participant information with a task list showing status, completion date and event date"
              }
            ],
            "caption": "A participant’s tasks."
          },
          {
            "images": [
              {
                "src": "/private/work/revo-health/hh-department.jpg",
                "width": 1440,
                "height": 1024,
                "alt": "Department view with monthly totals and a list of participants with export actions"
              }
            ],
            "caption": "The department view, with monthly totals and participants."
          }
        ]
      }
    ]
  },
  "partners-in-excellence": {
    "title": "More dashboard views",
    "intro": "The organizational snapshot and a net revenue drill-down from the Partners in Excellence dashboards. Figures are placeholders.",
    "sections": [
      {
        "heading": null,
        "figures": [
          {
            "images": [
              {
                "src": "/private/work/partners-in-excellence/snapshot.jpg",
                "width": 784,
                "height": 1266,
                "alt": "Organizational snapshot: net revenue, operating expenses, margin and cash on hand, with charts and business-metric scorecards"
              }
            ],
            "caption": "The organizational snapshot, with scorecards by area."
          },
          {
            "images": [
              {
                "src": "/private/work/partners-in-excellence/net-revenue.jpg",
                "width": 1060,
                "height": 1078,
                "alt": "Net revenue drill-down: budgeted versus actual by month, and a table of centers with variance"
              }
            ],
            "caption": "Drilling into net revenue by center."
          }
        ]
      }
    ]
  }
};
