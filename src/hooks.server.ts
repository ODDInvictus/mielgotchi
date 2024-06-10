import { prisma } from '$lib/server/db';

setInterval(async () => {
	const curr = await prisma.tamagotchi.findFirst({
		where: {
			diedAt: null
		}
	});

	if (!curr) throw new Error('No tamagotchis found');

	const newHunger = curr.hunger - 10;
	const newHappiness = curr.happiness - 10;
	const newCleaness = curr.cleaness - 10;

	const now = new Date();
	const isNight = now.getHours() >= 20 || now.getHours() <= 6;
	const newTemp = curr.temprature + 10 * (isNight ? -1 : 1);

	// Health is calucated by the average of the other stats
	const newHealth = (newHunger + newHappiness + newCleaness) / 3;

	await prisma.tamagotchi.update({
		where: {
			id: curr.id
		},
		data: {
			hunger: Math.max(0, newHunger),
			happiness: Math.max(0, newHappiness),
			cleaness: Math.max(0, newCleaness),
			temprature: Math.min(100, Math.max(0, newTemp)),
			health: Math.min(100, Math.max(0, newHealth))
		}
	});
}, 1000 * 10);
