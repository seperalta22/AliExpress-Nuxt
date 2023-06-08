<script lang="ts" setup></script>

<template>
	<div id="MainLayout" class="w-full fixed z-50">
		<div id="TopMenu" class="w-full bg-[#fafafa] border-b md:block hidden">
			<ul
				class="flex items-center justify-end text-xs text-[#333333] font-light px-2 h-10 bg-[#fafafa] max-w-[1200px]"
			>
				<li
					class="border-r border-r-gray-400 px-3 hover:text-[#FF4646]cursor-pointer"
				>
					Sell on AliExpress
				</li>
				<li
					class="border-r border-r-gray-400 px-3 hover:text-[#FF4646]cursor-pointer"
				>
					Cookie Preferences
				</li>
				<li
					class="border-r border-r-gray-400 px-3 hover:text-[#FF4646]cursor-pointer"
				>
					Help
				</li>
				<li
					class="border-r border-r-gray-400 px-3 hover:text-[#FF4646]cursor-pointer"
				>
					Buyer Protection
				</li>
			</ul>
		</div>
		<slot />
	</div>
</template>
