import { z } from 'zod';

export const CountrySelectSchema = z.object({
  label: z.string(),
  latlng: z.array(z.number()),
  value: z.string(),
});
