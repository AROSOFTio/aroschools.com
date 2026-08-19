# AroSchools — Master Product Plan

> **Tagline:** One Platform. Every School.
>
> **Product:** Multi-school Digital Campus SaaS
>
> **Primary domain:** `aroschools.com`
>
> **Company:** AROSOFT Innovations Ltd

This file is the canonical product, commercial, feature, architecture, SEO and implementation plan for AroSchools. It should be updated as product decisions change.

---

## 1. Vision

AroSchools is one multi-tenant SaaS platform that lets a school create its public website, manage students and academics, collect/manage fees, serve parents and teachers, and progressively switch on full ERP operations without needing a separate deployment for every school.

Every school gets its own isolated tenant, branding, users, records, files, website and settings while sharing one maintained application codebase.

The product should feel simple enough for a small school to start for free, but powerful enough for an established school to operate admissions, academics, finance, HR, payroll, inventory, library, boarding and management reporting from the same platform.

### Core product promise

- Free Forever core for small/basic schools.
- 60-day full-access trial with 100% of available features unlocked.
- Simple packages rather than dozens of confusing micro-add-ons.
- A beautiful school website is part of the same platform that runs the school.
- Custom school domain from Standard upward.
- Strong tenant isolation, auditability and backups from day one.
- Mobile-first experiences for parents, teachers and administrators.
- Uganda-first pricing with architecture that can expand across Africa.

---

## 2. Business model

AroSchools uses **Freemium + Packages + a small number of specialist add-ons**.

### Main packages

| Package | Monthly price | Purpose |
|---|---:|---|
| Free Forever | UGX 0 | Useful basic school management for small schools |
| Standard | UGX 10,000 | Professional website, own domain and higher limits |
| Pro | UGX 25,000 | Admissions, advanced academics, HR and better fees |
| Enterprise | UGX 50,000 | Complete School ERP |

### Suggested annual billing

| Package | Monthly | Suggested annual |
|---|---:|---:|
| Standard | UGX 10,000 | UGX 100,000/year |
| Pro | UGX 25,000 | UGX 250,000/year |
| Enterprise | UGX 50,000 | UGX 500,000/year |

Annual pricing is approximately ten months of monthly billing, giving the school roughly two months free for paying upfront.

### Specialist add-ons

Only keep add-ons for special or variable-cost capabilities:

| Add-on | Suggested price/model |
|---|---:|
| Additional campus | UGX 10,000/month |
| Additional 500 students | UGX 5,000/month |
| Extra storage | UGX 5,000/month |
| Full white label | UGX 5,000/month |
| Meeting AI | UGX 10,000/month |
| E-learning | UGX 10,000/month |
| API/Webhooks | UGX 10,000/month |
| Biometric integration | UGX 10,000/month |
| SMS | Usage/credit based |
| WhatsApp | Usage/provider based |

Payment provider transaction charges are separate from SaaS subscription pricing.

---

## 3. 60-day full-access trial

Every newly created school starts with **60 days of 100% access**.

The trial includes:

- Free, Standard, Pro and Enterprise features.
- Custom domain capability.
- Full website builder.
- Admissions Pro.
- Advanced academics.
- HR and payroll.
- Finance/accounting.
- Inventory, assets and procurement.
- Library, boarding, discipline, clinic and transport.
- Advanced analytics.
- PRN/payment automation where integrations are configured.
- Meeting AI and other available premium modules.

### Trial UX

Dashboard should clearly show:

`Full Access Trial — 52 days remaining`

Recommended reminders: 30, 14, 7, 3 and 1 day before expiry.

### At trial expiry

- Never delete the school.
- Never delete premium-module data.
- Free Forever core remains active.
- Premium features become read-only/locked where appropriate.
- Show a simple choice: Stay Free / Standard / Pro / Enterprise.
- If a school later re-subscribes, premium data becomes usable again immediately.

---

## 4. Free Forever

The free tier should be genuinely useful to a basic school but should stop before professional branding, scale and serious administrative automation.

### Limits

| Limit | Free Forever |
|---|---:|
| Active students | 100 |
| Staff users | 5 |
| Administrators | 1 |
| Campuses | 1 |
| Storage | 500 MB |
| Website photos | 10 |
| Domain | Platform subdomain only |

