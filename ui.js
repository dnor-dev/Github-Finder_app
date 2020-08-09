class UI{
    constructor(){
        this.profile = document.querySelector('#profile');
    }


    showProfile(user){
        this.profile.innerHTML = `
        <div class="grid-2">
        <div>
        <img src="${user.avatar_url}" alt="image">
        <a href="${user.html_url}" class="btn" target="_blank">View Profile</a>
        </div>

        <div class="grid-section-2">
       <div class="spans">
       <span id="public-repos">Public Repos: ${user.public_repos}</span>
       <span id="public-gists">Public Gists: ${user.public_gists}</span>
       <span id="followers">Followers: ${user.followers}</span>
       <span id="following">Following: ${user.following}</span>
       </div>
        <br><br>
        <ul class="about">
        <li>Company: ${user.company}</li>
        <li>Website/Blog: ${user.blog}</li>
        <li>Location: ${user.location}</li>
        <li>Memeber Since: ${user.created_at}</li>
        </ul>
        </div>
        </div>

        <h3 class="pageHeading">Latest Repos</h3>
        <div id="repos"></div>
        `
    }

    showRepos(repos){
        let output = '';
        repos.forEach((repo)=>{
            output += `
            <div class="grid-2">
            <div>
            <a href="${repo.html_url}" target="_blank" class="repo-link">${repo.name}</a>
            </div>
            <div class="repo-views">
            <span id="public-repos">Stars: ${repo.stargazers_count}</span>
            <span id="public-gists">Watchers: ${repo.watchers_count}</span>
            <span id="followers">Forks: ${repo.forks_count}</span>
            </div>
            </div>
            `;
        })

        document.getElementById('repos').innerHTML = output;
    }

    // Show alert
    showAlert(message, className){
        this.clearCurrentAlert();
        let div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const searchUsers = document.querySelector('.searchUsers');
        const Container = document.querySelector('.container');
        searchUsers.insertBefore(div, Container);


        setTimeout(()=>{
            document.querySelector('.alert-danger').remove();
        }, 3000);

        this.clearProfile();
    }

    clearCurrentAlert(){
       const currentAlert = document.querySelector('.alert-danger');

       if (currentAlert){
           currentAlert.remove();
       }

    }

    // Clear Profile
    clearProfile(){
        this.profile.innerHTML = '';
    }
}