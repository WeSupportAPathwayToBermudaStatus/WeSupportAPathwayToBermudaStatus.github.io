//Made by Justin Aguilar
//www.justinaguilar.com/animations/

<script>
	$(window).scroll(function() {
		$('#tag-cloud').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideUp");
			}
		});
	});
</script>