export default function BookList() {
   let pageTitle = "List of Books";
   let book1 = "https://images-na.ssl-images-amazon.com/images/I/91B4flQOokL._AC_UL127_SR127,127_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/41X4hy3uvGL.jpg";
   let book3 = "https://m.media-amazon.com/images/I/71La0tuzl8L.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Well-Tended Perennial Garden: The Essential Guide to Planting and Pruning Techniques, Third Edition" />
         <img src={book2} alt="More Than Cake: 100 Baking Recipes Built for Pleasure and Community" />
         <img src={book3} alt="Getaway: Food & Drink to Transport You" />
      </div>      
   );
}