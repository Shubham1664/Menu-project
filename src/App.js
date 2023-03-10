import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ["all",...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filteritems = (category) =>{

    if(category == "all")
    {
      setMenuItems(items);
      return;
    }
    const newitem = items.filter((item) => item.category === category)
    setMenuItems(newitem);
  };

  return(
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories = {categories} filteritems = {filteritems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
