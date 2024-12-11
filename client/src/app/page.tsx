import NonDashboardNavbar from '@/components/non-dashboard-navbar';
import Landing from '@/app/(nondashboard)/landing/page';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <NonDashboardNavbar />
      <main className='flex flex-grow w-full h-full justify-center items-center'>
        <Landing />
      </main>
      <Footer />
    </div>
  );
}
