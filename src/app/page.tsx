import Header from "@/components/layouts/Header";
import ProductList from "./components/ProductList";
import ClientProvider from "@/providers/ClientProvider";
export default function Home() {
  return (
    <div className="">
      <Header />
      <ClientProvider>
        <ProductList />
      </ClientProvider>
    </div>
  );
}
