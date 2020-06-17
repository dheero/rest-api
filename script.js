

$.getJSON(" http://node.uttarakhandtraveller.com/places/1",function(data){
    console.log(data);

    var icon = data.place.image;
    var title = data.place.name ;
    var imgdetails = data.place.detail ;
    var place_url = data.place.place_url;
    var location = data.place.location;
    
    $(".icon").attr("style", 'background-image: url(' + icon + ')');
    $(".titles").append(title);
    $(".imgdetails").append(imgdetails);
    $(".page_url").attr("href", place_url);
    $(".location").append(location);

});