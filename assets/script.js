// Encrypted title data - Protection against code copying
const encryptedTitle = {
    parts: [
        { text: "ELITEKAMRUL", color: "text-indigo-600" },
        { text: "EDU", color: "text-fuchsia-600" },
        { text: "ID", color: "text-emerald-600" },
        { text: "CARD", color: "text-amber-600" },
        { text: "GENERATOR", color: "text-sky-600" }
    ]
};

// Decrypt and display title function
function decryptTitle() {
    const titleElement = document.getElementById('mainTitle');
    if (titleElement) {
        let titleHTML = '<i class="fa-solid fa-graduation-cap mr-2 text-indigo-600"></i>';
        encryptedTitle.parts.forEach(part => {
            titleHTML += `<span class="${part.color}">${part.text}</span> `;
        });
        titleHTML += '<i class="fa-solid fa-id-card-clip ml-2 text-emerald-600"></i>';
        titleElement.innerHTML = titleHTML;
    }
}

// Predefined data for randomization
const randomIDs = ['21BC5229', '22FG8765', '23HI1234', '24JK9876'];
function generateIndianMobileDigits() {
            const firstDigit = String(Math.floor(Math.random() * 4) + 6); // 6-9
            let rest = '';
            for (let i = 0; i < 9; i++) { // total 10 digits
                rest += Math.floor(Math.random() * 10);
            }
            return firstDigit + rest; // 10-digit local number
}

function formatIndianMobileFromDigits(localDigits) {
            const digits = (localDigits || '').replace(/\D/g, '').slice(0, 10);
            return '+91' + digits; // no spaces, no hyphens
}

function extractLocalDigits(value) {
            const digits = (value || '').replace(/\D/g, '');
            // strip possible country code 91 if user pasted +91 or 91
            const stripped = digits.startsWith('91') ? digits.slice(2) : digits;
            return stripped.slice(0, 10);
}

const randomMobiles = Array.from({ length: 20 }, () => generateIndianMobileDigits());
const randomAddresses = [
            'At- Sadanandpur Dist- Supaul, Bihar',
            '123 Main St, Anytown, USA',
            '456 College Rd, Cityville, State',
            '789 Academic Ave, Metropoli, Country'
];
 const universityNames = [
             'Guru Gobind Singh Indraprastha University',
             'University of Delhi',
             'Jawaharlal Nehru University',
             'Panjab University, Chandigarh',
             'University of Mumbai',
             'Savitribai Phule Pune University',
             'Banaras Hindu University',
             'University of Calcutta',
             'Anna University',
             'University of Hyderabad'
 ];
 const universityWebsites = {
             'Guru Gobind Singh Indraprastha University': 'https://www.ipu.ac.in',
             'University of Delhi': 'https://www.du.ac.in',
             'Jawaharlal Nehru University': 'https://www.jnu.ac.in',
             'Panjab University, Chandigarh': 'https://puchd.ac.in',
             'University of Mumbai': 'https://mu.ac.in',
             'Savitribai Phule Pune University': 'https://www.unipune.ac.in',
             'Banaras Hindu University': 'https://www.bhu.ac.in',
             'University of Calcutta': 'https://www.caluniv.ac.in',
             'Anna University': 'https://www.annauniv.edu',
             'University of Hyderabad': 'https://uohyd.ac.in'
 };
 const universityAddresses = {
             'Guru Gobind Singh Indraprastha University': 'Sector 16C, Dwarka, New Delhi, Delhi 110078',
             'University of Delhi': 'Benito Juarez Marg, South Campus, New Delhi, Delhi 110021',
             'Jawaharlal Nehru University': 'New Mehrauli Road, JNU, New Delhi, Delhi 110067',
             'Panjab University, Chandigarh': 'Sector 14, Chandigarh, 160014',
             'University of Mumbai': 'M.G. Road, Fort, Mumbai, Maharashtra 400032',
             'Savitribai Phule Pune University': 'Ganeshkhind, Pune, Maharashtra 411007',
             'Banaras Hindu University': 'Ajagara, Varanasi, Uttar Pradesh 221005',
             'University of Calcutta': '87/1, College Street, Kolkata, West Bengal 700073',
             'Anna University': 'Sardar Patel Rd, Guindy, Chennai, Tamil Nadu 600025',
             'University of Hyderabad': 'Prof. C.R. Rao Road, Gachibowli, Hyderabad, Telangana 500046'
 };
 // Local university logos from assets/logo/ folder
 const universityLogos = {
             'Guru Gobind Singh Indraprastha University': 'assets/logo/ipu-logo.png',
             'University of Delhi': 'assets/logo/logo-du.png',
             'Jawaharlal Nehru University': 'assets/logo/jnu-logo.png',
             'Panjab University, Chandigarh': 'assets/logo/ipu-logo.png', // Using IPU logo as placeholder
             'University of Mumbai': 'assets/logo/ipu-logo.png', // Using IPU logo as placeholder
             'Savitribai Phule Pune University': 'assets/logo/unipune.ico',
             'Banaras Hindu University': 'assets/logo/bhu-logo.png',
             'University of Calcutta': 'assets/logo/calun-Lgo.png',
             'Anna University': 'assets/logo/ANNAUNIVERSITYLOGO.png',
             'University of Hyderabad': 'assets/logo/UoH-log-new3L.png'
 };
 const universityPrincipals = {
             'Guru Gobind Singh Indraprastha University': 'Prof. Mahesh Verma',
             'University of Delhi': 'Prof. Yogesh Singh',
             'Jawaharlal Nehru University': 'Prof. Santishree Dhulipudi Pandit',
             'Panjab University, Chandigarh': 'Prof. Raj Kumar',
             'University of Mumbai': 'Prof. Suhas Pednekar',
             'Savitribai Phule Pune University': 'Prof. Nitin Karmalkar',
             'Banaras Hindu University': 'Prof. Sudhir Kumar Jain',
             'University of Calcutta': 'Prof. Sonali Chakravarti Banerjee',
             'Anna University': 'Prof. R. Velraj',
             'University of Hyderabad': 'Prof. B.J. Rao'
 };

