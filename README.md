
# Style life

# Description

Style life helps you to live your life joyfully. You can eat in the best restaurants according to your location. You can relax yourself by going to a spa or a massage center. It helps you to stay healthy as you can book an appointment to any listed doctor. Use Stlye life and make your lifestyle stylish and Awesome!

## Documentation

### Backend

For Backend we use Nodejs, MongoDb, Mongoose and Express js. With the help of jsonwebtoken and bcrypt we enhance the security of the application.


### Frontend

For Creating the Ui we use Reactjs, Chakra, Redux, Css.

# Hi, I'm Krishan! 👋

## Krishan Kumar - Team Lead

Krishan managed all the backend and the Admin section.

## Dipratna Sakhare

Dipratna is responsible for Login and Signup

## Omesh Dubey

Omesh is responsible for whole landing page

## Zeeshan Ilahi

Zeeshan is responsible for creating All products section and single page section.

## Meharwan Rathore

Meharwan is responsible for Add to cart functionality and payment page.


# Backend Api End points

### For Creating any user

/user/register

### For Login 

/user/Login

### For Getting all the Restaurants

/restro/

### For Getting Single Restaurant

/restro/:id

### For Filtering the Data according to location

/restro/filter/ (and pass the city as a query under the city key name)

### For Getting all the Spas

/spa/

### For Getting Single Spa

/spa/:id

### For Filtering the Data according to location

/spa/filter/ (and pass the city as a query under the city key name)

### For Getting all the health section

/health/

### For Getting Single Restaurants

/health/:id

### For Filtering the Data according to location

/health/filter/ (and pass the city as a query under the city key name)

### For Adding items to cart

/cart/add (pass userId,restroId and deals id in body)

### For Removing or decreasing the count

/cart/dec (pass userId,restroId and deals id in body)

### popular

just add popular=true in query for sorting the list according to rating.

 ### pagination

 by default you will get 10 result per pages but if you want to increase limit pass limit as query and your desired counts for example if i want 20 result per page i have to pass limit=20 in query.
 you can go to different pages by passing them in query like if i want to get 2nd page data i will pass page=2 in query.

### sort

sorting will apply basis on name (asc or desc) just pass sort=asc for ascending order and sort=desc for descending in query.

#Note only a registered user can use add to cart functionality
