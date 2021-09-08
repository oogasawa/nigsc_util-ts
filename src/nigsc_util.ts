
import * as fs from "fs";
import yargs from "yargs";
import { Table } from "./lib/Table";


main();

async function main() {

    const argv = yargs
        .command("table", "Convert a TSV file to a HTML table.")
        .demandCommand()
        .help()
        .argv;

     console.log(argv);

    if (argv._[0] === "table") {
        const filename: string = argv._[1] as string;
        console.log(filename);
        const t = new Table();
        console.log(t.toHtml(filename));
    }
    else {
        console.log("Invalid command line argument.");
    }

}




