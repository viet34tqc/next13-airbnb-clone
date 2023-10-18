import { z } from 'zod';

export const CountrySelectSchema = z.object({
  flag: z.string(),
  label: z.string(),
  latlng: z.array(z.number()),
  region: z.string(),
  value: z.string(),
});
