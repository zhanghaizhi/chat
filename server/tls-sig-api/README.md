see demo

```javascript
var sig = require('tls-sig-api');
var config = {
    "sdk_appid": 1400001052,
    "expire_after": 180 * 24 * 3600,
    "private_key": "ec_key.pem",
    "public_key": "public.pem"
}

var sig = new sig.Sig(config);
console.log(sig.genSig("xiaojun"));
```
