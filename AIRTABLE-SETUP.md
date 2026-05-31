# 🎯 Dakralux CRM Setup - Airtable Integratie

## 📋 Wat is er geïmplementeerd?

✅ **Contactformulier gekoppeld aan Airtable CRM**
✅ **Automatische lead opslag**
✅ **Error handling en loading states**
✅ **Form validatie**
✅ **Success feedback**

## 🚀 Setup Instructies

### 1. Airtable Account Maken

1. Ga naar [airtable.com](https://airtable.com)
2. Maak een gratis account
3. Maak een nieuwe "Base" aan

### 2. Airtable Tabel Opzetten

Tabel **DakraluxForm** (base `applKDA39gzFOp7Bm`):

### Bestaande kolommen (OK)

| Kolom    | Type           | Opmerking                          |
| -------- | -------------- | ---------------------------------- |
| Naam     | Text           |                                    |
| Email    | Email          |                                    |
| Telefoon | Phone          |                                    |
| Dienst   | Single select  | Zie diensten hieronder             |
| Bericht  | Long text      |                                    |
| Datum    | Created time   | Automatisch                        |
| Status   | Single select  | Voeg optie **Nieuw** toe (zie hieronder) |

### Nog handmatig toevoegen in Airtable

De API-token kan geen kolommen aanmaken (`schema.bases:write` ontbreekt). Voeg deze kolommen zelf toe:

| Kolom            | Type           | Opties / instellingen                                                                 |
| ---------------- | -------------- | ------------------------------------------------------------------------------------- |
| Gemeente         | Single line text |                                                                                     |
| Urgentie         | Single select  | `Dringend (lek/schade)`, `Binnen 3 maanden`, `Planbaar`, `Gewoon info`              |
| Prioriteit       | Single select  | `Hoog`, `Normaal`, `Laag`                                                            |
| Volgende actie   | Date           |                                                                                     |
| Notities         | Long text      | AI-samenvatting + score                                                               |
| Bron             | Single select  | `Website formulier`                                                                  |
| Lead score       | Number         | Geen decimalen (precision 0)                                                         |

**Status:** voeg de optie **Nieuw** toe aan het Status-veld (naast Todo / In progress / Done). De website stuurt `Nieuw` bij elke lead.

**Dienst:** voeg **Hellende Daken** toe als optie (het formulier gebruikt die naam; in Airtable staat nu o.a. “Platte Daken”).

### 3. API Key Ophalen

1. Ga naar [airtable.com/account](https://airtable.com/account)
2. Scroll naar "API" sectie
3. Kopieer je "Personal Access Token"

### 4. Base ID Ophalen

1. Ga naar je Airtable base
2. Kopieer de Base ID uit de URL: `https://airtable.com/appXXXXXXXXXXXXXX/...`
3. Het deel na `/app` is je Base ID

### 5. Environment Variabelen Instellen

Maak een `.env.local` bestand in de root van je project:

```bash
AIRTABLE_API_KEY=key1234567890abcdef
AIRTABLE_BASE_ID=app1234567890abcdef
AIRTABLE_TABLE_NAME=Leads
```

### 6. Testen

1. Start je development server: `yarn dev`
2. Ga naar `/contact`
3. Vul het formulier in
4. Check je Airtable base voor de nieuwe lead!

## 📊 CRM Features

### Automatische Lead Opslag

- ✅ Alle formulier data wordt opgeslagen
- ✅ Automatische timestamp
- ✅ Status tracking
- ✅ Bron tracking

### Lead Management

- ✅ Status updates (Nieuw → In behandeling → Afgehandeld)
- ✅ Contact informatie
- ✅ Service type tracking
- ✅ Bericht geschiedenis

### Integratie Voordelen

- ✅ **Geen database nodig** - Airtable is je database
- ✅ **Gratis** tot 1200 records
- ✅ **Mobiel toegankelijk** - check leads op je telefoon
- ✅ **Automatisering** mogelijk met Zapier
- ✅ **Rapportages** en analytics

## 🔧 Aanpassingen

### Services Aanpassen

Pas de services aan in `src/app/contact/page.tsx`:

```javascript
const services = [
  "Dakbedekking",
  "Dakisolatie",
  "Velux Dakramen",
  "Platte Daken",
  "Dakonderhoud",
  "Zonnepanelen",
  "Anders/Onbekend",
];
```

### Airtable Kolommen Aanpassen

Als je andere kolomnamen wilt, pas dan aan in `src/app/api/contact/route.ts`:

```javascript
fields: {
  'Naam': name,
  'Email': email,
  'Telefoon': phone || '',
  'Dienst': service || '',
  'Bericht': message,
  'Status': 'Nieuw',
  'Datum': new Date().toISOString(),
  'Bron': 'Website Contactformulier',
}
```

## 🎯 Volgende Stappen

1. **Airtable automatisering** - automatische emails bij nieuwe leads
2. **Lead scoring** - prioriteit geven aan leads
3. **Follow-up reminders** - automatische herinneringen
4. **Analytics** - lead conversie tracking

## 🆘 Problemen Oplossen

### "Server configuratie fout"

- Check of je `.env.local` bestand bestaat
- Check of je API key en Base ID correct zijn

### "Fout bij het opslaan"

- Check of je tabel "Leads" heet
- Check of alle kolommen bestaan
- Check of je API key geldig is

### Formulier werkt niet

- Check browser console voor errors
- Check of de API route werkt: `http://localhost:3000/api/contact`

## 📞 Support

Voor vragen over de Airtable integratie, check:

- [Airtable API Documentation](https://airtable.com/developers/web/api/introduction)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
