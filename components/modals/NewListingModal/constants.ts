export const STEPS = [
  'Category',
  'Location',
  'Info',
  'Image',
  'Description',
] as const;

export const stepsValidation = {
  Category: 'category',
  Location: 'location',
  Info: ['guestCount', 'roomCount', 'bathroomCount'],
  Image: 'imageSrc',
  Description: ['title', 'description', 'price'],
};
