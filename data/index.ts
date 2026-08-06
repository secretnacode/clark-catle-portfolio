// Central project data. Add new projects by appending to this array.
// Each project drives a full case-study page via /projects/:slug

import { projectType } from "@/type";

export const projects: projectType[] = [
  {
    slug: "argo",
    name: "Argo / Opalus",
    tagline:
      "A delivery management platform that digitizes truck booking workflows through centralized scheduling, API-driven architecture, and reliable data management.",
    role: "Backend Developer",
    period: "Internship",
    stack: {
      frontend: [],
      backend: [
        "Laravel",
        "PHP",
        "REST API",
        "Authentication",
        "Authorization",
        "Middleware",
      ],
      database: ["PostgreSQL", "Database Design", "Data Integrity"],
      deployment: ["Nginx", "PM2"],
    },
    overview:
      "Argo is a management system designed to improve operational efficiency by replacing manual delivery workflows with structured digital processes. It gives dispatchers, drivers, and administrators a single source of truth for bookings, schedules, and delivery records.",
    who: "Dispatchers, drivers, and operations administrators managing day-to-day delivery logistics.",
    why: "The existing workflow relied on manual record-keeping, which led to scheduling conflicts, lost records, and slow communication across teams.",
    problem: {
      limitations: [
        "Bookings and delivery records tracked on paper or scattered spreadsheets.",
        "No centralized view of schedules, leading to double-booking and gaps.",
        "Difficult to trace delivery history or audit past transactions.",
        "Manual scheduling caused truck double bookings and resource conflicts.",
      ],
      statement:
        "Without a centralized system, delivery operations suffered from inconsistent records, scheduling conflicts, and limited visibility into day-to-day activity that makes it hard to scale or audit reliably.",
    },
    goals: [
      "Replace manual workflows with a centralized digital platform.",
      "Provide a reliable API layer to manage bookings, schedules, and delivery records.",
      "Enforce authentication and role-based authorization across user types.",
      "Maintain data integrity for historical delivery and transaction records.",
      "Establish a maintainable backend architecture ready to extend.",
    ],
    responsibilities: [
      "Backend system design and architecture",
      "RESTful API design and implementation",
      "Database schema and relationship modeling",
      "Authentication and authorization implementation",
      "Business logic for booking and scheduling workflows",
      "API validation and error handling",
      "Server deployment configuration",
    ],
    architecture: {
      flow: [
        {
          label: "Frontend Application",
          note: "Client interface for dispatchers and administrators",
        },
        {
          label: "API Layer",
          note: "REST endpoints handling requests and validation",
        },
        {
          label: "Backend Application",
          note: "Laravel services containing business logic",
        },
        {
          label: "Database",
          note: "PostgreSQL storing relational delivery data",
        },
      ],
      explanation:
        "The frontend communicates exclusively through the REST API layer. The backend application centralizes business logic, enforcing validation, authorization, and consistent data access patterns. The database holds normalized relational data with explicit foreign-key constraints to preserve integrity across bookings, deliveries, and users.",
    },
    features: [
      {
        name: "Authentication System",
        description:
          "Users securely access features based on their account and role.",
        implementation:
          "Implemented using authentication middleware with token-based sessions and role-based authorization rules guarding each endpoint.",
      },
      {
        name: "Booking Management",
        description:
          "Create, update, and track delivery bookings with conflict-aware scheduling.",
        implementation:
          "Exposed as a set of REST endpoints with server-side validation rules preventing overlapping schedules and incomplete records.",
      },
      {
        name: "Delivery Records",
        description:
          "Persistent, auditable records of every delivery with status history.",
        implementation:
          "Modeled as relational entities with status transitions enforced in business logic, ensuring consistent state changes.",
      },
    ],
    implementation: {
      backend: [
        "API design followed RESTful conventions with consistent resource naming and predictable response shapes.",
        "Business logic isolated in service classes, keeping controllers thin and routes clean.",
        "Request validation handled at the boundary, rejecting malformed data before it reached services.",
        "Authentication and authorization enforced through middleware, separating access control from business logic.",
      ],
      database: [
        "Normalized schema with explicit foreign-key relationships between users, bookings, and deliveries.",
        "Constraints and indexes added to preserve data integrity and improve query performance.",
        "Historical records kept immutable where accuracy mattered, separating live data from archived data.",
      ],
      frontend: [],
    },
    challenges: [
      {
        challenge:
          "Historical delivery records could become inaccurate if referenced data (e.g. routes, pricing) changed over time.",
        impact:
          "Past transactions needed to remain reliable for auditing and reporting, regardless of later edits to current records.",
        solution:
          "Created a record system that snapshots relevant values at the time of creation, decoupling historical data from live data.",
        decision:
          "Separated historical transaction data from current operational data to maintain long-term data integrity.",
      },
      {
        challenge:
          "Scheduling conflicts occurred when multiple dispatchers booked overlapping slots.",
        impact:
          "Double-booking undermined trust in the platform and created operational confusion.",
        solution:
          "Moved conflict detection to the backend with server-side validation rejecting overlapping schedules.",
        decision:
          "Centralized scheduling rules in the API layer rather than relying on client-side checks, guaranteeing a single source of truth.",
      },
    ],
    results: [
      "Reduced dependency on manual processes by providing a centralized platform for managing operations.",
      "Eliminated double-booking through server-enforced scheduling validation.",
      "Established an auditable record of deliveries accessible through a single API layer.",
      "Provided a backend foundation structured for future feature expansion.",
    ],
    lessons: [
      "Designing maintainable backend systems with clear separation of concerns.",
      "Modeling relational databases to preserve data integrity over time.",
      "Building API-driven applications with consistent conventions.",
      "Understanding real-world operational requirements and translating them into software constraints.",
    ],
  },
  {
    slug: "agro-farm",
    name: "Agro Farm Management System",
    tagline:
      "A farm management platform that organizes agricultural operations through structured digital workflows and centralized data management.",
    role: "Full-Stack Developer",
    period: "Capstone Project",
    links: {
      live: "https://report-system-cmm.vercel.app/",
      github: "https://github.com/clark-catle/updatedCapstone",
      docs: "https://github.com/clark-catle/updatedCapstone",
    },
    stack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Backend API", "Clerk"],
      database: ["NeonDB"],
      deployment: ["Vercel"],
    },
    overview:
      "Agro is a management platform designed to bring structure to agricultural operations. It centralizes operational data so farm managers can track activities, resources, and records through consistent digital workflows rather than fragmented notes and spreadsheets.",
    who: "Farm managers and staff responsible for planning, tracking, and recording daily agricultural operations.",
    why: "Agricultural operations generated scattered records across paper and spreadsheets, making it difficult to track resources, plan activities, or review past decisions.",
    problem: {
      limitations: [
        "Operational records spread across unrelated documents and tools.",
        "No centralized tracking of resources, activities, or yields.",
        "Difficult to compare seasons or review historical decisions.",
        "Manual reporting consumed time and was prone to gaps.",
      ],
      statement:
        "Fragmented record-keeping made it hard to plan, track, and learn from agricultural operations that is limiting the ability to make informed decisions across seasons.",
    },
    goals: [
      "Centralize operational records into a single platform.",
      "Provide structured workflows for tracking activities and resources.",
      "Enable historical review of past seasons and decisions.",
      "Deliver a clean, responsive interface usable across devices.",
    ],
    responsibilities: [
      "Full-stack feature development",
      "Frontend component architecture",
      "Backend API integration",
      "Database data modeling",
      "Authentication implementation",
      "User interface design decisions",
    ],
    architecture: {
      flow: [
        {
          label: "Frontend Application",
          note: "Next.js interface for farm managers",
        },
        { label: "API Layer", note: "Backend endpoints for data operations" },
        { label: "Backend Application", note: "Business logic and validation" },
        {
          label: "Database",
          note: "Relational storage for operations and resources",
        },
      ],
      explanation:
        "The Next.js frontend consumes the backend API for all data operations. The API layer enforces validation and business rules, while the database stores normalized records of activities, resources, and historical data. This separation keeps the frontend focused on presentation and the backend responsible for data correctness.",
    },
    features: [
      {
        name: "Activity Tracking",
        description:
          "Record and review farm activities with structured metadata.",
        implementation:
          "Built as typed resources with consistent API contracts, validated on submission and stored relationally for historical review.",
      },
      {
        name: "Resource Management",
        description: "Track resources used across operations.",
        implementation:
          "Modeled as relational entities linked to activities, enabling aggregated views and historical queries.",
      },
      {
        name: "Historical Review",
        description: "Compare past seasons and past decisions.",
        implementation:
          "Implemented through read-optimized queries over normalized historical records, surfaced through a dedicated review interface.",
      },
    ],
    implementation: {
      backend: [
        "API endpoints designed around resources with predictable CRUD contracts.",
        "Validation enforced server-side to keep data consistent across all clients.",
        "Authentication applied to protect operational data.",
      ],
      database: [
        "Normalized schema linking activities, resources, and historical records.",
        "Foreign-key relationships preserve referential integrity.",
        "Indexes added for read-heavy historical queries.",
      ],
      frontend: [
        "Component structure aligned to backend resources for predictable data flow.",
        "TypeScript used throughout to enforce contract safety with the API.",
        "Tailwind CSS used for a consistent, responsive, minimal interface.",
      ],
    },
    challenges: [
      {
        challenge:
          "Structuring unstructured farm data into a consistent relational model.",
        impact:
          "Without a clear model, records would remain inconsistent and hard to query.",
        solution:
          "Defined normalized entities for activities and resources with explicit relationships before building features.",
        decision:
          "Prioritized data modeling up front to ensure queries and reports stayed reliable as the platform grew.",
      },
      {
        challenge:
          "Keeping the frontend responsive while handling growing operational records.",
        impact:
          "Large record sets risked slow renders and poor manager experience.",
        solution:
          "Implemented pagination and selective fetching aligned to backend endpoint boundaries.",
        decision:
          "Moved data-loading responsibility to the API layer, keeping the frontend focused on rendering.",
      },
    ],
    results: [
      "Replaced fragmented record-keeping with a centralized operational platform.",
      "Enabled historical review of activities and resources across seasons.",
      "Provided a responsive interface usable across desktop and mobile.",
      "Established a data model ready to support additional farm workflows.",
    ],
    lessons: [
      "Modeling unstructured domain data into a relational schema.",
      "Building full-stack features with consistent API contracts.",
      "Using TypeScript to enforce safety between frontend and backend.",
      "Designing responsive interfaces with Tailwind CSS.",
    ],
  },
  {
    slug: "tidytask",
    name: "TidyTask",
    tagline:
      "A productivity-focused task management application that helps users organize and prioritize tasks based on urgency.",
    role: "Full-Stack Developer",
    period: "Project",
    links: {
      live: "https://tidy-task-kappa.vercel.app/",
      github: "https://github.com/clark-catle/tidyTask",
      docs: "https://github.com/clark-catle/tidyTask",
    },
    stack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js API Routes", "Authentication"],
      database: ["PostgreSQL", "Database Design"],
      deployment: ["Vercel"],
    },
    overview:
      "TidyTask is a task management application built to help users prioritize work by urgency. It provides a focused interface where tasks are organized and surfaced based on what needs attention most, reducing the overhead of managing a long task list.",
    who: "Individual users who need a clear, urgency-driven view of their tasks.",
    why: "Generic task lists grow long and lose urgency signals, making it hard to know what to work on next.",
    problem: {
      limitations: [
        "Flat task lists bury urgent work among low-priority items.",
        "No clear prioritization signal beyond manual ordering.",
        "Users spend time organizing tasks instead of doing them.",
        "Existing tools focused on volume rather than urgency.",
      ],
      statement:
        "As task lists grow, urgency gets buried — users lose the ability to quickly identify what deserves attention, reducing productivity.",
    },
    goals: [
      "Surface tasks by urgency rather than creation order.",
      "Keep the interface minimal and focused.",
      "Persist tasks reliably with a structured backend.",
      "Provide a fast, responsive experience.",
    ],
    responsibilities: [
      "Full-stack development",
      "Frontend component architecture",
      "API route implementation",
      "Database design",
      "User interface decisions",
      "Deployment configuration",
    ],
    architecture: {
      flow: [
        {
          label: "Frontend Application",
          note: "Next.js UI rendering urgency-sorted tasks",
        },
        {
          label: "API Layer",
          note: "Next.js API routes handling task operations",
        },
        { label: "Business Logic", note: "Urgency calculation and validation" },
        { label: "Database", note: "PostgreSQL storing user tasks" },
      ],
      explanation:
        "The Next.js frontend and API routes share a single codebase. The frontend calls API routes for all task operations, which apply validation and urgency logic before persisting to PostgreSQL. Keeping logic server-side ensures urgency rules stay consistent regardless of client.",
    },
    features: [
      {
        name: "Urgency Prioritization",
        description:
          "Tasks automatically ordered by urgency rather than manual position.",
        implementation:
          "Urgency derived from task metadata and computed server-side, returned pre-sorted to the client.",
      },
      {
        name: "Task Organization",
        description: "Create, edit, and complete tasks with minimal friction.",
        implementation:
          "Implemented through typed API contracts with optimistic client updates for responsiveness.",
      },
      {
        name: "Persistent Storage",
        description: "Tasks persist reliably across sessions and devices.",
        implementation:
          "Stored in PostgreSQL with a normalized schema tied to user accounts.",
      },
    ],
    implementation: {
      backend: [
        "Next.js API routes handle task operations with consistent contracts.",
        "Urgency logic centralized server-side to keep results consistent.",
        "Validation enforced before persistence.",
        "Authentication scopes task access per user.",
      ],
      database: [
        "Normalized schema with tasks linked to owning users.",
        "Indexes on urgency fields to keep sorted queries fast.",
        "Foreign-key constraints preserve per-user data boundaries.",
      ],
      frontend: [
        "Components structured around the task resource.",
        "TypeScript enforces the API contract end-to-end.",
        "Tailwind CSS delivers a minimal, focused interface.",
        "Optimistic updates keep interactions feeling immediate.",
      ],
    },
    challenges: [
      {
        challenge:
          "Urgency needed to stay consistent across different clients and sessions.",
        impact:
          "Computing urgency on the client risked inconsistent ordering between devices.",
        solution:
          "Moved urgency calculation to the server, returning pre-sorted results.",
        decision:
          "Centralized business logic in API routes to guarantee a single source of truth for ordering.",
      },
      {
        challenge: "Task lists could grow large enough to slow down rendering.",
        impact: "Rendering hundreds of tasks at once hurt responsiveness.",
        solution:
          "Implemented pagination and selective rendering of high-urgency tasks.",
        decision:
          "Kept the interface focused on what matters now, deferring the rest to paginated views.",
      },
    ],
    results: [
      "Reduced the cognitive overhead of long task lists through urgency-based ordering.",
      "Provided a fast, minimal interface focused on the most important work.",
      "Established a consistent backend contract ready for additional prioritization rules.",
      "Delivered a reliable persistent experience across sessions.",
    ],
    lessons: [
      "Centralizing business logic server-side to keep behavior consistent.",
      "Designing full-stack applications with shared TypeScript contracts.",
      "Building focused interfaces that reduce user overhead.",
      "Using PostgreSQL indexes to keep sorted queries performant.",
    ],
  },
];

/**
 * returns the info of the `slug` that was passed
 * @param slug
 * @returns
 */
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
