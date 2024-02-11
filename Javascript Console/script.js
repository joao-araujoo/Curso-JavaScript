class File {
  constructor(fileName, content) {
    this.fileName = fileName;
    this.content = content;
  }
}

class Directory {
  constructor(directoryName, files, parentDirectory = null) {
    this.directoryName = directoryName;
    this.files = files;
    this.parentDirectory = parentDirectory;
  }

  addFile(newFile) {
    this.files.push(newFile);
  }
}

class System {
  static directories = {
    root: new Directory("root", [
      new Directory("Desktop", []),
      new Directory("Documents", []),
      new Directory("Images", []),
      new Directory("Musics", []),
      new Directory("Videos", []),
    ]),
  };

  static currentDirectory = System.directories.root;

  static createDirectory(directoryName) {
    const existingDirectory = System.currentDirectory.files.find(
      (file) =>
        file instanceof Directory && file.directoryName === directoryName
    );

    if (existingDirectory) {
      // O diretório com o mesmo nome já existe, adicione um número incremental
      let counter = 1;
      let newDirectoryName = `${directoryName}${counter}`;
      while (
        System.currentDirectory.files.find(
          (file) =>
            file instanceof Directory && file.directoryName === newDirectoryName
        )
      ) {
        counter++;
        newDirectoryName = `${directoryName}${counter}`;
      }
      directoryName = newDirectoryName;
    }

    const newDirectory = new Directory(
      directoryName,
      [],
      System.currentDirectory
    );
    System.currentDirectory.addFile(newDirectory);
    // Retorna o nome do diretório com o número adicionado
    return directoryName;
  }

  static changeDirectory(directoryName) {
    if (directoryName === "~") {
      System.currentDirectory = System.directories.root;
      return "Changed to the root directory.";
    } else if (directoryName === "../") {
      if (System.currentDirectory !== System.directories.root) {
        System.currentDirectory = System.currentDirectory.parentDirectory;
        return `Changed to the parent directory '${System.currentDirectory.directoryName}'.`;
      } else {
        return "You are already in the root directory.";
      }
    } else {
      const targetDirectory = System.currentDirectory.files.find(
        (file) => file.directoryName === directoryName
      );

      if (targetDirectory && targetDirectory instanceof Directory) {
        System.currentDirectory = targetDirectory;
        return `Changed to the directory '${System.currentDirectory.directoryName}'.`;
      } else {
        return `The directory '${directoryName}' does not exist.`;
      }
    }
  }

  static getCurrentDirectoryPath() {
    let path = "/";
    let currentDir = System.currentDirectory;

    while (currentDir && currentDir !== System.directories.root) {
      path = `/${currentDir.directoryName}${path}`;
      currentDir = currentDir.parentDirectory;
    }

    return path === "" ? "/" : path;
  }

  static listDirectoryContents() {
    const currentDir = System.currentDirectory;
    const contents = currentDir.files
      .map((file) => `"${file.fileName ?? file.directoryName}"`)
      .join(" ");
    return contents ? contents : "The directory is empty.";
  }
}

