import type { CaseData } from './types';

import homeD from '../assets/shots/enjoy/home-d.png';
import homeM from '../assets/shots/enjoy/home-m.png';
import medaD from '../assets/shots/enjoy/meda-d.png';
import medaM from '../assets/shots/enjoy/meda-m.png';
import camuzzagoD from '../assets/shots/enjoy/camuzzago-d.png';
import camuzzagoM from '../assets/shots/enjoy/camuzzago-m.png';
import corsiD from '../assets/shots/enjoy/corsi-d.png';
import corsiM from '../assets/shots/enjoy/corsi-m.png';
import ptD from '../assets/shots/enjoy/pt-d.png';
import ptM from '../assets/shots/enjoy/pt-m.png';

export const enjoy: CaseData = {
	name: 'Enjoy Club',
	host: 'enjoyclub.eu',
	origin: 'https://enjoyclub.eu',
	stack: ['WordPress', 'Elementor', 'Google Tag Manager'],
	slides: [
		{
			id: 'home',
			label: 'Home',
			path: '/',
			d: homeD,
			m: homeM,
			funnel:
				'Ho impostato la home su due livelli di decisione: chi è pronto va alla prova, chi deve ancora scegliere tra le due sedi viene accompagnato alle pagine sede.',
			marketing:
				'Ho costruito la comunicazione sulla fiducia: storicità, riconoscimenti istituzionali e un metodo con nome proprio, per distinguersi dalle palestre della zona.',
			tech: 'WordPress ed Elementor con un’architettura a due livelli, sedi e attività collegate tra loro, dati strutturati e Google Tag Manager su tutte le pagine.',
		},
		{
			id: 'meda',
			label: 'Meda',
			path: '/meda-3/',
			d: medaD,
			m: medaM,
			funnel:
				'Ho progettato le pagine sede per la conversione locale: informazioni pratiche subito visibili, poi prova e richiesta di informazioni, con il modulo collegato a un’automazione.',
			marketing:
				'Ho comunicato la sede come esperienza completa e non come semplice palestra, per sostenere un posizionamento da club.',
			tech: 'Modulo di richiesta collegato a un flusso n8n; video della struttura incorporato in modalità privacy avanzata di YouTube, senza cookie fino alla riproduzione.',
		},
		{
			id: 'camuzzago',
			label: 'Camuzzago',
			path: '/camuzzago/',
			d: camuzzagoD,
			m: camuzzagoM,
			funnel:
				'Stesso schema di conversione di Meda, adattato all’offerta della sede: ogni attività rimanda alla sua pagina, prova e richiesta di informazioni restano costanti.',
			marketing:
				'Ho differenziato le due sedi per pubblico e scritto titoli e meta description pensati per la ricerca locale nei comuni vicini.',
			tech: 'Template di pagina sede riutilizzabile in Elementor: cambiano contenuti, attività e media, restano struttura e CTA. Una nuova sede si pubblica come lavoro di contenuto.',
		},
		{
			id: 'corsi',
			label: 'Corsi fitness',
			path: '/corsi-fitness/',
			d: corsiD,
			m: corsiM,
			funnel:
				'Ho progettato il catalogo per chi sceglie dal corso, con prova e planning come uniche azioni: poche scelte, sempre le stesse, su tutto il sito.',
			marketing:
				'Ho usato l’ampiezza dell’offerta come promessa principale e l’ho resa concreta sede per sede, per renderla credibile.',
			tech: 'Una pagina per ogni corso, collegata dal catalogo: più pagine indicizzabili sulle singole discipline e link pronti da usare nella comunicazione social ed email.',
		},
		{
			id: 'pt',
			label: 'Personal training',
			path: '/personal-training/',
			d: ptD,
			m: ptM,
			funnel:
				'Ho dedicato una pagina al servizio a valore più alto, con lo stesso doppio ingresso del sito e il rimando alle sedi per scegliere dove allenarsi.',
			marketing:
				'Ho posizionato il personal training su salute e prevenzione invece che sull’estetica, coerente con il riconoscimento di Palestra della Salute.',
			tech: 'Dati strutturati FAQPage per rendere le domande frequenti leggibili dai motori di ricerca, e collegamenti diretti alle pagine sede.',
		},
	],
};
