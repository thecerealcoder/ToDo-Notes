//Check localStorage if there are existing ToDos
if(localStorage.length > 0) {
	$("ul").empty();

for(var i=0, len=localStorage.length; i<len; i++) {
    	var key = localStorage.key(i);
    	$("ul").prepend("<li><span><i class='far fa-trash-alt'></i></span>" + key +"</li>");
	}
}

//Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on trash to delete todos
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
			localStorage.removeItem($(this).text().trim());
			$(this).remove();
		});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + todoText +"</li>");

		//adding todos to localStorage to save them
		localStorage.setItem(todoText, todoText);
	}
});

$(".fa-plus-square").click(function(){
	$("input[type='text']").fadeToggle();
});