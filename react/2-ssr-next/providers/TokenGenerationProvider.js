
class TokenGenerationProvider {

    constructor(data) {
        this.name = data.name;
        this.email = data.email;
        this.role = data.role;
    }

    exec() {
        // Create new personal token and refresh token with data
        // Return tokens or false
        console.log('exec');
    }
}

export { TokenGenerationProvider };