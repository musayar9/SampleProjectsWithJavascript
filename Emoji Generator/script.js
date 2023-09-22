const emojis = [
    "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
    "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚",
    "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔",
    "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "🤥",
    "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮",
    "🤡", "👹", "👺", "💩", "👻", "💀", "👽", "👾", "🤖", "🎃",
    "👑", "👒", "🎩", "🎓", "🧢", "⛑️", "💄", "💍", "💼", "🌂",
    "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯",
    "🦁", "🐮", "🐷", "🐽", "🐸", "🐙", "🐵", "🙈", "🙉", "🙊",
    "🐒", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦅", "🦉",
    "🦇", "🐺", "🐗", "🐴", "🦄", "🐝", "🐛", "🦋", "🐌", "🐞"
    // Add more emojis 
  ];
  
  const generateBtn = document.getElementById("emojiGenerateBtn");
  const emoji = document.querySelector(".emoji")
  
  generateRandomNumber =()=>{
    return Math.floor(Math.random()*emojis.length)
  }
  
  
  generateBtn.addEventListener("click", ()=>{
    console.log(emojis[generateRandomNumber()]);
    emoji.textContent = emojis[generateRandomNumber()]
  })