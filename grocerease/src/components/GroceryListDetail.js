import axios from "axios";
import { useEffect, useState } from 'react';
import '../groceryListDetail.css'
import GroceryListItem from './GroceryListItem'
import { useLocation, useNavigate } from 'react-router-dom'

const GroceryListDetail = ({token}) => {
    const location = useLocation() 
    let listId = location.search.split('=')[1]
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    const [listName, setListName] = useState('');
    const [listTags, setListTags] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://grocerease.herokuapp.com/grocerease/list_detail/${listId}`,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`
            }
        })
        .then (res => {
            setListName(res.data.name)
            setListTags(res.data.tags)
        })
        axios.get(`https://grocerease.herokuapp.com/grocerease/lists/${listId}/items/`,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`
            }
        })
        .then (res => {
            const newItems = [...items, ...res.data]
            setItems(newItems)
        })
    },
    []
    )
    const onAddProduct = (event) => {
        event.preventDefault()
        axios.put(`https://grocerease.herokuapp.com/grocerease/lists/${listId}/items/`, 
        {   name: value,
            quantity:1,
            
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`
            }
        }
        ).then (res => {
            console.log(res)
            setItems([
                ...items,
                {name: res.data.name, item_quantity: res.data.item_quantity, image: res.data.image}
            ])
        })
    }
    const saveList = () => {
        axios.patch(`https://grocerease.herokuapp.com/grocerease/edit_list/${listId}/`,
        {
            name: listName,
            tags: listTags,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`
            }
        }        
        ).then( () => {
            navigate('/lists')
        })
    }

    return (
        <>
        <div className='list_detail_name_tag'>
            <input className='pa2 input-reset ba bg-transparent w-100 measure search_input' onChange={(event) => setListName(event.target.value)} value={listName}/>

            <input className='pa2 input-reset ba bg-transparent w-100 measure search_input' onChange={(event) => setListTags(event.target.value.split(', '))} value={listTags.join(', .')}/> 
            
        </div>
        <div className='search_product_container'>
            <div>
                <input className='pa2 input-reset ba bg-transparent w-100 measure search_input' type="text" id="products" value={value} 
                placeholder='Search for products'
                onChange={(event) => setValue(event.target.value)}></input>
            </div>
            <div>
                <button className='add_product_button' onClick={onAddProduct} type='submit'>Add Product</button>
            </div>
        </div>
        <div>
            {items.map((item) => {
                return ( <GroceryListItem listId={listId} token={token} item={item}/>
                )
            })}
        </div>
        <div className='button_container'>
            <button className='save_list_button' onClick={saveList} >Save List</button>
            <button className='start_shopping_button'>Start Shopping</button>
        </div>
        </>
    )
}

export default GroceryListDetail;