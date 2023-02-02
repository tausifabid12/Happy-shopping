import { Toaster } from 'react-hot-toast';
import Blogs from '../Components/Blogs/Blogs';
import ContactUs from '../Components/ContactUs/ContactUs';
import Hero from '../Components/Hero/Hero';
import Layout from '../Components/Layout/Layout';
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import Products from '../Components/Products/Products';
import ProductsTab from '../Components/ProductsTab/ProductsTab';
import Services from '../Components/Services/Services';
import Subscribe from '../Components/Subscribe/Subscribe';
import TopProducts from '../Components/TopProducts/TopProducts';

export default function Home({ products }) {
  return (
    <Layout title="HomePage">
      <Hero />
      <Products products={products} />
      {/* <TopProducts products={products} /> */}
      <ProductsTab products={products} />
      <Blogs />
      <Services />
      <ContactUs />
      <Subscribe />
      <Toaster position="top-center" reverseOrder={false} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );

  return {
    props: { products },
  };
}
