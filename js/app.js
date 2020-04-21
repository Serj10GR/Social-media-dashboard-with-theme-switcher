const checkbox = document.querySelector("input[name=checkbox]");


checkbox.addEventListener( 'change', function() {
    const socilalFollowersnum = document.querySelectorAll('.social_followers_num');
    const socialContainer = document.querySelectorAll('.social-container');
    const overviewWrapper = document.querySelectorAll('.overview-wrapper');
    const overviewNum = document.querySelectorAll('.overview_num');

    const allArr = [socilalFollowersnum, socialContainer, overviewWrapper, overviewNum];
   
    function addToggleClass(arr) {
        arr.forEach(el => el.forEach(el =>el.classList.add('toggle-white') ));    
    }

    function removeToggleClass(arr) {
        arr.forEach(el => el.forEach(el =>el.classList.remove('toggle-white') ));    
    }


    if(this.checked) {
        document.body.classList.add('toggle-white-body');
        addToggleClass(allArr);

    } else {
        document.body.classList.remove('toggle-white-body');
     removeToggleClass(allArr);
    }
});