//connect the contacts
import {
  getContactById,
  listContacts,
  removeContact,
  addContact,
} from "./contacts.js";

const argv = require("yargs").argv;
const contacts = require("./contacts");

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contacts2.listContacts().then(console.table);
      break;

    case "get":
      contacts2.getContactById(id).then(console.log);
      break;

    case "add":
      contacts2
        .addContact(name, email, phone)
        .then(() => console.log("Contact added"));
      break;

    case "remove":
      contacts2.removeContact(id).then(() => console.log("Contact removed"));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
//using commander

const { Command } = require("commander");
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
