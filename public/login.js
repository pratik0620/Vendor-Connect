// Language translations for login page
const translations = {
    en: {
        login_title: "Login to VendorConnect",
        username: "Username",
        password: "Password",
        select_role: "Select Role",
        choose_role: "Choose role...",
        vendor: "Vendor",
        supplier: "Supplier",
        login_btn: "Login",
        demo_note: "This is a demo. Any username/password will work."
    },
    hi: {
        login_title: "वेंडरकनेक्ट में लॉगिन करें",
        username: "यूज़रनेम",
        password: "पासवर्ड",
        select_role: "भूमिका चुनें",
        choose_role: "भूमिका चुनें...",
        vendor: "विक्रेता",
        supplier: "आपूर्तिकर्ता",
        login_btn: "लॉगिन करें",
        demo_note: "यह एक डेमो है। कोई भी यूज़रनेम/पासवर्ड काम करेगा।"
    },
    mr: {
        login_title: "व्हेंडरकनेक्टमध्ये लॉगिन करा",
        username: "युजरनेम",
        password: "पासवर्ड",
        select_role: "भूमिका निवडा",
        choose_role: "भूमिका निवडा...",
        vendor: "विक्रेता",
        supplier: "पुरवठादार",
        login_btn: "लॉगिन करा",
        demo_note: "हा एक डेमो आहे. कोणतेही युजरनेम/पासवर्ड चालेल."
    }
};

// Current language
let currentLang = "en";

// Initialize the login page
$(document).ready(function () {
    // Setup language switcher
    setupLanguageSwitcher();

    // Setup login form
    setupLoginForm();

    // Load saved language preference
    loadSavedLanguage();
});

// Language switcher function
function setupLanguageSwitcher() {
    $(".lang-btn").click(function () {
        currentLang = $(this).data("lang");
        $(".lang-btn").removeClass("active");
        $(this).addClass("active");
        updateLanguage();

        // Save language preference
        localStorage.setItem("vendorconnect_lang", currentLang);
    });
}

// Load saved language preference
function loadSavedLanguage() {
    const savedLang = localStorage.getItem("vendorconnect_lang");
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        $(`.lang-btn[data-lang="${currentLang}"]`).click();
    }
}

// Update all text content based on selected language
function updateLanguage() {
    $("[data-i18n]").each(function () {
        const key = $(this).data("i18n");
        if (translations[currentLang] && translations[currentLang][key]) {
            $(this).text(translations[currentLang][key]);
        }
    });
}

// Setup login form
function setupLoginForm() {
    $("#login-form").submit(function (e) {
        e.preventDefault();

        const username = $("#username").val();
        const password = $("#password").val();
        const role = $("#role").val();

        // Simple validation
        if (!username || !password || !role) {
            alert("Please fill in all fields");
            return;
        }

        // Save user data
        const userData = { username, role };
        localStorage.setItem("vendorconnect_user", JSON.stringify(userData));

        // Redirect to appropriate dashboard based on role
        if (role === "vendor") {
            window.location.href = "vendor.html";
        } else {
            window.location.href = "supplier.html";
        }
    });
}