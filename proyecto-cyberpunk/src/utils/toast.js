let toastDiv = null;

export const showToast = (message, type = "info") => {
  if (!toastDiv) {
    toastDiv = document.createElement("div");
    toastDiv.className = "fixed bottom-4 right-4 z-50";
    document.body.appendChild(toastDiv);
  }

  const toast = document.createElement("div");
    toast.className = `p-3 mb-2 rounded shadow-lg font-bold ${
    type === "success" ? "bg-green-400 text-black" 
    : type === "error" ? "bg-red-400 text-white" 
    : "bg-blue-400 text-white"
  }`;
  toast.textContent = message;
  toastDiv.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
};