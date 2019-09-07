_unneeded_js_code.js

from slides


<!--<script type="text/javascript">
        $(document).ready(function(){
            $('#{{forloop.index}}{{item.link}}').click(function() {
                $('#{{item.link}}').modal({
                    backdrop: 'true',
                    keyboard: true
                });
                $('html, body').animate({
                    scrollTop: $("#{{item.id}}").offset().top
                }, 1000);
            }); 
        });
        </script>
    <script type="text/javascript">
    $(document).ready(function() {
        var url = window.location.href;
        if (url.indexOf('#{{item.link}}') != -1) {
            $('#{{item.link}}{{forloop.index}}').modal({
                backdrop: 'true',
                keyboard: true
            });
        }
    });-->