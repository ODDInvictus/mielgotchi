<script lang="ts">
	import type { stat, stringLike, tamagotchi } from '$lib/types';

	export let text: stringLike;
	export let stat: stat;
	export let tamagotchi: tamagotchi;

	async function handleClick() {
		tamagotchi[stat] += 1;
		const res = await fetch('/api/interaction', {
			method: 'POST',
			body: JSON.stringify({ stat })
		});
		if (!res.ok) {
			tamagotchi[stat] -= 1;
		}
	}
</script>

<button class="stat" on:click={handleClick}>
	<div class="icon">
		<slot />
	</div>
	<p>{text}</p>
</button>

<style lang="scss">
	.stat {
		display: flex;
		align-items: center;
		background-color: red;
		border-radius: 1em;
		padding: 1rem;
		gap: 0.5rem;
		cursor: pointer;
	}

	.icon {
		height: 2rem;
	}
</style>
