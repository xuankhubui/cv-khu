document.addEventListener("DOMContentLoaded", () => {
    const langToggle = document.getElementById('langToggle');
    let isEnglish = true;
    langToggle.addEventListener('click', () => {
        document.querySelectorAll('.lang-toggle.en').forEach(el => el.style.display = isEnglish ? 'none' : 'inline');
        document.querySelectorAll('.lang-toggle.vi').forEach(el => el.style.display = isEnglish ? 'inline' : 'none');
        isEnglish = !isEnglish;
        langToggle.innerHTML = isEnglish ? '<i class="fa-solid fa-language"></i> VI / EN' : '<i class="fa-solid fa-language"></i> EN / VI';
    });

    document.getElementById('modeToggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.getElementById('modeToggle').innerHTML === '<i class="fa-solid fa-toggle-on"></i> Dark Mode') {
            document.getElementById('modeToggle').innerHTML = '<i class="fa-solid fa-toggle-off"></i> Light Mode';
            document.querySelectorAll("a").forEach((a, i, arr) => {
                a.setAttribute("style", "color: #f0f0f0; text-decoration: none;")
                a.addEventListener('mouseover', () => {
                    a.setAttribute("style", "color: #ffffff; box-shadow: 0 3px #ffffff; text-decoration: none;")
                });
                a.addEventListener('mouseout', () => {
                    a.setAttribute("style", "color: #f0f0f0; text-decoration: none;")
                })
            })
            document.querySelector("img").setAttribute("style", "width: 140px; height: 140px; border - radius: 50 %; object - fit: cover; border: 2px solid var(--primary); transition: transform 0.5s ease, drop - shadow 0.5s ease; display: inline - block; filter: drop-shadow(0 0 0.75rem rgba(66, 216, 216, 0.5)); ")
        }
        else {
            document.getElementById('modeToggle').innerHTML = '<i class="fa-solid fa-toggle-on"></i> Dark Mode';
            document.querySelectorAll("a").forEach((a, i, arr) => {
                a.setAttribute("style", "color: #333; text-decoration: none;")
                a.addEventListener('mouseover', () => {
                    a.setAttribute("style", "color: #333; box-shadow: 0 3px #555555; text-decoration: none;")
                });
                a.addEventListener('mouseout', () => {
                    a.setAttribute("style", "color: #333; text-decoration: none;")
                })
            })
            document.querySelector("img").setAttribute("style", "width: 140px; height: 140px; border - radius: 50 %; object - fit: cover; border: 2px solid var(--primary); transition: transform 0.5s ease, drop - shadow 0.5s ease; display: inline - block; ")
        }
    });

    document.getElementById('printBtn').addEventListener('click', () => {
        document.getElementById('modeToggle').style.display = "none";
        document.getElementById('langToggle').style.display = "none";
        document.getElementById('printBtn').style.display = "none";
        document.getElementById('downloadBtn').style.display = "none";
        document.getElementById('cvContent').style.margin = "0px auto";
        document.getElementById('cvContent').style.padding = "40px";
        window.print();
        document.getElementById('modeToggle').style.display = "block";
        document.getElementById('langToggle').style.display = "block";
        document.getElementById('printBtn').style.display = "block";
        document.getElementById('downloadBtn').style.display = "block";
        document.getElementById('cvContent').style.margin = "56px auto";
        document.getElementById('cvContent').style.padding = "40px";
    });

    document.getElementById('downloadBtn').addEventListener('click', () => {
        /* const { jsPDF } = window.jspdf;
        const content = document.getElementById('cvContent');
        html2canvas(content, { scale: 2 }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('BUI_XUAN_KHU_CV.pdf');
        }); */

          const element = document.getElementById('cvContent');
          const opt = {
              margin: 0.3,
              filename: 'BUI_XUAN_KHU_CV',
              image: { type: 'jpeg', quality: 0.98 },
              html2canvas: { scale: 2 },
              jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' }
          };
          html2pdf().set(opt).from(element).save();
    });

    /* document.addEventListener('scroll', function () {
        const elements = document.querySelectorAll('.button-group');
        elements.forEach(element => {
            const speed = element.dataset.speed; // Lấy tốc độ di chuyển từ thuộc tính data
            const yPos = window.pageYOffset * speed;
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    document.addEventListener('mousemove', (e) => {
        const object = document.querySelector('.button-group');
        object.style.top = e.pageY + '0px';
        object.style.left = e.pageX + '0px';
    }); */
});