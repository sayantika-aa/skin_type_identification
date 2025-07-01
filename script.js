document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const answers = ["q1", "q2", "q3"].map(q => {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    return selected ? selected.value : null;
  });

  if (answers.includes(null)) {
    alert("Please answer all the questions!");
    return;
  }

  const counts = {};
  answers.forEach(answer => {
    counts[answer] = (counts[answer] || 0) + 1;
  });

  const result = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];

  const skinTypeDescriptions = {
    dry: "Your skin type is Dry. Keep it moisturized and avoid harsh soaps.",
    oily: "Your skin type is Oily. Use oil-free products and cleanse regularly.",
    combination: "You have Combination skin. Balance care for dry and oily areas.",
    normal: "You have Normal skin. Maintain a healthy skincare routine.",
    sensitive: "You have Sensitive skin. Use gentle, fragrance-free products."
  };

  document.getElementById("result").textContent = skinTypeDescriptions[result] || "Unable to determine skin type.";
});
