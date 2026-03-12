const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex justify-center min-h-screen pt-10 sm:pt-20 px-4 sm:px-6">
      <div className="w-full max-w-lg">
        {children}
      </div>
    </main>
  );
};

export default Layout;
