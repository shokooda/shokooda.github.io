//JQUERY SHOW/HIDE ABOUT

    $(document).ready(function() {
        $('#about-btn').click(function() {
                $('#about').fadeIn("fast");
            $('#writing').hide();
        
        });
    });
    
//JQUERY SHOW/HIDE WRITING

    $(document).ready(function() {
        $('#writing-btn').click(function() {
                $('#writing').fadeIn("fast");
            $('#about').hide();
        
        });
    });