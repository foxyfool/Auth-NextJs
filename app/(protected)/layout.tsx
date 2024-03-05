import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-pink-500 to-purple-600 overflow-hidden">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
