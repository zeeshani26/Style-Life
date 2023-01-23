
# Style life

# Description

Style life helps you to live your life joyfully. You can eat in the best restaurants according to your location. You can relax yourself by going to a spa or a massage center. It helps you to stay healthy as you can book an appointment to any listed doctor. Use Stlye life and make your lifestyle stylish and Awesome!

## Documentation

### Backend

For Backend we use Nodejs, MongoDb, Mongoose and Express js. With the help of jsonwebtoken and bcrypt we enhance the security of the application.

### Frontend

For Creating the Ui we use Reactjs, Chakra, Redux, Css and uiverse also.

# Hi, I'm Krishan! 👋

## Krishan Kumar - Team Lead

- Krishan managed all the backend
- the Admin section.

## Dipratna Sakhare

Dipratna is responsible for 
- Login and Signup
- Payment Page.

## Omesh Dubey

Omesh is responsible for 
- whole landing page (Footer and Navbar)
- some pages which not includes all products data

## Zeeshan Ilahi

Zeeshan is responsible for creating
- All products section
- single page section
- add to cart functionality;


#Frontend

## Landing page

![Screenshot (255)](https://user-images.githubusercontent.com/107391017/213987948-993489bb-d89b-4024-9ff8-d9656819849a.png)
### This is the landing page of our website

## Sign up Page
![Screenshot (257)](https://user-images.githubusercontent.com/107391017/213988312-7bf93224-72a6-400b-8aca-1bbab1992261.png)

### user can signup with unique email that means if a user already exits it throws an error. And Email should be proper (XXXX@gmail.com)


## Log In Page

![Screenshot (258)](https://user-images.githubusercontent.com/107391017/213988318-15f7962d-2c43-4dd0-9376-af239760fc4c.png)
### user can login with their email id and password. It automatically detects who is user and who is admin so dont worry about that.


## Products Page with carausels and deals (some of them are static :) )

![Screenshot (265)](https://user-images.githubusercontent.com/107391017/213988541-50ea1f5f-7921-45ee-9eaf-b64e3bf06691.png)


### Footer

![image](https://user-images.githubusercontent.com/107391017/213993246-6c87c283-7892-46ba-a221-a197833d3eb6.png)

### User can see the deals related to restaurants, spa, heatlh and many more.


## All Products Section 

![Screenshot (256)](https://user-images.githubusercontent.com/107391017/213988133-4bfc7a20-e254-4734-880f-c6dd6046ae4c.png)

### Here user can see all the restaurants, spa or health whichever category he/she clicked on. He can do filtering according to their location. Sorting according to the popularity of the shop (based on rating actaully ) and according to name sorting is also available.


## Add to cart or Single page

![Screenshot (260)](https://user-images.githubusercontent.com/107391017/213988334-7d596830-8bfc-4d84-9250-0a828fb2f258.png)

### On this page user can see all the deals of that particular restaurant and add the item to his/her cart (one item at a time all data is coming from the backend but cart items will be stored in localstorage. We can use backend here but localstorage practice is necessary :) ).


## Payment Page

![Screenshot (261)](https://user-images.githubusercontent.com/107391017/213988341-81378df8-b514-4184-ac87-46c6c8cc83c5.png)

### After adding items to the cart you can pay for your order. Decide from which platform you would like to pay. After payment an iterface shows like this.

![Screenshot (262)](https://user-images.githubusercontent.com/107391017/213994783-230bfed5-6ab5-4564-8fd5-4d6580a7ac41.png)


## Admin Dashboard

### Here all the shops(restaurants/ spa or message center and health) will be visible here. Admin can add new shop, update any shop or delete any shop. He/She has the authority my friend. ;)


![Screenshot (264)](https://user-images.githubusercontent.com/107391017/213988202-3171f435-ebb5-445a-8e6f-4b7e638f266c.png)

### Admin also can change any user type to admin means transfer of power is going on here. :>)


## Error Page (404 not Found)

![Screenshot (266)](https://user-images.githubusercontent.com/107391017/213991283-e2d7a1db-f6d6-47fe-aaa7-9c13400a6f1b.png)

### On visited invalid routes of the application you will see this. Pretty cool right :)

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

### pagination

 by default you will get 10 result per pages but if you want to increase limit pass limit as query and your desired counts for example if i want 20 result per page i have to pass limit=20 in query.
 you can go to different pages by passing them in query like if i want to get 2nd page data i will pass page=2 in query.

# Note - For filtering and sorting routes add /filter then your rest of the queries like if you want to search based on the cities just do /filter?city=<city_name>
### popular

just add /?popular=true in query for sorting the list according to rating.

### sort

sorting will apply basis on name (asc or desc) just pass sort=asc for ascending order and sort=desc for descending in query.

# Note only a registered user can use add to cart functionality

## Admin Api

### For Getting all data

- admin/restro
- admin/spa
- admin/health
- admin/user

### Adding any restaurants/spa/health

- admin/restro/add
- admin/spa/add
- admin/health/add

### Updation

- admin/restro/update/:id
- admin/spa/update/:id
- admin/health/update/:id

### Deletion

- admin/restro/delete/:id
- admin/spa/delete/:id
- admin/health/delete/:id

### Changing User to Admin

admin/user/type/:id


# Thank you if you read full documentation. You are awesome as we are. We will meet at the next project. Bye :) gulabi dil.



















