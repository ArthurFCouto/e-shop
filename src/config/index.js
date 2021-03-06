import p1 from '../imageSvg/p1.svg';
import p2 from '../imageSvg/p2.svg';
import p3 from '../imageSvg/p3.svg';
import p4 from '../imageSvg/p4.svg';
import p5 from '../imageSvg/p5.svg';

export default {
    productList: [
        {
            id: 0,
            image: p1,
            title: "Salada de Frutas de Melão",
            price: 14.9,
            details: "O prato da casa, a salada de frutas de melão, com certeza vai agradar a qualquer paladar.",
            tags: [
                "Melão",
                "Framboesa",
                "Amora",
                "Mel",
                "Morango"
            ]
        },
        {
            id: 1,
            image: p2,
            title: "Combo Manga+Amora",
            price: 12.9,
            details: "Se você gosta de uma combinação de manga com amoras, este é o prato perfeito para você.",
            tags: [
                "Manga",
                "Amora",
                "Framboesa",
                "Morango",
                "Menta refrescante"
            ]
        },
        {
            id: 2,
            image: p3,
            title: "Salada de Limão e Mel",
            price: 11.9,
            details: "Nada melhor do que uma combinação de mel e limão para deixar o seu dia mais agridoce.",
            tags: [
                "Limão",
                "Framboesa",
                "Amora",
                "Mel",
                "Morango"
            ]
        },
        {
            id: 3,
            image: p4,
            title: "Salada de Frutas de Quinoa",
            price: 10.9,
            details: "Se você está procurando uma nova salada de frutas para comer hoje, a quinoa é o que tem para você.",
            tags: [
                "Quinoa",
                "Limão",
                "Amora",
                "Manga",
                "Morango"
            ]
        },
        {
            id: 4,
            image: p5,
            title: "Salada de Frutas Tropical",
            price: 13.99,
            details: "Uma salada que combina com você a qualquer hora. A salada de frutas tropicais é perfeita.",
            tags: [
                "Kiwi",
                "Abacaxi",
                "Laranja",
                "Manga",
                "Morango",
                "Menta refrescante"
            ]
        }
    ],
    buttonSugestions: [
        "Salada",
        "Amora",
        "Quinoa",
        "Limão",
        "Fruta",
        "Combo"
    ]
}