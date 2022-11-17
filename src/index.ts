import { Connection } from "typeorm";
import { MssqlSpcallService } from "./mssql-spcall";

export class Spcall {
    
    private mssqlService: MssqlSpcallService = new MssqlSpcallService();

    async callMsSqlSp(connection: Connection, name: string, parameters?: object) {
        return await this.mssqlService.call(connection, name, parameters);
    }

}
