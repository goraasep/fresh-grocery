import Header from "@/components/layouts/Header";
import ProductList from "./components/ProductList";
import ClientProvider from "@/providers/ClientProvider";
import OverlayCart from "./components/OverlayCart";
import OverlayItem from "./components/OverlayItem";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <ClientProvider>
        {/* <OverlayItem /> */}
        <OverlayCart />
        <ProductList />
      </ClientProvider>
    </div>
  );
}
