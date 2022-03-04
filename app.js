var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { render } = require('ejs');
var app = express();
var router = express.Router();
// client
var indexRouter = require('./routes/index');
var homeRouter = require('./routes/index');
var productsRouter = require('./routes/client/products');
var loginRouter = require('./routes/client/login');
var registerRouter = require('./routes/client/register');
var productDetail = require('./routes/client/detailProduct');
var accountMember = require('./routes/client/account_member');
var cartRouter = require('./routes/client/cart');
var promotionRouter = require('./routes/client/promotion');
var forgotloginRouterouter = require('./routes/client/forgotpass');
var categoryRouterouter = require('./routes/client/category');
// admin
var usersRouter = require('./routes/admin/users');
var productsRouter_ad = require('./routes/admin/products');
var ordersRouter = require('./routes/admin/orders');
var dashboardRouter = require('./routes/admin/dashboard');
var addProductRouter = require('./routes/admin/add_product');
var updateProductRouter = require('./routes/admin/update_product');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// client
app.use('/', indexRouter);
app.use('/home', homeRouter);
app.use('/product', productsRouter);
app.use('/product_detail', productDetail);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/account_member', accountMember);
app.use('/cart', cartRouter);
app.use('/promotion', promotionRouter);
app.use('/forgot', forgotloginRouterouter);
app.use('/category', categoryRouterouter);

// admin
app.use('/users', usersRouter);
app.use('/product_admin', productsRouter_ad);
app.use('/orders', ordersRouter);
app.use('/dashboard', dashboardRouter);
app.use('/update_product', updateProductRouter);
app.use('/add_product', addProductRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('errorPage.ejs')
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var db=require('./models/database'); 
router.get('/product/category/:id', (req, res) => {
  let sql = "select id_category,name from category";
  db.query(sql, (err,idCategory) => {
    if(err){
      console.log(idCategory);
      throw err;
    } 
      
    else {
      var idCategories = req.params.id;
      let sql2 = `select * from products WHERE id_category = ${idCategories}`;
          db.query(sql2, (err,listProduct) => {
              if (err) throw err;
              else {
                res.json(listProduct);
              }
          })
      }
  })
})


module.exports = app;
