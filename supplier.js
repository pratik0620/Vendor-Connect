// --- Login Redirect ---
(function() {
    const user = JSON.parse(localStorage.getItem('vendorconnect_user') || 'null');
    if (!user || user.role !== 'supplier') {
        window.location.href = 'login.html';
    }
})();
// Language translations for supplier dashboard
const translations = {
    en: {
        welcome: "Welcome",
        supplier_dashboard: "Supplier Dashboard",
        refresh: "Refresh",
        logout: "Logout",
        product_catalog: "Product Catalog",
        add_product: "Add Product",
        product: "Product",
        price: "Price (₹/kg)",
        freshness: "Freshness",
        hygiene_rating: "Hygiene Rating",
        actions: "Actions",
        reviews: "Reviews & Ratings",
        total_reviews: "total reviews",
        vendor_orders: "Vendor Orders",
        pending: "Pending",
        fulfilled: "Fulfilled",
        group_orders: "Group Orders",
        vendor_name: "Vendor Name",
        items: "Items",
        amount: "Amount",
        order_date: "Order Date",
        delivery_date: "Delivery Date",
        status: "Status",
        profile: "Profile & Business Details",
        business_name: "Business Name",
        contact_number: "Contact Number",
        delivery_areas: "Delivery Areas",
        business_hours: "Business Hours",
        hygiene_practices: "Hygiene Practices",
        update_profile: "Update Profile",
        notifications: "Notifications",
        add_new_product: "Add New Product",
        product_name: "Product Name",
        price_per_kg: "Price per kg (₹)",
        fresh: "Fresh (< 24 hours)",
        good: "Good (1-3 days)",
        regular: "Regular (3-7 days)",
        available_quantity: "Available Quantity (kg)",
        cancel: "Cancel",
        save_product: "Save Product",
        verify: "Verify",
        fulfill: "Fulfill",
        complete: "Complete",
        review_from: "Review from",
        days_ago: "days ago",
        ordered_on: "Ordered on",
        delivered_on: "Delivered on",
        delivery_pending: "Delivery Pending",
        new_order: "New Order",
        repeat_order: "Repeat Order",
        vendor_comment: "Vendor Comment",
        group_order: "Group Order",
        vendors: "Vendors",
        total_amount: "Total Amount",
        deadline: "Deadline"
    },
    hi: {
        welcome: "स्वागत है",
        supplier_dashboard: "आपूर्तिकर्ता डैशबोर्ड",
        refresh: "रीफ्रेश करें",
        logout: "लॉगआउट करें",
        product_catalog: "उत्पाद सूची",
        add_product: "उत्पाद जोड़ें",
        product: "उत्पाद",
        price: "मूल्य (₹/किलो)",
        freshness: "ताजगी",
        hygiene_rating: "स्वच्छता रेटिंग",
        actions: "क्रियाएँ",
        reviews: "समीक्षाएँ और रेटिंग",
        total_reviews: "कुल समीक्षाएँ",
        vendor_orders: "विक्रेता के ऑर्डर",
        pending: "लंबित",
        fulfilled: "पूरे किए गए",
        group_orders: "समूह ऑर्डर",
        vendor_name: "विक्रेता का नाम",
        items: "वस्तुएँ",
        amount: "राशि",
        order_date: "ऑर्डर तिथि",
        delivery_date: "डिलीवरी तिथि",
        status: "स्थिति",
        profile: "प्रोफाइल और व्यापार विवरण",
        business_name: "व्यापार का नाम",
        contact_number: "संपर्क नंबर",
        delivery_areas: "डिलीवरी क्षेत्र",
        business_hours: "व्यापार के घंटे",
        hygiene_practices: "स्वच्छता अभ्यास",
        update_profile: "प्रोफाइल अपडेट करें",
        notifications: "सूचनाएँ",
        add_new_product: "नया उत्पाद जोड़ें",
        product_name: "उत्पाद का नाम",
        price_per_kg: "प्रति किलो मूल्य (₹)",
        fresh: "ताजा (< 24 घंटे)",
        good: "अच्छा (1-3 दिवस)",
        regular: "साधारण (3-7 दिवस)",
        available_quantity: "उपलब्ध मात्रा (किलो)",
        cancel: "रद्द करें",
        save_product: "उत्पाद सहेजें",
        verify: "सत्यापित करें",
        fulfill: "पूरा करें",
        complete: "पूर्ण",
        review_from: "से समीक्षा",
        days_ago: "दिन पहले",
        ordered_on: "पर ऑर्डर किया",
        delivered_on: "पर वितरित",
        delivery_pending: "डिलीवरी लंबित",
        new_order: "नया ऑर्डर",
        repeat_order: "दोहराया गया ऑर्डर",
        vendor_comment: "विक्रेता टिप्पणी",
        group_order: "समूह ऑर्डर",
        vendors: "विक्रेता",
        total_amount: "कुल राशि",
        deadline: "समाप्ति तिथि"
    },
    mr: {
        welcome: "स्वागत आहे",
        supplier_dashboard: "पुरवठादार डॅशबोर्ड",
        refresh: "रीफ्रेश करा",
        logout: "लॉगआउट करा",
        product_catalog: "उत्पादन सूची",
        add_product: "उत्पाद जोडा",
        product: "उत्पाद",
        price: "किंमत (₹/किलो)",
        freshness: "ताजेपणा",
        hygiene_rating: "स्वच्छता रेटिंग",
        actions: "कृती",
        reviews: "समीक्षा आणि रेटिंग",
        total_reviews: "एकूण समीक्षा",
        vendor_orders: "विक्रेता ऑर्डर",
        pending: "प्रलंबित",
        fulfilled: "पूर्ण केलेले",
        group_orders: "समूह ऑर्डर",
        vendor_name: "विक्रेता नाव",
        items: "वस्तू",
        amount: "रक्कम",
        order_date: "ऑर्डर तारीख",
        delivery_date: "वितरण तारीख",
        status: "स्थिती",
        profile: "प्रोफाइल आणि व्यवसाय तपशील",
        business_name: "व्यवसाय नाव",
        contact_number: "संपर्क क्रमांक",
        delivery_areas: "वितरण क्षेत्रे",
        business_hours: "व्यवसायाचे तास",
        hygiene_practices: "स्वच्छता पद्धती",
        update_profile: "प्रोफाइल अपडेट करा",
        notifications: "सूचना",
        add_new_product: "नवीन उत्पाद जोडा",
        product_name: "उत्पादाचे नाव",
        price_per_kg: "प्रति किलो किंमत (₹)",
        fresh: "ताजे (< २४ तास)",
        good: "चांगले (१-३ दिवस)",
        regular: "नियमित (३-७ दिवस)",
        available_quantity: "उपलब्ध प्रमाण (किलो)",
        cancel: "रद्द करा",
        save_product: "उत्पाद जतन करा",
        verify: "सत्यापित करा",
        fulfill: "पूर्ण करा",
        complete: "पूर्ण",
        review_from: "कडून समीक्षा",
        days_ago: "दिवसांपूर्वी",
        ordered_on: "वर ऑर्डर केले",
        delivered_on: "वर वितरित",
        delivery_pending: "वितरण प्रलंबित",
        new_order: "नवीन ऑर्डर",
        repeat_order: "पुन्हा ऑर्डर",
        vendor_comment: "विक्रेता टिप्पणी",
        group_order: "समूह ऑर्डर",
        vendors: "विक्रेते",
        total_amount: "एकूण रक्कम",
        deadline: "मुदत"
    }
};

