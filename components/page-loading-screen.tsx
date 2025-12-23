"use client";

import { Spinner } from "@/components/ui/spinner";

export function PageLoadingScreen() {
	return (
		<div className="flex items-center justify-center min-h-screen w-full bg-background">
			<div className="flex flex-col items-center justify-center gap-6">
				<Spinner />
				<div className="text-center">
				</div>
			</div>
		</div>
	);
}
