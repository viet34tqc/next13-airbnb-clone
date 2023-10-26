import { ListingFormValues } from '@/components/modals/NewListingModal/validationSchema';
import { create } from 'zustand';

type TListingStore = {
  currentEditedListing: ListingFormValues | null;
  currentCreatedListing: ListingFormValues | null;
  actions: {
    setCurrentCreatedListing: (listing: ListingFormValues) => void;
    setCurrentEditedListing: (listing: ListingFormValues) => void;
  };
};

const useListingStore = create<TListingStore>(set => ({
  currentEditedListing: null,
  currentCreatedListing: null,
  actions: {
    setCurrentCreatedListing: (listing: ListingFormValues) =>
      set(state => ({ ...state, currentCreatedListing: listing })),
    setCurrentEditedListing: (listing: ListingFormValues) =>
      set(state => ({ ...state, currentEditedListing: listing })),
  },
}));

export const useCurrentEditedListing = () =>
  useListingStore(state => state.currentEditedListing);
export const useCurrentCreatedListing = () =>
  useListingStore(state => state.currentCreatedListing);

export const useListingStoreActions = () =>
  useListingStore(state => state.actions);
