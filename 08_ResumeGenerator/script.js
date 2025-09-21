let addBtn = document.querySelector(".add");
let print = document.querySelector("#resumePreview");

addBtn.addEventListener("click", () => {
  // Personal Details
  let userName = document.querySelector(".name").value.trim();
  let userEmail = document.querySelector(".email").value.trim();
  let userMobile = document.querySelector(".mobile").value.trim();
  let userLocation = document.querySelector(".location").value.trim();

  // Optional Links
  let userLinkedIn = document.querySelector(".linkedin").value.trim();
  let userGitHub = document.querySelector(".github").value.trim();
  let userLeetCode = document.querySelector(".leetcode").value.trim();
  let userHackerRank = document.querySelector(".hackerrank").value.trim();

  // About Me
  let userAbout = document.querySelector(".about").value.trim();

  // Education Details
  let college10Name = document.querySelector(".college10Name").value.trim();
  let college10Percent = document.querySelector(".college10Percent").value.trim();
  let college12Name = document.querySelector(".college12Name").value.trim();
  let college12Percent = document.querySelector(".college12Percent").value.trim();
  let degreeName = document.querySelector(".degree").value.trim();
  let degreePercent = document.querySelector(".degreePercent").value.trim();
  let branch = document.querySelector(".branch").value.trim();

  // Skills
  let prolangSkills = document.querySelector(".prolangSkills").value.trim();
  let webSkills = document.querySelector(".webSkills").value.trim();
  let libSkills = document.querySelector(".libSkills").value.trim();
  let compSkills = document.querySelector(".compSkills").value.trim();
  let platformSkills = document.querySelector(".platformSkills").value.trim();

  // Projects Inputs
  let projectTitle = document.querySelector(".projectTitle").value.trim();
  let projectDesc = document.querySelector(".projectDesc").value.trim();
  let projectFeatures = document.querySelector(".projectFeatures").value.trim();
  let projectLink = document.querySelector(".projectLink").value.trim();

  // Certificates Inputs
  let certTitle = document.querySelector(".certTitle").value.trim();
  let certDesc = document.querySelector(".certDesc").value.trim();
  let certLink = document.querySelector(".certLink").value.trim();

  // Projects HTML
  let projectsHTML = "";
  if (projectTitle || projectDesc || projectFeatures) {
    projectsHTML = `
      <h2 style="font-size: 23px; color: #ffffff; font-family: 'Poppins', sans-serif; margin-bottom: 10px;">
        Projects
      </h2>
      <div style="font-size: 16px; color: #ffffff; font-family: 'Poppins', sans-serif; margin-bottom: 20px;">
        ${projectTitle ? `<p><strong>Title:</strong> ${projectTitle}</p>` : ""}
        ${projectDesc ? `<p><strong>Description:</strong> ${projectDesc}</p>` : ""}
        ${projectFeatures ? `<p><strong>Features:</strong> ${projectFeatures}</p>` : ""}
        ${projectLink ? `<p><strong>Link:</strong> <a href="${projectLink}" target="_blank" style="color:#00f7ff; text-decoration:none;">${projectLink}</a></p>` : ""}
      </div>
    `;
  }

  // Certificates HTML
  let certificatesHTML = "";
  if (certTitle || certDesc) {
    certificatesHTML = `
      <h2 style="font-size: 23px; color: #ffffff; font-family: 'Poppins', sans-serif; margin-bottom: 10px;">
        Certificates
      </h2>
      <div style="font-size: 16px; color: #ffffff; font-family: 'Poppins', sans-serif; margin-bottom: 20px;">
        ${certTitle ? `<p><strong>Title:</strong> ${certTitle}</p>` : ""}
        ${certDesc ? `<p><strong>Description:</strong> ${certDesc}</p>` : ""}
        ${certLink ? `<p><strong>Link:</strong> <a href="${certLink}" target="_blank" style="color:#00f7ff; text-decoration:none;">${certLink}</a></p>` : ""}
      </div>
    `;
  }

  // Build Preview
  print.innerHTML = `
    <!-- Name -->
    <h1 style="font-size: 33px; color: #ffffff; font-family: 'Poppins', sans-serif; margin-bottom: 20px;">
      ${userName}
    </h1>

    <!-- Email, Mobile, Location -->
    <div style="display: flex; justify-content: space-around; font-size: 16px; color: #ffffff; font-family: 'Poppins', sans-serif;">
      <p><strong>Email:</strong> ${userEmail}</p>
      <p><strong>Mobile:</strong> ${userMobile}</p>
      <p><strong>Location:</strong> ${userLocation}</p>
    </div>

    <!-- Optional Links -->
    <div style="display: flex; justify-content: space-around; font-size: 16px; color: #ffffff; font-family: 'Poppins', sans-serif; margin-bottom: 15px;">
      ${userLinkedIn ? `<a href="${userLinkedIn}" target="_blank" style="color:#00f7ff; text-decoration:none;">LinkedIn</a>` : ""}
      ${userGitHub ? `<a href="${userGitHub}" target="_blank" style="color:#00f7ff; text-decoration:none;">GitHub</a>` : ""}
      ${userLeetCode ? `<a href="${userLeetCode}" target="_blank" style="color:#00f7ff; text-decoration:none;">LeetCode</a>` : ""}
      ${userHackerRank ? `<a href="${userHackerRank}" target="_blank" style="color:#00f7ff; text-decoration:none;">HackerRank</a>` : ""}
    </div>

    <hr style="margin: 3px 5%; width:90%; border: 1px solid #00f7ff; opacity: 0.5;"/>

    <!-- About Me Section -->
    ${userAbout ? `
      <h2 style="font-size: 23px; color: #ffffff; font-family: 'Poppins', sans-serif; margin-bottom: 10px;">
        About Me:
      </h2>
      <p style="font-size: 16px; color: #ffffff; font-family: 'Poppins', sans-serif; margin-bottom: 20px;">
        ${userAbout}
      </p>
    ` : ""}

    <!-- Education Section -->
    <h2 style="font-size: 23px; color: #ffffff; font-family: 'Poppins', sans-serif; margin-bottom: 10px;">
      Education:
    </h2>
    <div style="font-size:16px; color:#ffffff; font-family: 'Poppins', sans-serif; margin-bottom: 20px;">
      <p><strong>10th - Secondary School Certificate</strong> : <br>${college10Name} - ${college10Percent}</p>
      <p><strong>12th - Higher Secondary Certificate</strong> : <br>${college12Name} - ${college12Percent}</p>
      <p><strong>Graduation</strong> : <br>${degreeName} (${branch}) - ${degreePercent}</p>
    </div>

    <!-- Skills Section -->
    <h2 style="font-size: 23px; color: #ffffff; font-family: 'Poppins', sans-serif; margin-bottom: 10px;">
      Skills
    </h2>
    <div style="display: flex; flex-wrap: wrap; gap: 20px; font-size: 16px; color: #ffffff; font-family: 'Poppins', sans-serif; margin-bottom: 20px;">
      <div style="flex: 1 1 45%;"><p><strong>Programming Languages:</strong> ${prolangSkills}</p></div>
      <div style="flex: 1 1 45%;"><p><strong>Web Development:</strong> ${webSkills}</p></div>
      <div style="flex: 1 1 45%;"><p><strong>Libraries/Frameworks:</strong> ${libSkills}</p></div>
      <div style="flex: 1 1 45%;"><p><strong>Computer Fundamentals:</strong> ${compSkills}</p></div>
      <div style="flex: 1 1 45%;"><p><strong>Platform Skills:</strong> ${platformSkills}</p></div>
    </div>

    <!-- Projects Section -->
    ${projectsHTML}

    <!-- Certificates Section -->
    ${certificatesHTML}
  `;
});

