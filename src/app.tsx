import { Header } from "@/components/header";
import { MainContent } from "@/components/main-content";
import { Footer } from "@/components/footer";

export function App() {
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="flex w-full max-w-3xl flex-1 flex-col space-y-6 px-3 py-6">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}
