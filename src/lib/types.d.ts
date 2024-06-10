import type { Skin, Tamagotchi } from '@prisma/client';

export type stringLike = { toString: () => string } | string;

export type stat = 'cleaness' | 'happiness' | 'hunger' | 'temprature';

export type tamagotchi = Tamagotchi & {
	skin: Skin;
};
