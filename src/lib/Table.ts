
import lineByLine from 'n-readlines';
import objectPath from "object-path";
import {sprintf} from "sprintf-js";


export class Table {

    toHtml(filename: string): string {

        const result: string[] = [];
        const liner = new lineByLine(filename);
        let line: false | Buffer;

        const pEmptyLine = /^\s+$/;

        result.push("<table>");

        while (line = liner.next()) {
            const m = pEmptyLine.exec(line.toString());
            if (m === null) {
                result.push(this.toTr(line.toString().split("\t")));
            }
        }

        result.push("</table>");

        return result.join("\n");
    }



    toTr(elements: string[]): string {
        const result: string[] = [];

        result.push("<tr>");
        for (let el of elements) {
            result.push("    <td>" + el + "</td>");
        }
        result.push("</tr>");

        return result.join("\n");
    }

}
