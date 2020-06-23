
function send_request(url,type,data,success_call_back,error_call_back) {
    $.ajax({
        //url: 'http://192.168.184.128:8080/port_mapper',
        url: url,
        type: type, /* or type:"GET" or type:"PUT" */
        data:data,
        success: function (data, textStatus, response) {
            //console.log(data)
            success_call_back(data,textStatus, response)

        },
        error: function (result) {
            console.log(result);
        }
    });
}

/* 初始化client列表

------------*/


function table_change() {
    //alert('next');
    var $tt = $('#checkAll')
    $tt.prop('checked',false)


    var $tbr = $('table tbody tr');
    $tbr.find('input').prop('checked',false)

}


$(document).ready(function() {

    function handle_response_data(data) {
        //console.log(data["Mage"]["MoltenCore"])

        $("#UpdateTimeDiv").text("更新时间: " + data["UpdateTime"])

        var class_id = $("#ClassID").text()

        fill_table(data[class_id]["MoltenCore"],'#myTable')

        fill_table(data[class_id]["BlackwingLair"],'#myTable2')

    }

    function refresh_data() {
        //send_request('/RankParserWeb/WOWRankParser/rank_data',"GET",null,handle_response_data)
        send_request('http://aliyun:801/RankParserWeb/WOWRankParser/rank_data',"GET",null,handle_response_data)
    }

    function refresh_table() {

        mytable.clear()
        mytable.destroy()
        refresh_data()
    }

    $(function () {

        refresh_data()

    });


});

$(function () {
    function initTableCheckbox(){
        var $thr = $('table thead tr')

        var $checkAll = $thr.find('input');
        $checkAll.click(function(event){
            var $tbr = $('table tbody tr');
            $tbr.find('input').prop('checked',$(this).prop('checked'));
            event.stopPropagation();

        });


    }

    initTableCheckbox()
});


