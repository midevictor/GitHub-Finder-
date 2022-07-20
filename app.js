///Created an instance for  github JS class
const github = new Github;
//Created an instance for UI class
const ui = new UI;
//Add a DOM element to the search box
const searchUser = document.getElementById('searchUser');
//search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Created a Variable for getting the values from the search box
    const userText = e.target.value;
    //If conditions to check if the user has entered a values
    if (userText !== '') {
        //make http call if the input value is not empty
        github.getUser(userText)
            .then(data => {
                //If the repo inputed cannot be found, return an error message
                if (data.profile.message === 'Not found') {
                    //show alert error message
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    //show Data profile
                    ui.showProfile(data.profile);
                    //Show Repository information
                    ui.showRepos(data.repos);

                }
            });
    } else {
        //clear profile
        ui.clearProfile();
    }

    e.preventDefault();
})