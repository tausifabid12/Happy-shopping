import Hero from '../Components/Hero/Hero';
import HeroTopProducts from '../Components/HeroTopProducts/HeroTopProducts';
import Layout from '../Components/Layout/Layout';

export default function Home() {
  return (
    <Layout title="HomePage">
      <div className="">
        <Hero></Hero>
        <section className="h-screen">
          <HeroTopProducts />
        </section>
      </div>
    </Layout>
  );
}
