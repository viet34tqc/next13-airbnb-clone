# AirBnB Clone

I make this web app as a learning tutorial of NextJS 13. The functionality is borrowed from other tutorials on the internet but the code is re-written from scratch.

## Techstacks

- Framework: NextJS 13
- Database: Postgrest hosted on Vercel
- Database ORM: Prisma
- Styling: Radix UI and TailwindCSS
- Form: React Hook Form
- Form validation: Zod
- Image upload: Cloudinary

## Features

- Authentication using Next Auth. User can register via Google, Facebook or create their new user
- Logged-in user can submit their listings
- Logged-in user can add listings to their favorites
- Logged-in user can make reservation for a listing
- After you make a reservation, there is page named `trips` to display all of your reservation. There, you can cancel your reservation.
- The host of the listing also has a page named `reservations` to display all the reservation for his listing.
