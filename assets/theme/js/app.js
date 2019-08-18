/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Application: web template v0.0.0.1
    * https://gunessahin.github.io/
    ════════════════════════════════════════════════════════════════════════════════════════════════════
    * Copyright gunessahin@outlook.com.tr
    * Licence (https://github.com/gunessahin)
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/
console.log("Application Start");

/**
 * Sayfa içerisine belgeyi yükler.
 * Belge yüklenmeden önca çaliştırırlır.
 * @param {any} page Yüklenecek, çalıştırılacak belge
 * @param {any} container Yüklenecek tayıyıcı element
 * @param {any} callback Yükleme tamamlandığında çalışacak foksiyon
 */
function RenderPartial(page, container, callback) {
    $(container).load(page, callback);
}

/**
 * Modalı Göster
 * @param {any} element Modal Element Adı
 */
function ShowModal(element) {
    $(element).modal('show');
}

/**
 * Sayfayı Yükle Çalıştır ve Göster
 * @param {any} page Yüklenecek, çalıştırılacak belge
 * @param {any} container Yüklenecek tayıyıcı element
 * @param {any} element Modal Element Adı
 */
function ShowPage(page, container, element) {

    // Belgeyi Sayfa İçine Yükle
    RenderPartial(page, container,

        // Sayfa Yüklendi
        function () {

            // Modalı Göster
            ShowModal(element);
        });
}