type Props = { title: string; subtitle?: string };

const PageHeader = ({ title, subtitle }: Props) => {
  return (
    <header className="mb-8 text-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </header>
  );
};

export default PageHeader;
