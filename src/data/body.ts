import type { CaseData } from './types';

import homeD from '../assets/shots/body/home-d.png';
import homeM from '../assets/shots/body/home-m.png';
import salapesiD from '../assets/shots/body/salapesi-d.png';
import salapesiM from '../assets/shots/body/salapesi-m.png';
import corsiD from '../assets/shots/body/corsi-d.png';
import corsiM from '../assets/shots/body/corsi-m.png';
import reformerD from '../assets/shots/body/reformer-d.png';
import reformerM from '../assets/shots/body/reformer-m.png';
import orariD from '../assets/shots/body/orari-d.png';
import orariM from '../assets/shots/body/orari-m.png';

export const body: CaseData = {
	name: 'Body Energie',
	host: 'bodyenergie.it',
	origin: 'https://www.bodyenergie.it',
	stack: ['WordPress', 'Elementor', 'Google Tag Manager', 'Meta Pixel'],
	slides: [
		{
			id: 'home',
			label: 'Home',
			path: '/',
			d: homeD,
			m: homeM,
			funnel:
				'Ho impostato la home su un’unica azione principale, la prova, e su una navigazione per pubblico: adulti, bambini e Body Lab hanno ciascuno il proprio ingresso.',
			marketing:
				'Ho usato la storia del centro come leva di brand: un racconto d’origine autentico al posto degli slogan, per comunicare un luogo pensato per tutti.',
			tech: 'WordPress ed Elementor, con Google Tag Manager e Meta Pixel per misurare le campagne e attribuire le conversioni.',
		},
		{
			id: 'salapesi',
			label: 'Sala pesi',
			path: '/sala-pesi/',
			d: salapesiD,
			m: salapesiM,
			funnel:
				'Ho reso navigabile una pagina lunga: un indice delle aree in apertura porta subito al contenuto che interessa, poi prova e planning.',
			marketing:
				'Ho calibrato il linguaggio su un pubblico esperto, usando il dettaglio delle attrezzature come argomento di vendita.',
			tech: 'Struttura ad ancore per le singole aree e dati strutturati FAQPage per le domande frequenti.',
		},
		{
			id: 'corsi',
			label: 'Corsi fitness',
			path: '/corsi-fitness/',
			d: corsiD,
			m: corsiM,
			funnel:
				'Ho organizzato i corsi in quattro famiglie, così l’utente sceglie prima il tipo di allenamento e poi il corso, con meno attrito nella decisione.',
			marketing:
				'Ho creato un sistema di nomi per le famiglie di corsi, riassunto in un claim unico, che rende l’offerta riconoscibile e comunicabile anche fuori dal sito.',
			tech: 'Una pagina per ogni corso collegata dal catalogo, per la ricerca organica sulle singole discipline.',
		},
		{
			id: 'reformer',
			label: 'Pilates Reformer',
			path: '/pilates-reformer/',
			d: reformerD,
			m: reformerM,
			funnel:
				'Ho costruito la landing di disciplina con le due azioni del sito e le informazioni pratiche subito visibili, per togliere le ultime domande prima della prova.',
			marketing:
				'Ho allargato il pubblico potenziale scrivendo per livelli diversi, dal principiante all’atleta, con sicurezza e progressione come argomenti.',
			tech: 'Template condiviso con le altre pagine attività, dati strutturati FAQPage e icone ricorrenti per le informazioni pratiche.',
		},
		{
			id: 'orari',
			label: 'Planning orari',
			path: '/orari/',
			d: orariD,
			m: orariM,
			funnel:
				'Ho reso il planning uno strumento di decisione: filtri per giorno e categoria, per capire in pochi secondi se un corso entra nella propria settimana.',
			marketing:
				'Ho raccolto nella stessa pagina orari, regole e informazioni pratiche, per ridurre le richieste ripetitive allo staff.',
			tech: 'Planning interattivo con filtri per giorno e categoria e legenda delle etichette, pensato per restare leggibile su telefono.',
		},
	],
};
