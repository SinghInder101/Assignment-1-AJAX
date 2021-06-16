function abc(e){
    e.preventDefault();
    
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: 'GET',
        success: function(res) {
          res.map((post) => {
              var x = document.createElement("p");
              x.innerHTML = post.body;
              var z = document.getElementsByTagName('div')[0];
              z.appendChild(x);
          })
        }
    });
}
