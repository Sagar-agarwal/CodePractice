class Github {
    constructor() {
        this.client_id = "b163ef986c2a18528052";
        this.client_secret = "95a7c6d3787edd15e2882b5ee7aa777818e32437";
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
}
