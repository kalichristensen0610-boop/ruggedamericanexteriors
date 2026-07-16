# Rugged American Exteriors

Production-ready Next.js marketing site for a DFW gutter specialist, with painting, roofing, and fencing as secondary divisions.

## Local setup

1. Install Node.js 22.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and replace every placeholder.
4. Run `npm run dev` and open `http://localhost:3000`.

## Estimate email configuration

Every website estimate form posts to the shared server-only `/api/estimate` endpoint and delivers to `RuggedAmericanExteriors@gmail.com`. The endpoint validates all required customer fields, rejects unsupported or oversized uploads, sets reply-to to the customer, uses a hidden honeypot and submission timing check, and limits each connection to five attempts per fifteen minutes.

Configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASSWORD`, and optionally `SMTP_FROM_EMAIL` in the hosting provider’s private environment settings. For Gmail, use `smtp.gmail.com`, port `587`, TLS, the sending Gmail account as `SMTP_USER`, and a Google App Password as `SMTP_PASSWORD`. Never commit a real password and never use a `NEXT_PUBLIC_` variable for SMTP settings. Restart or redeploy after changing environment variables.

The sender name and subject identify `RuggedAmericanExteriors.com`. If `SMTP_FROM_EMAIL` is not provided, the authenticated `SMTP_USER` address is used. Some SMTP providers require the from address to match the authenticated account.

## Production and Docker

Run `npm run build`, then `npm start`. For Docker: `docker build -t rugged-american-exteriors .` then `docker run --env-file .env.local -p 3000:3000 rugged-american-exteriors`.

## Research and design decisions

Reviewed current DFW gutter/painting results and leading service-company patterns, including Gutter Tex, Emerson Gutters & Drainage, Paint Corps, LIME Painting, Liberty Gutters, and Phillips Home Improvements. The useful patterns applied here are: service-and-location clarity in the first screen; phone plus estimate CTAs; trust indicators close to the hero; education before sales (5-inch vs. 6-inch, repair vs. replace); proof sections; short forms; and useful, internally linked local landing pages. The design, copy, hierarchy, and components are original.

## Content still required

- Confirmed public website domain
- Logo and brand guide
- Owner names, founder story, and approved veteran/family details
- Real owner/team photos and project photos with service/location captions
- Additional authentic reviews, if desired
- Confirmation of Sherwin-Williams Preferred Contractor wording and any permitted official asset
- SMTP provider credentials (or a preferred transactional email service)
- Any licenses, insurance wording, warranties, financing, hours, or legal policies that should be published
