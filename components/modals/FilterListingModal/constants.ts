export const FILTER_STEPS = [
  'LocationFilter',
  'DateFilter',
  'InfoFilter',
] as const;

export const filterStepsValidation = {
  Location: 'location',
  Info: ['guestCount', 'roomCount', 'bathroomCount'],
};
