import type { ImageMetadata } from 'astro';

/** Riquadro del video dentro lo screenshot, in percentuale (come nella pagina vera). */
export interface VideoBox {
	l: number;
	t: number;
	w: number;
	h: number;
	pos: string;
}

export interface Slide {
	id: string;
	label: string;
	path: string;
	d: ImageMetadata;
	m: ImageMetadata;
	/** Versione con il video "bucato": il video vero passa dietro lo screenshot. */
	video?: { src: string; holeD: ImageMetadata; holeM: ImageMetadata; d: VideoBox; m: VideoBox };
	funnel: string;
	marketing: string;
	tech: string;
}

export interface CaseData {
	name: string;
	host: string;
	/** Indirizzo senza slash finale: ci si aggiunge il path di ogni pagina. */
	origin: string;
	stack: string[];
	slides: Slide[];
}
