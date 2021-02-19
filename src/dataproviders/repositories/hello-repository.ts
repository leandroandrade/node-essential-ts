export default class HelloRepository {
    async getMessage(): Promise<string> {
        return 'hello node-essential-ts';
    }
}
