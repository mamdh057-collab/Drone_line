 دالة إرسال الطلب عبر الواتساب مع جلب تفاصيل المنتج والمقاس المختار
function orderOnWhatsApp(productName, price, buttonElement) {
     جلب عنصر اختيار المقاس الموجود داخل نفس كارت المنتج
    let productCard = buttonElement.closest('.product-card');
    let sizeSelect = productCard.querySelector('.size-select');
    let selectedSize = sizeSelect  sizeSelect.value  'غير محدد';

     رقم الواتساب الخاص بـ Drone Line (غير الرقم للرقم الحقيقي بتاعك)
    let phoneNumber = 201234567890; 

     صياغة الرسالة الجاهزة
    let message = `مرحباً Drone Line، أرغب في طلب هذا المنتجnn` +
                  `📦 المنتج ${productName}n` +
                  `📏 المقاس ${selectedSize}n` +
                  `💰 السعر ${price}nn` +
                  `برجاء تأكيد الطلب وتفاصيل التوصيل.`;

    let encodedMessage = encodeURIComponent(message);
    
     فتح نافذة الواتساب مباشرة
    window.open(`httpswa.me${phoneNumber}text=${encodedMessage}`, '_blank');
}

 دالة فلترة المنتجات (عرض الكل، الترنجات، أو العبايات)
function filterProducts(category) {
    let cards = document.querySelectorAll('.product-card');
    let buttons = document.querySelectorAll('.filter-btn');

     تغيير شكل الزرار النشط
    buttons.forEach(btn = btn.classList.remove('active'));
    event.target.classList.add('active');

     إظهار أو إخفاء المنتجات حسب الفئة
    cards.forEach(card = {
        let cardCategory = card.getAttribute('data-category');
        if (category === 'all'  cardCategory === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

 دعم فتح الكاتالوج مباشرة على قسم معين لو جاي من رابط الصفحة الرئيسية
window.addEventListener('DOMContentLoaded', () = {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
        let targetBtn = document.querySelector(`.filter-btn[onclick=${categoryParam}]`);
        if (targetBtn) {
            targetBtn.click();
        }
    }
});