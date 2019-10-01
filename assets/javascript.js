    $("button").on("click", function() {

    var queryURL = "https://api.giphy.com/v1/gifs/search?=" +
    topics + "&api_key=NXaig3bPG8zsu6LpuYLa72zTaTx9gKvf&limit=10";    
    

    var topics = ["dethklok", "metalocalypse","nathan explosion", "skwisgaar skwigelf", "pickles", "william murderface", 
              "toki wartooth", "the dethalbum", "murmaider", "duncan hills coffee jingle",];

    $.ajax({
        url: queryURL,
        method: "GET"
    }) 
    
    .then(function(response){
        console.log(queryURL);
        console.log(response);
        var results = response.data;

        for (let i = 0; i < topics.length; i++) {
            
            
        }
    })
    
    


    
    });
