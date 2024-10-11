import Header from "@/components/layouts/Header";
import ProductList from "./components/ProductList";
import ClientProvider from "@/providers/ClientProvider";
import OverlayCart from "./components/OverlayCart";
export default function Home() {
  return (
    <div className="relative">
      {/* <div className="bg-black sticky top-0 left-0 w-full h-full">
        <div className="pt-12 bg-white">test</div>
      </div> */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 ">
        <div className="bg-white h-[90vh] rounded-t-lg flex justify-between items-center mx-4 px-6 top-[10vh] sticky">
          <div className="flex gap-1 justify-start">
            <div>Cart</div>
            <div>buah</div>
          </div>
        </div>
      </div> */}
      <Header />
      {/* <ClientProvider>
        <OverlayCart />
      </ClientProvider> */}
      <ClientProvider>
        <OverlayCart />
        <ProductList />
      </ClientProvider>
    </div>
  );
}