let resetall = document.querySelector(".resetall"); // match your button class
resetall.addEventListener("click", () => {
  print.innerHTML = ""; // clears the resume preview
});


function downloadPDF() {
  const element = document.getElementById("resumePreview");

  if (!element.innerText.trim()) {
    alert("⚠️ Please generate resume preview first!");
    return;
  }

  // Save original styles
  const originalBackground = element.style.background;
  const originalColor = element.style.color;
  const originalPosition = element.style.position;
  const originalZIndex = element.style.zIndex;

  // Set styles for PDF rendering
  element.style.background = "#141e30";
  element.style.color = "#ffffff";
  element.style.position = "relative";
  element.style.zIndex = "9999";

  const opt = {
    margin: 0.5,
    filename: "Resume.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      logging: true,
      backgroundColor: null, // transparent background
      scrollY: -window.scrollY,
    },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .then(() => {
      // Restore original styles
      element.style.background = originalBackground;
      element.style.color = originalColor;
      element.style.position = originalPosition;
      element.style.zIndex = originalZIndex;
    });

    html2canvas(document.getElementById("resumePreview"), {
  scale: 2,
  useCORS: true,
  allowTaint: false,
  backgroundColor: "#141e30",
  scrollY: -window.scrollY,
}).then((canvas) => {
  document.body.appendChild(canvas);
});

}
