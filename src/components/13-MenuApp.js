import React, {useState} from 'react'
import Menu from '../props/ Menu'
import Categories from '../props/Categories'
import menu from '../data/menu'

const allCategories = ['all', ...new Set(menu.map((menu) => menu.category))]
console.log(allCategories);
function MenuApp() {
    const [menuItems, setMenuItems] = useState(menu)
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {

        if(category === 'all') {
            setMenuItems(menu)
            return
        }

        const newItems = menu.filter((item) => item.category === category)
        setMenuItems(newItems)
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Menu App Sample</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    )
}
export default MenuApp