Example: `starlight.aroschools.com`

### Free website

- School name and logo.
- Primary brand colour.
- Motto.
- Home page.
- About.
- Programs.
- Contact.
- Basic gallery.
- Basic news/announcements.
- Platform branding remains visible.

### Free student core

- Student biodata.
- Admission number.
- Parent/guardian information.
- Class and stream.
- Student status.
- Basic student search/list.

### Free academics

- Academic year/term basics.
- Classes.
- Streams.
- Subjects.
- Basic teacher assignment.
- Attendance.
- Marks entry.
- Basic grading.
- One standard report card.

### Free portals

**Student:** results, attendance, announcements.

**Parent:** linked child results, attendance, announcements.

**Teacher:** assigned classes, attendance, marks entry.

### Free fees

- Basic fee amount.
- Student balance.
- Manual payment entry.
- Basic receipt.
- Debtors list.
- Basic fee statement.

### Free reports

- Student list.
- Attendance report.
- Basic results.
- Fee balances.

### Deliberately excluded from Free

- Custom domain.
- Advanced website features.
- Full online admissions workflow.
- Advanced academic analytics/workflows.
- Full HR.
- Payroll.
- Accounting.
- Inventory/procurement/assets.
- Library/boarding/transport/clinic.
- Automatic payment reconciliation.

---

## 5. Standard — UGX 10,000/month

Standard should be the easiest first paid upgrade. The strongest conversion trigger is professional online identity.

### Limits

| Limit | Standard |
|---|---:|
| Students | 300 |
| Staff users | 15 |
| Administrators | 3 |
| Campuses | 1 |
| Storage | 2 GB |

### Included

Everything in Free plus:

- Custom school domain.
- Automatic SSL.
- DNS verification wizard.
- Custom favicon.
- Up to 50 website photos.
- Better website themes/layouts.
- Campus/facilities.
- Awards and achievements.
- Events calendar.
- Expanded news/gallery.
- Basic SEO tools.
- Student ID generation.
- Excel/CSV imports.
- Basic timetable.
- Downloadable report cards.
- Better fee statements.
- Additional standard reports.

---

## 6. Pro — UGX 25,000/month

Pro should be presented as **Most Popular**.

### Limits

| Limit | Pro |
|---|---:|
| Students | 800 |
| Staff users | 40 |
| Administrators | 5 |
| Campuses | 1 |
| Storage | 5 GB |

### Admissions Pro

- Public online applications.
- Applicant records.
- Application review.
- Accept/reject.
- Applicant documents.
- Admission letters.
- Automatic admission numbers.
- Application status tracking.

### Academics Pro

- Configurable assessments.
- Assessment weightings.
- Beginning-of-term/mid-term/coursework/end-of-term patterns.
- Advanced grading.
- Class positions/rankings when enabled by school.
- Subject analytics.
- Class analytics.
- Student performance history.
- Teacher comments.
- Class teacher comments.
- Headteacher comments.
- Result approval workflow.
- Multiple report-card templates.

### HR Management

- Detailed staff profile.
- Qualifications.
- Contracts.
- Staff documents.
- Leave.
- Staff attendance.
- Appraisals.
- Disciplinary records.
- Employment history.

### Advanced fees

- Multiple fee structures.
- Instalment plans.
- Discounts.
- Scholarships/bursaries.
- Penalties.
- Credit balances.
- Bulk billing.
- Advanced statements.
- Better collection/arrears analytics.

---

## 7. Enterprise — UGX 50,000/month

Enterprise is the **Complete School ERP**.

### Limits

| Limit | Enterprise |
|---|---:|
| Students | 2,000 |
| Staff users | 100 |
| Administrators | 10 |
| Campuses | 2 |
| Storage | 15 GB |

### Payroll

- Salary structures.
- Basic salary.
- Allowances.
- Deductions.
- Staff advances/loans.
- PAYE/NSSF configurable fields.
- Payroll preparation.
- Approval workflow.
- Payslips.
- Payroll history.

### Finance & accounting

