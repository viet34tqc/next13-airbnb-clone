export const STEPS = [
  'Category',
  'Location',
  'Info',
  'Image',
  'Description',
] as const;

export const validationFieldsEachStep = {
  Category: 'category',
  Location: 'location',
  Info: ['guestCount', 'roomCount', 'bathroomCount'],
  Image: 'imageSrc',
  Description: ['title', 'description', 'price'],
};
