// Instantiate Github Object
const github = new Github();

// Instantiate UI object
const ui = new UI;

const searchUser = document.querySelector("#searchUser");

//Search User event Listener
searchUser.addEventListener("keyup", function (e) {
  const userText = e.target.value;
  if (userText !== '') {
    github
      .getUser(userText)
      .then((data) => {
        if (data.profile.message === "Not Found") {
          // Show alert
          ui.showAlert('User not found', 'container alert-danger');
        } else {
          // Show Profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
        }
      })
      .catch((err) => {});
  }else {
    ui.clearProfile();
  }
});
