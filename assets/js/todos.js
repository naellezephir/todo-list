//check off todos when checkbox is clicked
$('ul').on("change", 'input[type="checkbox"]', function(){
	if (this.checked){
		$(this).parent().addClass("strike");
	}
	else{
		$(this).parent().removeClass("strike");
	}
});

//click on x to delete todo
$('ul').on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//double click to edit todo
$('ul').on("dblclick", "li", function(event){
	var originalContent = $(this).text();
	$(this).addClass("edit");
       $(this).html("<input type='text' value=' " + originalContent + "' />");
       $(this).children().first().focus();
 
       $(this).children().first().keypress(function (e) {
            if (e.which == 13) {
               var newContent = $(this).val();
               newContent = '<input type="checkbox"> ' + newContent + ' <span><i class="fas fa-trash"></i></span>';
               $(this).parent().html(newContent);
               $(this).parent().removeClass("edit");
               $(this).parent().removeClass("strike");
           }
       });

         
    	$(this).children().first().blur(function(){
    		originalContent = '<input type="checkbox"> ' + originalContent + ' <span><i class="fas fa-trash"></i></span>';
    		$(this).parent().html(originalContent);
    		$(this).parent().removeClass("edit");
    		$(this).parent().removeClass("strike");
   		});
});


//add to do
$('input[type="text"]').on("keypress", function(event){
	if(event.which === 13){
		//get new todo from input
		var todoText = $(this).val();
		$(this).val("");
		var html = '<li><input type="checkbox"> ' + todoText + ' <span><i class="fas fa-trash"></i></span>' +'</li>';
		//make new li to add to the ul
		$('ul').append(html);
	}
})

//toggle down icon
$(".fa-plus-square").click(function(){
	$('input[type="text"]').fadeToggle();
});