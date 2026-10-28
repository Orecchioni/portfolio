import type { CaseData } from './types';

import homeD from '../assets/shots/recomp/home-d.png';
import homeM from '../assets/shots/recomp/home-m.png';
import homeHoleD from '../assets/shots/recomp/home-hole-d.png';
import homeHoleM from '../assets/shots/recomp/home-hole-m.png';
import aboutD from '../assets/shots/recomp/about-d.png';
import aboutM from '../assets/shots/recomp/about-m.png';
import metodoD from '../assets/shots/recomp/metodo-d.png';
import metodoM from '../assets/shots/recomp/metodo-m.png';
import corsiD from '../assets/shots/recomp/corsi-d.png';
import corsiM from '../assets/shots/recomp/corsi-m.png';

export const recomp: CaseData = {
	name: 'Recomp360',
	host: 'recomp360.it',
	origin: 'https://recomp360.it',
	stack: ['Astro', 'Netlify', 'Stripe', 'n8n', 'Google Tag Manager', 'CookieYes'],
	slides: [
		{
			id: 'home',
			label: 'Home',
			path: '/',
			d: homeD,
			m: homeM,
			video: {
				src: 'media/recomp-hero.mp4',
				holeD: homeHoleD,
				holeM: homeHoleM,
				d: { l: 0, t: 0, w: 100, h: 100, pos: '50% 50%' },
				m: { l: 0, t: 0, w: 100, h: 100, pos: '50% 50%' },
			},
			funnel:
				'Ho costruito il funnel attorno a un’unica offerta d’ingresso a pagamento: un modale in quattro passi raccoglie i dati e porta al checkout, così la visita diventa una prova già pagata.',
			marketing:
				'Ho lavorato su posizionamento e fiducia: claim di metodo, numeri, team e recensioni in sequenza, per giustificare l’offerta prima di chiederla.',
			tech: 'Migrazione da HTML statico con CMS ad Astro, con componenti riutilizzabili. Pagamenti con Stripe Checkout via funzioni Netlify, con verifica dell’esito prima di notificare il sistema interno via n8n.',
		},
		{
			id: 'about',
			label: 'Chi siamo',
			path: '/about',
			d: aboutD,
			m: aboutM,
			funnel:
				'Pagina pensata per chi è interessato ma non ancora convinto: chiude con la stessa offerta della home e con tutto ciò che serve per una visita, senza aprire strade nuove.',
			marketing:
				'Ho tradotto un concept ibrido in un racconto chiaro, mettendo al centro le persone del team per rendere credibile la promessa di un percorso seguito a 360°.',
			tech: 'Base SEO uniforme su tutto il sito: meta tag per pagina, anteprime Open Graph generate dinamicamente, sitemap, canonical e dati strutturati Schema.org.',
		},
		{
			id: 'metodo',
			label: 'Il metodo',
			path: '/metodo',
			d: metodoD,
			m: metodoM,
			funnel:
				'Ho strutturato la pagina per spiegare il servizio prima di venderlo: tre livelli di supporto chiari, così la prova arriva quando l’utente ha già capito cosa sta comprando.',
			marketing:
				'Ho dato al servizio un nome proprio e una struttura da prodotto, per distinguerlo dalla semplice palestra e renderlo riconoscibile e comunicabile.',
			tech: 'Form contatti a più step con logica condizionale: distingue iscritti e nuovi contatti, raccoglie interessi, obiettivi e canale preferito e invia tutto via webhook a n8n.',
		},
		{
			id: 'corsi',
			label: 'Corsi',
			path: '/corsi',
			d: corsiD,
			m: corsiM,
			funnel:
				'Ho reso la scelta del corso il più semplice possibile, con intensità dichiarata e planning per giorno; la pagina si chiude sempre sull’offerta di prova.',
			marketing:
				'Ho organizzato l’offerta per intensità invece che per nome del corso, così anche chi non conosce le discipline trova subito il proprio livello.',
			tech: 'Google Tag Manager con Consent Mode v2, tutto negato di default, e banner CookieYes. Header di sicurezza e redirect 301 dalle vecchie URL dopo la migrazione.',
		},
	],
};
