$(function(){

    const url = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all"

    $.get(url, function(data, status){
        console.log(status);
        console.log(data);
        console.log(data[0].total_case);

        // Build UI
        $("#total_case").html(numberWithCommas(data[0].total_case))
        $("#new_case").html(numberWithCommas(data[0].new_case))
    });


    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }




})