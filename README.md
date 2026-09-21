# Accessible Chattogram Map

Build the MVP frontend for a real-world civic-tech project called “Accessible Chattogram”.

Goal

Create a modern, responsive accessibility mapping platform for Chattogram, Bangladesh.

Users should be able to:

Explore places on a map

Search places

View accessibility information

See verification status

Contribute or report accessibility information

Learn about accessibility features

This is only the frontend MVP. Use realistic mock data. Do not build the backend, database, authentication, or real API integration yet.

Tech Stack

Use:

React

TypeScript

Vite

Tailwind CSS

shadcn/ui

React Router

Leaflet + React Leaflet

OpenStreetMap

Lucide React

Do NOT use Next.js, Bootstrap, or Material UI.

Pages

Create these routes:

/ — Home

/explore — Explore Map

/places/:id — Place Details

/contribute — Contribute

/guide — Accessibility Guide

/about — About

Home Page

Create a clean, professional civic-tech landing page.

Hero:

Making Chattogram More Accessible

Subtitle:

Find, verify, and share accessibility information about places across Chattogram.

Buttons:

Explore Accessible Places

Help Improve the Map

Below the hero, show an interactive Leaflet/OpenStreetMap preview with mock markers.

Also include a simple statistics section:

Places Mapped

Verified Places

Community Reports

Areas Covered

Clearly treat these as demo/mock values.

Explore Page

Create a map-focused interface.

Desktop:

Filter sidebar on the left

Large Leaflet map on the right

Mobile:

Full-width map

Filters accessible through a button/drawer

Add search.

Filters:

Hospital

University

School

Restaurant

Shopping Mall

Government Office

Transport

Other

Accessibility filters:

Wheelchair Entrance

Ramp

Elevator

Accessible Toilet

Accessible Parking

Tactile Paving

Audio Assistance

Create around 20–30 realistic mock places across Chattogram.

Do not claim that the accessibility information of these mock places is actually verified.

Place Details

Create a polished place details page.

Show:

Place name

Category

Address

Verification status

Last verified date

Data source

Accessibility information:

Wheelchair entrance

Ramp

Elevator

Accessible toilet

Accessible parking

Tactile paving

Audio assistance

Use three states:

✓ Available

✕ Confirmed unavailable

? Information unavailable

Do NOT treat missing information as “not accessible”.

Also show:

Community verification count

Last updated

Data source

Contribute Page

Create a clean contribution form.

Fields:

Place name

Category

Address

Location

Wheelchair entrance

Ramp

Elevator

Accessible toilet

Accessible parking

Tactile paving

Additional notes

Optional photo

Use React Hook Form + Zod if practical.

For now, submission should be mocked and show a success message.

No authentication or real file upload is required.

Accessibility Guide

Create simple educational cards explaining:

Wheelchair Accessible Entrance

Ramp

Elevator

Accessible Toilet

Accessible Parking

Tactile Paving

Audio Assistance

Explain what each feature means and why it matters.

About

Explain:

What Accessible Chattogram is

Why the project exists

Open data

OpenStreetMap

Community verification

Data freshness

Future expansion

Do not claim partnerships with any organization.

Design

The design should feel like a real civic-tech product.

Use:

Clean typography

Good spacing

Subtle borders/shadows

Clear information hierarchy

Professional cards

Accessible color contrast

Responsive layout

Mobile-first design

Avoid:

Excessive gradients

Excessive glassmorphism

Overly flashy animations

Generic SaaS/dashboard styling

Huge decorative elements

Accessibility is a core requirement:

Semantic HTML

Keyboard navigation

Visible focus states

Proper labels

Good contrast

Do not rely only on color

Architecture

Keep the code modular and easy to extend later.

Suggested structure:

src/

components/

pages/

data/

hooks/

services/

types/

lib/

Create a typed Place interface.

Use mock data through a separate data/service layer so it can later be replaced with a FastAPI backend.

The future backend will use:

FastAPI + PostgreSQL + PostGIS

but DO NOT implement it now.

Final Requirement

Make the MVP complete and runnable.

Ensure:

npm install

and

npm run dev

work without TypeScript/build errors.

Focus on building the five core pages and a polished interactive map rather than adding unnecessary features.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e1a741be-91ba-416b-a132-f674d125f669).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