const commands = {
  help: {
    description: "Displays this help message.",
    execute: (args) => {
      if (!args) {
        return helpMessage;
      }
      return `${args} - ${commands[args].description}`;
    },
  },
  greetings: {
    description: "Shows a friendly greeting.",
    execute: () => "Hello! How are you?",
  },
  mkdir: {
    description: "Creates a new directory.",
    execute: (args) => {
      if (!args) {
        return "Usage: mkdir <directory_name>";
      }
      const newDirectoryName = System.createDirectory(args);
      return `Directory '${newDirectoryName}' created successfully.`;
    },
  },
  cd: {
    description: "Changes to an existing directory.",
    execute: (args) => {
      if (!args) {
        return "Usage: cd <directory_name>";
      }
      return System.changeDirectory(args);
    },
  },
  ls: {
    description: "Lists the files and directories in the current directory.",
    execute: () => {
      return System.listDirectoryContents() || "The directory is empty.";
    },
  },
  clear: {
    description: "Clears the console output.",
    execute: () => {
      const output = document.getElementById("output");
      output.innerHTML = "";
      return "";
    },
  },
  touch: {
    description: "Creates new file(s).",
    execute: (args) => {
      if (!args) {
        return "Usage: touch <file_name> [<file_name_2> ...]";
      }

      const fileNames = args.split(" ");
      const createdFiles = [];

      fileNames.forEach((fileName) => {
        const newFile = new File(fileName, "This is a new file.");
        System.currentDirectory.addFile(newFile);
        createdFiles.push(fileName);
      });

      const filesString = createdFiles.length > 1 ? "files" : "file";
      return `Created ${
        createdFiles.length
      } ${filesString}: ${createdFiles.join(", ")}.`;
    },
  },
  echo: {
    description: "Adds text to a file.",
    execute: (args) => {
      if (!args || !args.includes(">")) {
        return "Usage: echo <text> > <file_name>";
      }

      const [text, fileNamesString] = args.split(" > ");
      const fileNames = fileNamesString.split(/\s+/);

      const createdFiles = [];

      fileNames.forEach((fileName) => {
        const targetFile = System.currentDirectory.files.find(
          (file) => file instanceof File && file.fileName === fileName
        );

        if (targetFile) {
          targetFile.content = text.replace(/['"]+/g, ""); // Remover as aspas da string
          createdFiles.push(fileName);
        } else {
          createdFiles.push(`(Error: ${fileName} does not exist)`);
        }
      });

      const filesString = createdFiles.length > 1 ? "files" : "file";
      return `Text added to ${
        createdFiles.length
      } ${filesString}: ${createdFiles.join(", ")}.`;
    },
  },
  cat: {
    description: "Displays the content of a file.",
    execute: (args) => {
      if (!args) {
        return "Usage: cat <file_name>";
      }

      const fileName = args.trim();
      const targetFile = System.currentDirectory.files.find(
        (file) => file instanceof File && file.fileName === fileName
      );

      if (targetFile) {
        return targetFile.content;
      } else {
        return `The file '${fileName}' does not exist.`;
      }
    },
  },
};

let currentDirectory = "/";
const commandHistory = [];
let commandHistoryIndex = -1;

const helpMessage = `
Welcome to the DAD console!

Available Commands:
${Object.keys(commands)
  .map((command) => `- ${command}: ${commands[command].description}`)
  .join("\n")}

For more information about a specific command, type "help <command>".
For example, "help greetings" will provide details about the greeting command.

Have fun exploring the DAD console!`;

function updatePrompt() {
  prompt.textContent += `John@johns-air ${currentDirectory} % `;
  const currentDirectoryElement = document.getElementById("current-directory");
  currentDirectoryElement.textContent = `📁 ${System.getCurrentDirectoryPath()} `;
}

document.addEventListener("DOMContentLoaded", function () {
  const output = document.getElementById("output");
  const input = document.getElementById("input");

  function printMessage(message) {
    output.innerHTML += message + (message ? "<br>" : "");
    output.scrollTop = output.scrollHeight;
  }

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const fullCommand = input.value;
      const [command, ...args] = fullCommand.split(" ");
      input.value = "";

      executeCommand(command, args.join(" "));
      updatePrompt();
    } else if (event.key === "ArrowUp") {
      if (commandHistoryIndex < commandHistory.length - 1) {
        commandHistoryIndex++;
        input.value = commandHistory[commandHistoryIndex];
      }
    } else if (event.key === "ArrowDown") {
      if (commandHistoryIndex >= 0) {
        commandHistoryIndex--;
        input.value =
          commandHistoryIndex >= 0 ? commandHistory[commandHistoryIndex] : "";
      }
    }
  });

  function executeCommand(command, args) {
    const fullCommand = `${command} ${args}`;
    if (fullCommand.trim() === "") {
      return;
    }
    if (fullCommand.trim() !== "") {
      commandHistory.unshift(fullCommand);
      commandHistoryIndex = -1;
    }

    if (commands[command]) {
      printMessage(commands[command].execute(args));
    } else {
      printMessage(`Unknown command: ${fullCommand}`);
    }
  }

  updatePrompt();
});
