function toggleSec(section) {
  const sections = ["essentials", "memory", "rag"];
  for (let sec of sections) {
    if (sec === section) {
      showSection(`#${sec}-link`, `#${sec}-section`);
    } else {
      hideSection(`#${sec}-link`, `#${sec}-section`);
    }
  }
}

function hideSection(link_id, section_id) {
  $(link_id).removeClass("active");
  $(section_id).attr("hidden", true);
}
function showSection(link_id, section_id) {
  $(link_id).addClass("active");
  $(section_id).removeAttr("hidden");
}

async function fetchStream() {
  const input = document.getElementById("stream-input").value;
  const outputDiv = document.getElementById("stream-output");
  outputDiv.innerHTML = ""; // Clear previous output

  try {
    const response = await fetch(`/api/stream?message=${encodeURIComponent(input)}`);
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      outputDiv.innerHTML += chunk; // Append streamed content
    }
  } catch (error) {
    console.error("Error fetching stream:", error);
    outputDiv.innerHTML = "Error fetching stream.";
  }
}