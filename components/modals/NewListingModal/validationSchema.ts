import { CountrySelectSchema } from '@/lib/schemas';
import { z } from 'zod';

export const listingFormSchema = z.object({
  category: z.string().min(1, 'Please select a category'),
  location: CountrySelectSchema.extend({
    value: z.string().min(1, 'Please select location for your house'),
  }),
  guestCount: z.number().min(1, 'Must be bigger than 1'),
  roomCount: z.number().min(1, 'Must be bigger than 1'),
  bathroomCount: z.number().min(1, 'Must be bigger than 1'),
  imageSrc: z.string().min(1, 'Your house need an image'),
  price: z.number().min(1, 'Price is required'),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
});

