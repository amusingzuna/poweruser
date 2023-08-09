import chalk from "chalk";

const log = (text: string) => {
    const date = new Date();
    console.log(
        chalk.blueBright(`[log - ${date.toLocaleTimeString()}]`) +
        chalk.white(" " + text)
    );
}

export { log };