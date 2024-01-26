import { validateForms } from "../functions/validate-forms";

const rules = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 2,
        errorMessage: "Минимальное количество символов 2",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
];

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

validateForms(".hero .js-form", rules, afterForm);
validateForms(".modal .js-form", rules, afterForm);
