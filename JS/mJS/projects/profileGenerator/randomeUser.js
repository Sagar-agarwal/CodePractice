class RandomUser {
    constructor() {
        this.maleProfiles = [];
        this.femaleProfiles = [];
    }

    async getUser(gender) {
        const response = await fetch(`https://randomuser.me/api/?gender=${gender}&results=100`);
        const profileData = await response.json();

        return {
            profileData
        };
    }

    maleProfileIterator() {
        let index = 0;

        return {
            next: function() {
                return nextIndex < this.maleProfiles.length
                    ? { data: this.maleProfiles[index++], done: false }
                    : { done: true };
            }
        };
    }

    femaleProfileIterator() {
        let index = 0;

        return {
            next: function() {
                return nextIndex < this.femaleProfiles.length
                    ? { data: this.femaleProfiles[index++], done: false }
                    : { done: true };
            }
        };
    }
}
