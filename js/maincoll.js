
    fetch('./maincol/main.json')
    .then(response => response.json())
    .then(data => {
        // Получаем контейнер, в котором будут отображаться картинки
        const container = document.getElementById('discover-items');

        // Проходимся по каждой картинке и создаем элементы для их отображения
        data.images.forEach(image => {
            const item = document.createElement('div');
            item.className = "item";


            const img = document.createElement('img');
            img.src = image.url;
            img.className = "item-img";

            const itemt = document.createElement('div');
            itemt.className = "item-title";

            const caption = document.createElement('p');
            caption.textContent = image.caption;

            const price = document.createElement('p');
            price.textContent = image.price;


            itemt.appendChild(caption)
            itemt.appendChild(price)

            item.appendChild(img)
            item.appendChild(itemt)

            container.appendChild(item);
        });
    });
