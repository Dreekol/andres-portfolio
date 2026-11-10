// Generated from the case studies: figures that sit behind the /private gate.
// Images are in public/private/work/<slug>/ and are only served to visitors with the password.
export type PImage = { src: string; width: number; height: number; alt: string };
export type PFigure = { images: PImage[]; caption?: string };
export type PSection = { heading?: string | null; figures: PFigure[] };
export const protectedWork: Record<string, { title: string; intro: string; sections: PSection[] }> = {
  "cargill/sales-tool": {
    "title": "Sales tool screens",
    "intro": "More of the sales tool, shown as wireframes.",
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
                "alt": "Expanded company information form, shown as a wireframe"
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
    "intro": "The style guidelines and chart-type reference I wrote for the design system.",
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
  "healthpartners/outreach-registry": {
    "title": "Member outreach registry screens",
    "intro": "More of the registry, shown as wireframes.",
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
                "alt": "Call invites list, shown as a wireframe"
              },
              {
                "src": "/private/work/healthpartners/medication-registry/medopt-log-call.jpg",
                "width": 1366,
                "height": 768,
                "alt": "Log a call form, shown as a wireframe"
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
                "alt": "Reports list, shown as a wireframe"
              },
              {
                "src": "/private/work/healthpartners/medication-registry/medopt-hours.jpg",
                "width": 1366,
                "height": 768,
                "alt": "Weekly hours grid, shown as a wireframe"
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
                "alt": "Before: options in a popup, shown as a wireframe"
              },
              {
                "src": "/private/work/healthpartners/medication-registry/medopt-after.jpg",
                "width": 1366,
                "height": 768,
                "alt": "After: options in the navigation, shown as a wireframe"
              }
            ],
            "caption": "Before and after: options moved out of a popup and into the navigation."
          }
        ]
      }
    ]
  },
  "healthpartners/incentive-tracking": {
    "title": "Incentive tracking screens",
    "intro": "More of the incentives tool, shown as wireframes.",
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
                "alt": "Enrollment form, shown as a wireframe"
              },
              {
                "src": "/private/work/healthpartners/member-incentives/incentives-member.jpg",
                "width": 1366,
                "height": 1040,
                "alt": "Member record, shown as a wireframe"
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
                "alt": "Reports list, shown as a wireframe"
              }
            ],
            "caption": "Reports."
          }
        ]
      }
    ]
  },
  "healthpartners/contract-management": {
    "title": "Contract management screens",
    "intro": "More of the contracting tool, shown as wireframes.",
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
                "alt": "Contract detail screen, shown as a wireframe"
              },
              {
                "src": "/private/work/healthpartners/pharmacy-contracting/fee-schedule.jpg",
                "width": 1366,
                "height": 769,
                "alt": "Fee schedule screen, shown as a wireframe"
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
    "intro": "The kinds of artifacts behind the UX strategy, from interviews to the roadmap. Details are blurred.",
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
                "alt": "Interviews slide, details blurred"
              }
            ],
            "caption": "Interview planning across roles and regions."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/ux-strategy/s-hmw.jpg",
                "width": 2000,
                "height": 1422,
                "alt": "Impact and effort matrix, details blurred"
              }
            ],
            "caption": "Ideas plotted by impact and effort."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/ux-strategy/s-paths.jpg",
                "width": 2000,
                "height": 1422,
                "alt": "Strategic paths chart, details blurred"
              }
            ],
            "caption": "Strategic paths for leadership to weigh."
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
                "alt": "Survey results slide, details blurred"
              }
            ],
            "caption": "A survey to test what we heard."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/ux-strategy/s-dashboard.jpg",
                "width": 2000,
                "height": 1453,
                "alt": "Early concept wireframe, details blurred"
              }
            ],
            "caption": "An early concept."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/ux-strategy/s-printout.jpg",
                "width": 2000,
                "height": 1453,
                "alt": "Annotated example, details blurred"
              }
            ],
            "caption": "A quick-win example."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/ux-strategy/s-horizon.jpg",
                "width": 2000,
                "height": 1453,
                "alt": "Horizon map with three phases, details blurred"
              }
            ],
            "caption": "The phased horizon map."
          }
        ]
      }
    ]
  },
  "proag/quoting-experience": {
    "title": "Quoting research summaries",
    "intro": "How we summarized concept research for the team. Details are blurred.",
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
                "alt": "Research summary slide, details blurred"
              }
            ],
            "caption": "Concept research, summarized."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/quoting-experience/q-printout-research.jpg",
                "width": 1920,
                "height": 1080,
                "alt": "Research summary slide, details blurred"
              }
            ],
            "caption": "A second round, summarized the same way."
          }
        ]
      }
    ]
  },
  "proag/research-repository": {
    "title": "Research repository evaluation",
    "intro": "How we evaluated and demonstrated a research repository. Details are blurred.",
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
                "alt": "Research timeline, details blurred"
              }
            ],
            "caption": "Where UX research fits."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/research-repository/r-requirements.jpg",
                "width": 1920,
                "height": 1080,
                "alt": "Requirements slide, details blurred"
              }
            ],
            "caption": "Requirements."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/research-repository/r-shortlist.jpg",
                "width": 1920,
                "height": 1080,
                "alt": "Tool shortlist, details blurred"
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
                "alt": "Recommendation slide, details blurred"
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
                "alt": "Repository tag boards, details blurred"
              }
            ],
            "caption": "Organizing insights with tags."
          },
          {
            "images": [
              {
                "src": "/private/work/proag/research-repository/r-surveys.jpg",
                "width": 1920,
                "height": 1080,
                "alt": "Survey analysis in the repository, details blurred"
              }
            ],
            "caption": "Analyzing surveys in the repository."
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
    "intro": "The rest of the account setup flow, shown as wireframes.",
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
                "alt": "Step three of the flow, shown as a wireframe"
              }
            ],
            "caption": "Step three."
          },
          {
            "images": [
              {
                "src": "/private/work/intact/setup-4.jpg",
                "width": 2000,
                "height": 4525,
                "alt": "Step four of the flow, shown as a wireframe"
              }
            ],
            "caption": "Step four."
          },
          {
            "images": [
              {
                "src": "/private/work/intact/setup-5.jpg",
                "width": 2000,
                "height": 4264,
                "alt": "Step five of the flow, shown as a wireframe"
              }
            ],
            "caption": "Step five."
          }
        ]
      }
    ]
  },
  "revo-health/patient-management": {
    "title": "Patient-management app screens",
    "intro": "More of the app, shown as wireframes.",
    "sections": [
      {
        "heading": null,
        "figures": [
          {
            "images": [
              {
                "src": "/private/work/revo-health/excel-patient.jpg",
                "width": 1366,
                "height": 768,
                "alt": "Patient record with tabs, shown as a wireframe"
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
                "alt": "Patient list, shown as a wireframe"
              }
            ],
            "caption": "A patient list with filters."
          },
          {
            "images": [
              {
                "src": "/private/work/revo-health/excel-new-patient.jpg",
                "width": 1366,
                "height": 768,
                "alt": "New patient form, shown as a wireframe"
              }
            ],
            "caption": "Adding a new patient, one section at a time."
          }
        ]
      }
    ]
  },
  "revo-health/wellness-program": {
    "title": "Wellness program screens and service blueprint",
    "intro": "The service blueprint with details blurred, and more of the app, shown as wireframes.",
    "sections": [
      {
        "heading": null,
        "figures": [
          {
            "images": [
              {
                "src": "/private/work/revo-health/hh-workflow.jpg",
                "width": 2000,
                "height": 3000,
                "alt": "Service blueprint, details blurred"
              }
            ],
            "caption": "The service blueprint."
          },
          {
            "images": [
              {
                "src": "/private/work/revo-health/hh-report-entry.jpg",
                "width": 1440,
                "height": 1024,
                "alt": "Participant report form, shown as a wireframe"
              }
            ],
            "caption": "Entering a participant’s report."
          },
          {
            "images": [
              {
                "src": "/private/work/revo-health/hh-report-filled.jpg",
                "width": 1440,
                "height": 1024,
                "alt": "Completed participant report, shown as a wireframe"
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
                "alt": "Participant task list, shown as a wireframe"
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
                "alt": "Department view, shown as a wireframe"
              }
            ],
            "caption": "The department view."
          }
        ]
      }
    ]
  },
  "partners-in-excellence": {
    "title": "More dashboard views",
    "intro": "More of the dashboards, shown as wireframes.",
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
                "alt": "Organizational snapshot dashboard, shown as a wireframe"
              }
            ],
            "caption": "An organizational snapshot."
          },
          {
            "images": [
              {
                "src": "/private/work/partners-in-excellence/net-revenue.jpg",
                "width": 1060,
                "height": 1078,
                "alt": "Drill-down dashboard, shown as a wireframe"
              }
            ],
            "caption": "A drill-down view."
          }
        ]
      }
    ]
  }
};
