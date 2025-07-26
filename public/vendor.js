// Language translations for vendor dashboard
const translations = {
    en: {
        welcome: "Welcome",
        vendor_dashboard: "Vendor Dashboard",
        refresh: "Refresh",
        logout: "Logout",
        inventory_status: "Inventory Status",
        update_inventory: "Update Inventory",
        product: "Product",
        quantity: "Quantity",
        status: "Status",
        actions: "Actions",
        price_comparison: "Price Comparison",
        item: "Item",
        market_price: "Market Price",
        best_supplier: "Best Supplier",
        best_price: "Best Price",
        nearby_suppliers: "Nearby Suppliers",
        notifications: "Notifications",
        group_purchases: "Group Purchases",
        join: "Join",
        autopay_setup: "Autopay Setup",
        payment_methods: "Payment Methods",
        bank_transfer: "Bank Transfer",
        credit_card: "Credit Card",
        upi: "UPI",
        autopay_settings: "Autopay Settings",
        min_amount: "Minimum Order Amount",
        payment_day: "Payment Day",
        first_day: "First day of month",
        fifteenth_day: "15th of month",
        last_day: "Last day of month",
        low_stock: "Low Stock",
        ok_stock: "OK",
        order: "Order",
        distance: "Distance",
        view_products: "View Products",
        price_drop: "Price Drop",
        new_supplier_offer: "New Supplier Offer",
        govt_scheme: "Government Scheme",
        items_needed: "Items Needed",
        vendors_joined: "Vendors Joined",
        join_group: "Join Group",
        group_purchase_opportunity: "Group Purchase Opportunity",
        discount: "Discount"
    },
    hi: {
        welcome: "स्वागत है",
        vendor_dashboard: "विक्रेता डैशबोर्ड",
        refresh: "रीफ्रेश करें",
        logout: "लॉगआउट करें",
        inventory_status: "इन्वेंटरी स्थिति",
        update_inventory: "इन्वेंटरी अपडेट करें",
        product: "उत्पाद",
        quantity: "मात्रा",
        status: "स्थिति",
        actions: "क्रियाएँ",
        price_comparison: "मूल्य तुलना",
        item: "वस्तु",
        market_price: "बाजार मूल्य",
        best_supplier: "सर्वोत्तम आपूर्तिकर्ता",
        best_price: "सर्वोत्तम मूल्य",
        nearby_suppliers: "आस-पास के आपूर्तिकर्ता",
        notifications: "सूचनाएँ",
        group_purchases: "समूह खरीदारी",
        join: "शामिल हों",
        autopay_setup: "ऑटोपे सेटअप",
        payment_methods: "भुगतान विधि",
        bank_transfer: "बैंक ट्रांसफर",
        credit_card: "क्रेडिट कार्ड",
        upi: "यूपीआई",
        autopay_settings: "ऑटोपे सेटिंग्स",
        min_amount: "न्यूनतम ऑर्डर राशि",
        payment_day: "भुगतान दिन",
        first_day: "महीने का पहला दिन",
        fifteenth_day: "महीने का 15वां दिन",
        last_day: "महीने का अंतिम दिन",
        low_stock: "कम स्टॉक",
        ok_stock: "ठीक है",
        order: "ऑर्डर",
        distance: "दूरी",
        view_products: "उत्पाद देखें",
        price_drop: "मूल्य गिरावट",
        new_supplier_offer: "नए आपूर्तिकर्ता का प्रस्ताव",
        govt_scheme: "सरकारी योजना",
        items_needed: "आवश्यक वस्तुएँ",
        vendors_joined: "शामिल हुए विक्रेता",
        join_group: "समूह में शामिल हों",
        group_purchase_opportunity: "समूह खरीदारी का अवसर",
        discount: "छूट"
    },
    mr: {
        welcome: "स्वागत आहे",
        vendor_dashboard: "विक्रेता डॅशबोर्ड",
        refresh: "रीफ्रेश करा",
        logout: "लॉगआउट करा",
        inventory_status: "इन्वेंटरी स्थिती",
        update_inventory: "इन्वेंटरी अपडेट करा",
        product: "उत्पाद",
        quantity: "प्रमाण",
        status: "स्थिती",
        actions: "कृती",
        price_comparison: "किंमत तुलना",
        item: "वस्तू",
        market_price: "बाजारातील किंमत",
        best_supplier: "सर्वोत्तम पुरवठादार",
        best_price: "सर्वोत्तम किंमत",
        nearby_suppliers: "जवळचे पुरवठादार",
        notifications: "सूचना",
        group_purchases: "समूह खरेदी",
        join: "सामील व्हा",
        autopay_setup: "ऑटोपे सेटअप",
        payment_methods: "पेमेंट पद्धती",
        bank_transfer: "बँक ट्रान्सफर",
        credit_card: "क्रेडिट कार्ड",
        upi: "युपीआय",
        autopay_settings: "ऑटोपे सेटिंग्स",
        min_amount: "किमान ऑर्डर रक्कम",
        payment_day: "पेमेंट दिवस",
        first_day: "महिन्याचा पहिला दिवस",
        fifteenth_day: "महिन्याचा १५ वा दिवस",
        last_day: "महिन्याचा शेवटचा दिवस",
        low_stock: "कमी स्टॉक",
        ok_stock: "ठीक आहे",
        order: "ऑर्डर",
        distance: "अंतर",
        view_products: "उत्पादे पहा",
        price_drop: "किंमत कमी",
        new_supplier_offer: "नवीन पुरवठादार ऑफर",
        govt_scheme: "सरकारी योजना",
        items_needed: "आवश्यक वस्तू",
        vendors_joined: "सामील झालेले विक्रेते",
        join_group: "समूहात सामील व्हा",
        group_purchase_opportunity: "समूह खरेदी संधी",
        discount: "सवलत"
    }
};