// --- Dashboard State ---
let supplierProducts = [
    { name: "Potato", category: "Vegetable", price: 35, stock: 200, status: "Active", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=60&h=60", description: "Fresh potatoes from local farms." },
    { name: "Tomato", category: "Vegetable", price: 60, stock: 150, status: "Active", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=60&h=60", description: "Juicy red tomatoes." },
    { name: "Onion", category: "Vegetable", price: 40, stock: 300, status: "Low Stock", image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=60&h=60", description: "Crisp onions for all uses." },
    { name: "Capsicum", category: "Vegetable", price: 75, stock: 100, status: "Active", image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=facearea&w=60&h=60", description: "Green capsicum, farm fresh." },
    { name: "Ginger", category: "Spice", price: 120, stock: 80, status: "Active", image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=facearea&w=60&h=60", description: "Aromatic ginger roots." }
];
let selectedProductIndex = null;
let notifications = [
    { icon: "fa-shopping-bag", text: "Rajesh placed a new order worth ₹950.", time: "30 min ago", read: false },
    { icon: "fa-users", text: "New group purchase request for vegetables from 5 vendors.", time: "2 hours ago", read: false },
    { icon: "fa-comment", text: "Anita: 'The tomatoes were exceptionally good this time!'", time: "1 day ago", read: false }
];
let reviews = [
        { name: "Rajesh", rating: 5, text: "Excellent quality vegetables, always fresh.", date: "3 days ago" },
        { name: "Anita", rating: 4, text: "Good service and timely delivery.", date: "1 week ago" },
        { name: "Prakash", rating: 5, text: "Best supplier in the area. Never disappoints.", date: "2 weeks ago" },
        { name: "Sanjay", rating: 4, text: "Quality products at reasonable prices.", date: "2 weeks ago" },
        { name: "Meera", rating: 5, text: "Very reliable and consistent quality.", date: "3 weeks ago" }
];
let pendingOrders = [
    { vendor: "Rajesh", items: "Potato, Onion, Tomato", quantity: "10kg, 5kg, 8kg", date: "Today, 10:30 AM" },
    { vendor: "Anita", items: "Capsicum, Ginger", quantity: "3kg, 1kg", date: "Today, 11:45 AM" }
];
let fulfilledOrders = [
    { vendor: "Prakash", items: "Potato, Onion", amount: "₹850", deliveryDate: "Yesterday", status: "Delivered" },
    { vendor: "Rajesh", items: "Tomato, Capsicum", amount: "₹1,350", deliveryDate: "Oct 15, 2023", status: "Delivered" }
];
let groupOrders = [
    { id: 1, title: "Bulk Vegetable Order", items: ["Potato (150kg)", "Onion (100kg)", "Tomato (80kg)"], vendors: ["Rajesh", "Anita", "Prakash", "+3 more"], totalAmount: "₹15,200", status: "Processing", deadline: "Today, 4 PM" }
];
let profile = {
    name: "Ganesh Trading Co.",
    contact: "+91 98765 43210",
    areas: "Andheri, Bandra, Dadar, Juhu",
    hours: "6:00 AM - 8:00 PM",
    hygiene: "Daily cleaning of storage areas. Temperature controlled storage for perishables. Regular staff hygiene training. FSSAI certified premises."
};

// --- Utility ---
function getStarsHTML(rating) {
    let starsHTML = "";
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    for (let i = 0; i < fullStars; i++) starsHTML += '<i class="fas fa-star"></i> ';
    if (hasHalfStar) starsHTML += '<i class="fas fa-star-half-alt"></i> ';
    for (let i = 0; i < 5 - fullStars - (hasHalfStar ? 1 : 0); i++) starsHTML += '<i class="far fa-star"></i> ';
    return starsHTML;
}

// --- Product Catalog ---
function renderProductsTable() {
    const tbody = $("#supplier-products-table tbody");
    tbody.empty();
    supplierProducts.forEach((p, i) => {
        tbody.append(`
            <tr>
                <td><img src="${p.image}" alt="${p.name}" style="width:48px;height:48px;object-fit:cover;border-radius:8px;"></td>
                <td>${p.name}</td>
                <td>${p.category}</td>
                <td>₹${p.price}</td>
                <td><input type="number" class="form-control form-control-sm product-stock-input" data-index="${i}" value="${p.stock}" min="0" style="width:80px;"></td>
                <td><span class="badge bg-${p.status === "Low Stock" ? "danger" : "success"}">${p.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-outline-secondary me-1 edit-product-btn" data-index="${i}"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-outline-danger delete-product-btn" data-index="${i}"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `);
    });
}

function filterProductsTable() {
    const q = $("#product-search").val().toLowerCase();
    $("#supplier-products-table tbody tr").each(function() {
        const name = $(this).find("td").eq(1).text().toLowerCase();
        $(this).toggle(name.includes(q));
    });
}

// --- Orders ---
function renderPendingOrders() {
    const tbody = $("#pending-orders-table tbody");
    tbody.empty();
    pendingOrders.forEach((o, i) => {
        tbody.append(`
            <tr>
                <td>${o.vendor}</td>
                <td>${o.items}</td>
                <td>${o.quantity}</td>
                <td>${o.date}</td>
                <td>
                    <button class="btn btn-sm btn-outline-info me-1 verify-order-btn" data-index="${i}" title="Verify" data-bs-toggle="tooltip"><i class="fas fa-check"></i></button>
                    <button class="btn btn-sm btn-outline-success fulfill-order-btn" data-index="${i}" title="Fulfill" data-bs-toggle="tooltip"><i class="fas fa-truck"></i></button>
                    <button class="btn btn-sm btn-outline-orange view-order-btn" data-index="${i}" title="View Details" data-bs-toggle="tooltip"><i class="fas fa-eye"></i></button>
                </td>
            </tr>
        `);
    });
}
function renderFulfilledOrders() {
    const tbody = $("#fulfilled-orders-table tbody");
    tbody.empty();
    fulfilledOrders.forEach((o, i) => {
        tbody.append(`
            <tr>
                <td>${o.vendor}</td>
                <td>${o.items}</td>
                <td>${o.amount}</td>
                <td>${o.deliveryDate}</td>
                <td><span class="badge bg-success">${o.status}</span> <button class="btn btn-sm btn-outline-orange ms-2 view-order-btn" data-index="${i}" data-type="fulfilled" title="View Details" data-bs-toggle="tooltip"><i class="fas fa-eye"></i></button></td>
            </tr>
        `);
    });
}
function renderGroupOrders() {
    const list = $("#group-orders-list");
    list.empty();
    groupOrders.forEach((o, idx) => {
        const itemsList = o.items.map(item => `<li>${item}</li>`).join("");
        list.append(`
            <div class="card mb-3">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <strong>${o.title}</strong>
                    <span class="badge bg-primary">${o.status}</span>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="mb-1"><strong>Items:</strong></p>
                            <ul class="ps-3">${itemsList}</ul>
                        </div>
                        <div class="col-md-6">
                            <p class="mb-1"><strong>Vendors:</strong> ${o.vendors.join(", ")}</p>
                            <p class="mb-1"><strong>Total Amount:</strong> ${o.totalAmount}</p>
                            <p class="mb-3"><strong>Deadline:</strong> ${o.deadline}</p>
                            <button class="btn btn-sm btn-success complete-group-btn" data-index="${idx}">Complete</button>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
}

// --- Reviews ---
function renderRecentReviews() {
    const div = $("#recent-reviews");
    div.empty();
    reviews.slice(0, 3).forEach(r => {
        div.append(`
            <div class="review-item mb-3 pb-3 border-bottom">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <strong>Review from ${r.name}</strong>
                    <div class="stars">${getStarsHTML(r.rating)}</div>
                </div>
                <p class="mb-1">${r.text}</p>
                <small class="text-muted">${r.date}</small>
            </div>
        `);
    });
}
function showAllReviewsModal() {
    let html = `<div class="modal fade" id="allReviewsModal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header orange-bg text-white"><h5 class="modal-title">All Reviews</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body">`;
    reviews.forEach(r => {
        html += `<div class="mb-3 pb-3 border-bottom"><div class="d-flex justify-content-between align-items-center mb-1"><strong>Review from ${r.name}</strong><div class="stars">${getStarsHTML(r.rating)}</div></div><p class="mb-1">${r.text}</p><small class="text-muted">${r.date}</small></div>`;
    });
    html += `</div></div></div></div>`;
    $("#allReviewsModal").remove();
    $("body").append(html);
    new bootstrap.Modal(document.getElementById("allReviewsModal")).show();
}

// --- Notifications ---
function renderNotifications() {
    const div = $("#supplier-notifications");
    div.empty();
    notifications.forEach((n, i) => {
        div.append(`
            <div class="notification-item${n.read ? '' : ' bg-light'} d-flex align-items-center mb-2 p-2 rounded">
                <div class="me-3"><i class="fas ${n.icon} fa-lg orange-text"></i></div>
                    <div>
                    <div>${n.text}</div>
                    <small class="text-muted">${n.time}</small>
                </div>
            </div>
        `);
    });
}

// --- Stats & Chart ---
function updateStats() {
    $("#stat-products").text(supplierProducts.length);
    $("#stat-orders").text(pendingOrders.length + fulfilledOrders.length);
    $("#stat-rating").text((reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1));
}
function renderSalesChart() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Sales (kg)',
                data: [120, 150, 90, 180, 200, 170, 140],
                backgroundColor: 'rgba(255, 107, 53, 0.7)'
            }]
        },
        options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    });
}

// --- Profile ---
function renderProfile() {
    $("#business-name").val(profile.name);
    $("#contact-number").val(profile.contact);
    $("#delivery-areas").val(profile.areas);
    $("#business-hours").val(profile.hours);
    $("#hygiene-practices").val(profile.hygiene);
}

// --- Toast Notification ---
function showToast(message, type = 'info') {
    const toastId = 'dashboard-toast';
    $("#" + toastId).remove();
    const color = type === 'success' ? 'bg-success' : type === 'danger' ? 'bg-danger' : 'bg-orange';
    const html = `<div id="${toastId}" class="toast align-items-center text-white ${color} border-0 position-fixed bottom-0 end-0 m-4" role="alert" aria-live="assertive" aria-atomic="true" style="z-index:9999;min-width:220px;">
        <div class="d-flex">
            <div class="toast-body">${message}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>`;
    $("body").append(html);
    const toast = new bootstrap.Toast(document.getElementById(toastId), { delay: 2500 });
    toast.show();
}

// --- Order Details Modal ---
function showOrderDetailsModal(order, type = 'pending') {
    let html = `<div class="modal fade" id="orderDetailsModal" tabindex="-1"><div class="modal-dialog"><div class="modal-content">
        <div class="modal-header orange-bg text-white"><h5 class="modal-title">Order Details</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
        <div class="modal-body">
            <div><strong>Vendor:</strong> ${order.vendor || ''}</div>
            <div><strong>Items:</strong> ${order.items || ''}</div>
            <div><strong>Quantity:</strong> ${order.quantity || order.amount || ''}</div>
            <div><strong>Date:</strong> ${order.date || order.deliveryDate || ''}</div>
            <div><strong>Status:</strong> <span class="badge bg-${type === 'pending' ? 'warning' : 'success'}">${order.status || (type === 'pending' ? 'Pending' : 'Delivered')}</span></div>
        </div>
        <div class="modal-footer">`;
    if (type === 'pending') {
        html += `<button type="button" class="btn btn-info me-2" id="modal-verify-btn">Verify</button><button type="button" class="btn btn-success" id="modal-fulfill-btn">Fulfill</button>`;
    }
    html += `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button></div></div></div></div>`;
    $("#orderDetailsModal").remove();
    $("body").append(html);
    const modal = new bootstrap.Modal(document.getElementById("orderDetailsModal"));
    modal.show();
    // Modal actions
    $("#modal-verify-btn").off().click(function() { showToast('Order verified!', 'success'); modal.hide(); });
    $("#modal-fulfill-btn").off().click(function() { showToast('Order fulfilled!', 'success'); modal.hide(); });
}

// --- Event Listeners ---
$(document).ready(function () {
    renderProductsTable();
    renderPendingOrders();
    renderFulfilledOrders();
    renderGroupOrders();
    renderRecentReviews();
    renderNotifications();
    updateStats();
    renderSalesChart();
    renderProfile();

    // Product search
    $("#product-search").on("input", filterProductsTable);

    // Add product
    $("#add-product-btn").click(function () {
        selectedProductIndex = null;
        $("#product-form")[0].reset();
        $("#productModalLabel").text("Add Product");
        $("#productModal").modal("show");
    });
    // Edit product
    $(document).on("click", ".edit-product-btn", function () {
        selectedProductIndex = $(this).data("index");
        const p = supplierProducts[selectedProductIndex];
        $("#modal-product-name").val(p.name);
        $("#modal-product-category").val(p.category);
        $("#modal-product-price").val(p.price);
        $("#modal-product-stock").val(p.stock);
        $("#modal-product-image").val(p.image);
        $("#modal-product-description").val(p.description);
        $("#productModalLabel").text("Edit Product");
        $("#productModal").modal("show");
    });
    // Save product (add or edit)
    $("#save-product-modal").click(function () {
        const p = {
            name: $("#modal-product-name").val(),
            category: $("#modal-product-category").val(),
            price: parseInt($("#modal-product-price").val()),
            stock: parseInt($("#modal-product-stock").val()),
            image: $("#modal-product-image").val() || 'https://via.placeholder.com/60x60?text=Product',
            description: $("#modal-product-description").val(),
            status: "Active"
        };
        if (p.stock < 20) p.status = "Low Stock";
        if (selectedProductIndex === null) {
            supplierProducts.push(p);
        } else {
            supplierProducts[selectedProductIndex] = p;
        }
        renderProductsTable();
        updateStats();
        $("#productModal").modal("hide");
    });
    // Delete product
    $(document).on("click", ".delete-product-btn", function () {
        const idx = $(this).data("index");
        if (confirm("Delete this product?")) {
            supplierProducts.splice(idx, 1);
            renderProductsTable();
            updateStats();
        }
    });
    // Inline stock editing
    $(document).on("change", ".product-stock-input", function () {
        const idx = $(this).data("index");
        const val = parseInt($(this).val());
        if (!isNaN(val)) {
            supplierProducts[idx].stock = val;
            supplierProducts[idx].status = val < 20 ? "Low Stock" : "Active";
            renderProductsTable();
            updateStats();
        }
    });
    // Reviews modal
    $("#view-all-reviews").click(showAllReviewsModal);
    // Mark all notifications as read
    $("#mark-all-read").click(function () {
        notifications.forEach(n => n.read = true);
        renderNotifications();
    });
    // Profile editing
    $("#edit-profile-btn").click(function () {
        $("#edit-profile-name").val(profile.name);
        $("#edit-profile-contact").val(profile.contact);
        $("#edit-profile-areas").val(profile.areas);
        $("#edit-profile-hours").val(profile.hours);
        $("#edit-profile-hygiene").val(profile.hygiene);
        $("#editProfileModal").modal("show");
    });
    $("#save-profile-modal").click(function () {
        profile.name = $("#edit-profile-name").val();
        profile.contact = $("#edit-profile-contact").val();
        profile.areas = $("#edit-profile-areas").val();
        profile.hours = $("#edit-profile-hours").val();
        profile.hygiene = $("#edit-profile-hygiene").val();
        renderProfile();
        $("#editProfileModal").modal("hide");
        $("#supplier-name").text(profile.name);
    });
});

// --- Event Listeners for Orders ---
$(document).on("click", ".verify-order-btn", function () {
    const idx = $(this).data("index");
    // Mark as verified (for demo, just show alert)
    $(this).removeClass("btn-outline-info").addClass("btn-info").text("Verified").prop("disabled", true);
});
$(document).on("click", ".fulfill-order-btn", function () {
    const idx = $(this).data("index");
    // Move order to fulfilledOrders
    const order = pendingOrders[idx];
    fulfilledOrders.push({
        vendor: order.vendor,
        items: order.items,
        amount: "₹" + (Math.floor(Math.random() * 1000) + 500),
        deliveryDate: "Today",
        status: "Delivered"
    });
    pendingOrders.splice(idx, 1);
    renderPendingOrders();
    renderFulfilledOrders();
    updateStats();
});
$(document).on("click", ".complete-group-btn", function () {
    const idx = $(this).data("index");
    groupOrders[idx].status = "Completed";
    renderGroupOrders();
});

// --- Event Listeners for Order Details and Toasts ---
$(document).on("click", ".view-order-btn", function () {
    const idx = $(this).data("index");
    const type = $(this).data("type") || 'pending';
    if (type === 'pending') showOrderDetailsModal(pendingOrders[idx], 'pending');
    else showOrderDetailsModal(fulfilledOrders[idx], 'fulfilled');
});

// --- Enhance Tooltips ---
$(function () { $("[data-bs-toggle='tooltip']").tooltip(); });

// --- Toast for Product Actions ---
$(document).on("click", ".edit-product-btn", function () { showToast('Edit product modal opened.'); });
$(document).on("click", ".delete-product-btn", function () { showToast('Product deleted.', 'danger'); });
$("#save-product-modal").click(function () { showToast('Product saved!', 'success'); });

// --- Toast for Profile ---
$("#save-profile-modal").click(function () { showToast('Profile updated!', 'success'); });

// --- Toast for Notifications ---
$("#mark-all-read").click(function () { showToast('All notifications marked as read.', 'success'); });

// --- Responsive: Ensure tables are scrollable on mobile ---
$(function () { $(".table-responsive").css('overflow-x', 'auto'); });

// Always working logout button
$(document).on('click', '#supplier-logout-btn', function () {
    localStorage.removeItem('vendorconnect_user');
    window.location.href = 'login.html';
}); 