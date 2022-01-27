import axios from "axios";
import { useEffect, useState } from 'react';
import '../groceryListDetail.css'
import GroceryListItem from './GroceryListItem'
import { useLocation, useNavigate } from 'react-router-dom'

const GroceryListDetail = ({ token }) => {
    const location = useLocation()
    let listId = location.search.split('=')[1]
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    const [listName, setListName] = useState('');
    const [listTags, setListTags] = useState([]);
    const navigate = useNavigate();


    const [choices, setChoices] = useState('')
    const handleChange = event => {
        setChoices(event.target.value)

    }


    // hardcode the category/choices list that was given by the backend
    const fakeData = [
        { id: 8, choices: 'Produce' },
        { id: 9, choices: 'Dairy' },
        { id: 10, choices: 'Baked Goods' },
        { id: 11, choices: 'Meat and Fish' },
        { id: 12, choices: 'Snacks' },
        { id: 13, choices: 'Alcohol' },
        { id: 14, choices: 'Baby Care' },
        { id: 15, choices: 'Canned Goods' },
        { id: 16, choices: 'Dry Goods' },
        { id: 17, choices: 'Sauces and Condiments' },
        { id: 18, choices: 'Herbs and Spices' },
        { id: 19, choices: 'Non-Alcoholic Beverages' },
        { id: 20, choices: 'Household and Cleaning' },
        { id: 21, choices: 'Health and Beauty' },
        { id: 22, choices: 'Pet Care' },
    ]



    useEffect(() => {
        axios.get(`https://grocerease.herokuapp.com/grocerease/list_detail/${listId}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `token ${token}`
                }
            })
            .then(res => {
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
            .then(res => {
                const newItems = [...items, ...res.data]
                setItems(newItems)
            })
    },
        []
    )
    const onAddProduct = (event) => {
        event.preventDefault()
        axios.post(`https://grocerease.herokuapp.com/grocerease/lists/${listId}/items/`,
            {
                name: value,
                quantity: 1,

            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `token ${token}`
                }
            }
        ).then(res => {
            console.log(res)
            setItems([
                ...items,
                { name: res.data.name, item_quantity: res.data.item_quantity, image: res.data.image }
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
        ).then(() => {
            navigate('/lists')
        })
    }

    return (
        <>
            {/* create a dropdown with the choices that the user can select */}
            <div className='categoryDropdown'>
            
                <div>
                    <label>Choose a category</label>
                    <select
                        className="dropdown"
                        onChange={handleChange}>


                        {fakeData.map((choices) => <option key={choices.id} value={choices.value}>{choices.value}</option>)}
                        <option selected value="Select one"> Select one </option>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Baked Goods">Baked Goods</option>
                        <option value="Meat and Fish">Meat and Fish</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Alcohol">Alcohol</option>
                        <option value=">Baby Care">Baby Care</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Sauces and Condiments">Sauces and Condiments</option>
                        <option value="Herbs and Spices">Herbs and Spices</option>
                        <option value="Non-Alcoholic Beverages">Non-Alcoholic Beverages</option>
                        <option value="Household and Cleaning">Household and Cleaning</option>
                        <option value="Health and Beauty">Health and Beauty</option>
                        <option value="Pet Care">Pet Care</option>

                    </select>

                </div>

            </div>






            <div className='list_detail_name_tag'>
                <input className='pa2 input-reset ba bg-transparent w-100 measure search_input' onChange={(event) => setListName(event.target.value)} value={listName} />

                <input className='pa2 input-reset ba bg-transparent w-100 measure search_input' onChange={(event) => setListTags(event.target.value.split(', '))} value={listTags.join(', .')} />

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
                    return (<GroceryListItem item={item} />
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
