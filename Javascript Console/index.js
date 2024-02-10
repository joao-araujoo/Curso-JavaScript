class File {
  constructor(fileName, content) {
    this.fileName = fileName;
    this.content = content;
  }
}

class Directory {
  constructor(directoryName, files) {
    this.directoryName = directoryName;
    this.files = files;
  }

  addFile(newFile) {
    this.files = [newFile, ...this.files];
  }
}

class System {
  static directories = {
    Desktop: new Directory("Desktop", []),
    Documents: new Directory("Documents", []),
    Downloads: new Directory("Downloads", []),
    Images: new Directory("Images", []),
    Musics: new Directory("Musics", []),
    Videos: new Directory("Videos", []),
  };

  static createDirectory(directoryName) {
    System.directories[directoryName] = new Directory(directoryName, []);
  }
}

const query = prompt("->");

switch (query) {
  case "help":
    function rainbowText(text, colorIndex) {
      const rainbowColors = ["\x1b[31m", "\x1b[33m", "\x1b[32m", "\x1b[34m", "\x1b[35m", "\x1b[36m"];
      const color = rainbowColors[colorIndex % rainbowColors.length];
      return `${color}${text}\x1b[0m`;
  }
  
  // Função para criar um título "Rainbow Console" com caracteres
  function rainbowConsoleTitle() {
      return `
      ${rainbowText("██████╗░░█████╗░██████╗░", 0)}
      ${rainbowText("██╔══██╗██╔══██╗██╔══██╗", 1)}
      ${rainbowText("██║░░██║███████║██║░░██║", 2)}
      ${rainbowText("██║░░██║██╔══██║██║░░██║", 3)}
      ${rainbowText("██████╔╝██║░░██║██████╔╝", 4)}
      ${rainbowText("╚═════╝░╚═╝░░╚═╝╚═════╝░", 5)}
      ${rainbowText("    C░O░N░S░O░L░E", 5)}
      `;
  }
  
  const consoleName = rainbowConsoleTitle();
  
  const helpCommand = `
  ${consoleName}
  
  Comandos Disponíveis:
  ${rainbowText("- help:", 0)} Exibe esta mensagem de ajuda.
  ${rainbowText("- saudacao:", 1)} Mostra uma saudação amigável.
  ${rainbowText("- calcular:", 2)} Realiza operações matemáticas simples.
  ${rainbowText("- listarTarefas:", 3)} Lista as tarefas pendentes.
  
  Para obter mais informações sobre um comando específico, digite "${rainbowText("help <comando>", 4)}".
  Por exemplo, "${rainbowText("help saudacao", 5)}" fornecerá detalhes sobre o comando de saudação.
  
  Divirta-se explorando o ${rainbowText("Rainbow Console", 0)}!
  `;

    console.log(helpCommand);
    break;
}
