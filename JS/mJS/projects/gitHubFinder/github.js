class Github {
    constructor() {
        this.client_id = "b163ef986c2a18528052";
        this.client_secret = "95a7c6d3787edd15e2882b5ee7aa777818e32437";
        this.repos_count = 10;
        this.repos_sort = "created: asc";
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const profileData = await profileResponse.json();

        return {
            profileData
        };
    }

    async getRepos(reposUrl) {
        const reposResponse = await fetch(
            `
            ${reposUrl}?per_page=&{this.repos_count}&sort=&{this.repos_sort}&client_id=${
                this.client_id
            }&client_secret=${this.client_secret}
            `
        );

        const reposData = await reposResponse.json();

        return {
            reposData
        };
    }
}
