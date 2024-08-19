// Define RootLayout as a constant
const RootLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
      <main>
        {children}
      </main>
    );
  };
  
  // Export RootLayout as the default export
  export default RootLayout;
  