

var btnRefresh = document.getElementById('refresh');
btnRefresh.onclick = function () {

    var monsterCheckElement = document.querySelectorAll('tbody')
    
    
        //check if there is an earlier search an removes it
    
        for (var i = 0; i < monsterCheckElement.length; i++) {
            var elem = monsterCheckElement[i]
            elem.remove();
        }
    console.log("color1")
    
    
    for(var rowCount = 1; rowCount <= 8; rowCount++) {
        //rij opbouwen
        for (var colCount = 1; colCount <= 1; colCount++) {
            var tempStr = '';
            var tableElement = document.querySelector('.arcade_table')
            var color1 = Math.round(Math.random())
            var color2 = Math.round(Math.random())
            var color3 = Math.round(Math.random())
            var color4 = Math.round(Math.random())
            tempStr += 
            ` 
            <td class="color${color1}"> </td>
            <td class="color${color2}"> </td>
            <td class="color${color3}"> </td>
            <td class="color${color4}"> </td>
            <td class="color${color4}"> </td>
            <td class="color${color3}"> </td>
            <td class="color${color2}"> </td>
            <td class="color${color1}"> </td>
            ` 
            tableElement.innerHTML += tempStr;
        };
        
    };
    /*
    //with colors
    for(var rowCount = 1; rowCount <= 8; rowCount++) {
        //rij opbouwen
        for (var colCount = 1; colCount <= 1; colCount++) {
            var tempStr = '';
            var tableElement = document.querySelector('.arcade_table_color')
            var arr = []
            function colorSearch(){
                for(var i = 0; i<12; i++){
                    colorValue = Math.floor(Math.random() * 255);
                    arr.push(colorValue);
                }

            };
            colorSearch();


            tempStr += 
            ` 
            <td style="background-color:rgb(${arr[0]}, ${arr[1]}, ${arr[2]});"> </td>
            <td style="background-color:rgb(${arr[3]}, ${arr[4]}, ${arr[5]});"> </td>
            <td style="background-color:rgb(${arr[6]}, ${arr[7]}, ${arr[8]});"> </td>
            <td style="background-color:rgb(${arr[9]}, ${arr[10]}, ${arr[11]});"> </td>
            <td style="background-color:rgb(${arr[9]}, ${arr[10]}, ${arr[11]});"> </td>
            <td style="background-color:rgb(${arr[6]}, ${arr[7]}, ${arr[8]});"> </td>
            <td style="background-color:rgb(${arr[3]}, ${arr[4]}, ${arr[5]});"> </td>
            <td style="background-color:rgb(${arr[0]}, ${arr[1]}, ${arr[2]});"> </td>
          
            ` 
            tableElement.innerHTML += tempStr;
        };
        
    };

    */

};