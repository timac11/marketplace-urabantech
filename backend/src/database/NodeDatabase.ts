import {Connection, ConnectionOptions, createConnection} from 'typeorm'
import {NodeDatabaseService} from './NodeDatabaseService'

export default class NodeDatabase {
    private readonly options: ConnectionOptions
    private connection!: Connection
    public service!: NodeDatabaseService

    constructor(options: ConnectionOptions) {
        this.options = options
    }

    async initConnection(): Promise<void> {
        await this.getConnection()
        this.service = new NodeDatabaseService(this)
    }

    async getConnection(): Promise<Connection> {
        if (!this.connection) {
            this.connection = await createConnection(this.options)
        }
        return Promise.resolve(this.connection)
    }
}
