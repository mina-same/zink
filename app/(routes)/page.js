import Image from "next/image";
import OrderStepOne from "@/components/OrderStepOne";
import SearchPage from "@/components/SearchPage";

export default function Home() {
  return (
    <div>
      <OrderStepOne />
      <SearchPage />
    </div>
  );
}
