export default   {
    val: 0,
    get: function (url) {
        (async () => {
            let response = await fetch(url,{headers:{'Authorization-Token':localStorage.getItem('token')}});
            let data = await response.json();            
        })();
    }
}