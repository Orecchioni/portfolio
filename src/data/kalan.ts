import type { CaseData } from './types';

import homeD from '../assets/shots/kalan/home-d.png';
import homeM from '../assets/shots/kalan/home-m.png';
import percorsoD from '../assets/shots/kalan/percorso-d.png';
import percorsoM from '../assets/shots/kalan/percorso-m.png';
import recoveryD from '../assets/shots/kalan/recovery-d.png';
import recoveryM from '../assets/shots/kalan/recovery-m.png';
import eventiD from '../assets/shots/kalan/eventi-d.png';
import eventiM from '../assets/shots/kalan/eventi-m.png';
import acquistaD from '../assets/shots/kalan/acquista-d.png';
import acquistaM from '../assets/shots/kalan/acquista-m.png';

export const kalan: CaseData = {
	name: 'Kalan',
	host: 'kalancentro.it',
	origin: 'https://kalancentro.it',
	stack: ['WordPress', 'Elementor', 'Google Tag Manager', 'Cookiebot'],
	slides: [
		{
			id: 'home',
			label: 'Home',
			path: '/',
			d: homeD,
			m: homeM,
			funnel:
				'Ho impostato il funnel su un’unica azione, la richiesta di contatto, perché un percorso su misura parte da una conversazione. Eventi e cucina restano ingressi secondari a basso impegno.',
			marketing:
				'Ho costruito la comunicazione su un posizionamento di categoria e su tre pilastri, per vendere un modello di centro invece di un elenco di attività.',
			tech: 'WordPress ed Elementor, scelti perché il centro aggiorna spesso contenuti ed eventi in autonomia. Video d’apertura a tutta pagina, consenso con Cookiebot e misurazione con Google Tag Manager.',
		},
		{
			id: 'percorso',
			label: 'Percorso',
			path: '/percorso/',
			d: percorsoD,
			m: percorsoM,
			funnel:
				'Ho reso visibile cosa succede dopo il contatto, per ridurre l’incertezza che frena la richiesta; ogni formula porta allo stesso punto di conversione.',
			marketing:
				'Ho trasformato un’offerta complessa in un percorso a tappe, con formule dai nomi coerenti col racconto del brand, per far percepire un progetto e non un abbonamento.',
			tech: 'Pagina modulare collegata alle pagine dei singoli pilastri: si estende con nuove formule o servizi senza riprogettare la navigazione.',
		},
		{
			id: 'recovery',
			label: 'Recovery',
			path: '/recovery/',
			d: recoveryD,
			m: recoveryM,
			funnel:
				'Ho inserito i nuovi servizi dentro il funnel esistente invece di crearne uno parallelo: la pagina informa e rimanda sempre alla stessa richiesta di percorso.',
			marketing:
				'Ho presentato il recupero come parte del metodo, non come extra, per rafforzare il posizionamento di centro integrato.',
			tech: 'Stesso impianto delle pagine di servizio, con una scheda per trattamento: aggiungere un servizio significa aggiungere un blocco di contenuto.',
		},
		{
			id: 'eventi',
			label: 'Eventi',
			path: '/eventi/',
			d: eventiD,
			m: eventiM,
			funnel:
				'Ho usato gli eventi come primo contatto a basso impegno, ognuno con il suo pulsante di iscrizione o prenotazione, per far conoscere il centro a chi non è ancora socio.',
			marketing:
				'Ho dato agli eventi un ruolo di community building, con un formato di comunicazione ricorrente che li rende riconoscibili e veloci da pubblicare.',
			tech: 'Pagina progettata per cambiare spesso, con iscrizioni affidate allo strumento più adatto a ogni evento: moduli Fillout, prenotazioni del ristorante, programmi in PDF.',
		},
		{
			id: 'acquista',
			label: 'Acquista',
			path: '/acquista/',
			d: acquistaD,
			m: acquistaM,
			funnel:
				'Ho aperto un canale di acquisto diretto accanto al funnel a contatto: rituali e gift card si comprano online, e le gift card portano nuove persone attraverso chi le regala.',
			marketing:
				'Ho separato due motivazioni d’acquisto, per sé o da regalare, con ingressi distinti e schede prodotto che dichiarano tutto ciò che serve per decidere.',
			tech: 'Pagamenti con Stripe Payment Links, uno per prodotto: vendita online senza un e-commerce da mantenere e senza dati di pagamento sul sito.',
		},
	],
};
