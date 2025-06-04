# Impostor Relief

A playful and interactive frontend project built with **Next.js**, **React**, and **TypeScript**. This site explores developer concepts through demos, learning chapters, and a visual layout designed to support creative coding and education.

![Demo Preview](./public/demo-preview.png) <!-- Optional: replace with actual screenshot path -->

## ✨ Features

- 🔗 **Links Grid**: Dynamic sections and chapters using reusable `LinksGrid` and `SectionsGrid` components.
- 🎨 **Animated Navigation**: Responsive navbar with random animated text colors and a mobile burger menu.
- 🧩 **Breadcrumbs**: Path-aware breadcrumbs using `next/navigation`.
- 🔄 **Interactive Demo**: Flip card interface powered by PokeAPI showing Pokémon data with pagination.
- 🧪 **Tests**: Unit tests using React Testing Library for `LinksGrid` component.

## 📁 Project Structure

```
app/
├── components/
│   ├── BreadCrumb.tsx
│   ├── BurgerButton.tsx
│   ├── DemoSection.tsx
│   ├── LinksGrid.tsx
│   ├── NavBar.tsx
│   ├── Section.tsx
│   └── SectionsGrid.tsx
├── demo/
│   └── Demo.tsx
├── styles/
│   └── globals.scss
```

## 🚀 Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/irawachaloco/impostor-relief.git
   cd impostor-relief
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the dev server**

   ```bash
   npm run dev
   ```

4. **Run tests**

   ```bash
   npm run test
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📚 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PokéAPI](https://pokeapi.co/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

## 🔍 Components Overview

- **NavBar**: Includes `BurgerButton`, animated colors on hover, and dynamic active state detection.
- **LinksGrid**: Renders a responsive list of chapters.
- **SectionsGrid**: Organizes grouped chapters under optional titles.
- **DemoSection + Demo.tsx**: Interactive Pokémon fetch with card flipping animations.
- **BreadCrumb**: Path-based breadcrumb navigation.

## 🧪 Tests

Tests are located in `LinksGrid.test.tsx`. To run:

```bash
npm run test
```

## 📜 License

MIT © [irawachaloco](https://github.com/irawachaloco)
