class Github{
    constructor(){
        this.client_id = '57542dcee73e5fe4c914';
        this.client_secret = '13b278b81cc7bbc6361aa356baf49e4501a92d4c';
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }


    async getUser(user){
        const response = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await response.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        };
    }
}