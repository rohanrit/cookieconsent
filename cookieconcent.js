(function () {
     "use strict";

class CookiePlugin {
    constructor(innerHtml) {
        this.cookieAlert = null;
            this.closeCookies = null;
        this.acceptCookies = '.accept-cookies';
        this.innerHtml = innerHtml;
        this.init();
    }

    init() {
        this.cookieAlert = document.querySelector(".cookie-alert");
        if (!this.cookieAlert) {
            this.cookieAlert = document.createElement("div");
            this.cookieAlert.style.cssText = "position: fixed;bottom: 15px;right: 15px;width: 320px;margin: 0 !important;z-index: 999;opacity: 0;transform: translateY(100%);transition: all 500ms ease-out;background: #ffffff;padding: 15px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;border-radius: 5px;"
            this.cookieAlert.className = "cookie-alert";
            this.cookieAlert.innerHTML = this.innerHtml;

if (!this.closeCookies) {
                    this.closeCookies = document.createElement("button");
                    this.closeCookies.setAttribute("type", "button");
                    this.closeCookies.className = "close-cookies";
                    this.closeCookies.style.cssText = "position: absolute;top: 0;right: 0;margin: 10px;font-weight: bold;line-height: 1.4;"
                    this.closeCookies.innerHTML = "<span>x</span>";
                    this.cookieAlert.insertBefore(this.closeCookies, this.cookieAlert.firstChild);
                }

            document.body.appendChild(this.cookieAlert);
        }

        this.acceptCookies = document.querySelector(".accept-cookies");
        this.cookieAlert.offsetHeight;
        if (!this.getCookie("kn-acceptCookies")) {
            this.cookieAlert.style.display = 'block';
            this.cookieAlert.style.transform = 'translateY(0%)';
            this.cookieAlert.style.transitionDelay = '1000ms';
            this.cookieAlert.style.opacity = '1';
        }

        this.acceptCookies.addEventListener("click", this.onAcceptCookies.bind(this));

            this.cookieAlert.addEventListener("click", this.onCloseCookies.bind(this));

    }

        onCloseCookies() {
            this.cookieAlert.style.display = 'none';
            this.cookieAlert.style.transform = 'none';
            this.cookieAlert.style.transitionDelay = '';
            this.cookieAlert.style.opacity = '0';
        }


    onAcceptCookies() {
        this.setCookie("kn-acceptCookies", true, 60);        
        this.cookieAlert.style.display = 'none';       
        this.cookieAlert.style.transform = 'none';
        this.cookieAlert.style.transitionDelay = '';
        this.cookieAlert.style.opacity = '0';
    }

    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}

var plugin = new CookiePlugin(`<div><h5 class="card-title">&#x1F36A; Do you like cookies?</h5><p>We use cookies to ensure you get the best experience on our website.</p><a href="#" class="btn btn-primary btn-sm accept-cookies">Accept</a><a href="http://cookiesandyou.com/" target="_blank" style="margin-left: 10px;">Learn more</a></div>`);

})();