// Mock data for vendor dashboard
const mockData = {
    vendors: [
        { id: 1, name: "Rajesh", business: "Rajesh Pav Bhaji", location: "Dadar" },
        { id: 2, name: "Anita", business: "Anita's Chaat Corner", location: "Bandra" },
        { id: 3, name: "Prakash", business: "Prakash Vada Pav", location: "Andheri" }
    ],
    suppliers: [
        {
            id: 1,
            name: "Ganesh Trading Co.",
            location: "Dadar",
            distance: "1.2 km",
            rating: 4.7,
            category: "Vegetables, Spices",
            products: [
                { name: "Potato", price: 35, freshness: "Fresh", hygieneRating: 5 },
                { name: "Tomato", price: 60, freshness: "Fresh", hygieneRating: 5 },
                { name: "Onion", price: 40, freshness: "Good", hygieneRating: 4 }
            ]
        },
        {
            id: 2,
            name: "Mumbai Masala Supply",
            location: "Andheri",
            distance: "3.5 km",
            rating: 4.3,
            category: "Spices, Flours",
            products: [
                { name: "Red Chili Powder", price: 320, freshness: "Good", hygieneRating: 4 },
                { name: "Turmeric Powder", price: 280, freshness: "Good", hygieneRating: 4 },
                { name: "Coriander Powder", price: 220, freshness: "Regular", hygieneRating: 3 }
            ]
        },
        {
            id: 3,
            name: "Fresh Veggie Hub",
            location: "Bandra",
            distance: "2.8 km",
            rating: 4.5,
            category: "Vegetables, Fruits",
            products: [
                { name: "Capsicum", price: 70, freshness: "Fresh", hygieneRating: 5 },
                { name: "Cauliflower", price: 50, freshness: "Fresh", hygieneRating: 4 },
                { name: "Peas", price: 120, freshness: "Fresh", hygieneRating: 5 }
            ]
        }
    ],
    vendorInventory: [
        { name: "Potato", quantity: 8, status: "low" },
        { name: "Tomato", quantity: 12, status: "ok" },
        { name: "Onion", quantity: 15, status: "ok" },
        { name: "Butter", quantity: 5, status: "low" },
        { name: "Pav", quantity: 50, status: "ok" },
        { name: "Coriander", quantity: 2, status: "low" }
    ],
    priceComparison: [
        { item: "Potato", marketPrice: 40, bestSupplier: "Ganesh Trading Co.", bestPrice: 35 },
        { item: "Tomato", marketPrice: 70, bestSupplier: "Fresh Veggie Hub", bestPrice: 65 },
        { item: "Onion", marketPrice: 45, bestSupplier: "Ganesh Trading Co.", bestPrice: 40 },
        { item: "Red Chili Powder", marketPrice: 350, bestSupplier: "Mumbai Masala Supply", bestPrice: 320 },
        { item: "Butter", marketPrice: 580, bestSupplier: "Amul Distributor", bestPrice: 560 }
    ],
    vendorNotifications: [
        { type: "price_drop", title: "Price Drop", message: "Potato prices reduced by 10% at Ganesh Trading Co.", time: "1 hour ago" },
        { type: "new_supplier", title: "New Supplier", message: "New supplier 'Fresh Produce' added near your location.", time: "3 hours ago" },
        { type: "govt_scheme", title: "Govt. Scheme", message: "New subsidy available for street food vendors. Apply before 30th.", time: "1 day ago" }
    ],
    groupPurchases: [
        {
            id: 1,
            items: ["Potato", "Onion", "Tomato"],
            totalQuantity: 150,
            bestSupplier: "Ganesh Trading Co.",
            discount: "15%",
            vendorsJoined: 5,
            deadline: "Today, 6 PM"
        },
        {
            id: 2,
            items: ["Red Chili Powder", "Turmeric Powder", "Garam Masala"],
            totalQuantity: 30,
            bestSupplier: "Mumbai Masala Supply",
            discount: "10%",
            vendorsJoined: 8,
            deadline: "Tomorrow, 12 PM"
        }
    ]
};

