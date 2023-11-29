function doPromise(){
    let numb = document.getElementById("myNumber").value;
    numb = parseInt(numb);
    let p = new Promise( ( resolve, reject) => {
       numb += 1;
       if ( numb === 2 ){
           resolve("Success");
       } else {
           reject("Fail");
       }
    }).then(( message ) => {
        let resMsg = `FL1: Message:${message}`;
        document.getElementById('results').innerHTML = resMsg;
    }).catch( ( message ) => {
        let resMsg = `FL2: Error Message:${message}`;
        document.getElementById('results').innerHTML = resMsg;
    });
}