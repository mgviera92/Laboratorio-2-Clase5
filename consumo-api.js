(() => {
    const $fetch = document.getElementById("fetchUsuarios");
    $fragmento = document.createDocumentFragment();


fetch("https://jsonplaceholder.typicode.com/users")

    .then((res)=>{
        //console.log(res)
        return res.ok?res.json():Promise.reject(res);

    })

    .then((data)=>{
        data.forEach(element => {
            const $li=document.createElement("li");
            $li.innerHTML= `${element.name}<br>
            • ${element.email}<br>
            • ${element.phone}<br>
            • ${element.website}`
            $fragmento.appendChild($li);
        });
        $fetch.appendChild($fragmento);
    })

    .catch(err=>{
        let mensaje = err.statusText || "Oops";
        $fetch.innerHTML=`ERROR ${err.status}:${mensaje}`;
    })

    .finally(()=>
        console.log("Esta linea se imprime igual")
    )

})();