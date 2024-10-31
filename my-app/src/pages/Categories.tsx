import React, { useEffect, useState } from 'react'
import { ICategories } from '../module/ICategories';
import { Link } from 'react-router-dom';

export default function Categories() {
    const [categories, setCategories] = useState<ICategories[]>([]);

    useEffect(() => {
        const fectFunction = async () => {
            const res = await fetch('http://localhost:3001/getAllCategories');
            const data = await res.json();
            setCategories(data);

        }

        fectFunction()
    }, [])

    return (
        <div>
            {categories.map((category, index) => (
                <div key={index}>
                <span><Link to={``}>{category.category_name}</Link></span>

                <div>
                    <img src={category.category_img} alt="" />
                </div>
            </div>
            ))}
        </div>
    )
}
