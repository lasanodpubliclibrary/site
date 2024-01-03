interface AuthLayoutProps {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-full-dvh max-w-3xl mx-auto p-2 flex flex-col items-center justify-center scrollbar-none ">
      {children}
    </div>
  );
}
