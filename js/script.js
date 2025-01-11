'use strict'

const logos = [
	{
		src: 'images/john-titor-insignia.png',
		alt: 'Titor\'s purported military insignia',
		href: 'https://en.wikipedia.org/wiki/John_Titor',
	},
	{
		src: 'images/roman-dodecahedron.png',
		alt: 'Roman bronze dodecahedron found in Tongeren, Gallo-Roman Museum, Tongeren',
		href: 'https://en.wikipedia.org/wiki/Roman_dodecahedron',
	},
	{
		src: 'images/copland-os.png',
		alt: 'Logo of the Copland OS, depicted in Serial Experiments Lain',
		href: 'https://en.wikipedia.org/wiki/Copland_(operating_system)',
	},
	{
		src: 'images/民-bronze.svg',
		alt: 'Character 民 (4-stroke traditional Kangxi radical 083 氏 + 1 stroke) in the bronze script style',
		href: 'https://en.wiktionary.org/wiki/民',
	},
]
const logoIndex = Math.floor(Math.random() * logos.length)
const logo = logos[logoIndex]
const logoImage = document.getElementById('logo-image')
const logoAnchor = document.getElementById('logo-anchor')
logoImage.src = logo.src
logoImage.alt = logo.alt
logoAnchor.href = logo.href
