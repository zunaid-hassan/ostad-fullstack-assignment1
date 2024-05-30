document.addEventListener("DOMContentLoaded", () => {
  const roomTypes = {
    basic: {
      price: 199,
      countElement: document.getElementById("basic-room-count"),
      costElement: document.getElementById("basic-total-cost"),
      messageElement: document.getElementById("basic-message"),
      roomCount: 1,
    },
    pro: {
      price: 249,
      countElement: document.getElementById("pro-room-count"),
      costElement: document.getElementById("pro-total-cost"),
      messageElement: document.getElementById("pro-message"),
      roomCount: 1,
    },
  };

  document.querySelectorAll(".button-increase").forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.getAttribute("data-type");
      roomTypes[type].roomCount++;
      updateDisplay(roomTypes[type]);
    });
  });

  document.querySelectorAll(".button-decrease").forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.getAttribute("data-type");
      if (roomTypes[type].roomCount > 1) {
        roomTypes[type].roomCount--;
        updateDisplay(roomTypes[type]);
      }
    });
  });

  document.querySelectorAll(".button-signup").forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.getAttribute("data-type");
      const messageElement = roomTypes[type].messageElement;
      messageElement.textContent = `Thank you for choosing ${roomTypes[type].roomCount} room`;
    });
  });

  function updateDisplay(roomType) {
    roomType.countElement.textContent = roomType.roomCount;
    roomType.costElement.textContent = roomType.roomCount * roomType.price;
  }

  // Initialize display
  Object.values(roomTypes).forEach((roomType) => updateDisplay(roomType));
});
