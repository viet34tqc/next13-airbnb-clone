'use client';

import Button from '@/components/ui/Button';

const SiteFooter = () => {
  return (
    <footer className="border-t border-t-gray-200">
      <div className="container flex items-center justify-between gap-1 flex-wrap">
        <span>&copy; {new Date().getFullYear()} YAAC</span>
        <Button
          className="bg-transparent border-none text-inherit"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to top
        </Button>
      </div>
    </footer>
  );
};

export default SiteFooter;
