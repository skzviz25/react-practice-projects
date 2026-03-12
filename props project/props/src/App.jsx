
import './App.css'
import Card from './components/Card'

function App() {
  
  const bakeryProducts = [
  {
    id: 1,
    name: "Whole Wheat Loaf",
    description: "Nutritious, fiber-rich, and wholesome loaves.",
    price: 4.50,
    inStock: 40,
    image: "https://www.allrecipes.com/thmb/_piMRxT9zYHP39Lnz6-lObHzEWw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-6773-simple-whole-wheat-bread-DDMFS-4x3-B-969e7bce922948959cb9e85aa4b2ff0d.jpg",
    category: "Bread"
  },
  {
    id: 2,
    name: "Artisan Sourdough",
    description: "Naturally fermented with a crisp crust and tangy interior.",
    price: 5.25,
    inStock: 12,
    image: "https://www.kingarthurbaking.com/sites/default/files/recipe_legacy/6093-3-large.jpg",
    category: "Bread"
  },
  {
    id: 3,
    name: "Multigrain Baguette",
    description: "Classic French style packed with toasted seeds and grains.",
    price: 3.75,
    inStock: 25,
    image: "https://feastingisfun.com/wp-content/uploads/2017/08/IMG_5631.jpg",
    category: "Bread"
  },
  {
    id: 4,
    name: "Honey Oat Bread",
    description: "Soft, slightly sweet loaf topped with rolled oats.",
    price: 4.00,
    inStock: 18,
    image: "https://celebratingsweets.com/wp-content/uploads/2016/01/Honey-Oat-Quick-Bread-2.jpg",
    category: "Bread"
  },
  {
    id: 5,
    name: "Rustic Rye",
    description: "Traditional hearty rye bread with a deep, earthy flavor.",
    price: 4.80,
    inStock: 8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYPwlzXJNHTzILFY2UGAgm21nYtWh6SLl8Q&s",
    category: "Bread"
  }
];

  return (
    <div className='parent'>
      {bakeryProducts.map(function(elem){
        return <Card key={elem.id} name={elem.name} description={elem.description} price={elem.price} inStock={elem.inStock} image={elem.image} />
      })}
      
    </div >
  )
}

export default App