- Income.
- Expenses.
- Cashbook.
- Bank accounts.
- Petty cash.
- Budgeting.
- Budget vs actual.
- Suppliers.
- Payables.
- Financial reports.
- Department expenditure.

### Inventory & assets

- Stock items.
- Stores.
- Stock receipts.
- Stock issues.
- Stock balances.
- Reorder levels.
- Asset register.
- Serial numbers.
- Location/custodian.
- Condition.
- Maintenance history.

### Procurement

- Purchase requests.
- Supplier quotations.
- Approvals.
- Purchase orders.
- Supplier management.

### Library

- Books and copies.
- Borrowing/returns.
- Due dates.
- Overdue items.
- Lost/damaged books.

### Boarding

- Dormitories.
- Rooms.
- Beds.
- Student allocation.
- House masters/matrons.
- Dorm attendance.

### Discipline

- Incidents.
- Actions taken.
- Parent contacted status.
- Follow-up.
- Behaviour history.

### Clinic/sickbay

- Visits.
- Allergies.
- Medication.
- Referrals.
- Emergency information.
- Strong restricted permissions.

### Transport

- Vehicles.
- Drivers.
- Routes/stops.
- Student assignments.
- Transport fees.
- Maintenance records.

### Executive analytics

- Enrolment.
- Attendance.
- Academic performance.
- Fee collection/arrears.
- Finance/expenses.
- Staff statistics.
- Inventory/procurement.
- Management dashboards.

---

## 8. Package comparison

| Feature | Free | Standard | Pro | Enterprise |
|---|---|---|---|---|
| Students | 100 | 300 | 800 | 2,000 |
| Staff users | 5 | 15 | 40 | 100 |
| Admins | 1 | 3 | 5 | 10 |
| Custom domain | No | Yes | Yes | Yes |
| Advanced website | No | Yes | Yes | Yes |
| Admissions Pro | No | No | Yes | Yes |
| Advanced academics | No | No | Yes | Yes |
| HR | Directory only | Directory only | Yes | Yes |
| Payroll | No | No | No | Yes |
| Accounting | No | No | No | Yes |
| Inventory/assets | No | No | No | Yes |
| Library/boarding/etc. | No | No | No | Yes |
| Advanced analytics | No | Basic | Yes | Yes |
| Storage | 500 MB | 2 GB | 5 GB | 15 GB |

All package definitions must be dynamic entitlements in the SaaS owner console, not hard-coded business rules.

---

## 9. School website builder

Every tenant gets a website generated from the same school configuration. Schools should manage content without editing code.

### Editable branding/content

- Logo.
- Favicon.
- Primary/secondary colours.
- Motto.
- School name.
- Hero image.
- Student/campus photography.
- Mission/vision/history.
- Programs/departments.
- Academic levels.
- Facilities.
- Campus showcase.
- Awards/achievements.
- Leadership.
- Gallery.
- News.
- Events.
- Admissions content.
- Careers/vacancies.
- Contact information.
- Map.
- Social media.
- WhatsApp.

### Website sections

- Hero.
- About.
- Academics.
- Programs.
- Campus.
- Facilities.
- Admissions.
- Awards.
- Student life.
- Gallery.
- News.
- Events.
- Leadership.
- Alumni.
- Careers.
- Contact.
- Portal/payment CTAs.

Premium plans can enable/disable/reorder sections and choose themes.

Schools are responsible for obtaining appropriate consent before publishing identifiable student photos.

---

## 10. Custom domains

### Free

`schoolslug.aroschools.com`

### Standard+

Examples:

- `www.starlight.ac.ug`
- `starlightsecondaryschool.com`
- `portal.schoolname.ac.ug`

### Domain flow

1. School enters domain.
2. System displays required DNS record.
3. School/domain administrator adds record.
4. Platform periodically verifies DNS.
5. Domain is marked verified.
6. TLS/SSL is provisioned automatically.
7. Domain routes to the correct tenant.
8. School branding/SEO applies automatically.

Domain ownership must be re-verifiable and domain routing must never rely only on client-provided tenant identifiers.

---

## 11. Fees, PRN and payments

