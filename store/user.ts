import { defineStore } from 'pinia';

export const useUserStore = defineStore({
	id: 'user',
	state: () => ({
		isMenuOverlay: false,
		isLoading: false,
		cart: [],
		checkout: [],
	}),
	persist: true,
});
