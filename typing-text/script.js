let typingText  = document.querySelector('.typing-text');

let typeText = () =>{
	setTimeout(() =>{
		typingText.textContent = "Web Developer";
	}, 0);
	setTimeout(() =>{
		typingText.textContent = "App Developer";
	}, 4000);
	setTimeout(() =>{
		typingText.textContent = "IOS Developer";
	}, 8000);
	
};
typeText();
setInterval(typeText, 12000)