// Current language
let currentLang = "en";

// Initialize the vendor dashboard
$(document).ready(function () {
    // Check authentication first
    checkAuthentication();

    // Setup language switcher
    setupLanguageSwitcher();

    // Setup event listeners
    setupEventListeners();

    // Initialize Bootstrap components
    initBootstrapComponents();
});

// Check authentication
function checkAuthentication() {
    const userData = JSON.parse(localStorage.getItem("vendorconnect_user"));
    if (!userData || userData.role !== "vendor") {
        // No user data or wrong role, redirect to login page
        window.location.href = "login.html";
        return;
    }

    // User is authenticated as vendor, show dashboard
    showVendorDashboard(userData.username);
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

    // Load saved language preference
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

// Setup event listeners
function setupEventListeners() {
    // Logout button
    $("#logout-btn").click(function () {
        localStorage.removeItem("vendorconnect_user");
        window.location.href = "login.html";
    });

    // Refresh data button
    $("#refresh-data").click(function () {
        location.reload();
    });

    // Autopay slider value display
    $("#min-amount").on("input", function () {
        $("#min-amount-value").text(`₹${$(this).val()}`);
    });
}

// Initialize Bootstrap components
function initBootstrapComponents() {
    // Initialize any Bootstrap components if needed
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
}

// Show Vendor Dashboard
function showVendorDashboard(username) {
    $("#vendor-dashboard").show();
    $("#vendor-name").text(username);
    
    // Update header link to point to dashboard
    $(".app-logo").attr("href", "vendor.html");

    // Load vendor dashboard data
    loadVendorInventory();
    loadPriceComparison();
    loadSuppliersList();
    loadVendorNotifications();
    loadGroupPurchases();

    // Initialize price comparison chart
    initPriceComparisonChart();
}

// Load vendor inventory
function loadVendorInventory() {
    const inventoryTable = $("#vendor-inventory-table tbody");
    inventoryTable.empty();

    mockData.vendorInventory.forEach(item => {
        const statusClass = item.status === "low" ? "stock-low" : "stock-ok";
        const statusText = item.status === "low" ?
            translations[currentLang].low_stock :
            translations[currentLang].ok_stock;

        inventoryTable.append(`
            <tr>
                <td>${item.name}</td>
                <td>${item.quantity} kg</td>
                <td><span class="${statusClass}">${statusText}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary">
                        ${translations[currentLang].order}
                    </button>
                </td>
            </tr>
        `);
    });
}

// Load price comparison
function loadPriceComparison() {
    const priceTable = $("#price-comparison-table tbody");
    priceTable.empty();

    mockData.priceComparison.forEach(item => {
        const savings = item.marketPrice - item.bestPrice;
        const savingsPercent = Math.round((savings / item.marketPrice) * 100);

        priceTable.append(`
            <tr>
                <td>${item.item}</td>
                <td>₹${item.marketPrice}</td>
                <td>${item.bestSupplier}</td>
                <td>₹${item.bestPrice} <span class="text-success">(-${savingsPercent}%)</span></td>
            </tr>
        `);
    });
}

// Load suppliers list
function loadSuppliersList() {
    const suppliersList = $("#suppliers-list");
    suppliersList.empty();

    mockData.suppliers.forEach(supplier => {
        const starsHTML = getStarsHTML(supplier.rating);

        suppliersList.append(`
            <div class="col-md-6 mb-3">
                <div class="supplier-item p-3 bg-white rounded">
                    <h5>${supplier.name}</h5>
                    <div class="d-flex align-items-center mb-2">
                        <div class="stars me-2">${starsHTML}</div>
                        <span>${supplier.rating}</span>
                    </div>
                    <p class="mb-1"><i class="fas fa-map-marker-alt me-2"></i> ${supplier.location} (${supplier.distance})</p>
                    <p class="mb-2"><i class="fas fa-tag me-2"></i> ${supplier.category}</p>
                    <button class="btn btn-sm btn-outline-primary">
                        <i class="fas fa-eye me-1"></i> ${translations[currentLang].view_products}
                    </button>
                </div>
            </div>
        `);
    });
}

// Load vendor notifications
function loadVendorNotifications() {
    const notificationsDiv = $("#vendor-notifications");
    notificationsDiv.empty();

    mockData.vendorNotifications.forEach(notification => {
        let icon = "fa-bell";
        if (notification.type === "price_drop") icon = "fa-tags";
        if (notification.type === "new_supplier") icon = "fa-store";
        if (notification.type === "govt_scheme") icon = "fa-landmark";

        notificationsDiv.append(`
            <div class="notification-item">
                <div class="d-flex align-items-center">
                    <div class="me-3">
                        <i class="fas ${icon} fa-lg"></i>
                    </div>
                    <div>
                        <h6 class="mb-0">${translations[currentLang][notification.type]}</h6>
                        <p class="mb-0">${notification.message}</p>
                        <small class="text-muted">${notification.time}</small>
                    </div>
                </div>
            </div>
        `);
    });
}

// Load group purchases
function loadGroupPurchases() {
    const groupPurchasesDiv = $("#group-purchases");
    groupPurchasesDiv.empty();

    mockData.groupPurchases.forEach(purchase => {
        groupPurchasesDiv.append(`
            <div class="group-purchase-item mb-3">
                <h5 class="mb-2">${translations[currentLang].group_purchase_opportunity}</h5>
                <p class="mb-1"><strong>${translations[currentLang].items_needed}:</strong> ${purchase.items.join(", ")}</p>
                <p class="mb-1"><strong>${translations[currentLang].vendors_joined}:</strong> ${purchase.vendorsJoined}</p>
                <p class="mb-1"><strong>${translations[currentLang].best_supplier}:</strong> ${purchase.bestSupplier}</p>
                <p class="mb-2"><strong>${translations[currentLang].discount}:</strong> ${purchase.discount}</p>
                <div class="d-flex align-items-center justify-content-between">
                    <small class="text-danger"><i class="far fa-clock me-1"></i> ${purchase.deadline}</small>
                    <button class="btn btn-sm btn-primary">
                        ${translations[currentLang].join_group}
                    </button>
                </div>
            </div>
        `);
    });
}

// Helper function to generate HTML for star ratings
function getStarsHTML(rating) {
    let starsHTML = "";
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i> ';
    }

    // Add half star if needed
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i> ';
    }

    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i> ';
    }

    return starsHTML;
}

// Initialize price comparison chart
function initPriceComparisonChart() {
    const ctx = document.getElementById('priceComparisonChart').getContext('2d');

    // Prepare data from mockData
    const items = mockData.priceComparison.map(item => item.item);
    const marketPrices = mockData.priceComparison.map(item => item.marketPrice);
    const bestPrices = mockData.priceComparison.map(item => item.bestPrice);

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: items,
            datasets: [
                {
                    label: 'Market Price',
                    backgroundColor: '#FF9E68',
                    data: marketPrices
                },
                {
                    label: 'Best Supplier Price',
                    backgroundColor: '#2EC4B6',
                    data: bestPrices
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Price Comparison (₹ per kg/unit)'
                },
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Price (₹)'
                    }
                }
            }
        }
    });
} 