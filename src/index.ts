import { MssqlSpcallService } from "./mssql-spcall";

export class Spcall {

    constructor(
        private mssqlService: MssqlSpcallService
    ) { }

    async callMsSqlSp(name: string, parameters?: object) {
        return await this.mssqlService.call(name, parameters);
    }

}
