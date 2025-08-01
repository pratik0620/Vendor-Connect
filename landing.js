// Language translations for landing page
const translations = {
    en: {
        welcome_title: "Welcome to VendorConnect",
        welcome_subtitle: "Connecting Street Food Vendors with Suppliers",
        for_vendors: "For Vendors",
        for_suppliers: "For Suppliers",
        vendor_description: "Access your vendor dashboard to manage inventory, compare prices, and connect with suppliers.",
        supplier_description: "Access your supplier dashboard to manage products, handle orders, and grow your business.",
        vendor_dashboard: "Vendor Dashboard",
        supplier_dashboard: "Supplier Dashboard",
        not_logged_in: "Not logged in?",
        login_here: "Login here"
    },
    hi: {
        welcome_title: "वेंडरकनेक्ट में आपका स्वागत है",
        welcome_subtitle: "स्ट्रीट फूड विक्रेताओं को आपूर्तिकर्ताओं से जोड़ना",
        for_vendors: "विक्रेताओं के लिए",
        for_suppliers: "आपूर्तिकर्ताओं के लिए",
        vendor_description: "इन्वेंटरी प्रबंधन, मूल्य तुलना और आपूर्तिकर्ताओं से जुड़ने के लिए अपना विक्रेता डैशबोर्ड एक्सेस करें।",
        supplier_description: "उत्पादों का प्रबंधन, ऑर्डर संभालने और अपना व्यवसाय बढ़ाने के लिए अपना आपूर्तिकर्ता डैशबोर्ड एक्सेस करें।",
        vendor_dashboard: "विक्रेता डैशबोर्ड",
        supplier_dashboard: "आपूर्तिकर्ता डैशबोर्ड",
        not_logged_in: "लॉगिन नहीं किया?",
        login_here: "यहाँ लॉगिन करें"
    },
    mr: {
        welcome_title: "व्हेंडरकनेक्टमध्ये आपले स्वागत आहे",
        welcome_subtitle: "स्ट्रीट फूड विक्रेत्यांना पुरवठादारांशी जोडणे",
        for_vendors: "विक्रेत्यांसाठी",
        for_suppliers: "पुरवठादारांसाठी",
        vendor_description: "इन्वेंटरी व्यवस्थापन, किंमत तुलना आणि पुरवठादारांशी जोडण्यासाठी तुमचा विक्रेता डॅशबोर्ड एक्सेस करा।",
        supplier_description: "उत्पादने व्यवस्थापित करणे, ऑर्डर हाताळणे आणि तुमचा व्यवसाय वाढवण्यासाठी तुमचा पुरवठादार डॅशबोर्ड एक्सेस करा।",
        vendor_dashboard: "विक्रेता डॅशबोर्ड",
        supplier_dashboard: "पुरवठादार डॅशबोर्ड",
        not_logged_in: "लॉगिन केले नाही?",
        login_here: "येथे लॉगिन करा"
    }
};

// Current language
let currentLang = "en";


// Initialize the landing page
$(document).ready(function () {
    // Setup language switcher
    setupLanguageSwitcher();

    // Initialize Bootstrap components
    initBootstrapComponents();

    // Initialize map after everything else
    setTimeout(initMap, 1000);
});

// Map initialization
let map;
let markers = [];

function initMap() {
    // Default to Mumbai coordinates
    const mumbai = [19.0760, 72.8777];
    
    // Initialize Leaflet map
    map = L.map('map').setView(mumbai, 12);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ' OpenStreetMap contributors'
    }).addTo(map);

    // Add sample points of interest
    const points = [
        { name: "Dadar Market", location: [19.0760, 72.8777], type: "market" },
        { name: "Bandra Food Hub", location: [19.0860, 72.8877], type: "food hub" },
        { name: "Andheri Wholesale", location: [19.0660, 72.8677], type: "wholesale" }
    ];

    // Add markers for points
    points.forEach(point => {
        const marker = L.marker(point.location)
            .bindPopup(`<div><strong>${point.name}</strong><br>Type: ${point.type}</div>`)            .addTo(map);

        markers.push(marker);

        // Add point to list
        const pointItem = `<a href="#" class="list-group-item list-group-item-action" 
                              onclick="map.flyTo([${point.location[0]}, ${point.location[1]}]); return false;">
                              <i class="fas fa-map-marker-alt me-2"></i>${point.name}
                              <span class="badge bg-primary float-end">${point.type}</span>
                          </a>`;
        $("#supplier-list").append(pointItem);
    });

    // Update translations for map section
    $(".map-section h2").text(translations[currentLang].nearby_locations);
    $(".supplier-list h5").text(translations[currentLang].points_of_interest);

    // Add language change event listener
    $(".lang-btn").on("click", function() {
        $(".map-section h2").text(translations[currentLang].nearby_locations);
        $(".supplier-list h5").text(translations[currentLang].points_of_interest);
    });
}

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

    // Update specific elements
    if (translations[currentLang]) {
        $(".display-4").text(translations[currentLang].welcome_title);
        $(".lead").text(translations[currentLang].welcome_subtitle);
        
        // Update vendor card
        $(".card:first .card-title").text(translations[currentLang].for_vendors);
        $(".card:first .card-text").text(translations[currentLang].vendor_description);
        $(".card:first .btn").text(translations[currentLang].vendor_dashboard);
        
        // Update supplier card
        $(".card:last .card-title").text(translations[currentLang].for_suppliers);
        $(".card:last .card-text").text(translations[currentLang].supplier_description);
        $(".card:last .btn").text(translations[currentLang].supplier_dashboard);
        
        // Update login link
        $(".text-muted").html(`${translations[currentLang].not_logged_in} <a href="login.html" class="text-decoration-none">${translations[currentLang].login_here}</a>`);
    }
} 