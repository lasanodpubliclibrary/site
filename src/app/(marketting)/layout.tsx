import SiteFooter from "@/components/marketting/footer";
import Header from "@/components/marketting/header";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="bg-background ">
      <Header />
      <main className="min-h-[calc(100vh-5rem)]">{children}</main>
      <SiteFooter />
    </div>
  );
}
