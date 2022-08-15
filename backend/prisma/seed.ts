import {rates} from "../data/rates"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function main() {
    for(let rate of rates) {
        await prisma.mortgageRate.create({
            data: rate
        })
    }
}

main().catch(e => {
    console.log("error", e)
    process.exit(1)
}).finally(()=> {
    prisma.$disconnect();
})