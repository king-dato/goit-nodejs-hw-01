//connect the contacts
import {
  getContactById,
  listContacts,
  removeContact,
  addContact,
} from "./contacts.js";

// const argv = require("yargs").argv;
import yargs from "yargs";

import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
  .option("action", {
    alias: "a",
    describe: "Action to perform",
    type: "string",
  })
  .option("id", {
    alias: "i",
    describe: "ID of the contact",
    type: "string",
  })
  .option("name", {
    alias: "n",
    describe: "Name of the contact",
    type: "string",
  })
  .option("email", {
    alias: "e",
    describe: "Email of the contact",
    type: "string",
  })
  .option("phone", {
    alias: "p",
    describe: "Phone of the contact",
    type: "string",
  })
  .help()
  .alias("help", "h").argv;

// Your invokeAction function here
const invokeAction = async ({ action, id, name, email, phone }) => {
  // Your switch case or logic
};

invokeAction(argv);



import { Command } from "commander";
const program = new Command();
program
  .version('1.0.0')
  .description('CLI for demo purposes')
  .option('-a, --action <type>', 'Action to perform')
  .option('-i, --id <type>', 'ID of the contact')
  .option('-n, --name <type>', 'Name of the contact')
  .option('-e, --email <type>', 'Email of the contact')
  .option('-p, --phone <type>', 'Phone of the contact')
  .parse(process.argv);

const options = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      // Logic to list contacts
      break;
    case 'get':
      // Logic to get a contact by ID
      break;
    case 'add':
      // Logic to add a contact
      break;
    case 'remove':
      // Logic to remove a contact
      break;
    default:
      console.warn('Unknown action type!');
  }
};

invokeAction(options);