# 🎓 EDUID - ELITEKAMRUL ID CARD GENERATOR

A professional, feature-rich ID card generator for educational institutions with a modern, responsive design and advanced customization options.

![ID Card Generator](https://img.shields.io/badge/Status-Live-brightgreen)
![Version](https://img.shields.io/badge/Version-2.0-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Live Demo](https://img.shields.io/badge/Live%20Demo-https://eduid.pages.dev/-blue)

## 🌐 Live Demo

**🚀 Try it now**: [https://eduid.pages.dev/](https://eduid.pages.dev/)

Related tools:
- ELITE GEN: [https://elitegen.pages.dev/](https://elitegen.pages.dev/)
- IP CHECK: [https://ip8.com](https://ip8.com)

Experience the full functionality of the ID Card Generator with all features available online!

## ✨ Features

### 🎨 **Professional Design**
- **Modern UI/UX** with dark theme and elegant styling
- **Responsive Design** optimized for desktop, tablet, and mobile devices
- **Interactive Elements** with hover effects and smooth transitions
- **Custom Fonts** including signature-style fonts for authentic look

### 🏫 **University Integration**
- **Pre-configured Universities** with authentic details
- **Auto-fill Functionality** for websites, addresses, and logos
- **Principal Signatures** with university-specific names
- **Logo Mapping** to local assets for faster loading

### 👤 **Student Information**
- **Smart Name Generation** with uppercase display
- **Mobile Number Formatting** with Indian country code (+91)
- **Photo Upload** with validation and positioning
- **Auto-generated IDs** and email addresses
- **Date of Birth** with default values

### 🖼️ **Advanced Image Handling**
- **High-Quality Export** in JPEG format
- **Custom Filename Generation** (FirstName_ID.jpg)
- **Image Validation** for size and dimensions
- **Local Asset Support** for faster performance

### 🔧 **Technical Features**
- **SEO Optimized** with meta tags and structured data
- **Font Awesome Icons** throughout the interface
- **Tailwind CSS** for utility-first styling
- **Vanilla JavaScript** for optimal performance
- **Cross-browser Compatibility**

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (recommended for full functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kamrullab/eduid.git
   cd eduid
   ```

2. **Set up local server** (recommended)
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Alternative: Direct File Access
Simply open `index.html` in your browser (some features may be limited due to CORS restrictions).

### 🌐 Online Access
**Live Demo**: [https://eduid.pages.dev/](https://eduid.pages.dev/) - No installation required!

## 📁 Project Structure

```
eduid/
├── index.html              # Main application page
├── about.html              # About page with creator info
├── features.html           # Features showcase
├── contact.html            # Contact information
├── README.md               # Project documentation
├── assets/
│   ├── style.css           # Custom styles and animations
│   ├── script.js           # Main application logic
│   ├── photos/             # Student photo assets
│   └── logo/               # University logo assets
└── .gitignore              # Git ignore rules
```

## 🎯 Usage Guide

### 1. **Basic ID Card Generation**
- Enter student name (auto-converts to uppercase)
- Select university from dropdown
- Upload student photo (optional)
- Click "Generate ID Card"

### 2. **Advanced Customization**
- Use "Pick College" for random university selection
- Click "Pick Name" for random principal signature
- Customize mobile number format
- Adjust photo positioning

### 3. **Export Options**
- **Download**: High-quality JPEG export
- **Print**: Direct printing with optimized layout
- **Custom Filename**: Automatic naming (FirstName_ID.jpg)


## 🏫 Supported Universities

- **Guru Gobind Singh Indraprastha University** (Default)
- **Delhi Technological University**
- **Jamia Millia Islamia**
- **University of Delhi**
- **Jawaharlal Nehru University**
- **And many more...**

Each university includes:
- ✅ Official website
- ✅ Complete address
- ✅ University logo
- ✅ Principal signature
- ✅ Auto-generated details

## 🛠️ Customization

### Adding New Universities
Edit `assets/script.js` and add to the `universities` object:

```javascript
const universities = {
    "Your University Name": {
        website: "university.edu",
        address: "Complete Address",
        logo: "assets/logo/university-logo.png",
        principal: "Principal Name"
    }
};
```

### Styling Modifications
- **Colors**: Edit CSS variables in `assets/style.css`
- **Fonts**: Update Google Fonts imports in HTML
- **Layout**: Modify Tailwind classes in HTML files

### Adding Features
- **New Fields**: Add HTML inputs and update JavaScript logic
- **Validation**: Extend validation functions in `script.js`
- **Export Formats**: Modify download functionality

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 60+ | ✅ Full |
| Firefox | 55+ | ✅ Full |
| Safari | 12+ | ✅ Full |
| Edge | 79+ | ✅ Full |
| IE | 11 | ⚠️ Limited |

## 📱 Responsive Design

- **Desktop**: Full-featured experience (1200px+)
- **Tablet**: Optimized layout (768px - 1199px)
- **Mobile**: Touch-friendly interface (320px - 767px)

## 🔒 Security Features

- **Input Validation** for all user inputs
- **Image Size Limits** to prevent abuse
- **XSS Protection** with proper sanitization
- **CORS Handling** for secure file access

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6)
- **Secondary**: Yellow (#F59E0B)
- **Accent**: Green (#10B981)
- **Background**: Dark (#1F2937)
- **Text**: Light (#F9FAFB)

### Typography
- **Headings**: Inter, sans-serif
- **Body**: System fonts
- **Signatures**: Dancing Script, cursive

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines
- Follow existing code style
- Add comments for complex logic
- Test on multiple browsers
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kamrul Hossain**
- **Role**: Full-Stack Developer & Ethical Hacker
- **Email**: engineer@kamrul.com.bd
- **Website**: [www.kamrul.com.bd](https://www.kamrul.com.bd)
- **GitHub**: [@kamrullab](https://github.com/kamrullab)

### Social Media
- **Facebook**: [@elitekamruls](https://facebook.com/elitekamruls)
- **Twitter**: [@elitekamrul](https://twitter.com/elitekamrul)
- **Instagram**: [@elitekamrul](https://instagram.com/elitekamrul)
- **LinkedIn**: [@elitekamrulofficial](https://linkedin.com/in/elitekamrulofficial)
- **YouTube**: [@elitekamrul](https://youtube.com/@elitekamrul)

## 🙏 Acknowledgments

- **ProCloudify** for premium hosting solutions
- **Font Awesome** for beautiful icons
- **Google Fonts** for typography
- **Tailwind CSS** for utility-first styling
- **html2canvas** for image export functionality

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/kamrullab/eduid)
![GitHub forks](https://img.shields.io/github/forks/kamrullab/eduid)
![GitHub issues](https://img.shields.io/github/issues/kamrullab/eduid)
![GitHub pull requests](https://img.shields.io/github/issues-pr/kamrullab/eduid)
![Live Demo](https://img.shields.io/website?url=https://eduid.pages.dev&label=Live%20Demo&color=green)

## 🔮 Roadmap

### Version 2.1 (Planned)
- [ ] Batch ID card generation
- [ ] Template customization
- [ ] Database integration
- [ ] User authentication

### Version 2.2 (Future)
- [ ] API endpoints
- [ ] Mobile app
- [ ] Cloud storage
- [ ] Advanced analytics

## 🐛 Bug Reports

Found a bug? Please report it:

1. **Check existing issues** first
2. **Create a new issue** with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and OS information

## 💡 Feature Requests

Have an idea? We'd love to hear it:

1. **Check existing requests**
2. **Create a new issue** with:
   - Detailed description
   - Use case explanation
   - Potential implementation ideas

## 📞 Support

Need help? Contact us:

- **Email**: engineer@kamrul.com.bd
- **GitHub Issues**: [Create an issue](https://github.com/kamrullab/eduid/issues)
- **Documentation**: [Wiki](https://github.com/kamrullab/eduid/wiki)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

**🚀 [Try Live Demo](https://eduid.pages.dev/) | 📁 [View Source](https://github.com/kamrullab/eduid)**

Made with ❤️ by [Kamrul Hossain](https://github.com/kamrullab)

[![Website](https://img.shields.io/badge/Website-www.kamrul.com.bd-blue)](https://www.kamrul.com.bd)
[![Email](https://img.shields.io/badge/Email-engineer@kamrul.com.bd-red)](mailto:engineer@kamrul.com.bd)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-eduid.pages.dev-green)](https://eduid.pages.dev/)

</div>
