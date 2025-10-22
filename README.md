# Weather (React + Vite)

A minimal weather application built with React, Vite and Tailwind CSS. Fetches forecast data and displays current conditions, hourly charts and a multi-day overview.

## Features
- Current weather and 7-day forecast.
- Hourly charts for today.
- Centralized city + weather state via a React Context provider.
- API integration for weather data fetching.

## Quick start

1. Install dependencies
```powershell
npm install
```

2. Run development server
```powershell
npm run dev
```

3. Build for production
```powershell
npm run build
```

4. Preview production build
```powershell
npm run preview
```

## Key files
- Project entry: `index.html` and `src/main.jsx`
- App root: `src/App.jsx`
- Context provider: `src/Context/CityContext.jsx`
- Data fetching hooks / APIs:
  - `src/Hooks/useWeather.jsx`
  - `src/APIs/WeatherApi.jsx`
- UI screens and components: `src/Screens/*`, `src/Components/*`
- Styles: `src/index.css`, referenced output `./output.css`

## Configuration
- API key location: `src/APIs/WeatherApi.jsx` (replace or configure as needed).
- Tailwind output file referenced from `index.html` as `./output.css`.

## Troubleshooting
- If no data appears on first load, the app may request geolocation or rely on a saved city in localStorage.
- If styles are missing, verify `output.css` is present and built.
