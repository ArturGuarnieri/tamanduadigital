"use client";
import Header from "@/components/header";
import { BannerCarousel } from "@/components/banner-carousel";
import { ServicesCarousel } from "@/components/services-carousel";
import { TeamSection } from "@/components/team-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { PageLoadingScreen } from "@/components/page-loading-screen";
import { ScrollToTop } from "@/components/scroll-to-top";
import { useLanguage } from "@/contexts/language-context";
import { bannerSlides } from "@/content/banners";

export default function Home() {
	const { language, mounted } = useLanguage();

	if (!mounted) {
		return <PageLoadingScreen />;
	}

	return (
		<>
			<Header />
			<ScrollToTop />
			<main className="flex flex-col px-4 py-6 xl:mx-auto max-w-7xl gap-0">
				<BannerCarousel slides={bannerSlides} />
				<ServicesCarousel />
				<TeamSection />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}
