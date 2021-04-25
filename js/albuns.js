fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then((json) => json.forEach(tableElements)
            )

        function tableElements(element, index, arr) {
            arr[index] = document.querySelector('#posts-table tbody').innerHTML +=
                `<tr>
        <td>${element.userId}</td>
        <td>${element.id}</td>
        <td>${element.title}</td>
    </tr>`
 }