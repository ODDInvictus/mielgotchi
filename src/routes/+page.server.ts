import type { PageServerLoad } from './$types';
import { getTamagochi } from '$lib/server/db';

export const load = (async () => {
	const tamagotchi = await getTamagochi();

	return { tamagotchi };
}) satisfies PageServerLoad;
