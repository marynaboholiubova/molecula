import { Disciplines } from "@/components/marketing/disciplines";
import { Hero } from "@/components/marketing/hero";
import { Philosophy } from "@/components/marketing/philosophy";
import { Pipeline } from "@/components/marketing/pipeline";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Pipeline />
        <Disciplines />
      </main>
      <SiteFooter />
    </div>
  );
}
