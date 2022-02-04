// Pratos
import p1 from '../images/pratos/p1-unsplash.webp';
import p2 from '../images/pratos/p2-unsplash.webp';
import p3 from '../images/pratos/p3-unsplash.webp';
import p4 from '../images/pratos/p4-unsplash.webp';
import p5 from '../images/pratos/p5-unsplash.webp';
import p6 from '../images/pratos/p6-unsplash.webp';

// Marmitas
import m1 from '../images/marmitex/m1-unsplash.webp';
import m2 from '../images/marmitex/m2-unsplash.webp';

interface MenuItem {
	nome: string,
	preco: number,
	img: string
}

export const cardapio: MenuItem[] = [
	{
		nome: 'Porção de legumes refogados',
		preco: 20.90,
		img: p1
	},
	{
		nome: 'Tortilha com pasta e grãos (3un.)',
		preco: 16.90,
		img: p2
	},
	{
		nome: 'Porção de frutas e legumes',
		preco: 14.90,
		img: p3
	},
	{
		nome: 'Tacos veganos (7un.)',
		preco: 28.90,
		img: p4
	},
	{
		nome: 'Hamburguer vegano',
		preco: 22.90,
		img: p5
	},
	{
		nome: 'Tortilhas com frutas (3un.)',
		preco: 12.90,
		img: p6
	}
];

export const marmitas: MenuItem[] = [
	{
		nome: 'Marmitex sem PTS*',
		preco: 16.90,
		img: m1
	},
	{
		nome: 'Marmitex com PTS*',
		preco: 20.90,
		img: m2
	}
];
