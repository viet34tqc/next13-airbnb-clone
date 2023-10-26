'use client';

import Button from '@/components/ui/Button';
import useCountries from '@/hooks/useCountries';
import { useListingStoreActions } from '@/store/useListingStore';
import { useModalStoreActions } from '@/store/useModalStore';
import { Listing } from '@prisma/client';

type Props = {
  listing: Listing;
};

const EditListingButton = ({ listing }: Props) => {
  const { getByValue } = useCountries();
  const { setModalView } = useModalStoreActions();
  const { setCurrentEditedListing } = useListingStoreActions();

  const { id, createdAt, userId, ...extractedInfo } = listing;
  const listingFormData = {
    ...extractedInfo,
    location: getByValue(extractedInfo.locationValue),
  };
  delete (listingFormData as Partial<Listing>).locationValue;
  return (
    <Button
      isOutline
      onClick={() => {
        setCurrentEditedListing(listingFormData);
        setModalView('EDIT_LISTING');
      }}
    >
      Edit
    </Button>
  );
};

export default EditListingButton;
