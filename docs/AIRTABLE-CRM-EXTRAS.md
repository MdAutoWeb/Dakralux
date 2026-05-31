# Dakralux CRM — views & Airtable-automations

De website regelt e-mail, dubbels, herinneringen en het dashboard. **Views** maak je handmatig in Airtable (de API kan geen views aanmaken).

## Views aanmaken (±2 min per view)

Open base **DakraluxForm** → **+ Create new…** → **Grid view**.

### 🔥 Vandaag opvolgen

Filter (AND):

- `Volgende actie` is on or before today
- `Status` is not `Done`

Sorteer: `Prioriteit` (custom order: Hoog → Normaal → Laag), dan `Volgende actie` oplopend.

### ⚡ Hoge prioriteit

- `Prioriteit` is `Hoog`
- `Status` is not `Done`

### 🆕 Nieuwe leads

- `Status` is `Nieuw`

### ⚠️ Mogelijke dubbels

- `Dubbel` is checked

### ✅ Afgehandeld

- `Status` is `Done`

---

## Optioneel: native Airtable-automation

Als je **geen** Resend gebruikt, kun je in Airtable zelf nog automations zetten:

1. **Nieuwe lead → e-mail naar jou**  
   Trigger: Record created  
   Actie: Send email (jouw adres)

2. **Status Done → viering** (optioneel)  
   Trigger: Status = Done

De website stuurt al e-mail via Resend als `RESEND_API_KEY` en `LEADS_NOTIFY_EMAIL` zijn ingesteld — dan hoef je automation 1 niet dubbel te doen.

---

## Website-features (al ingebouwd)

| Feature | Waar |
|--------|------|
| E-mail klant + eigenaar | Resend bij nieuwe lead |
| Dubbele e-mail detectie | Veld `Dubbel` + notitie |
| Herinnering verstreken opvolgdatum | Cron `/api/cron/leads-reminder` (dagelijks 08:00) |
| Dashboard statistieken | `/admin/leads?key=JOUW_SECRET` |

---

## Environment (productie)

```bash
RESEND_API_KEY=re_...
LEADS_NOTIFY_EMAIL=info@dakralux.be
DAKRALUX_FROM_EMAIL=Dakralux <no-reply@dakralux.be>
DAKRALUX_REPLY_TO=info@dakralux.be

CRON_SECRET=lange_random_string
LEADS_ADMIN_SECRET=andere_lange_random_string
```

Op Vercel: `CRON_SECRET` wordt automatisch meegestuurd naar de cron-route.
