# Yet Another AirBnB Clone

I make this web app as a learning tutorial of NextJS 13. The app functionality is borrowed from other tutorials on the internet but the code, the logic, etc. are re-written from scratch.

## Techstacks

- Framework: NextJS 13
- Database: Postgrest hosted on Vercel
- Database ORM: Prisma
- Styling: Radix UI and TailwindCSS
- Form: React Hook Form
- Form validation: Zod
- Image upload: Cloudinary

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
