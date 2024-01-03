interface PageHeaderProps {
  heading: string;
  text?: string;
  children?: React.ReactNode;
}

export default function Heading({ heading, text }: PageHeaderProps) {
  return (
    <section>
      <div className="max-w-md md:max-w-xl space-y-2">
        <h1 className="heading">{heading}</h1>
        {text && <p className="text-muted-foreground max-w-xl">{text}</p>}
      </div>
    </section>
  );
}
