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