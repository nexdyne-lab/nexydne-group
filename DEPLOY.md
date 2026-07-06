# NexDyne — Deployment Guide (Railway + Cloudflare + Resend)

This app is a **single Node process**: an Express + tRPC server that also serves
the built Vite frontend (`npm run build` → `npm run start` → `node dist/index.js`).
It fits Railway's persistent-server model — **stay on Railway; don't move to Vercel**
(Vercel is serverless-first and would require rewriting the backend + moving the DB).

**Launch scope:** marketing site only. The app-builder's OAuth + "Forge" backend
is left unconfigured — the public site renders fine; auth/admin features stay dormant
until those vars are set later.



---

## 0. Prerequisites
- Use **one company email** for Railway, Cloudflare, and Resend (ideally a domain
  address like `admin@nexdynegroup.com`, not a personal Gmail).
- The repo is on GitHub (`nexdyne-lab/nexydne-group`), branch **`main`** has the
  brand-v2 work merged.

---

## 1. Railway — deploy the app
1. **railway.app → New Project → Deploy from GitHub repo** → pick this repo, branch `main`.
2. Railway auto-detects Node (Nixpacks) and uses `railway.json`:
   build = `npm run build`, start = `npm run start`, healthcheck = `/`.
3. **Variables** (Settings → Variables) — for the marketing launch set:
   - `NODE_ENV=production`
   - `VITE_APP_TITLE=NexDyne Consulting Group`
   - `VITE_APP_ID=nexdyne`
   - `VITE_GA_MEASUREMENT_ID=` (optional; your GA4 id)
   - Leave the OAuth/Forge vars **blank** for now.
   - `PORT` is injected by Railway automatically — don't hardcode it.
4. **(Optional now, required for dynamic features) Database:** Project → **New → Database → MySQL**.
   Railway injects `DATABASE_URL`. Then run migrations once from your machine:
   `DATABASE_URL="<railway mysql url>" npm run db:push`.
5. Deploy. Watch **Deployments → logs** for `Server running on http://localhost:<port>/`.
6. Open the temporary Railway URL (`*.up.railway.app`) and verify the site loads.

---

## 2. Cloudflare — DNS hub
1. **dash.cloudflare.com → Add a site →** `nexdynegroup.com` (Free plan is fine).
2. At **GoDaddy** (the registrar), change the nameservers to the two Cloudflare gives you.
   Wait for Cloudflare to show the domain **Active** (minutes–hours).
3. **SSL/TLS → Overview → set encryption mode to `Full (strict)`** (avoids cert
   loops with Railway's managed certificate).

---

## 3. Point the domain at Railway
1. Railway → your service → **Settings → Networking → Custom Domain** → add
   `www.nexdynegroup.com` (and/or `nexdynegroup.com`). Railway shows a **CNAME target**
   like `xxxx.up.railway.app`.
2. Cloudflare → **DNS → Records → Add record**:
   - Type `CNAME`, Name `www`, Target `<railway target>`, Proxy **On** (orange cloud).
   - For the root/apex `nexdynegroup.com`, add a `CNAME` (Cloudflare flattens apex CNAMEs)
     to the same target, or redirect apex → www via a Cloudflare Redirect Rule.
3. Wait for Railway to show the domain **verified / certificate issued**, then load
   `https://www.nexdynegroup.com`.

---

## 4. Resend — transactional email
1. **resend.com** → sign up with the company email → **Domains → Add Domain** →
   `nexdynegroup.com`.
2. Resend gives **DKIM + SPF (and optionally DMARC)** records. In Cloudflare → DNS,
   add each exactly as shown (usually `TXT`/`CNAME`; set proxy **Off / DNS only** for
   these). Back in Resend, click **Verify**.
3. Create an **API key** → set it in Railway: `RESEND_API_KEY=...` and
   `EMAIL_FROM=noreply@nexdynegroup.com`.
4. Wiring Resend into the site (e.g. the contact/subscribe forms, which currently just
   log) is a follow-up code step — do it after the domain verifies.

---

## Quick reference — env vars
See [`.env.example`](./.env.example). Marketing launch needs only `NODE_ENV`
(+ `VITE_APP_*`); add `DATABASE_URL` for dynamic features and `RESEND_API_KEY` /
`EMAIL_FROM` for email. OAuth/Forge vars stay blank until auth is turned on.

## Notes
- Redeploys: push to `main` → Railway auto-builds & deploys.
- `netlify.toml` was removed (we're not using Netlify).
- Don't switch to Vercel unless the app is migrated to Next.js / serverless.
