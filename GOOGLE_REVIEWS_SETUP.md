# 🔗 Echte Google Reviews Integreren

## Waarom zie je nu fake reviews?
De reviews in `testimonials` zijn door mij handmatig geschreven. Om **echte** Google reviews te krijgen, moet je een Google API key instellen.

## 📋 Stappen om echte Google reviews te krijgen:

### 1. Google Cloud Console Setup
1. Ga naar [Google Cloud Console](https://console.developers.google.com/)
2. Maak een nieuw project aan of selecteer bestaande
3. Ga naar "APIs & Services" → "Library"
4. Zoek naar "Places API" en klik "Enable"

### 2. API Key maken
1. Ga naar "APIs & Services" → "Credentials"
2. Klik "Create Credentials" → "API Key"
3. Kopieer je API key (bijv: `AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)

### 3. Google Place ID vinden
1. Ga naar [Google Maps](https://maps.google.com)
2. Zoek naar "Dakwerken Dakralux Damme"
3. Klik op je bedrijf
4. Kopieer de URL - het Place ID zit erin
5. Of gebruik deze tool: [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)

### 4. Environment Variables instellen
Maak een `.env.local` bestand in je project root:

```bash
# .env.local
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=jouw_api_key_hier
NEXT_PUBLIC_GOOGLE_PLACE_ID=jouw_place_id_hier
```

### 5. Code updaten
Dan vervangen we de hardcoded reviews door deze component:

```tsx
// In page.tsx
import GoogleReviewsAPI from "@/components/GoogleReviewsAPI";

// Vervang ReviewCarousel door:
<GoogleReviewsAPI 
  apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY!}
  placeId={process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID!}
  maxReviews={6}
  fallbackReviews={testimonials} // Als API niet werkt
/>
```

## 🚨 Belangrijke opmerkingen:

### Google API Beperkingen:
- **Gratis quota**: 1000 requests per dag
- **Kosten**: $17 per 1000 requests daarna
- **Reviews**: Maximaal 5 meest recente reviews per request

### Alternatieven:
1. **Google My Business Widget** (gratis, maar minder controle)
2. **Review aggregation services** (EmbedSocial, Trustindex)
3. **Manual copy-paste** (wat we nu hebben)

## 🔧 Snelle test:
Wil je het testen? Geef me je:
1. Google API key
2. Google Place ID van Dakralux

Dan kan ik het direct voor je instellen!

## 💡 Eenvoudigere optie:
Als je geen API wilt instellen, kunnen we ook gewoon:
- De huidige reviews verbeteren met echte teksten van je Google pagina
- Een "Bekijk op Google" knop toevoegen
- De carousel per 3 laten scrollen (dat heb ik al gedaan!)
