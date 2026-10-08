import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Layanan from '@/components/Layanan';
import Katalog from '@/components/Katalog';
import CaraKerja from '@/components/CaraKerja';
import Keunggulan from '@/components/Keunggulan';
import Tentang from '@/components/Tentang';
import Kontak from '@/components/Kontak';
import Footer from '@/components/Footer';
import RequestCart from '@/components/RequestCart';
import WhatsAppFab from '@/components/WhatsAppFab';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="konten">
        <Hero />
        <Layanan />
        <Katalog />
        <CaraKerja />
        <Keunggulan />
        <Tentang />
        <Kontak />
      </main>
      <Footer />
      <RequestCart />
      <WhatsAppFab />
    </>
  );
}
