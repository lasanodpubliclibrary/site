interface PageHeaderProps {
  header: string;
  text?: string;
  children?: React.ReactNode;
}

export default function PageHeading({ header, text }: PageHeaderProps) {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">{header}</h1>
        {text && <p className="text-gray-600">{text}</p>}
      </div>
    </section>
  );
}
