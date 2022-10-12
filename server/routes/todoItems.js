const router = require('express').Router();

// import all modes
const todoItemsModel = require('../models/todoitems');

// first route 
//-- we will add Todo to our database 
//-- must use async await when dealing with promises and databases
router.post('/api/item', async (req, res) => {
    try {
        const newItem = new todoItemsModel({
            item: req.body.item
        });
        //save item to database
        const saveItem = await newItem.save();
        res.status(200).json(saveItem);
    } catch (err) {
        res.json(err);
    }    
})

// second route -- get data from database
router.get('/api/items', async (req, res) => {
    try {
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems);
    } catch (err) {
        res.json(err)
    }    
});

// update items
router.put('/api/item/:id', async (req, res) => {
    try {
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json('Item Updated Successfully');
    } catch (err) {
        res.json(err);
    }
});

//delete item
router.delete('/api/item/:id', async (req, res) => {
    try {
        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Successfully Deleted')
    } catch (err) {
        res.json(err);
    }
})

//export router
module.exports = router;
