import ClientProvider from "@/providers/ClientProvider";
import { FC } from "react";
import TestComp from "./components/TestComp";

const TestPage: FC = () => {
  return (
    <div>
      <ClientProvider>
        <TestComp />
      </ClientProvider>
    </div>
  );
};
export default TestPage;