Basic manual fee management remains Free Forever. Automation drives paid conversion.

### Core data model

Each payment/reconciliation record should connect:

- School/tenant.
- Student.
- Invoice/charge.
- PRN/payment reference.
- Provider.
- Provider transaction reference.
- Amount.
- Currency.
- Status.
- Payment channel.
- Timestamp.
- Reconciliation state.
- Receipt.
- Reversal/refund information.

### Payment provider abstraction

Do not hard-code one payment company. Build a provider interface so AroSchools can support combinations of:

- MTN Mobile Money.
- Airtel Money.
- Bank integrations.
- Card gateways.
- Aggregators.
- Country-specific providers later.

### Automated flow

`Invoice -> PRN -> Customer Payment -> Provider Webhook -> Verify -> Idempotent Reconciliation -> Student Ledger -> Receipt -> Notification`

Provider webhooks must be authenticated, idempotent and tenant-aware.

---

## 12. User portals

### Student portal

- Profile.
- Attendance.
- Results.
- Report cards.
- Timetable.
- Fee summary/statement according to package.
- Announcements.
- Assignments/e-learning if enabled.

### Parent portal

- Multiple linked children.
- Results.
- Attendance.
- Fee balances/statements.
- Receipts.
- Payment action where enabled.
- Discipline where permitted.
- Announcements.
- School calendar.
- Communication.

### Teacher portal

- Assigned classes.
- Assigned subjects.
- Attendance.
- Marks entry.
- Timetable.
- Comments.
- Assignments/resources if enabled.
- Messaging/announcements.

---

## 13. Roles & permissions

Suggested school roles:

- School Owner/Director.
- Headteacher.
- Deputy Headteacher.
- Director of Studies.
- Bursar.
- Accountant.
- Cashier.
- HR Officer.
- Teacher.
- Class Teacher.
- Librarian.
- Storekeeper.
- Nurse.
- Parent.
- Student.

Permissions must be role-based and tenant-scoped. Schools may later create custom roles.

High-risk operations need explicit permissions: payment reversal, payroll approval, result publishing, finance export, staff medical/disciplinary access, tenant settings and domain/payment configuration.

---

## 14. SaaS owner console

AROSOFT/AroSchools needs a separate platform administration experience.

### Schools

- All tenants.
- Trial/Free/Standard/Pro/Enterprise.
- Grace/suspended/cancelled.
- Trial start/end.
- Subscription renewal.
- Usage and limits.
- Domain/SSL status.
- Last activity.

### Revenue

- Monthly recurring revenue.
- Annual recurring revenue.
- Payments.
- Renewals.
- Failed payments.
- Trial conversion.
- Revenue by package.

### Usage

- Students.
- Staff users.
- Storage.
- Domains.
- Transactions.
- SMS/WhatsApp.
- AI usage.

### Support/admin actions

- Extend trial.
- Change plan.
- Grant promotional entitlement.
- Suspend/reactivate.
- Review tenant health.
- Feature flags.
- Support tickets.
- Audited support impersonation.
- Backup/restore monitoring.
- Platform-wide announcements.

---

## 15. Dynamic plan/entitlement engine

Free, Standard, Pro and Enterprise are **not separate applications**.

A plan record should define:

- Name.
- Price.
- Currency.
- Billing period.
- Trial behavior.
- Student limit.
- Staff limit.
- Admin limit.
- Campus limit.
- Storage quota.
- Feature keys.
- Communication allowance.
- Custom-domain allowance.
- White-label allowance.

Example feature keys:

- `custom_domain`
- `website_pro`
- `admissions_pro`
- `academics_pro`
- `fees_advanced`
- `payments`
- `prn_reconciliation`
- `hr`
- `payroll`
- `accounting`
- `inventory`
- `assets`
- `procurement`
- `library`
- `boarding`
- `transport`
- `clinic`
- `discipline_pro`
- `analytics_pro`
- `meeting_ai`
- `elearning`
- `api_access`
- `white_label`

Never determine authorization solely in the UI; entitlement checks must also happen on the backend/API.

---

## 16. Multi-tenant architecture

AroSchools must be multi-tenant from the first real SaaS implementation.

