import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

export default function Category() {
    useEffect(() => {
        axios.get('http://localhost:5000/api/categories')
            .then(res => setCategories(res.data))
            .catch(err => console.error(err));
    }, []);

    const [categories, setCategories] = useState([]);
    return (
        <section className="category">
            <div className="container">
                <ul class="category-list">
                    {categories.map(category => (
                        <li class="category-item">
                            <figure class="category-banner">
                                <img src={require(`../../assets/images/${category.image}`)} alt="Sunglass & eye" loading="lazy" width="510" height="600"
                                    class="w-100" />
                            </figure>
                            <a href="sunglass-eye" class="btn btn-secondary">{category.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

