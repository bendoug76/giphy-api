    $("button").on("click", function() {

    var metal = $(this).attr("data-metal");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    metal + "&api_key=NXaig3bPG8zsu6LpuYLa72zTaTx9gKvf&limit=10";    
    

    var topics = ["dethklok", "metalocalypse", "nathan explosion", "skwisgaar skwigelf", "pickles", "william murderface", 
              "toki wartooth", "the dethalbum", "murmaider", "duncan hills coffee jingle",];

    $.ajax({
        url: queryURL,
        method: "GET"
    }) 
    
    .then(function(response){
        console.log(queryURL);
        console.log(response);
        var results = response.data;

        for (let i = 0; i < results.length; i++) {

           var metalDiv = $("<div>");
           var rating = results[i].rating;
           var p = $("<p>").text("Rating: " + results[i].rating);
           var dethklokImage = $("<img>");
           dethklokImage.attr("src", results[i].images.fixed_height.url);
           metalDiv.append(p);
           metalDiv.append(dethklokImage);
           $("#gifs-appear-here").prepend(metalDiv); 
            
        }
    });

    $(".gif").on("click", function() {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });
    
    


    
    });
