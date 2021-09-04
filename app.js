$.ajax({
    url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "YOURAPPTOKENHERE"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});


$('form').on('submit', (event)=>{

    event.preventDefault();
    
    const userInput = $('input[type="text"]').val()
    
    
    const promise = $.ajax({
        url:'https://data.cityofnewyork.us/resource/erm2-nwe9.json'+ userInput
    })
    
    promise.then(
        (data)=>{
            $('#borough').html(data.Borough)
            $('#descriptor').html(data.Descriptor)
            $('#agency').html(data.Agency)
            $('#resolution').html(data.Resolution)
    
    
        }
    )
    
    })
    //I have not gotten this to work yet