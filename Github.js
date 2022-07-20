//Created a class for github user
class Github {
    //added a constructor for github users
    constructor() {

            this.client_id = '42101e9ed682a3d7f31a';
            this.client_secret = '66222ddbdd83452e0c7dc705c19f62c6900195c8';
            this.repos_count = 5;
            this.repos_sort = 'created: asc';
        }
        //A method for getting the name of the users that are searched for.
    async getUser(user) {
        //created a ProfileResponse that will hold the data of the users that are fetched for
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );
        //created a ReposResponse that will hold the repository information of the users that are fetched for
        const reposResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        };
    }
}