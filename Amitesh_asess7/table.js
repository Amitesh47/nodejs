(function(){

    "use strict"
    
    var person = [{
        imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        Name: "CHECK PRINT SHIRT",
        Company:"Sapient",
        Price: 110
    },
    {
        imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        Name: "GLORIA HIGH LOGO SNEAKER",
        Company:"Sapient",
        Price: 91
    },
    {
       imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        Name: "CATE RIGID BAG",
        Company:"Sapient",
        Price: 94.5
    },
    {
        imgUrl: "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        Name: "GUESS CONNECT WATCH",
        Company:"Sapient",
        Price: 438.9
    },
    {
       imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        Name: "'70s RETRO GLAM KEFIAH",
        Company:"Sapient",
        Price: 20
    }]; 

    var table = document.getElementById("tblPerson"); 
    var cols = [];
    for(var i in person[0]){
        cols.push(i);
    }
    function createHeaderRow(){
        var headerRow = document.createElement('tr');
        for(var i of cols){
            var col = document.createElement('th');
            col.innerHTML = i;
            headerRow.appendChild(col);
        }
        return headerRow;
    }
    function createbutton(iconName,btnClass){
        var button = document.createElement('button');
        var icon = document.createElement('i');
        icon.className = iconName;
        button.className = btnClass;
        button.appendChild(icon);
        return button;
    }
    function createdelbtncol(dataRow){
        var col = document.createElement('td');        
        var del = createbutton("fa fa-info-circle","btn btn-danger");
        del.addEventListener('click',function(e){
            //dataRow.remove();

            e.stopPropagation();
        });    
        col.append(del);
        return col;
    }
    function createDataRow(p){
           // console.log(p);
            var dataRow = document.createElement('tr');
            for(var i of cols){
                var col = document.createElement('td');
                col.innerHTML = p[i];
                col.contentEditable = "true";
                dataRow.appendChild(col);
            }
            dataRow.addEventListener('click',function(){
                console.log("Hello bro");
            });
            var delcol = createdelbtncol(dataRow);
            dataRow.appendChild(delcol);
            return dataRow;
    }
    function createTable(){
        table.appendChild(createHeaderRow());
        for(var p of person){
            table.appendChild(createDataRow(p));
        }
    }    
    createTable();

    let add = document.getElementById('add');
    add.addEventListener('click',function(){
        let author = document.getElementById('author')
        let book = document.getElementById('book')
        let date = document.getElementById('date')
        var Book = {Author:author.value, BookName: book.value, Date: date.value};
        person.push(Book);
        var dataRow = createDataRow(Book);
        table.appendChild(dataRow);
 
    })

})();