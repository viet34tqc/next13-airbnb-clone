export const SkeletonCard = () => (
  <div role="status" className="animate-pulse flex flex-col gap-4">
    <div className="aspect-square bg-black/50 rounded shadow"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>

    <span className="sr-only">Loading...</span>
  </div>
);