### Mandatory rule

School A must never be capable of reading or mutating School B's:

- Students.
- Parents.
- Staff.
- Marks/results.
- Payments.
- Financial records.
- Files.
- Website content.
- Settings.
- Integrations.

### Tenant context

Every tenant-owned table should use a stable `tenant_id`/`school_id`. Server-side tenant context must be derived from trusted authentication/domain context rather than arbitrary request parameters alone.

Recommended safeguards:

- Tenant-scoped repositories/services.
- Composite indexes beginning with tenant ID for high-volume tables.
- Database constraints/foreign keys including tenant ownership where practical.
- Row-level security where it provides meaningful defense-in-depth.
- Tenant-aware workers/background jobs.
- Tenant-aware cache keys.
- Tenant-aware storage keys.
- Tenant-aware audit logs.
- Security tests that attempt cross-tenant access.

---

## 17. Recommended technical stack

### Public website / school portals

- Next.js + TypeScript.
- Responsive/PWA-friendly UI.
- Server-rendered/SEO-friendly public school websites.

### SaaS backend

Recommended: FastAPI/Python for API and business services, or a carefully structured Next.js backend if keeping one stack. If FastAPI is used:

- FastAPI.
- SQLAlchemy.
- Alembic migrations.
- Pydantic.

### Database

- PostgreSQL.

### Cache / jobs

- Redis.
- Celery/RQ/other robust worker system for imports, exports, email, payment reconciliation and scheduled jobs.

### Files

- S3-compatible object storage for school media, student documents, report cards and exports.

### Email/SMS/WhatsApp

- Provider abstraction.
- Usage metering per tenant.

### Infrastructure

- Dockerized services.
- CI/CD.
- Reverse proxy/domain routing.
- Automated TLS.
- Centralized logs and error monitoring.
- Database backups and tested restore procedures.

---

## 18. Storage structure

Logical object-storage structure:

```text
schools/{school_id}/
  logos/
  website/
    hero/
    gallery/
    news/
  students/
    photos/
    documents/
  staff/
    photos/
    documents/
  finance/
  reports/
  exports/
  meetings/
```

Meter usage by tenant so storage limits and add-ons can be enforced.

Use signed/private URLs for protected documents; do not expose student/staff documents through public website storage paths.

---

## 19. Security & privacy baseline

- Secure password hashing.
- Optional/required 2FA for sensitive roles.
- Role-based authorization.
- Tenant isolation.
- CSRF/session protections appropriate to auth architecture.
- Rate limiting.
- Login throttling.
- Audit logs.
- Sensitive-change history.
- Encrypted integration credentials/secrets.
- Backup encryption where appropriate.
- Signed URLs for private files.
- Secure payment webhooks.
- Idempotent financial operations.
- Soft delete/recovery for critical records.
- Data export/offboarding process.
- Automated backup schedule.
- Periodic restore testing.
- Least-privilege database/service credentials.
- No secrets committed to Git.

Sensitive modules such as clinic, payroll, discipline and finance require narrower permissions than ordinary student access.

---

## 20. SEO strategy

The public AroSchools marketing site and tenant school websites should be built for search from the beginning.

### AroSchools target search themes

- school management system Uganda
- school management software Uganda
- school ERP Uganda
- school fees management software
- student management system
- student results software
- parent portal for schools
- teacher portal software
- school website builder
- school ERP Africa
- education software Africa
- digital campus

### Technical SEO requirements

- Server-rendered semantic HTML.
- Unique title/description per public page.
- Canonical URLs.
- XML sitemap.
- robots.txt.
- OpenGraph/Twitter metadata.
- Organization and SoftwareApplication structured data.
- Breadcrumb structured data on deeper content pages.
- FAQ schema only for visible FAQs.
- Fast mobile performance.
- Accessible headings and navigation.
- Descriptive image alt text.
- Clean URL structure.
- 301 redirects for changed URLs.
- No indexation of private portal/dashboard routes.

### Future public marketing pages

```text
/
/features
/features/student-management
/features/fees-payments
/features/results-academics
/features/school-website
/features/parent-portal
/features/hr-payroll
/pricing
/for-primary-schools
/for-secondary-schools
/for-vocational-schools
/resources
/blog
/contact
```

