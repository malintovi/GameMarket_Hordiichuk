 let itemsDiv = document.getElementById("items");
 let itemArrey = [
    'Венцель',
    'Шатківський',
    'Кучер'

 ];
if(itemsDiv){
    itemArrey.forEach((item,index) =>{
        itemsDiv.innerHTML +=

        <div class = "items">
            <h2>Вчитель № ${index + 1} з ${itemArrey.length}</h2>
        </div>
    })
}