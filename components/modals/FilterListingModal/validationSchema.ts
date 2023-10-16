import { CountrySelectSchema } from '@/components/shared/CountrySelect';
import { z } from 'zod';

export const filterListingSchema = z.object({
  location: CountrySelectSchema.extend({
    value: z.string().min(1, 'Please select location for your house'),
  }),
  date: z.object({
    startDate: z.date(),
    endDate: z.date(),
  }),
  guestCount: z.number().min(1, 'Must be bigger than 1'),
  roomCount: z.number().min(1, 'Must be bigger than 1'),
  bathroomCount: z.number().min(1, 'Must be bigger than 1'),
});
