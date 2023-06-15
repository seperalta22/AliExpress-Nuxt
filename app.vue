<template>
	<div class="fixed z-[-1] bg-[#f2f2f2] w-full h-[100vh]" />
	<NuxtPage />
</template>

<script setup>
import { useUserStore } from '~/store/user';
const userStore = useUserStore();

const route = useRoute();

let windowWidth = ref(process.client ? window.innerWidth : '');

onMounted(() => {
	userStore.isLoading = true;
	window.addEventListener('resize', function () {
		windowWidth.value = window.innerWidth;
	});
});

watch(
	() => windowWidth.value,
	() => {
		if (windowWidth.value >= 767) {
			userStore.isMenuOverlay = false;
		}
	}
);

watch(
	() => route.fullPath,
	() => {
		userStore.isLoading = true;
	}
);
</script>
