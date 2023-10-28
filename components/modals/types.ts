import { z } from 'zod';
import { listingFormSchema } from './NewListingModal/validationSchema';

export type ListingFormValues = z.infer<typeof listingFormSchema>;
export type EditedListingValues = { id: string } & ListingFormValues;