Each feature/segment page should answer real school questions rather than simply repeating keywords.

### Tenant website SEO

Each paid school should control:

- SEO title.
- Meta description.
- Social sharing image.
- School name/address/contact.
- Page-specific titles/descriptions.
- Indexing toggle for draft/private pages.

Generate tenant sitemap and canonical URLs from the active custom domain/subdomain.

---

## 21. Current repository structure — launch site

The repository begins as a lightweight Next.js launch/SEO site:

```text
aroschools.com/
├── app/
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   ├── manifest.ts
│   ├── not-found.tsx
│   ├── opengraph-image.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── .dockerignore
├── .gitignore
├── Dockerfile
├── next-env.d.ts
├── next.config.ts
├── package.json
├── tsconfig.json
├── README.md
└── PLAN.md
```

The current homepage is intentionally a polished coming-soon/positioning page, not the full SaaS application.

---

## 22. Target production repository structure

As the product becomes a real SaaS, migrate toward a clear monorepo (exact boundaries may evolve):

```text
aroschools/
├── apps/
│   ├── web/                    # public AroSchools marketing site
│   ├── platform/               # school admin, teacher, parent, student UI
│   └── api/                    # FastAPI/primary backend API
│
├── packages/
│   ├── ui/                     # shared design system/components
│   ├── config/                 # shared configuration
│   ├── auth/                   # authentication helpers/contracts
│   ├── tenancy/                # tenant context + entitlement contracts
│   ├── payments/               # provider interfaces/contracts
│   ├── notifications/          # email/SMS/WhatsApp contracts
│   └── types/                  # shared generated/client types
│
├── services/
│   └── worker/                 # async jobs, imports, exports, reconciliation
│
├── database/
│   ├── migrations/
│   ├── seeds/
│   └── scripts/
│
├── storage/
│   └── templates/              # document/report templates only; no live user data in Git
│
├── infra/
│   ├── docker/
│   ├── compose/
│   └── deployment/
│
├── docs/
│   ├── architecture/
│   ├── api/
│   ├── operations/
│   └── security/
│
├── tests/
│   ├── e2e/
│   ├── integration/
│   ├── tenancy/
│   └── security/
│
├── .github/workflows/
├── README.md
└── PLAN.md
```

### Suggested platform UI route groups

```text
/dashboard
/students
/admissions
/academics
/attendance
/results
/fees
/payments
/staff
/website
/reports
/more/hr
/more/payroll
/more/finance
/more/inventory
/more/procurement
/more/library
/more/boarding
/more/transport
/more/clinic
/more/discipline
/more/meetings
/settings
```

Features outside the tenant's entitlement should show a clean locked/upgrade state, not broken navigation.

---

## 23. Core database domains

High-level domains/tables will include:

### Tenancy & billing

- tenants/schools
- campuses
- plans
- plan_features
- subscriptions
- entitlements
- usage_counters
- invoices
- subscription_payments
- domains

### Identity & access

- users
- memberships
- roles
- permissions
- role_permissions
- audit_logs
- sessions

### Students

- students
- guardians
- student_guardians
- admissions/applications
- student_documents
- class_enrolments
- student_status_history

### Academics

- academic_years
- terms
- classes
- streams
- subjects
- teacher_subjects
- assessments
- assessment_components
- marks
- grades
- report_cards
- timetables
- attendance

### Fees/payments

- fee_structures
- fee_items
- student_charges
- invoices
- payment_references/PRNs
- payments
- reconciliations
- receipts
- refunds/reversals

### HR/payroll

- employees
- contracts
- qualifications
- leave
- staff_attendance
- appraisals
- payroll_runs
- payroll_items
- payslips

### Finance

- accounts
- journals/ledger entries
- expenses
- budgets
- suppliers
- payables
- cashbooks

### Operations

- stock_items
- stock_transactions
- assets
- procurement_requests
- purchase_orders
- library_books/copies/loans
- dormitories/rooms/beds
- transport_vehicles/routes/stops
- clinic_visits
- discipline_incidents

### Website/CMS

