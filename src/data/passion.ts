import type { CaseData } from './types';

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
			video: {
				src: 'media/passion-hero.mp4',
				holeD: homeHoleD,
				holeM: homeHoleM,
				d: { l: 0, t: 0, w: 66.6667, h: 100, pos: '50% 25%' },
				m: { l: 0, t: 0, w: 100, h: 66.6667, pos: '50% 25%' },
			},
			funnel:
				'Ho progettato la home come smistamento: ogni pubblico ha la sua porta. Nuovi contatti verso la prova, soci verso l’area clienti, indecisi verso planning e abbonamenti, con la CTA principale ripetuta lungo la pagina.',
			marketing:
				'Ho scritto i contenuti per far emergere subito posizionamento e prove a supporto: un claim territoriale pensato per la ricerca locale e numeri concreti al posto degli aggettivi.',
			tech: 'Sito statico in Astro e MDX su Vercel, che passa ogni conversione al sistema giusto: la prova a un form di automazione, iscrizione e area soci al gestionale del club.',
		},
		{
			id: 'orari',
			label: 'Orari corsi',
			path: '/orari-corsi/',
			d: orariD,
			m: orariM,
			funnel:
				'Ho messo il planning al centro perché è il punto in cui chi valuta decide. La CTA di prova apre e chiude la pagina, per intercettare chi ha appena trovato il suo orario.',
			marketing:
				'Ho trasformato un’informazione di servizio in un argomento di vendita: titolo, meta description e testi puntano tutti sul vantaggio competitivo del club.',
			tech: 'Planning settimanali con selettore del giorno, leggibili su telefono, e un’ancora per ogni linea: menu e altre pagine portano l’utente direttamente al punto giusto.',
		},
		{
			id: 'abbonamenti',
			label: 'Abbonamenti',
			path: '/abbonamenti/',
			d: abbD,
			m: abbM,
			funnel:
				'Ho ridotto i passaggi verso l’iscrizione: ogni formula ha il suo pulsante, che apre l’iscrizione online già sul piano scelto. FAQ e prova coprono chi non è ancora pronto.',
			marketing:
				'Ho scelto la trasparenza come leva di conversione: condizioni scritte per intero, per arrivare all’iscrizione con meno dubbi e meno richieste allo staff.',
			tech: 'Formule e condizioni gestite come contenuti MDX, modificabili senza toccare il layout. Il pagamento resta nel gestionale: il sito non tratta dati di pagamento.',
		},
		{
			id: 'reformer',
			label: 'Pilates Reformer',
			path: '/pilates-reformer/',
			d: refD,
			m: refM,
			funnel:
				'Ho costruito una landing per singola disciplina, adatta a campagne e ricerca organica: un solo argomento e le stesse CTA del resto del sito, con un’uscita coerente per ogni beneficio.',
			marketing:
				'Ho scritto il testo per segmenti di pubblico, dal principiante a chi cerca un percorso individuale: ognuno ritrova il proprio livello senza dover chiedere.',
			tech: 'Template di pagina disciplina riutilizzabile: media a sinistra, messaggio e CTA a destra. Una nuova disciplina si pubblica scrivendo contenuti, senza nuovo sviluppo.',
		},
		{
			id: 'lavora',
			label: 'Lavora con noi',
			path: '/lavora-con-noi/',
			d: lavD,
			m: lavM,
			funnel:
				'Ho sostituito un Typeform esterno con un flusso proprietario: modulo sul sito, candidatura direttamente nel CRM, conferma automatica al candidato e notifica al responsabile.',
			marketing:
				'Ho portato anche il recruiting dentro il brand, dall’esperienza di candidatura all’email di conferma, e aggiornato l’informativa privacy al nuovo trattamento dei dati.',
			tech: 'Modulo in JavaScript vanilla con validazione e anti-spam, Edge Function Supabase che ricontrolla i dati, email transazionali HTML via SendGrid. Nessuna chiave esposta nel browser.',
		},
	],
};
