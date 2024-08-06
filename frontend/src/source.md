date : 19/7/24

   1.create frontend projects...using recte npx command..
   2.run projcet using npm start command.

   3.clear the default react projcet 
        1. go app.js and remove header tag and import logo file .
        2.rename project  title

<!-- note:- you create any components file that file name  first later also capital please ... -->

   4.create folders within src like ,components, assets , navbar and pages it is use to create multiple page
        within navbar folder create navbar.jsx and css file 

   5.modify app.js file

   6 start build the navbar components..in navbar.jsx file
   
            1 dawnload all the img and json file ..in assets folder

            
            2 write html code and set logo img .. <!-- in navbar.jsx file -->

            3 apply css ......  <!-- in navbar.css file -->

            <!-- use for li tag | -->
            please write same value Ex:- shop and Shop must be same not diifrent

            <!-- use for red line in menu items -->
  * set status for active page : use java script and onclick function 
  in list <li> tag within java script use ternary operater..

 *  nav-cart-count hover and links hover effect css is self try

  #. now i am create loginsignup ,shop, ShopCatygory,product,cart page's  in within  pages folder
     total 5 page create ..
     1. go app.js and import all the page ..

     <!-- note:- routes topic use for display the page name in left right corner in our browser screen like ex: loclhost:3000/shop loclhost:3000/Men etc...-->

     2. set or write Routes topic code .in app.js file
     3. implement routes topic code in menu items .. in navbar.jsx file
     
     <!-- Link tag use for routes topic -->   ..pending learning 
     <!-- now i am stop in 33:10 in video -->

   * date 22-7-2024
  * Hero Section create new arrivals like slider
   ->create hero folder in component folder .
   ->In hero folder create one file Hero.jsx
   ->another file is hero.css for css style
   <!-- add component to shop.jsx file <Hero> -->
   add html to hero.jsx
   after apply css for hero.jsx


   * Item section
   create Item folder in component folder.
   ->in Item folder create one Item.jsx file
   ->and also create Item.css file
   ->Add html to item.jsx
      -> in this file i am use props(something like function that was provide by user or admin panel just call and provide information ) concept .
      ->in this props data will be come to admin panel.
   ->add css to item.css

*Popular section
create Popular folder in component folder.
->In popular folder create tow file Popular.jsx and popular.css 
->Add html and css into this file
* in this file popular.jsx will use data.js file 
<!-- import data_product from '../Assets/data.js' -->
in the popular div use javascript map function (it is same the call json) .



   *offers section
   create offers folder in component folder.
   ->in  offers folder create two file Offers.jsx and Offers.css
   ->add HTML and css into this file

<!-- now i am stop in 1.00.55 in video -->


* Date:-23-07-2024
all css change for 100 zoom for browser.


*New Collections
for this create one Folder NewCollections in component
->In this folder create two file NewCollections.jsx and NewCollections.css
in NewCollections.jsx use  newcollection.js data for map 
Item file also use for this it is same like popular section

*News Letter

for this create one Folder NewsLetter in component
->In this folder create two file NewsLetter.jsx and NewsLetter.css

* footer section
or this create one Folder footer in component
->In this folder create two file Footer.jsx and Footer.css
* footer section complete than 
you can add component to app.js file beacuse all page containe footer


<!-- stop in 1:39:11 -->

date :26/7/24
create signup using jsx and css form
 and modify footer 

<!-- start it 1.40.00 -->

date 28/7/24

* create product page ..

  1. write code product.jsx file
  2.then create breadcums folder and 
  3.create bredcum jsx and css file
  4.import css file in breadcum.jsx
  5. write code breadcum.jsx and import arrow icon 
  6.add bredcums tag in product.jsx file with props
  7.link img with the product..so go to item.jsx and first img tag wrap in Link tag 
  8.display product deatil in scrren 
  
  * create productdisplay page

  1 craete new folder productdisplay in commponetns folder
  2.productdisplay jsx and css file create within productdisplay folder
  3. write code in productdisplay.jsx
  4.import icon 
  5.import productdisplay.jsx file in product.jsx page
  6 write jsx code in productdisplay.jsx file and css code in css file

  <!-- stop  2:10:37--> product description box :--
  
* description box for product page:--...

create new descriptionbox folder in commponents folder
create new descrition.jsx file within description folder
create new descriptionbox css file within descrition folder
import css file in descriptionbox.jsx file

descriptionbox.jsx file tag write in product.jsx file

*create realted product commponets fro product page...

  create RelatedProducts folder in commponetns folder
  create RelatedProducts.jsx file within folder
  create css file and import within relatedproducts.jsx file

relatedproducts.jsx file tag write in product.jsx file..

*page scroll function 
  go item.jsx and write onclick function within img tag...

  <!-- i am create today descrition box and realted products.. part.. -->
  <!-- stop 2:23:19 -->
  
  Date :31-07-2024
  add to cart button logic

  in shopcontext .jsx:first create cart context function getDefaultcart 
  create useState for cart and pass the getDefaultcart as argument
   create add to cart function
   create remove to cart function and pass the itemid

productDisplay:call the addtocart function using useContext and addto cart create onclick function


after create one folder cartItems
after create cartitems.jsx and cartitems.css
after create html structure
 i am create cart total value and price promocode 

  <!-- stop in 2:51:23 -->
  <!-- stop in 2:58:33 -->




