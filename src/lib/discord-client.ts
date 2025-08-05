import { REST } from "@discordjs/rest"

export class DiscordClient {
    private rest: REST

    constructor(token: string | undefined) {
        this.rest = new REST
    }
}