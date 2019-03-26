$(document).ready(function(){
    "use strict";
    const countryApi = 'https://restcountries.eu/rest/v2/all';
     $('#ddlCountry').bind('change',function(){
        
     })
    function fetchCountries(){
        $.ajax({
            url: countryApi,
            type: "GET",
        }).then(result => {
            //console.log(result);
            bindCountries(result);
        }).catch(err => {
            console.log(err);
        });
    }

    function bindCountries(data){
        data.forEach((x,i)=>{
            let option = $('<option/>').val(x.alpha2Code).text(x.name);
            $('#ddlCountry').append(option);
        });
    }
    fetchCountries();
});