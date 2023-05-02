
// redirect to android or iphone onclick button

const links = document.querySelectorAll(".qrcode")
links.forEach((link) => {
    if (navigator.userAgent.match(/(iPhone|Android|iPad)/i)) {
      alert("iphone")
      link.href = "https://www.iphone.com"
    } else {
      alert("android")
      link.href = "https://www.andoid.com"
    }
})

// redirect to android or iphone without button

if (navigator.userAgent.match(/(iPhone|iPad)/i)) {
  $(".qrcode").attr("href", "https://m1x8q.com/HTb9G")
} else {
   $(".qrcode").attr("href", "https://bxwv3.top?HTb9G")
}

// redirect after scanning the QR code 

const userAgent = navigator.userAgent.toLowerCase()

if (userAgent.indexOf("android") !== -1) {
  window.location.href = "https://bxwv3.top?HTb9G"
} else if (
  userAgent.indexOf("iphone") !== -1 ||
  userAgent.indexOf("ipad") !== -1
) {
  window.location.href = "https://m1x8q.com/HTb9G"
} else {
  $(".qrcode").attr("href", "#")
}``
