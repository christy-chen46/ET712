import croissant from '../images/cro.jpg';
import croffle from '../images/crof.jpg';
import donut from '../images/nut.jpg';
import tart from '../images/tart.jpg';
import cake from '../images/cake.jpg';
import muffin from '../images/muf.jpg';
import bun from '../images/bun.jpg';
import macaron from '../images/maco.jpg';

import latte from '../images/latte.jpg';
import matcha from '../images/matcha.jpg';
import lemon from '../images/lemon.jpg';
import matchaa from '../images/matchaa.jpg';
import americano from '../images/amer.jpg';
import brew from '../images/brew.jpg';
import coffee from '../images/cof.jpg';
import tea from '../images/tea.jpg';

import fruit from '../images/fruit.jpg';
import choco from '../images/choco.jpg';
import tira from '../images/tira.jpg';
import lemonc from '../images/lemonc.jpg';
import red from '../images/red.jpg';
import carrot from '../images/carrot.jpg';
import cheese from '../images/cheese.jpg';
import short from '../images/short.jpg';

const products = [
  {
    id: 1,
    title: 'Chocolate Croissant',
    category: 'pastries',
    image: croissant,
    description:
      'Buttery flaky croissant filled with rich melted chocolate.',
    longDescription:
      'Freshly baked every morning with layers of delicate pastry dough and premium dark chocolate for the perfect balance of crispness and sweetness.',
    price: 4.99,
  },

  {
    id: 2,
    title: 'Oreo Croffle',
    category: 'pastries',
    image: croffle,
    description:
      'Crispy croffle topped with Oreo crumbs and sweet cream.',
    longDescription:
      'A croissant pressed into a golden waffle and finished with crushed Oreos, whipped cream, and chocolate drizzle for a crunchy indulgent treat.',
    price: 5.99,
  },

  {
    id: 3,
    title: 'Mango Mochi Donut',
    category: 'pastries',
    image: donut,
    description:
      'Chewy mochi donut glazed with sweet tropical mango.',
    longDescription:
      'Made with soft mochi-style dough for a light chewy texture and coated in a vibrant mango glaze that adds refreshing fruity flavor.',
    price: 3.99,
  },

  {
    id: 4,
    title: 'Berry Tart',
    category: 'pastries',
    image: tart,
    description:
      'Buttery tart filled with cream and fresh mixed berries.',
    longDescription:
      'A crisp golden tart shell layered with silky vanilla custard and topped with strawberries, blueberries, and raspberries.',
    price: 5.49,
  },

  {
    id: 5,
    title: 'Strawberry Cake Slice',
    category: 'pastries',
    image: cake,
    description:
      'Soft sponge cake layered with strawberries and cream.',
    longDescription:
      'Light vanilla sponge cake filled with fresh strawberries and whipped cream for a refreshing and delicate dessert.',
    price: 6.99,
  },

  {
    id: 6,
    title: 'Blueberry Muffin',
    category: 'pastries',
    image: muffin,
    description:
      'Moist bakery muffin bursting with juicy blueberries.',
    longDescription:
      'Baked fresh daily with sweet blueberries folded into soft vanilla batter and topped with a light golden crumble.',
    price: 2.49,
  },

  {
    id: 7,
    title: 'Red Bean Bun',
    category: 'pastries',
    image: bun,
    description:
      'Soft fluffy bun filled with sweet red bean paste.',
    longDescription:
      'A classic Asian bakery favorite made with pillowy bread and smooth house-made red bean filling.',
    price: 1.99,
  },

  {
    id: 8,
    title: 'Macarons',
    category: 'pastries',
    image: macaron,
    description:
      'Colorful French macarons with crisp shells and creamy filling.',
    longDescription:
      'Delicate almond meringue cookies filled with assorted flavored creams for a light and elegant dessert experience.',
    price: 12.99,
  },

  {
    id: 9,
    title: 'Iced Coffee',
    category: 'drinks',
    image: coffee,
    description:
      'Smooth chilled coffee served over ice for a refreshing boost.',
    longDescription:
      'Freshly brewed coffee poured over ice with a bold smooth flavor that is perfect for any time of day.',
    price: 1.99,
  },

  {
    id: 10,
    title: 'Iced Americano',
    category: 'drinks',
    image: americano,
    description:
      'Bold espresso poured over ice for a smooth refreshing drink.',
    longDescription:
      'Rich espresso shots combined with cold water and ice, creating a crisp full-bodied coffee with a clean finish.',
    price: 2.49,
  },

  {
    id: 11,
    title: 'Iced Latte',
    category: 'drinks',
    image: latte,
    description:
      'Creamy espresso drink blended with chilled milk and ice.',
    longDescription:
      'Fresh espresso mixed with silky milk and served over ice for a smooth balanced coffeehouse favorite.',
    price: 2.89,
  },

  {
    id: 12,
    title: 'Cold Brew',
    category: 'drinks',
    image: brew,
    description:
      'Slow-steeped cold brew coffee with a smooth bold taste.',
    longDescription:
      'Brewed slowly in cold water for hours to create a naturally sweet low-acidity coffee served refreshingly cold.',
    price: 2.49,
  },

  {
    id: 13,
    title: 'Matcha Latte',
    category: 'drinks',
    image: matchaa,
    description:
      'Creamy Japanese matcha blended with steamed milk.',
    longDescription:
      'Premium ceremonial-grade matcha whisked into smooth milk for a rich earthy flavor with natural sweetness.',
    price: 6.99,
  },

  {
    id: 14,
    title: 'Strawberry Matcha Latte',
    category: 'drinks',
    image: matcha,
    description:
      'Sweet strawberry milk layered with vibrant matcha.',
    longDescription:
      'A refreshing layered drink combining fresh strawberry puree, creamy milk, and earthy matcha green tea.',
    price: 5.99,
  },

  {
    id: 15,
    title: 'Lemonade',
    category: 'drinks',
    image: lemon,
    description:
      'Refreshing lemonade made with freshly squeezed lemons.',
    longDescription:
      'Bright citrus flavor balanced with light sweetness and served ice cold for the perfect refreshing drink.',
    price: 2.99,
  },

  {
    id: 16,
    title: 'Milk Tea',
    category: 'drinks',
    image: tea,
    description:
      'Creamy black tea blended with sweet milk over ice.',
    longDescription:
      'Freshly brewed black tea combined with creamy milk and light sweetness for a smooth refreshing café-style drink.',
    price: 1.99,
  },

  {
    id: 17,
    title: 'Fruit Cake',
    category: 'cakes',
    image: fruit,
    description:
      'Fresh cream cake topped with seasonal fruits.',
    longDescription:
      'Soft sponge cake layered with whipped cream and decorated with strawberries, kiwi, blueberries, and other fresh fruits.',
    price: 21.99,
  },

  {
    id: 18,
    title: 'Strawberry Shortcake',
    category: 'cakes',
    image: short,
    description:
      'Light sponge cake layered with strawberries and whipped cream.',
    longDescription:
      'Fluffy vanilla sponge layered with fresh strawberries and airy whipped cream for a classic refreshing dessert.',
    price: 23.99,
  },

  {
    id: 19,
    title: 'Chocolate Cake',
    category: 'cakes',
    image: choco,
    description:
      'Rich layered chocolate cake with smooth ganache frosting.',
    longDescription:
      'Decadent chocolate sponge layered with creamy chocolate filling and finished with glossy chocolate ganache.',
    price: 24.99,
  },

  {
    id: 20,
    title: 'Carrot Cake',
    category: 'cakes',
    image: carrot,
    description:
      'Moist spiced carrot cake topped with cream cheese frosting.',
    longDescription:
      'Soft carrot cake made with warm spices and layered with rich tangy cream cheese frosting for a comforting classic dessert.',
    price: 24.99,
  },

  {
    id: 21,
    title: 'Red Velvet Cake',
    category: 'cakes',
    image: red,
    description:
      'Velvety cocoa cake layered with smooth cream cheese frosting.',
    longDescription:
      'Classic red velvet cake with a soft moist texture and rich cream cheese frosting for a perfectly balanced sweetness.',
    price: 25.99,
  },

  {
    id: 22,
    title: 'Tiramisu Cake',
    category: 'cakes',
    image: tira,
    description:
      'Classic coffee-flavored Italian mascarpone cake.',
    longDescription:
      'Layers of espresso-soaked sponge cake and creamy mascarpone topped with cocoa powder for a rich elegant dessert.',
    price: 28.99,
  },

  {
    id: 23,
    title: 'Lemon Cake',
    category: 'cakes',
    image: lemonc,
    description:
      'Soft lemon cake with bright citrus flavor.',
    longDescription:
      'Moist buttery cake infused with fresh lemon zest and topped with smooth lemon cream frosting.',
    price: 25.49,
  },

  {
    id: 24,
    title: 'Cheese Cake',
    category: 'cakes',
    image: cheese,
    description:
      'Creamy baked cheesecake with a buttery graham crust.',
    longDescription:
      'Rich smooth cheesecake baked over a crisp buttery crust for a timeless dessert with a perfectly creamy finish.',
    price: 31.99,
  },
];

export default products;