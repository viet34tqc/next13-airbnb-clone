'use client';

import CategoryBox from './CategoryBox';
import { categories } from './constants';

const Categories = () => {
  return (
    <div className="container mt-4">
      <div
        className="
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto
        "
      >
        {categories.map(item => (
          <CategoryBox key={item.label} label={item.label} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
