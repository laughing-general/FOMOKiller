// script.js
window.addEventListener("load", function () {
  const riveInstance = new Rive({
    src: "animations/plant.riv",  // Make sure this path is correct
    canvas: document.getElementById("riveCanvas"),
    autoplay: true,
    stateMachines: ["State Machine 1"],
    artboard: "Plant",
    onLoad: () => console.log("Rive loaded successfully ✅")
  });

  document.getElementById("startBtn").addEventListener("click", () => {
    alert("Next phase: Vibe Check 🧠🔮");
    // Later: window.location.href = "vibe-check.html";
  });
});

