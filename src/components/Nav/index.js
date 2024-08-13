const routes = [
  {
    title: 'Książki',
    href: '/books',
    el: [
      {elTitle: 'Książki dla pacjentów', elHref: 'books-for-patients'},
      {elTitle: 'Książki dla terapeutów', elHref: 'books-for-therapist'},
      {elTitle: 'Nowości', elHref: 'latest-books'},
    ],
  },
  {
    title: 'Baza wiedzy',
    href: '/knowledge-base',
    el: [
      {
        elTitle: 'Artykuły autorskie',
        elHref: 'authored-articles',
      },
      {elTitle: 'Studium przypadku', elHref: 'case-study'},
      {elTitle: 'Eksperci', elHref: 'experts'},
      {
        elTitle: 'Badania i artykuły',
        elHref: 'studies-and-articles',
      },
    ],
  },

  {
    title: 'Żródła internetowe',
    href: '/internet-sources',
  },

  {
    title: 'Materiały',
    href: '/materials',
    el: [
      {elTitle: 'Dorośli', elHref: 'adults'},
      {elTitle: 'Dzieci', elHref: 'children'},
      {elTitle: 'Dokumenty', elHref: 'documents'},
      {elTitle: 'Filmy', elHref: 'movie'},
      {elTitle: 'Sieć', elHref: 'network'},
      {elTitle: 'Kwestionariusze', elHref: 'questionnaire'},
    ],
  },

  {
    title: 'Nowości',
    href: '/news',
  },
  {
    title: 'Narzędzia internetowe',
    href: '/online-tools',
    el: [
      {elTitle: 'artykuły', elHref: 'articles'},
      {elTitle: 'narzędzia internetowe', elHref: 'tools'},
      {elTitle: 'narzędzia', elHref: 'tools'},
    ],
  },
  {
    title: 'Webianry',
    href: '/webinars',
    el: [
      {
        elTitle: 'Rozmowy o terapii',
        elHref: 'conversations-about-therapys',
      },
      {elTitle: 'Uczymy terapii', elHref: 'we-are-learning-therapy'},
    ],
  },
]

export default routes
