import { Category } from '@/lib/types/category';

const ListingCategory = ({ icon: Icon, label, description }: Category) => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <Icon size={40} className="text-neutral-600" />
        <div className="flex flex-col">
          <strong className="text-lg font-semibold">{label}</strong>
          <p className="text-neutral-500 font-light">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ListingCategory;
