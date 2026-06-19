# Kiddo SDUI Assignment

A Server-Driven UI (SDUI) application built using React Native, Expo, TypeScript, and Zustand. The application dynamically renders UI components based on JSON configurations received from a backend service.

## Features

* Dynamic UI rendering using JSON configurations
* Server-Driven UI architecture
* Campaign switching support
* Dynamic product grid rendering
* Shopping cart management
* Theme customization
* Analytics event tracking
* Component Registry pattern
* Reusable UI components

## Campaigns Implemented

### Back To School

* Promotional banner
* Product grid
* School-related products
* Dynamic theme configuration

### Summer Sale

* Promotional banner
* Dynamic content rendering
* Alternative theme configuration

## Technology Stack

* React Native
* Expo
* TypeScript
* Zustand
* JSON Server

## Project Structure

```text
src
├── api
│   └── campaignApi.ts
├── campaigns
│   ├── backToSchool.json
│   └── summerSale.json
├── components
│   ├── BannerHero.tsx
│   ├── ProductGrid.tsx
│   ├── CartCounter.tsx
│   ├── CartItems.tsx
│   ├── ClearCartButton.tsx
│   └── Footer.tsx
├── context
│   └── ThemeContext.tsx
├── engine
│   ├── Renderer.tsx
│   └── ComponentRegistry.ts
├── store
│   └── useCampaignStore.ts
└── utils
    └── analytics.ts
```

## Installation

Clone the repository:

```bash
git clone https://github.com/ganreddy77/kiddo-sdui.git
cd kiddo-sdui
```

Install dependencies:

```bash
npm install
```

## Running the Mock Server

```bash
npx json-server --watch db.json --port 3000
```

Server URL:

```text
http://localhost:3000
```

## Running the Application

```bash
npx expo start
```

Open the application in the browser:

```text
http://localhost:8081
```

## Sample API Endpoint

```text
http://localhost:3000/campaigns?id=backToSchool
```

## SDUI Flow

1. User selects a campaign.
2. Campaign JSON is fetched from the server.
3. Renderer reads component definitions.
4. Component Registry maps component types to React components.
5. UI is generated dynamically at runtime.

## State Management

Zustand is used for:

* Add item to cart
* Remove item from cart
* Clear cart
* Cart count management

## Analytics

Campaign switching events are tracked using a lightweight analytics utility and can be extended to integrate with external analytics platforms.

## Future Enhancements

* Product images
* Search and filtering
* Checkout workflow
* Backend API integration
* User authentication
* Persistent cart storage

## Author

**Gongati Adinarayana Reddy**

GitHub: https://github.com/ganreddy77
