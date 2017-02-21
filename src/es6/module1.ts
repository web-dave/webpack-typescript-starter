import { getArticleCard } from './module2';
import { img } from './img';

import { Hund } from './module3';

const article = {
    name: 'Laptop i7',
    description: 'Top Gerät, Muss man haben!'
};
const image = img;

const hund1 = new Hund('Bello');
const hund2 = new Hund('Bella');
hund1.getName();
hund2.getName();

document.querySelector('.article').innerHTML = getArticleCard(article, 3200, image);