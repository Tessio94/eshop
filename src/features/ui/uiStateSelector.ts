import type { RootState } from "@/app/store";

export const selectIsMobileMenuOpen = (state: RootState) =>
	state.ui.isMobileMenuOpen;
