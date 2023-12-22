// alert("Hey Number 1")
let baseURL = `http://localhost:8000/todos`;
let rKey = 'reloadMsg';
function loadTable(){
    let url = baseURL;
    fetch( url )
        .then( resp => {
            if ( !resp.ok){
                throw new Error("HTTP ERROR Status" + resp.status);
            }
            return resp.json();
        }).then( jObj  => {
        // console.log("Made it->");
        // console.log( jObj );
        addToTable( jObj );
    }).catch( error => {
        let msg = `Error1:${error.message}`
        console.log("Oh oh error error->");
        console.log( error );
        showMsg( "error", msg );
    })
    let reloadMsg = localStorage.getItem( rKey );
    if ( reloadMsg ){
        showMsg( 'success', reloadMsg);
        localStorage.removeItem( rKey);
    }
    // document.getElementById("result").innerHTML = "Did it work";
    attachEventListener();
}
function showMsg( id, msg ){
    msg = `<span id='${id}'> ${msg} </span>`;
    document.getElementById('result').innerHTML = msg;
}
function attachEventListener() {
    let theForm = document.getElementById("theForm");
    theForm.addEventListener( 'submit', function( e ){
        // run this code on the submit
        e.preventDefault();
        let url = baseURL;
        const t = document.getElementById('title').value;
        const c = document.getElementById('Completed').value;
        const item = { title : t, completed : c};
        fetch ( url, {
            method: 'POST',
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify( item )
        }).then(( resp ) => resp.json())
            .then( data => {
                console.log( "Added New Item Data="); console.log( data );
                // alert( " Success");
                localStorage.setItem( rKey, "Item Added Successfully" )
                location.reload();
            }).catch( error => {
                console.log( "Error 1:"); console.log( error );
                // alert( "Failure");
        })
    })
}
function addToTable( data ){
    const tBody = document.getElementById("theBody");
    for (let i = 0; i < data.length; i++) {
        let row = data[i];
        const newTR = document.createElement("tr");
        newTR.innerHTML = `
        <td> ${row.id} </td>
        <td> ${row.title} </td>
        <td> ${row.completed} </td>
        <td> 
           <button type="button" onClick='handleUpdate("${row.id}", "${row.title}" ) '>
                                    Mark Done ${row.id} 
                                  </button>
         </td>
        <td> 
           <button type="button" onClick="handleDelete(${row.id} ) ">
                                     Delete ${row.id} 
                                  </button>
         </td>
    `;
        tBody.appendChild(newTR);
    }
}
function handleDelete( id ) {
    let url = `${baseURL}/${id}`;
    fetch ( url, {
        method: 'DELETE',
    })
        .then( () => {
            // alert( " Delete Success");
            localStorage.setItem( rKey, `Delete if id:${id} Complete`)
            location.reload();
        }).catch( error => {
        console.log( "Error 2:"); console.log( error );
        // alert( "Failure");
    })

}
function handleUpdate( id, title ) {
    let url = `${baseURL}/${id}`;
    let r = {};
    r.id = id;
    r.title = title;
    r.completed = 'true'

    fetch ( url, {
        method: 'PUT',
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify( r )
    })
        .then( () => {
            // alert( " Delete Success");
            localStorage.setItem( rKey, `Marked id:${id} Complete true`)
            location.reload();
        }).catch( error => {
        console.log( "Error 3:"); console.log( error );
    })

}