// Optional defaults per university (ID example, class, email domain)
const universityDefaults = {
            'Guru Gobind Singh Indraprastha University': { id: 'IPU23CSE001', className: 'CSE', emailDomain: 'ipu.ac.in' },
            'University of Delhi': { id: 'DU23SCI001', className: 'SCI', emailDomain: 'du.ac.in' },
            'Jawaharlal Nehru University': { id: 'JNU23ART001', className: 'ART', emailDomain: 'jnu.ac.in' },
            'Panjab University, Chandigarh': { id: 'PU23CSC001', className: 'CSC', emailDomain: 'puchd.ac.in' },
            'University of Mumbai': { id: 'MU23ECE001', className: 'ECE', emailDomain: 'mu.ac.in' },
            'Savitribai Phule Pune University': { id: 'SPPU23IT001', className: 'IT', emailDomain: 'unipune.ac.in' },
            'Banaras Hindu University': { id: 'BHU23PHY001', className: 'PHY', emailDomain: 'bhu.ac.in' },
            'University of Calcutta': { id: 'CU23MTH001', className: 'MTH', emailDomain: 'caluniv.ac.in' },
            'Anna University': { id: 'AU23EEE001', className: 'EEE', emailDomain: 'annauniv.edu' },
            'University of Hyderabad': { id: 'UOH23BIO001', className: 'BIO', emailDomain: 'uohyd.ac.in' }
};

 function setWebsiteByCollege(collegeName) {
             const site = universityWebsites[collegeName];
             if (!site) return;
             const websiteInputEl = document.getElementById('websiteInput');
             websiteInputEl.value = site;
             websiteInputEl.dispatchEvent(new Event('input'));
 }
 function setAddressByCollege(collegeName) {
             const addr = universityAddresses[collegeName];
             if (!addr) return;
             const addressInputEl = document.getElementById('addressInput');
             addressInputEl.value = addr;
             addressInputEl.dispatchEvent(new Event('input'));
 }
 function setLogoByCollege(collegeName) {
             const logo = universityLogos[collegeName];
             if (!logo) return;
             const logoEl = document.getElementById('cardLogo');
             logoEl.src = logo;
 }
 function setPrincipalByCollege(collegeName) {
             const principalName = universityPrincipals[collegeName];
             if (!principalName) return;
             const principalNameEl = document.getElementById('cardPrincipalName');
             principalNameEl.textContent = principalName;
             // Keep caption consistent
             const principalCaptionEl = document.getElementById('cardPrincipalCaption');
             if (principalCaptionEl && !principalCaptionEl.textContent) {
                 principalCaptionEl.textContent = 'Authorized by Registrar';
             }
 }
