import { Connection } from 'typeorm';

export class MssqlSpcallService {

    public async call(connection: Connection, name: string, parameters?: object) {
        try {
            let query = `EXECUTE ${name}`;
            if (parameters != undefined && parameters != null) {
                const values: any[] = Object.values(parameters);
                query += await this.createSp(parameters);
                return await connection.query(query, values);
            } else {
                await connection.query(query);
            }
        } catch (error) {
            console.error("Error while call SP", error);
            throw error;
        }
    }

    private async createSp(parameters: object) {
        try {
            const keys: string[] = Object.keys(parameters);
            let additionalQuery: string = "";
            for (let i = 0; i < keys.length; i++) {
                additionalQuery += ` @${keys[i]}=@${i},`;
            }
            additionalQuery = additionalQuery.substring(0, additionalQuery.length - 1);
            return additionalQuery;
        } catch (error) {
            console.error("Error while call SP", error);
            throw error;
        }
    }
}
