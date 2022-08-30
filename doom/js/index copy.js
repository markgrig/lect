const navigation = document.querySelectorAll('.navigator a')

navigation.forEach( anchor => {
        anchor.addEventListener(  'click' , ( event ) => {
            navigation.forEach( element => {
                element .style.color = 'white'
            })
            const { target } = event
            target.style.color = 'rgb(1000, 500, 0)'
        }  
    ) 
});





    