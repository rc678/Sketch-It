/*Javascript file used for Etch-a-Sketch*/
var rows = 20;
var cols = 20;
var col = 'black';
/* calls function when html is finished downloading*/
$(document).ready(function()
{
    createGrid();
    clear();
    resize();
    movement(col);
    random();
});

/*Picks a random color to when hovering over the box */
function random() {
    $('#random').click(function(){
        var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black"];
        var ranNum = Math.floor((Math.random() * 8) + 1);
        var color = colors[ranNum];
        console.log(color);
        movement(color);
    });
}
/*clears the markings on the grid and keeps the grid at the same size*/
function clear()
{
      $('#clear').click(function(){
            $('.box').remove();
            $('tr').remove();
            createGrid();
            movement(col);
    });
}

/*asks you dimensions to resize the grid*/
function resize()
{
    $('#size').click(function(){
        rows = prompt("Enter number of rows", 20);
        cols = prompt("Enter number of columns", 20);
        $('.box').remove();
        $('tr').remove();
           /*creates rows*/
        for(var i=0; i<rows; i++)
        {
            $('tbody').append('<tr></tr>');
        }
        /*adds correct number or elements to each row*/
        for(i=0; i<cols; i++)
        {
            $('tr').append('<td class="box"></td>');
        }
        movement(col);
    });
}
/*allows you to move along grid to draw images*/
function movement(col)
{
    $(".box").hover(
    function() {
        $(this).css('background-color', col);
    });
}
/*creates the default grid based on the rows and columns*/
function createGrid()
{
    /*gives default value if user does not enter anything*/
    if (rows === null) {
        rows = 10;
    }
    if (cols === null) {
        cols = 10; 
    }

   /*creates rows*/
   for(var i=0; i<rows; i++)
    {
        $('tbody').append('<tr></tr>');
    }
    /*adds correct number or elements to each row*/
    for(i=0; i<cols; i++)
    {
        $('tr').append('<td class="box"></td>');
    }
};
