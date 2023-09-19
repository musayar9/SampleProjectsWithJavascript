const hour = document.querySelector(".hour")
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const deg = 6
const setClock=()=>{
    let day = new Date();
    let hh = day.getHours() * 30 ;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg

    hour.style.transform = `rotateZ(${hh + mm /12}deg)`
    min.style.transform=`rotateZ(${mm}deg)`
    sec.style.transform=`rotateZ(${ss}deg)`
console.log(hh, mm, ss);
}

setClock()

setInterval(setClock, 1000)

/**day.getHours() ile alınan saat, saat göstergesinin üzerindeki saati temsil eder. Saati 360 derecenin çevresine bölerek,
saat göstergesinin saat okunun hangi açıda olması gerektiğini hesaplayabilirsiniz.
360 derece tam bir daireyi temsil eder, bu nedenle her saat için 360/12 = 30 derece birimlik bir açı kullanılır.
Bu nedenle day.getHours() * 30, saat göstergesinin saat okunun doğru açıda olması için kullanılır.

Benzer şekilde, dakika ve saniye için de benzer hesaplamalar yapılır. Dakikada 60 dakika ve saniyede 60 saniye olduğunu
göz önünde bulundurarak, dakika için day.getMinutes() * 6 ve saniye için day.getSeconds() * 6 hesaplamaları yapılır. 
Bu hesaplamalar, dakika ve saniye oklarının doğru açılarda olmasını sağlar.

Sonuç olarak, kod, saat göstergesinin her saniyede bir güncellenmesini ve mevcut saat, dakika ve saniye değerlerine
göre doğru açılarda tutulmasını sağlar.Bu nedenle setInterval kullanılarak her saniyede bir setClock fonksiyonu çağrılır. */