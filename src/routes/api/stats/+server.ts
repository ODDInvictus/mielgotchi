import { getTamagochi } from '$lib/server/db';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const tamagotchi = await getTamagochi();

	return json(tamagotchi);
};
