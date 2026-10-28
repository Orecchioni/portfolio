import type { ImageMetadata } from 'astro';

import dashboard from '../assets/crm/dashboard.png';
import cliente from '../assets/crm/cliente.png';
import abbonamenti from '../assets/crm/abbonamenti.png';

export interface CrmShot {
	id: string;
	label: string;
	img: ImageMetadata;
	alt: string;
	text: string;
}

export const crmIntro =
	'Ho progettato e sviluppato da zero, con Claude Code, un CRM web collegato al gestionale del cliente: team commerciale, amministrazione e operativi lavorano sullo stesso percorso, dalla prima richiesta al cliente fidelizzato.';

export const crmShots: CrmShot[] = [
	{
		id: 'dashboard',
		label: 'Dashboard',
		img: dashboard,
		alt: 'Dashboard del consulente nel CRM: code di lavoro e indicatori settimanali',
		text: 'Ho progettato una dashboard orientata all’azione: in apertura le code di lavoro del giorno, sotto gli indicatori di performance confrontati nel tempo, ciascuno con la formula spiegata, perché il dato sia leggibile anche da chi non è tecnico.',
	},
	{
		id: 'cliente',
		label: 'Scheda cliente',
		img: cliente,
		alt: 'Scheda cliente nel CRM: il percorso del contatto a tappe, con stato e azioni',
		text: 'Ho organizzato la scheda cliente come un percorso a tappe, con stato, responsabile e azioni sempre visibili. Regole di deduplica evitano i doppioni quando lo stesso contatto si ripresenta.',
	},
	{
		id: 'analisi',
		label: 'Analisi',
		img: abbonamenti,
		alt: 'Analisi nel CRM: andamento mensile e confronto con lo storico',
		text: 'Ho reso affidabili i dati prima di mostrarli: pulizia e classificazione di quelli sincronizzati dal gestionale, esclusioni dichiarate e confronti storici per leggere l’andamento.',
	},
];
