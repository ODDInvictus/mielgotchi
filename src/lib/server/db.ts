import { PrismaClient } from '@prisma/client';
import { error } from '@sveltejs/kit';

export const prisma = new PrismaClient();

export async function getTamagochi() {
	const tamagotchi = await prisma.tamagotchi.findFirst({
		where: {
			diedAt: null
		},
		include: {
			skin: true
		}
	});
	if (!tamagotchi) throw error(500, 'No tamagotchi found');

	return tamagotchi;
}