const randomPhotos = [
            'assets/photos/01.jpg',
            'assets/photos/01.jpg',
            'assets/photos/01.jpg'
];
const randomLogos = [
            'https://i.ibb.co.com/1G0wV1Z/dummy-logo.png',
            'https://i.ibb.co.com/Z3WqTcm/photo-2025-08-24-12-43-13.jpg',
            'https://i.ibb.co.com/GvTwszKZ/photo-2025-08-24-12-43-09.jpg'
];
const randomSignatures = [
            'https://i.ibb.co.com/M6Lg5tN/dummy-sign.png',
            'https://i.ibb.co.com/s914F7m5/Signature-PNG-Image-HD.png'
];

// Random Name Generation
const indianMaleNames = [
            'Rohan Sharma',
            'Siddharth Patel',
            'Aditya Singh',
            'Arjun Gupta',
            'Dhruv Kumar',
            'Kabir Khan',
            'Aryan Verma',
            'Vihaan Jain',
            'Ishaan Reddy',
            'Dev Joshi',
            'Krishnan Iyer',
            'Neel Mehta',
            'Aarav Das',
            'Vivaan Singh',
            'Reyansh Chaudhary',
            'Samar Arora',
            'Yash Yadav',
            'Kunal Desai',
            'Anand Sharma',
            'Gautam Mishra',
            'Pranav Sen',
            'Rahul Biswas',
            'Abhishek Roy',
            'Ankit Sharma',
             'Manav Choudhury',
             'Kamrul Hossain',
             'Mehul Chowdhury',
             'Mihir Singh',
             'Naveen Kumar',
             'Suman Chakraborty',
             'Harshit Mehta',
             'Anirban Das',
             'Sourav Banerjee',
             'Vikas Sharma',
             'Ritesh Agarwal',
             'Sumit Ghosh',
             'Amitava Sen',
             'Prakash Jha'
];

function getRandomIndianName() {
            const randomIndex = Math.floor(Math.random() * indianMaleNames.length);
            return indianMaleNames[randomIndex];
}

// Name normalization: convert to Title Case and collapse extra spaces
function formatStudentName(name) {
            return (name || '')
                .trim()
                .replace(/\s+/g, ' ')
                .toUpperCase();
}

function applyDefaultsByCollege(collegeName) {
            const defs = universityDefaults[collegeName];
            if (!defs) return;
            const idEl = document.getElementById('idInput');
            const classEl = document.getElementById('classInput');
            if (defs.id) {
                idEl.value = defs.id;
                idEl.dispatchEvent(new Event('input'));
            }
            if (defs.className) {
                classEl.value = defs.className;
                classEl.dispatchEvent(new Event('input'));
            }
            // Email will be recomputed via updateStudentEmail
}

// Utility function to update text content
function updateCardText(inputId, cardElementId, isDate = false) {
            const inputElement = document.getElementById(inputId);
            const cardElement = document.getElementById(cardElementId);

            const update = () => {
                if (isDate) {
                    const date = new Date(inputElement.value);
                    cardElement.textContent = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
                } else {
                    cardElement.textContent = inputElement.value;
                }
            };
            update();
            inputElement.addEventListener('input', update);
}

// Utility function to handle image uploads and randomization
function handleImage(type) {
            const elementId = type === 'photo' ? 'cardStudentPhoto' : type === 'logo' ? 'cardLogo' : 'cardPrincipalSignature';
            const randomList = type === 'photo' ? randomPhotos : type === 'logo' ? randomLogos : randomSignatures;
            const imgElement = document.getElementById(elementId);
            const randomIndex = Math.floor(Math.random() * randomList.length);
            imgElement.src = randomList[randomIndex];
}

