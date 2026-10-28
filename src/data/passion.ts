import type { ImageMetadata } from 'astro';

import homeD from '../assets/shots/passion/home-d.png';
import homeM from '../assets/shots/passion/home-m.png';
import homeHoleD from '../assets/shots/passion/home-hole-d.png';
import homeHoleM from '../assets/shots/passion/home-hole-m.png';
import orariD from '../assets/shots/passion/orari-d.png';
import orariM from '../assets/shots/passion/orari-m.png';
import abbD from '../assets/shots/passion/abbonamenti-d.png';
import abbM from '../assets/shots/passion/abbonamenti-m.png';
import refD from '../assets/shots/passion/reformer-d.png';
import refM from '../assets/shots/passion/reformer-m.png';
import lavD from '../assets/shots/passion/lavora-d.png';
import lavM from '../assets/shots/passion/lavora-m.png';

export interface Slide {
	id: string;
	label: string;
	path: string;
	d: ImageMetadata;
	m: ImageMetadata;
	/** Versione con il video "bucato": il video vero passa dietro. */
	video?: { src: string; holeD: ImageMetadata; holeM: ImageMetadata };
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

export const passion: CaseData = {
	name: 'Passion Fitness',
	host: 'passionfitness.it',
	origin: 'https://www.passionfitness.it',
	stack: ['Astro 7', 'MDX', 'Vercel', 'Supabase', 'SendGrid'],
	slides: [
		{
			id: 'home',
			label: 'Home',
			path: '/',
			d: homeD,
			m: homeM,
			video: { src: 'media/passion-hero.mp4', holeD: homeHoleD, holeM: homeHoleM },
			funnel:
				'È lo smistamento: chi arriva per la prima volta va alla prova senza impegno, chi è già socio al portale clienti, chi sta valutando al planning o agli abbonamenti. La prova torna in tre punti, così l’azione è sempre a portata.',
			marketing:
				'Prima il territorio, poi le prove: il claim nomina i quattro quartieri serviti e i numeri (30 anni, 2.000 m², oltre 250 lezioni al mese) rendono concreto «la più grande». Seguono i quattro prodotti, ognuno con la sua pagina.',
			tech: 'Il sito resta statico e veloce, il resto lo fanno i sistemi giusti: la prova passa a un form di automazione, iscrizione e area soci al gestionale del club. Il video d’apertura parte muto e in loop.',
		},
		{
			id: 'orari',
			label: 'Orari corsi',
			path: '/orari-corsi/',
			d: orariD,
			m: orariM,
			funnel:
				'È la pagina di chi sta già decidendo e vuole sapere se il corso cade nel suo orario. Il planning viene prima di tutto; la prova apre e chiude la pagina, per chi ha trovato la sua fascia.',
			marketing:
				'L’orario è l’argomento: dalle 5 a mezzanotte, 365 giorni l’anno. Ogni linea ha una promessa diversa, piccoli gruppi nel Reformer, alta intensità in Energy, postura in Rebalance, così ognuno riconosce il suo corso.',
			tech: 'Cinque planning settimanali, uno per linea, con selettore del giorno: su telefono si legge un giorno alla volta invece di una tabella illeggibile. Ogni planning ha un link diretto usato dal menu e dalle altre pagine.',
		},
		{
			id: 'abbonamenti',
			label: 'Abbonamenti',
			path: '/abbonamenti/',
			d: abbD,
			m: abbM,
			funnel:
				'Qui si chiude: ogni formula ha il suo pulsante di iscrizione, che porta direttamente al piano scelto nel gestionale. Chi non è convinto ha la prova, chi ha dubbi trova le FAQ su pagamento, certificato medico e sospensione.',
			marketing:
				'Prezzi visibili e condizioni scritte per intero, quota di attivazione e costo della sospensione compresi: meno sorprese all’iscrizione, meno domande allo staff. Le formule vanno dalla sola sala pesi all’Open con Reformer.',
			tech: 'Le formule sono contenuti MDX, non codice: cambiare un prezzo o una condizione è una modifica di testo che non tocca il layout. Pagamento e anagrafica restano nel gestionale, così il sito non tratta dati di pagamento.',
		},
		{
			id: 'reformer',
			label: 'Pilates Reformer',
			path: '/pilates-reformer/',
			d: refD,
			m: refM,
			funnel:
				'Landing di una disciplina: porta chi cerca il Reformer verso la prova, ma lascia aperta la strada a orari e abbonamenti. Ogni beneficio ha il suo pulsante, così l’azione segue l’argomento che ha convinto.',
			marketing:
				'Parla a tre persone diverse: chi inizia (Small Class da massimo 7), chi è avanzato (Reformer, Tower e Chair), chi vuole un trainer solo per sé. I benefici sono concreti: postura, mal di schiena, forza.',
			tech: 'Stessa struttura delle altre pagine di disciplina: media a sinistra, messaggio e pulsanti a destra. Aggiungere una disciplina significa scrivere contenuti, non progettare una pagina nuova.',
		},
		{
			id: 'lavora',
			label: 'Lavora con noi',
			path: '/lavora-con-noi/',
			d: lavD,
			m: lavM,
			funnel:
				'Un solo modulo, con le tre posizioni aperte e il CV allegato: candidarsi richiede un minuto e non si esce mai dal sito del club.',
			marketing:
				'Anche il reclutamento parla come il brand: niente Typeform esterno, e la conferma al candidato arriva con la grafica di Passion. Il responsabile trova la candidatura già nel CRM, nella sezione Curriculum.',
			tech: 'Modulo in JavaScript senza librerie, con controlli su telefono, età e file prima dell’invio. Le candidature arrivano al CRM su Supabase senza chiavi esposte nel browser; le email partono via SendGrid. Informativa privacy aggiornata.',
		},
	],
};
