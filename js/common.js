function fill_table(data,tablename){
        var result_array = new Array()

        var num = 1
        for(var pd in data){
            var trdata = data[pd]
            var per_data_array = new Array()
            per_data_array.push(num)
            per_data_array.push("<a class=\"text-primary\" target=\"_blank\" href=\"" + trdata.url + "\">" + trdata.name + "</a>")
            //per_data_array.push(trdata.name)
            per_data_array.push(trdata.score)
            per_data_array.push(trdata.rank)
            per_data_array.push("<a class=\"text-primary\" target=\"_blank\" href=\"" + trdata.serverRankHref + "\">" +  trdata.serverRank.toString() + "（" + trdata.serverRankDps.toString() + ")</a>")
            //per_data_array.push(trdata.url)
            //per_data_array.push("<a class=\"text-primary\" href=\"" + trdata.url + "\">查看</a>")
            result_array.push(per_data_array)
            num = num + 1
        }

//        console.log(result_array)
        mytable = $(tablename).DataTable( {
            data:result_array,
            drawCallback: function(){
                $('.paginate_button', this.api().table().container())
                    .on('click', table_change());
            }
        } );

}