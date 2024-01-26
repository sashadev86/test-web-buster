import Accordion from "accordion-js";

const accordion = new Accordion(".answers__accordion", {
  multiple: false,
  collapse: false,
});

accordion.open(1);

