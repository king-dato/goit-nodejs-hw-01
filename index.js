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

// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       contacts2.listContacts().then(console.table);
//       break;

//     case "get":
//       contacts2.getContactById(id).then(console.log);
//       break;

//     case "add":
//       contacts2
//         .addContact(name, email, phone)
//         .then(() => console.log("Contact added"));
//       break;

//     case "remove":
//       contacts2.removeContact(id).then(() => console.log("Contact removed"));
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);
//using commander

import { Command } from "commander";
const program = new Command();
const contacts3 = require("./contacts");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "contact id")
  .option("-n, --name <type>", "contact name")
  .option("-e, --email <type>", "contact email")
  .option("-p, --phone <type>", "contact phone");

program.parse(process.argv);
const argv2 = program.opts();

function invokeAction2({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contacts3.listContacts().then(console.table);
      break;

    case "get":
      contacts3.getContactById(id).then(console.log);
      break;

    case "add":
      contacts3
        .addContact(name, email, phone)
        .then(() => console.log("Contact added"));
      break;

    case "remove":
      contacts3.removeContact(id).then(() => console.log("Contact removed"));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