- website_settings
- pages
- sections
- news
- events
- galleries
- media
- programs
- achievements
- leadership

Exact schema must be normalized carefully and financial ledgers should use immutable/auditable entries rather than overwriting history.

---

## 24. Notifications

### Free

- In-app announcements.

### Paid/usage-based

- Email automation.
- SMS.
- WhatsApp.

Potential events:

- Payment received.
- Fee reminder.
- Student absent.
- Results published.
- Admission approved.
- School announcement.
- Library overdue.
- Payslip available.
- Emergency notice.

Every message must be tenant-scoped and usage-metered.

---

## 25. Meeting AI

AroSchools can reuse the existing meeting summarization capability as a premium module.

Suggested: UGX 10,000/month.

Capabilities:

- Create/schedule meetings.
- Invite participants.
- Record/upload meeting audio.
- AI transcription.
- Minutes generation.
- Decisions.
- Action items.
- PDF/DOCX exports.
- Meeting archive/history.

Meeting AI should be optional and isolated from core school operation so schools are not forced to pay for AI infrastructure they do not need.

---

## 26. Product navigation

Keep primary school administration simple:

- Dashboard
- Students
- Academics
- Fees
- Staff
- Website
- Reports
- More

Inside **More**:

- HR
- Payroll
- Finance
- Inventory
- Procurement
- Library
- Boarding
- Transport
- Clinic
- Discipline
- Meetings
- Settings

Avoid exposing dozens of modules simultaneously to a small school.

---

## 27. Implementation roadmap

### Phase 0 — Launch/SEO presence (current)

- Brand foundation.
- Coming-soon page.
- SEO metadata.
- Structured data.
- Sitemap/robots.
- Social sharing image.
- Repository architecture plan.

### Phase 1 — SaaS foundation

- Multi-tenancy.
- Authentication.
- School signup.
- 60-day trial.
- Plans/subscriptions.
- Feature flags/entitlements.
- School profile/branding.
- Website builder.
- Platform subdomains.
- Custom domain management.
- Roles/permissions.
- SaaS Super Admin.
- Usage limits.
- Audit logs.
- Backups.

### Phase 2 — Free Core ERP

- Students.
- Guardians.
- Classes/streams/subjects.
- Attendance.
- Marks/results.
- Basic report cards.
- Basic fees/manual payments.
- Basic reports.
- Student portal.
- Parent portal.
- Teacher portal.

At the end of Phase 2, AroSchools can onboard real schools on Free/Standard.

### Phase 3 — Standard & Pro

- Professional website features.
- Custom domains.
- Admissions.
- Advanced academics.
- HR.
- Advanced fees.
- PRN/payment integrations.
- Advanced reports.

### Phase 4 — Enterprise

- Payroll.
- Accounting/budgets.
- Inventory/assets.
- Procurement.
- Library.
- Boarding.
- Transport.
- Clinic.
- Discipline.
- Executive analytics.

### Phase 5 — Ecosystem

- Meeting AI.
- E-learning.
- Biometrics.
- Public API/webhooks.
- Multi-country/currency/payment support.
- Reseller/agent program.
- Native mobile apps only if actual usage justifies them.

---

## 28. Definition of success

AroSchools succeeds if:

1. A school can register and start without a developer deploying a separate copy.
2. A small school can genuinely run basic operations on Free Forever.
3. A growing school has clear reasons to upgrade without being artificially crippled.
4. The school website and school ERP feel like one product.
5. A tenant can connect its domain without AROSOFT manually editing infrastructure each time.
6. Payments reconcile accurately and audibly.
7. Parents and teachers can use the platform comfortably on a phone.
8. AROSOFT can change plans/features from Super Admin without code deployments.
9. One school can never access another school's data.
10. The platform can add new schools without creating a new application instance per school.

---

## 29. Current launch message

Public positioning for the initial AroSchools site:

> **AroSchools — One Platform. Every School.**
>
> Your school website, students, academics, fees, parents, teachers and operations — together in one simple digital campus.
>
> **Free Forever core. 60 days of full access.**

This message should remain simple while the deeper features live on SEO/product pages as the SaaS is built.
