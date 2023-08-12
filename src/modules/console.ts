import chalk from "chalk";

const log = (text: string) => {
    const date = new Date();
    console.log(
        chalk.blueBright(`[log - ${date.toLocaleTimeString()}]`) +
        chalk.white(" " + text)
    );
};

const error = (text: string) => {
    const date = new Date();
    console.log(
        chalk.bgRedBright(`[error - ${date.toLocaleTimeString()}]`) +
        chalk.redBright(" " + text)
    );
};

export { log, error };