import p1 from '../../src/iconsSvg/p1.svg';
import p2 from '../../src/iconsSvg/p2.svg';
import p3 from '../../src/iconsSvg/p3.svg';
import p4 from '../../src/iconsSvg/p4.svg';
import p5 from '../../src/iconsSvg/p5.svg';

export const productList = [
    {
        id : 0,
        image : p1,
        title : "Melon fruit salad",
        price : 44.99,
        details: "Our house dish, the melon fruit salad, is sure to please any palate.",
        tags: [
            "Melon",
            "Raspberry",
            "Blackberries",
            "Honey",
            "Strawberry"
        ]
    },
    {
        id : 1,
        image : p2,
        title : "Berry mango combo",
        price : 29.99,
        details: "If you like a mango berry combination, this is the perfect dish for you.",
        tags: [
            "Mango",
            "Berry",
            "Blackberries",
            "Strawberry",
            "Fresh Mint"
        ]
    },
    {
        id : 2,
        image : p3,
        title : "Honey lime combo",
        price : 18.99,
        details: "Nothing better than a combination of honey and lemon to make your day more bittersweet.",
        tags: [
            "Lime",
            "Raspberry",
            "Blackberries",
            "Honey",
            "Strawberry"
        ]
    },
    {
        id : 3,
        image : p4,
        title : "Quinoa fruit salad",
        price : 26.99,
        details: "If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you.",
        tags : [
            "Red Quinoa",
            "Lime",
            "Blueberries",
            "Mango",
            "Strawberries",
            "Fresh Mint"
        ]
    },
    {
        id : 4,
        image : p5,
        title : "Tropical fruit salad",
        price : 22.99,
        details: "A salad that suits you at any time. The tropical fruit salad is perfect.",
        tags : [
            "Kiwi",
            "Pineapple",
            "Orange",
            "Mango",
            "Strawberries",
            "Fresh Mint"
        ]
    }
]

export const buttonSugestions = [
    "Salad",
    "Berry",
    "Quinoa",
    "Lime",
    "Fruit",
    "Combo"
];

export default async function ListProductsAPI(request, response) {
    if(request.method === 'GET') {
        response.json({
            data: productList,
            sugestions: buttonSugestions
        })
        return;
    } else if(request.method === 'POST') {
        const text = request.body.data;
        if((text != undefined) && (text.trim().length>0)) {
            response.json({
                data: productList.filter((item)=> (
                    item.title.toUpperCase().includes(text.toUpperCase())
                  ))
            })
        } else {
            response.json({
                data: []
            })
        }
        return;
    }
    response.status(404).json({
        message: 'Ainda não temos suporte a este método de requisição.'
    })
}