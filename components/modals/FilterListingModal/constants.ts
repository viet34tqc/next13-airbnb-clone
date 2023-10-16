export const FILTER_STEPS = [
  'LocationFilter',
  'DateFilter',
  'InfoFilter',
] as const;

export const validationFieldsEachStep = {
  Location: 'location',
  Info: ['guestCount', 'roomCount', 'bathroomCount'],
};
