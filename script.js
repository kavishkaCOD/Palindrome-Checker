document.getElementById("checkButton").addEventListener("click", function () {
    
    let inputText = document.getElementById("textInput").value;  // User Input

    let cleanedText = inputText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Special Characters remove & Lowercase 
    
    let reversedText = cleanedText.split("").reverse().join(""); // Text Reverse
    
    if (cleanedText === reversedText) {
        document.getElementById("result").textContent = `"${inputText}" is a Palindrome! ✅`;
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").textContent = `"${inputText}" is NOT a Palindrome ❌`;
        document.getElementById("result").style.color = "red";
    }
});
