import { Hero } from "@/_components/Hero";
import { MobileGallery } from "@/_components/MobileGallery";


export default function Home() {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-400 min-h-[50vh] w-screen mt-16">
      <Hero />
      <MobileGallery />
    </div>
  );
}
