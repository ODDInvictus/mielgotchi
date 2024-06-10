<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';
	import FaThermometerThreeQuarters from 'svelte-icons/fa/FaThermometerThreeQuarters.svelte';
	import FaRegSmile from 'svelte-icons/fa/FaRegSmile.svelte';
	import FaBone from 'svelte-icons/fa/FaBone.svelte';
	import FaBath from 'svelte-icons/fa/FaBath.svelte';
	import StatButton from '$lib/components/StatButton.svelte';
	import type { tamagotchi } from '$lib/types';
	import { browser } from '$app/environment';

	export let data: PageData;

	let tamagotchi: tamagotchi = data.tamagotchi;

	if (browser) {
		setInterval(async () => {
			console.log('fetching stats');
			const res = await fetch('/api/stats');
			const stats: tamagotchi = await res.json();
			tamagotchi = stats;
		}, 1000 * 3);
	}
</script>

<div class="mid">
	<div class="info">
		<p>Age: {tamagotchi.age}</p>
		<p>Born: {formatDate(tamagotchi.bornAt)}</p>
		<p>Health: {tamagotchi.health}</p>
		<p>Weight: {tamagotchi.weight}</p>
	</div>
</div>
<div class="main">
	<h1>{tamagotchi.name}</h1>
	<img src={tamagotchi.skin.neutral} alt="Neutral mielgotchi" />
	<div class="stats">
		<StatButton text={tamagotchi.temprature} stat="temprature" bind:tamagotchi>
			<FaThermometerThreeQuarters />
		</StatButton>

		<StatButton text={tamagotchi.happiness} stat="happiness" bind:tamagotchi>
			<FaRegSmile />
		</StatButton>

		<StatButton text={tamagotchi.hunger} stat="hunger" bind:tamagotchi>
			<FaBone />
		</StatButton>

		<StatButton text={tamagotchi.cleaness} stat="cleaness" bind:tamagotchi>
			<FaBath />
		</StatButton>
	</div>
</div>

<style lang="scss">
	.main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	h1 {
		text-align: center;
	}

	.stats {
		display: flex;
		justify-content: space-between;
	}
</style>
