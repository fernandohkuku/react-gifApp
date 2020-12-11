
import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid'

const GiftExpertApp = () => {


    const [categories, setCategories] = useState(['Saint Seiya']);

  /*   const handelAdd =()=>{
        setCategories(cate => [...categories, 'Hunter x Hunter'] );
    }
 */


    return (
        <>
            <h2>Gift App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <button>Agregar</button>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category}/>
                    ))
                }
            </ol>

        </>
    );

}

export default GiftExpertApp;
