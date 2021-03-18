const questions = {
    symfony: {
        title: "Sur quel design pattern Symfony est-il basé ?",
        choices: ["MMV", "MVC", "MMVV"],
        response: 1,
        type: "select",
        name: "symfony",
        feedback: "Symfony est basé sur le pattern MVC",
    },
    react: {
        title: "React est-il un framework ?",
        choices: ["yes", "no"],
        response: 1,
        type: "radio",
        name: "react",
        feedback: "React est une librairie",
    },
    jsx: {
        title: "JSX c'est quoi ?",
        choices: [
            "JSX est un langage compilé",
            "JSX est un sur-ensemble développé par Facebook",
            "JSX est un format de données",
        ],
        response: 1,
        type: "radio",
        name: "jsx",
        feedback: "JSX est un sur ensemble à JS",
    },
};
 export default questions