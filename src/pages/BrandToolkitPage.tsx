
import Navbar from '@/components/Navbar';
import BrandToolkit from '@/components/BrandToolkit';
import Footer from '@/components/Footer';

const BrandToolkitPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <BrandToolkit />
      </main>
      <Footer />
    </div>
  );
};

export default BrandToolkitPage;
