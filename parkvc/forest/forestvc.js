$.getJSON("https://developer.nps.gov/api/v1/visitorcenters?parkCode=pefo&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
    function(info) {
     console.log(info);

     var vcname= info.data[0].name
     var vcdescription= info.data[0].description
     var vcurl= info.data[0].url

     var vcname2= info.data[1].name
     var vcdescription2= info.data[1].description
     var vcurl2= info.data[1].url

     var vcname3= info.data[2].name
     var vcdescription3= info.data[2].description
     var vcurl3= info.data[2].url

     $('.vcname').append(vcname);
     $('.vcdescription').append(vcdescription);
     $('.vcurl').append(vcurl);

     $('.vcname2').append(vcname2);
     $('.vcdescription2').append(vcdescription2);
     $('.vcurl2').append(vcurl2);

     $('.vcname3').append(vcname3);
     $('.vcdescription3').append(vcdescription3);
     $('.vcurl3').append(vcurl3);
     

    }

);