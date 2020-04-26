var HomeController    = require('./HomeController');
var ProductController = require('./ProductController');
var ExpenseController = require('./ExpenseController');
const cors = require('cors');

// Routes
module.exports = function(app){  
    // Main Routes
    app.get('/',HomeController.Index);    
    app.get('/Product/Index', cors(), ProductController.Index);
    app.get('/Product/Detail', cors(), ProductController.Detail);
    app.get('/Product/Create', ProductController.Create);
    app.post('/Product/CreateProduct', cors(), ProductController.CreateProduct);
    app.get('/Product/Edit', ProductController.Edit);
    app.put('/Product/Update', cors(), ProductController.Update);
    app.delete('/Product/Delete', cors(), ProductController.Delete);
    app.get('/Expense/Index', cors(), ExpenseController.Index);
    app.post('/Expense/AddExpense', cors(), ExpenseController.AddExpense);
    app.delete('/Expense/Delete', cors(), ExpenseController.Delete);
};

