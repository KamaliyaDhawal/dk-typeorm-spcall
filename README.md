# dk-typeorm-spcall

AIM: providing easy functionality for call SPs using typescript mainly for nestjs

## Installation

Install package

```bash
npm i --save dk-typeorm-spcall
```

## Configuration
In your module file import provider

```typescript
import { SpCall } from "dk-typeorm-spcall";
```

In your @Module add SpCall as a providers 

```typescript
@Module({
    providers: [SpCall]
})
```

## Usage

```typescript
import { SpCall } from "dk-typeorm-spcall"; // for function call
import { Connection } from "typeorm";

// Inject the dependancy

constructor(
    private spCall: SpCall,
    private connection: Connection,
)

// create your parameters object

const parameters = {
    field1: "value1",
    field2: "value2"
}

const result = await this.spCall.CallMsSqlSp(connection, "spName", parameters);
```
Here "spName" is the name of storage procedure you want to call and parameters is optional if your storage procedure have any parameters then pass as a argument



## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.


## Thanks and Happy Coding.... 😊