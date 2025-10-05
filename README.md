# Dakralux - Professionele Dakwerker Website

Een moderne, responsieve website voor Dakralux - uw betrouwbare partner voor alle dakwerkzaamheden.

## 🚀 Features

- **Modern Design**: Professioneel ontwerp met focus op conversie
- **Fully Responsive**: Werkt perfect op alle apparaten
- **SEO Optimized**: Geoptimaliseerd voor zoekmachines
- **Fast Performance**: Gebouwd met Next.js voor snelle laadtijden
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Package Manager**: Yarn

## 📋 Pagina's

- **Homepage**: Hero sectie, diensten overzicht, testimonials, contact
- **Diensten**: Uitgebreide overzicht van alle diensten met prijzen
- **Contact**: Contactformulier, contactgegevens, FAQ

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ geïnstalleerd
- Yarn package manager

### Installation

1. Clone de repository of download de bestanden
2. Navigeer naar de project directory:

   ```bash
   cd dakralux-website
   ```

3. Installeer dependencies:

   ```bash
   yarn install
   ```

4. Start de development server:

   ```bash
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in je browser

### Build voor Production

```bash
# Build de applicatie
yarn build

# Start de production server
yarn start
```

## 📁 Project Structure

```
dakralux-website/
├── src/
│   ├── app/
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── diensten/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── package.json
└── README.md
```

## 🎨 Customization

### Kleuren Aanpassen

De hoofdkleuren zijn gedefinieerd in Tailwind CSS:

- **Primary**: Blue (blue-600, blue-700, etc.)
- **Accent**: Yellow (yellow-400, yellow-500)
- **Text**: Slate (slate-600, slate-900, etc.)

### Content Aanpassen

1. **Contactgegevens**: Pas aan in `src/components/Header.tsx` en `src/components/Footer.tsx`
2. **Bedrijfsinformatie**: Update in `src/app/layout.tsx` (metadata) en homepage
3. **Diensten**: Bewerk de services array in `src/app/page.tsx` en `src/app/diensten/page.tsx`

### Nieuwe Pagina's Toevoegen

1. Maak een nieuwe directory in `src/app/`
2. Voeg een `page.tsx` bestand toe
3. Update de navigatie in `src/components/Header.tsx`

## 📱 Responsive Design

De website is volledig responsief en werkt op:

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔧 Development Tips

### Handige Commands

```bash
# Development server
yarn dev

# Type checking
yarn type-check

# Linting
yarn lint

# Build voor productie
yarn build

# Production server
yarn start
```

### Components Hergebruiken

De `Button` component accepteert verschillende props:

```tsx
<Button variant="primary" size="lg">
  Click me
</Button>
```

Varianten: `primary`, `secondary`, `outline`
Sizes: `sm`, `md`, `lg`

## 🚀 Deployment

### Vercel (Recommended)

1. Push je code naar GitHub
2. Connect je repository op [vercel.com](https://vercel.com)
3. Deploy automatisch bij elke push

### Andere Hosting Providers

```bash
# Build de applicatie
yarn build

# Upload de .next folder en andere bestanden naar je hosting provider
```

## 📞 Support

Voor vragen over de website implementatie, neem contact op met de ontwikkelaar.

## 📄 License

Dit project is ontwikkeld specifiek voor Dakralux.

---

**Dakralux** - Uw betrouwbare partner voor alle dakwerkzaamheden

- 📞 06 12345678
- 📧 info@dakralux.nl
- 🌐 www.dakralux.nl
