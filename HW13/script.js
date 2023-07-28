function* createIdGenerator() {
    let id = 1;
    while (true) {
      yield id;
      id++;
    }
  }
  
  const idGenerator = createIdGenerator();
  
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);

  function* fontGenerator(initialSize) {
    let fontSize = initialSize;
  
    while (true) {
      const command = yield fontSize;
      if (command === "up") {
        fontSize += 2;
      } else if (command === "down") {
        fontSize -= 2;
      }
      document.getElementById('paragraph').style.fontSize = fontSize + "px";
    }
  }
  
  const fontIterator = fontGenerator(14);
  
  const changeFontSize = (command) => {
    const { value } = fontIterator.next(command);
    console.log(value);
  };

    document.getElementById("upButton").addEventListener("click", () => {
    changeFontSize("up");
  });
    document.getElementById("downButton").addEventListener("click", () => {
    changeFontSize("down");
  });
  