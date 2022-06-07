$(function () {

    const url = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces"

    $("#spinner").show()

    $.get(url, function (data, status) {
        console.log(status);
        console.log(data);

        // Build UI
        for (let index = 0; index < data.length; index++) {
            const element = data[index];

            const row =
                `<tr>
                <th scope="row">${index+1}</th>
                <td>${element.province}</td>
                <td>${element.new_case}</td>
                <td>${element.total_case}</td>
                </tr>`
            
            $("#list").append(row)

        }

        $("#spinner").hide()
    });


    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function byAjKorn(){

    }

    function byAjKorn2nd(){
        
    }

    function Khemthit() {
        console.log("Hello world");
        
    }

    function Non(){
        
    }
    function Koreei(){
        
    }

    function bySribilone(){

    }

})
