// Define all of the functions that the prgram uses.
function saveFile(){
    fname = prompt("Enter a file name");
    if(fname !== null){
        const textarea = document.querySelector('#writerArea');
        const textToSave = textarea.value;
        const blob = new Blob([textToSave], { type: 'text/plain' });
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            const dataUrl = reader.result;
            const link = document.createElement('a');
            link.href = dataUrl;
            if(fname.trim() === ""){
                link.download = "file.txt";
            } else {
                link.download = fname;
            }
            link.click();
      };
    }
}

function loadFile() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';

  fileInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsText(file);
    reader.onload = function () {
      const fileContents = reader.result;
      document.getElementById('writerArea').innerHTML = fileContents;
      document.getElementById('writerArea').value = fileContents;
    };
  });

  fileInput.click();
}


function quitApp(){
    window.close();
}

window.addEventListener('beforeunload', function (e) {
  // Cancel the event
  e.preventDefault();
  // Chrome requires returnValue to be set
  e.returnValue = '';

  // Show a confirmation dialog
  var confirmationMessage = 'Notepad is about to terminate. Continue?';
  (e || window.event).returnValue = confirmationMessage; // For IE and Firefox

  return confirmationMessage;
});

// We add the onclick listeners
document.querySelector("#saveBtn").addEventListener("click", function(){
    saveFile();
});

document.querySelector("#loadBtn").addEventListener("click", function(){
    loadFile();
});

document.querySelector("#quitBtn").addEventListener("click", function(){
    quitApp();
});

