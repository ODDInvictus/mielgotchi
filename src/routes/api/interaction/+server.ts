import { prisma } from '$lib/server/db';
import type { stat } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const data: { stat: stat } = await request.json();

	await prisma.tamagotchi.updateMany({
		where: {
			diedAt: null
		},
		data: {
			[data.stat]: {
				increment: 1
			}
		}
	});

	return new Response();
};
