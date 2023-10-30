import {
  CustomDialogClose,
  CustomDialogContent,
  CustomDialogOverlay,
  CustomDialogPortal,
} from '@/components/ui/Modal/Modal';

const IntructionModal = () => {
  return (
    <CustomDialogPortal>
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <CustomDialogOverlay />
        <CustomDialogContent>
          <h2 className="mt-2 text-2xl">Website Instruction</h2>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              Authentication using Next Auth. User can register via Google,
              Facebook or create their new user
            </li>
            <li>
              We can search for listings. The logic is in the `getListings.ts`
              file.
            </li>
            <li>Logged-in user can submit, edit, delete their listings</li>
            <li>Logged-in user can add listings to their favorites</li>
            <li>Logged-in user can make reservation for a listing</li>
            <li>
              After you make a reservation, there is page named `trips` to
              display all of your reservation. There, you can cancel your
              reservation.
            </li>
            <li>
              The host of the listing also has a page named `reservations` to
              display all the reservation for his listing.
            </li>
          </ul>
          <CustomDialogClose />
        </CustomDialogContent>
      </div>
    </CustomDialogPortal>
  );
};

export default IntructionModal;
