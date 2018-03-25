const phrases = [
	{
		text: 'Россия - великая страна с непредсказуемым прошлым!',
		origin: 'http://www.respectme.ru/aphorism/10011',
	},
	{
		text: 'Если мы уйдем, мы так хлопнем дверью, что вся Европа содрогнется.',
		origin: 'http://www.respectme.ru/aphorism/1019',
	},
	{
		text: 'В России надо жить долго, тогда что-нибудь получится.',
		origin: 'http://www.respectme.ru/aphorism/7136',
	},
	{
		text: 'Русский не тот, кто носит русскую фамилию, а тот, кто любит Россию и считает ее своим отечеством.',
		origin: 'http://www.respectme.ru/aphorism/11795',
	},
	{
		text: 'Поверх всяких Россий есть одна незабываемая Россия. Поверх всякой любви есть одна общечеловеческая любовь. Поверх всяких красот есть одна красота, ведущая к познанию Космоса.',
		origin: 'http://www.respectme.ru/aphorism/10478',
	},
	{
		text: 'Слава России!',
		origin: 'folk',
	},
	{
		text: 'Крым наш!',
		origin: 'folk',
	},
	{
		text: 'Если русский человек решил ничего не делать, то его не остановить.',
		origin: 'http://www.respectme.ru/aphorism/6979',
	},
	{
		text: 'Быть русским— это восторг!',
		origin: 'http://www.respectme.ru/aphorism/6457',
	},
	{
		text: 'В России нет дорог - только направления.',
		origin: 'http://www.respectme.ru/aphorism/3742',
	},
	{
		text: 'Превентивная война против России - самоубийство из-за страха смерти.',
		origin: 'http://www.respectme.ru/aphorism/3158',
	},
	{
		text: 'Никогда не воюйте с русскими. На каждую вашу военную хитрость они ответят непредсказуемой глупостью.',
		origin: 'http://www.respectme.ru/aphorism/3153',
	},
	{
		text: 'Все страны живут по законам, а Россия - по пословицам и поговоркам.',
		origin: 'http://www.respectme.ru/aphorism/2647',
	},
	{
		text: 'Россия не может идти чужим путем. Она и своим-то идти не может.',
		origin: 'http://www.respectme.ru/aphorism/1055',
	},
	{
		text: 'Россия производит впечатление великой державы. Но больше она ничего не производит.',
		origin: 'http://www.respectme.ru/aphorism/1054',
	},
	{
		text: 'Отрицание России во имя человечества есть ограбление человечества.',
		origin: 'http://www.respectme.ru/aphorism/1051',
	},
	{
		text: 'Мы матом не ругаемся - мы им разговариваем.',
		origin: 'http://www.respectme.ru/aphorism/1043',
	},
	{
		text: 'Я Родину свою люблю, но ненавижу государство!',
		origin: 'http://www.respectme.ru/aphorism/1041',
	},
	{
		text: 'У России нет друзей, нашей огромности боятся... У России только два надежных союзника - её армия и её флот.',
		origin: 'http://www.respectme.ru/aphorism/1028',
	},
	{
		text: 'Обождите, мы вам еще покажем кузькину мать и в производстве сельскохозяйственной продукции!',
		origin: 'http://www.respectme.ru/aphorism/1027',
	},
	{
		text: 'Русский народ есть особенный народ в свете, который отличается догадкою, умом, силою.',
		origin: 'http://www.respectme.ru/aphorism/1024',
	},
	{
		text: 'Во всем свете у нас только два верных союзника — наша армия и флот. Все остальные, при первой возможности, сами ополчатся против нас.',
		origin: 'http://dic.academic.ru/dic.nsf/dic_wingwords/2782/%D0%A3',
	},
	{
		text: 'Поблагодарите Бога прежде всего за то, что вы русский. Для русского теперь открывается этот путь, и этот путь есть сама Россия. Если только возлюбит русский Россию, возлюбит и все, что ни есть в России. К этой любви нас ведёт теперь сам Бог.',
		origin: 'http://www.ruslug.ru/?p=3516',
	},
	{
		text: 'Вы ещё не любите Россию: вы умеете только печалиться да раздражаться слухами обо всем дурном, что в ней ни делается, в вас всё это производит только одну чёрствую досаду да уныние. Нет, это ещё не любовь, далеко вам до любви, это разве только одно слишком ещё отдалённое её предвестие.',
		origin: 'http://ru.wikisource.org/wiki/%C2%FB%E1%F0%E0%ED%ED%FB%E5_%EC%E5%F1%F2%E0_%E8%E7_%EF%E5%F0%E5%EF%E8%F1%EA%E8_%F1_%E4%F0%F3%E7%FC%FF%EC%E8_(%C3%EE%E3%EE%EB%FC)/XIX',
	},
	{
		text: 'Русский не тот, кто носит русскую фамилию, а тот, кто любит Россию и считает её своим отечеством.',
		origin: 'http://www.aforizmov.net/xfsearch/anton-ivanovich-denikin/',
	},
	{
		text: 'Величие, могущество и богатство всего государства состоит в сохранении и размножении русского народа.',
		origin: 'http://feb-web.ru/feb/lomonos/texts/lo0/lo6/LO6-381-.HTM',
	},
	{
		text: 'Русское государство обладает тем преимуществом перед другими, что оно управляется непосредственно самим Богом, иначе невозможно понять, как оно существует.',
		origin: 'http://www.aforizmov.net/xfsearch/hristofor-minih/',
	},
	{
		text: 'Граница России нигде не заканчивается!',
		origin: 'https://lenta.ru/news/2016/11/24/border/',
	},
	{
		text: 'Быть нашими врагами и друзьями одинаково почётно.',
		origin: 'http://lenta.ru/news/2015/04/16/friends/',
	},
	{
		text: 'Это не Россия находится между Востоком и Западом. Это Восток и Запад находятся слева и справа от России.',
		origin: 'http://www.youtube.com/watch?v=j1Hi58MXNfQ',
	},
	{
		text: 'Постоянное кивание на заграницу как на источник всех наших бед, неверно. Неверно по сути своей. Все наши беды в нас самих. От нашей собственной безалаберности и слабости всё проистекает.',
		origin: 'https://www.youtube.com/watch?v=cHppEiIAp3g',
	},
];

let pointer = 0;

/**
 * @returns {string}
 */
export function getPhrase () {
	if ( pointer >= phrases.length ) {
		pointer = 0;
	}

	return phrases[pointer++].text;
}