function handleFile(event, targetElementId) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById(targetElementId).src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
}

// Function to create and update email
function getEmailDomainForCurrentCollege() {
            const collegeEl = document.getElementById('collegeNameInput');
            const byDefaults = universityDefaults[collegeEl.value] && universityDefaults[collegeEl.value].emailDomain;
            if (byDefaults) return byDefaults;
            // Fallback to website hostname
            const websiteInputEl = document.getElementById('websiteInput');
            const raw = (websiteInputEl.value || '').trim();
            let url = raw;
            if (!/^https?:\/\//i.test(url)) url = 'https://' + url.replace(/^\/*/, '');
            try {
                const u = new URL(url);
                return u.hostname.replace(/^www\./i, '');
            } catch (_) {
                return raw.replace(/^https?:\/\//i, '').replace(/^www\./i, '') || 'example.edu';
            }
}

function updateStudentEmail() {
            const idInput = document.getElementById('idInput');
            const studentEmailInput = document.getElementById('studentEmailInput');
            const studentId = idInput.value.toLowerCase().replace(/[^a-z0-9]/g, '');
            const domain = getEmailDomainForCurrentCollege();
            studentEmailInput.value = studentId + '@' + domain;
}

document.addEventListener('DOMContentLoaded', () => {
            // Decrypt and display title first
            decryptTitle();
            
            // Auto-update footer year
            const currentYearEl = document.getElementById('currentYear');
            if (currentYearEl) {
                currentYearEl.textContent = new Date().getFullYear();
            }
            // Update all text fields
            updateCardText('collegeNameInput', 'cardCollegeName');
            // Set default college name and support randomization
            const collegeInputEl = document.getElementById('collegeNameInput');
            collegeInputEl.value = 'Guru Gobind Singh Indraprastha University';
            collegeInputEl.dispatchEvent(new Event('input'));
            // Auto-fill website for selected college
            setWebsiteByCollege(collegeInputEl.value);
            setAddressByCollege(collegeInputEl.value);
            setLogoByCollege(collegeInputEl.value);
            setPrincipalByCollege(collegeInputEl.value);
            applyDefaultsByCollege(collegeInputEl.value);
            updateStudentEmail();
            collegeInputEl.addEventListener('input', () => {
                setWebsiteByCollege(collegeInputEl.value);
                setAddressByCollege(collegeInputEl.value);
                setLogoByCollege(collegeInputEl.value);
                setPrincipalByCollege(collegeInputEl.value);
                applyDefaultsByCollege(collegeInputEl.value);
                updateStudentEmail();
            });

            document.getElementById('randomPrincipalNameBtn').addEventListener('click', () => {
                const n = getRandomIndianName();
                const principalNameInput = document.getElementById('principalNameInput');
                principalNameInput.value = n;
                principalNameInput.dispatchEvent(new Event('input'));
            });
            updateCardText('idInput', 'cardID');
            // Mobile: enforce 8 local digits and show with country code: +91 XXXXX-XXX
            const mobileInput = document.getElementById('mobileInput');
            const cardMobile = document.getElementById('cardMobile');
            const syncMobile = () => {
                const local = extractLocalDigits(mobileInput.value);
                const formatted = formatIndianMobileFromDigits(local);
                mobileInput.value = formatted;
                cardMobile.textContent = formatted;
            };
            // Always generate a fresh number on load
            mobileInput.value = formatIndianMobileFromDigits(generateIndianMobileDigits());
            syncMobile();
            mobileInput.addEventListener('input', syncMobile);
            updateCardText('classInput', 'cardClass');
            updateCardText('dobInput', 'cardDOB', true);
            updateCardText('addressInput', 'cardAddress');
            updateCardText('issueDateInput', 'cardIssueDate');
            // Website: show hostname only in preview (e.g., ipu.ac.in)
            const websiteInputEl = document.getElementById('websiteInput');
            const websitePreviewEl = document.getElementById('cardWebsiteText');
            const syncWebsite = () => {
                const raw = websiteInputEl.value.trim();
                let url = raw;
                if (!/^https?:\/\//i.test(url)) {
                    url = 'https://' + url.replace(/^\/*/, '');
                }
                try {
                    const u = new URL(url);
                    websitePreviewEl.textContent = u.hostname.replace(/^www\./i, '');
                } catch (_) {
                    websitePreviewEl.textContent = raw.replace(/^https?:\/\//i, '').replace(/^www\./i, '');
                }
            };
            syncWebsite();
            websiteInputEl.addEventListener('input', syncWebsite);
            updateCardText('nameInput', 'cardName');
            // Set default name to Kamrul Hossain (always uppercase)
            const nameInputEl = document.getElementById('nameInput');
            const cardNameEl = document.getElementById('cardName');
            nameInputEl.value = formatStudentName('Kamrul Hossain');
            nameInputEl.dispatchEvent(new Event('input'));
            // Force uppercase live while typing
            nameInputEl.addEventListener('input', () => {
                const start = nameInputEl.selectionStart;
                const end = nameInputEl.selectionEnd;
                const normalized = formatStudentName(nameInputEl.value);
                if (normalized !== nameInputEl.value) {
                    nameInputEl.value = normalized;
                    // restore caret
                    try { nameInputEl.setSelectionRange(start, end); } catch (_) {}
                }
                if (cardNameEl) cardNameEl.textContent = nameInputEl.value;
            });

            // Initial email update based on default ID
            updateStudentEmail();
            document.getElementById('idInput').addEventListener('input', updateStudentEmail);

            // Principal signature text input → shows text signature, hides image
            const principalNameInput = document.getElementById('principalNameInput');
            principalNameInput.addEventListener('input', () => {
                const signImg = document.getElementById('cardPrincipalSignature');
                const signText = document.getElementById('cardPrincipalName');
                const signCaption = document.getElementById('cardPrincipalCaption');
                if (signImg) signImg.style.display = 'none';
                if (signText) signText.textContent = principalNameInput.value || signText.textContent;
                if (signText) signText.style.display = 'block';
                if (signCaption) signCaption.style.display = 'inline-block';
            });

            // Event listeners for random buttons
            document.getElementById('randomIdBtn').addEventListener('click', () => {
                const randomId = randomIDs[Math.floor(Math.random() * randomIDs.length)];
                document.getElementById('idInput').value = randomId;
                document.getElementById('idInput').dispatchEvent(new Event('input'));
            });
            document.getElementById('randomCollegeBtn').addEventListener('click', () => {
                const randomCollege = universityNames[Math.floor(Math.random() * universityNames.length)];
                collegeInputEl.value = randomCollege;
                collegeInputEl.dispatchEvent(new Event('input'));
                // website will be set by input listener
            });
            document.getElementById('randomMobileBtn').addEventListener('click', () => {
                const randomDigits = generateIndianMobileDigits();
                document.getElementById('mobileInput').value = formatIndianMobileFromDigits(randomDigits);
                document.getElementById('mobileInput').dispatchEvent(new Event('input'));
            });
            document.getElementById('randomAddressBtn').addEventListener('click', () => {
                const randomAddress = randomAddresses[Math.floor(Math.random() * randomAddresses.length)];
                document.getElementById('addressInput').value = randomAddress;
                document.getElementById('addressInput').dispatchEvent(new Event('input'));
            });
            document.getElementById('randomLogoBtn').addEventListener('click', () => handleImage('logo'));
            document.getElementById('randomPhotoBtn').addEventListener('click', () => handleImage('photo'));
            // Keep signature as text by default; Random should not show image
            document.getElementById('randomSignatureBtn').addEventListener('click', () => {
                const signImg = document.getElementById('cardPrincipalSignature');
                const signText = document.getElementById('cardPrincipalName');
                const signCaption = document.getElementById('cardPrincipalCaption');
                if (signImg) signImg.style.display = 'none';
                if (signText) signText.style.display = 'block';
                if (signCaption) signCaption.style.display = 'inline-block';
            });
            document.getElementById('randomNameBtn').addEventListener('click', () => {
                const nameInput = document.getElementById('nameInput');
                nameInput.value = getRandomIndianName();
                nameInput.value = formatStudentName(nameInput.value);
                nameInput.dispatchEvent(new Event('input'));
            });

            // Copy Email Button
            document.getElementById('copyEmailBtn').addEventListener('click', () => {
                const studentEmailInput = document.getElementById('studentEmailInput');
                studentEmailInput.select();
                studentEmailInput.setSelectionRange(0, 99999);
                document.execCommand('copy');
                alert('Email copied to clipboard!');
            });

            // Event listeners for file upload
            document.getElementById('collegeLogoUpload').addEventListener('change', (e) => handleFile(e, 'cardLogo'));
            document.getElementById('studentPhotoUpload').addEventListener('change', (e) => handleFile(e, 'cardStudentPhoto'));
            document.getElementById('principalSignatureUpload').addEventListener('change', (e) => {
                const file = e.target.files && e.target.files[0];
                if (!file) return;
                // Required size constraints (approx): up to 800x300 px, at least 300x90 px, < 1 MB
                const MAX_BYTES = 1 * 1024 * 1024;
                const MIN_W = 300, MIN_H = 90;
                const MAX_W = 800, MAX_H = 300;
                if (file.size > MAX_BYTES) {
                    alert('Signature image too large. Please upload an image under 1 MB.');
                    e.target.value = '';
                    return;
                }
                const reader = new FileReader();
                reader.onload = function(ev) {
                    const tmp = new Image();
                    tmp.onload = function() {
                        const w = tmp.naturalWidth, h = tmp.naturalHeight;
                        if (w < MIN_W || h < MIN_H || w > MAX_W || h > MAX_H) {
                            alert('Signature size required: between ' + MIN_W + 'x' + MIN_H + ' and ' + MAX_W + 'x' + MAX_H + ' pixels.');
                            e.target.value = '';
                            return;
                        }
                        // Valid → set image and toggle visibility
                        const signImg = document.getElementById('cardPrincipalSignature');
                        const signText = document.getElementById('cardPrincipalName');
                        const signCaption = document.getElementById('cardPrincipalCaption');
                        if (signImg) {
                            signImg.src = ev.target.result;
                            signImg.style.display = 'block';
                        }
                        if (signText) signText.style.display = 'none';
                        if (signCaption) signCaption.style.display = 'inline-block';
                    };
                    tmp.onerror = function() {
                        alert('Could not read signature image. Please try a different file.');
                        e.target.value = '';
                    };
                    tmp.src = ev.target.result;
                };
                reader.readAsDataURL(file);
            });

            // Download functionality - JPG only
            document.getElementById('downloadCardButton').addEventListener('click', async () => {
                const card = document.getElementById('idCardPreview');
                const scaleFactor = 4;

                try {
                    const canvas = await html2canvas(card, {
                        scale: scaleFactor,
                        useCORS: true,
                        logging: false,
                        width: card.offsetWidth,
                        height: card.offsetHeight
                    });

                    // JPG Download only
                    const jpgUrl = canvas.toDataURL('image/jpeg', 0.9);
                    const jpgLink = document.createElement('a');
                    jpgLink.href = jpgUrl;
                    
                    // Generate filename from student name and ID
                    const studentName = document.getElementById('nameInput').value || 'Student';
                    const studentId = document.getElementById('idInput').value || 'ID';
                    const firstWord = studentName.split(' ')[0].replace(/[^a-zA-Z0-9]/g, '_');
                    const cleanId = studentId.replace(/[^a-zA-Z0-9]/g, '_');
                    const filename = `${firstWord}_${cleanId}.jpg`;
                    
                    jpgLink.download = filename;
                    document.body.appendChild(jpgLink);
                    jpgLink.click();
                    document.body.removeChild(jpgLink);
                } catch (error) {
                    console.error("Error generating card:", error);
                }
            });
    // Default state on load: hide image signature, show text/caption
    const initSignImg = document.getElementById('cardPrincipalSignature');
    const initSignText = document.getElementById('cardPrincipalName');
    const initSignCaption = document.getElementById('cardPrincipalCaption');
    if (initSignImg) initSignImg.style.display = 'none';
    if (initSignText) initSignText.style.display = 'block';
    if (initSignCaption) initSignCaption.style.display = 'inline-block';
});


