import {
  EditedListingValues,
  ListingFormValues,
} from '@/components/modals/types';
import { create } from 'zustand';

type TListingStore = {
  currentEditedListing: EditedListingValues | null;
  currentCreatedListing: ListingFormValues | null;
  actions: {
    setCurrentEditedListing: (listing: EditedListingValues) => void;
    setCurrentCreatedListing: (listing: ListingFormValues) => void;
  };
};

const useListingStore = create<TListingStore>(set => ({
  currentEditedListing: null,
  currentCreatedListing: null,
  actions: {
    setCurrentEditedListing: (listing: EditedListingValues) =>
      set(state => ({ ...state, currentEditedListing: listing })),
    setCurrentCreatedListing: (listing: ListingFormValues) =>
      set(state => ({ ...state, currentCreatedListing: listing })),
  },
}));

export const useCurrentEditedListing = () =>
  useListingStore(state => state.currentEditedListing);
export const useCurrentCreatedListing = () =>
  useListingStore(state => state.currentCreatedListing);

export const useListingStoreActions = () =>
  useListingStore(state => state.actions);
