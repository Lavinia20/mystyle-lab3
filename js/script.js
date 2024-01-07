    $(document).ready(function(){
        const urlParams = new URLSearchParams(window.location.search);
        const blockToShow = urlParams.get('block');
        if (blockToShow === 'bog') {
            $('#bog').css('display', 'block');
        }
        if (blockToShow === 'neozur') {
            $('#neozur').css('display', 'block');
        }
        if (blockToShow === 'colon') {
            $('#colon').css('display', 'block');
        }

        if (blockToShow === 'heart') {
            $('#heart').css('display', 'block');
        }
        if (blockToShow === 'varta') {
            $('#varta').css('display', 'block');
        }
        if (blockToShow === 'gaia') {
            $('#gaia').css('display', 'block');
        }
        
        if (blockToShow === 'inter') {
            $('#inter').css('display', 'block');
        }
        if (blockToShow === 'maria') {
            $('#maria').css('display', 'block');
        }
       
    });
    