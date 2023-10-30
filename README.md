# Yet Another AirBnB Clone

I make this web app as a learning tutorial of NextJS 13. The app functionality is borrowed from other tutorials on the internet but the code, the logic, etc. are re-written from scratch.

## Techstacks

- Framework: NextJS 13
- Database: Postgrest hosted on Vercel
- Database ORM: Prisma
- Styling: Radix UI and TailwindCSS
- Form: React Hook Form
- Form validation: Zod
- Image upload service: Cloudinary

## Data structure

- Each user will have multiple reservations, listings, favorite listings
- Each listings will have multiple reservations

## Features

- Authentication using Next Auth. Users can register via Google, Facebook or create their new account.
- We can search for listings. The logic is in the `getListings.ts` file.
- Logged-in user can submit, edit, delete their listings.
- Logged-in user can add listings to their favorites.
- Logged-in user can make reservation for a listing.
- After you make a reservation, there is page named `trips` to display all of your reservations. There, you can cancel your reservation.
- The host of the listing also has a page called `reservations` where all of the reservations for his listing are displayed.

## What I've learned

- Authentication using Next Auth
- NextJS's server component: move the fetching data to the server component
- How to use middleware to deal with protected routes.
- How to use Zustand to manage state
- New folder structure:
  - `/app`: where we define apis and page routes. Each route's folder includes its own folders like: `components`, `hooks`...
  - `/components`: contains UI components. It's further subdivided into ui for generic UI components and shared for components that might be reused across different parts of application.
  - `/store`: state management stores used for the entire application.
  - `/lib`: utils functions, types, schemas...
  - `/hooks`: custom hooks that are used throughout your application.
  - `/config`: anything related to your app configuration
