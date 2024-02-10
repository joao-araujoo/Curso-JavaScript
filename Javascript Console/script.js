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
    root: new Directory("root", []),
  };

  static currentDirectory = System.directories.root;

  static createDirectory(directoryName) {
    const newDirectory = new Directory(
      directoryName,
      [],
      System.currentDirectory
    );
    System.currentDirectory.addFile(newDirectory);
  }

  static changeDirectory(directoryName) {
    if (directoryName === "~") {
      System.currentDirectory = System.directories.root;
      return "Mudou para o diretório raiz.";
    } else if (directoryName === "../") {
      if (System.currentDirectory !== System.directories.root) {
        System.currentDirectory = System.currentDirectory.parentDirectory;
        return "Mudou para o diretório pai.";
      } else {
        return "Você já está no diretório raiz.";
      }
    } else {
      const targetDirectory = System.currentDirectory.files.find(
        (file) => file.directoryName === directoryName
      );

      if (targetDirectory && targetDirectory instanceof Directory) {
        System.currentDirectory = targetDirectory;
        return `Mudou para o diretório '${directoryName}'.`;
      } else {
        return `O diretório '${directoryName}' não existe.`;
      }
    }
  }

  static getCurrentDirectoryPath() {
    let path = "/";
    let currentDir = System.currentDirectory;

    if (currentDir !== System.directories.root) {
      path = ""; // Remover a barra inicial se não estiver no diretório raiz
    }

    while (currentDir !== System.directories.root) {
      path = `/${currentDir.directoryName}${path}`;
      currentDir = currentDir.parentDirectory;
    }

    return path;
  }

  static listDirectoryContents() {
    const currentDir = System.currentDirectory;
    const contents = currentDir.files
      .map((file) => `"${file.fileName ?? file.directoryName}"`)
      .join(" ");
    return contents ? contents : "O diretório está vazio.";
  }
}

const commands = {
  help: {
    description: "Exibe esta mensagem de ajuda.",
    execute: () => helpMessage,
  },
  greetings: {
    description: "Mostra uma saudação amigável.",
    execute: () => "Olá! Como vai?",
  },
  mkdir: {
    description: "Cria um novo diretório.",
    execute: (args) => {
      if (!args) {
        return "Uso: mkdir <nome_do_diretório>";
      }
      System.createDirectory(args);
      return `Diretório '${args}' criado com sucesso.`;
    },
  },

  cd: {
    description: "Muda para um diretório existente.",
    execute: (args) => {
      if (!args) {
        return "Uso: cd <nome_do_diretório>";
      }
      return System.changeDirectory(args);
    },
  },
  ls: {
    description: "Lista os arquivos e diretórios no diretório atual.",
    execute: () => {
      return System.listDirectoryContents() || "O diretório está vazio.";
    },
  },
};

let currentDirectory = "/";

const helpMessage = `
Bem-vindo ao DAD console!

Comandos Disponíveis:
${Object.keys(commands)
  .map((command) => `- ${command}: ${commands[command].description}`)
  .join("\n")}

Para obter mais informações sobre um comando específico, digite "help <comando>".
Por exemplo, "help greetings" fornecerá detalhes sobre o comando de saudação.

Divirta-se explorando o DAD console!`;

function updatePrompt() {
  console.log("Atualizando prompt..."); // Adicione este log para verificar se a função é chamada
  prompt.textContent = `John@johns-air ${currentDirectory} % `;
  const currentDirectoryElement = document.getElementById("current-directory");
  currentDirectoryElement.textContent = `📁 ${System.getCurrentDirectoryPath()} `;
}

document.addEventListener("DOMContentLoaded", function () {
  const output = document.getElementById("output");
  const input = document.getElementById("input");
  const prompt = document.getElementById("prompt");

  // Função para imprimir mensagens no console
  function printMessage(message) {
    output.innerHTML += message + "<br>";
    output.scrollTop = output.scrollHeight; // Rolar para o final automaticamente
  }

  // Evento para capturar a tecla Enter
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const fullCommand = input.value;
      const [command, ...args] = fullCommand.split(" ");
      input.value = ""; // Limpar a entrada

      // Executar o comando (adapte conforme necessário)
      executeCommand(command, args.join(" "));
      updatePrompt(); // Adiciona esta linha para atualizar o prompt após a execução do comando
    }
  });

  // Função para executar comandos (exemplo)
  function executeCommand(command, args) {
    if (commands[command]) {
      printMessage(commands[command].execute(args));
    } else {
      printMessage(`Comando desconhecido: ${command}`);
    }
  }

  updatePrompt();
});
