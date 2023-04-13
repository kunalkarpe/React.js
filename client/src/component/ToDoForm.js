import "./ToDo.css";
import axios from "axios";
import { useEffect, useState } from "react";


const ToDoForm = () => {
    const [itemText, setItemText] = useState("");
    const [listItems, setListItems] = useState([]);
    const [isUpdating, setIsUpdating] = useState("");
    const [updateItemText, setUpdateItemText] = useState("");

    const addItem = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/api/item", { item: itemText })
            setListItems(prev => [...prev, res.data])
            setItemText('');
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const getItemsList = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/items");
                setListItems(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getItemsList()
    }, [listItems]);

    // TO delete item
    const deleteItem = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/api/item/${id}`);
            const newListItems = listItems.filter(item => item._id !== id);
            console.log(res);
            setListItems(newListItems)
        } catch (err) {
            console.log(err)
        }
    }

    // Updating item
    const updateItem = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:3000/api/item/${isUpdating}`, { item: updateItemText });
            console.log(res.data);
            const updatedItemIndex = listItems.findIndex(item => item._id === isUpdating);
            const updateItem = listItems[updatedItemIndex].item = updateItemText;
            setUpdateItemText('');
            setIsUpdating('');
        } catch (err) {
            console.log(err);
        }
    }
    // Before Updating item 
    const renderUpdateForm = () => (
        <form className="update-form" onSubmit={e => { updateItem(e) }}>
            <input type="text" className="update-textbox flex" onChange={e => { setUpdateItemText(e.target.value) }} value={updateItemText} />
            <button type="submit" className="btn btn-danger new-updatebtn flex">Update</button>
        </form>
    )


    return (
        <>

            <div className="container">
                <h1 className="center">To Do List</h1>
                <div className="container">
                    <form className="form" onSubmit={e => addItem(e)}>
                        <input className="form-control form-control-lg input" value={itemText} type="text" placeholder="Enter new todo here...." aria-label=".form-control-lg example" onChange={e => { setItemText(e.target.value) }} />
                        <button type="submit" className="btn btn-success add height wid">Add</button>
                    </form>
                </div>
                <div className="conatiner">
                    {
                        listItems.map(item => (
                            <div className="container-update">
                                {
                                    isUpdating === item._id
                                        ? renderUpdateForm()
                                        : <>

                                            <p className="content">{item.item}</p>
                                            <button type="submit" className="btn btn-warning update1 flex height" onClick={() => { setIsUpdating(item._id) }}>Update</button>
                                            <button type="submit" className="btn btn-danger delete1 flex height" onClick={() => { deleteItem(item._id) }}>Delete</button>
                                        </>
                                }
                            </div>
                        ))
                    }
                    {/* <div className="container-update">
                        <input type="text" className="update" />
                        <button type="submit" className="btn btn-warning update2 flex height">Update</button>
                        <button type="submit" className="btn btn-danger delete2 flex height">Delete</button>
                    </div>

                    <div className="container-update">
                        <input type="text" className="update" />
                        <button type="submit" className="btn btn-warning update3 flex height">Update</button>
                        <button type="submit" className="btn btn-danger delete3 flex height">Delete</button>
                    </div> */}
                </div>
            </div>
        </>
    )
}
export default ToDoForm;