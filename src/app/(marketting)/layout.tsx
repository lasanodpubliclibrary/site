import Footer from "@/components/marketing/footer";
import Header from "@/components/marketing/header";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div
      className="flex min-h-screen flex-col bg-background"
      vaul-drawer-wrapper=""
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer /> 
    </div>
  );
}
