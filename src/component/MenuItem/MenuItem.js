import React from 'react'
import "./MenuItem.css"

export default function MenuItem({ Menues }) {
    return (
        <>
            <section className="container-fluid section-center row">
                { Menues.map(menu => (
                    <article key={menu.id} className='menu-item col-lg-6 col-11'>
                        <img src={menu.img} alt={menu.title} />
                        <div className="item-info">
                            <header>
                                <h4>{menu.title}</h4>
                                <h4 className='price'>{menu.price}</h4>
                            </header>
                            <p className="item-text">{menu.desc}</p>
                        </div>
                    </article>
                ))}
            </section>
        </>
    )
}
