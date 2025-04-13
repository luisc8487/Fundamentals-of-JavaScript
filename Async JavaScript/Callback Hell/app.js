// Callback Hell Example
// This code changes the background color of the document body in a sequence using nested callbacks.
// Each color change is delayed by 1 second.

setTimeout(() => {
  document.body.style.backgroundColor = "lightgreen";
    setTimeout(() => {
        document.body.style.backgroundColor = "lightyellow";
        setTimeout(() => {
        document.body.style.backgroundColor = "lightpink";
        setTimeout(() => {
            document.body.style.backgroundColor = "lightcoral";
            setTimeout(() => {
            document.body.style.backgroundColor = "lightgray";
            }, 1000);
        }, 1000);
        }, 1000);
    }, 1000);
});


