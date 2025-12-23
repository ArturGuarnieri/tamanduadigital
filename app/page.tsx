"use client";
import Header from "@/components/header";
import { BannerCarousel } from "@/components/banner-carousel";
import { useLanguage } from "@/contexts/language-context";
import { bannerSlides } from "@/content/banners";
import { homeParagraph } from "@/content/texts";

export default function Home() {
	const { language, mounted } = useLanguage();

	return (
		<>
			<Header />
			<main className="flex flex-col px-4 py-6 xl:mx-auto max-w-7xl gap-0">
				<BannerCarousel slides={bannerSlides} />
				{mounted && (
					<div className="w-full rounded-xl md:rounded-2xl lg:rounded-3xl bg-background max-w-full mx-auto -mt-px">
						<p className="text-lg md:text-xl text-muted-foreground text-justify m-0 w-full px-4 md:px-8 lg:px-12 py-6">
							{homeParagraph[language]}
						</p>
					</div>
				)}
			</main>
		</>
	);
}
