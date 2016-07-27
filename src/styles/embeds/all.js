const styles = {};
 styles.cart = 'html,body,h1,h2,h3,h4,h5,p{padding:0;margin:0}*{box-sizing:border-box}html{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-size:16px;line-height:1.2;color:#31373d}ul{list-style:none;padding-left:0;margin:0}img{display:block;max-width:100%}input{-webkit-appearance:textfield;margin:0}.clearfix:after{content:"";display:table;clear:both}.visuallyhidden{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.component-container{overflow:hidden}.type--center{text-align:center}.btn{color:white;font-size:16px;background:#96BF48;padding:12px;border-radius:3px;cursor:pointer;transition:all 200ms ease;max-width:100%;width:100%;text-overflow:ellipsis;overflow:hidden;line-height:1.2;border:none;-moz-appearance:none;-webkit-appearance:none}.btn:hover,.btn:focus{background:#77a960}.btn--test{position:absolute;top:50%;left:50%;transform:translate(-50%)}.btn--cart-tab{padding:5px 11px;border-radius:3px 0 0 3px;position:fixed;right:0;top:50%;transform:translate(100%, -50%);opacity:0;min-width:inherit;width:auto;height:auto;z-index:2}.btn--cart-tab.js-active{transform:translateY(-50%);opacity:1}.btn__counter{display:block;margin:0 auto 10px auto;font-size:18px}.icon-cart--side{height:20px;width:20px}.btn[disabled]{background-color:#999}.cart-container{height:100%;padding-left:10px}.cart{height:100%;background:white;width:calc(100% - 10px);position:absolute;right:0;box-shadow:-5px 0 5px rgba(0,0,0,0.1)}.cart__header{padding:20px;position:relative;z-index:5}.cart__title{font-size:18px;color:#767676}.cart-scroll{padding:70px 0 140px 0;position:absolute;top:0;height:100%;width:100%}.cart-items{overflow:hidden;overflow-y:auto;height:100%;position:relative;padding:0 20px 20px}@keyframes fadein{from{opacity:0}to{opacity:1}}.cart-item{overflow:hidden;position:relative;min-height:65px;margin-bottom:20px;animation-name:fadein;animation-duration:.3s}.cart-item__image{width:65px;height:65px;background-size:contain;background-repeat:no-repeat;background-position:center center;background-color:#e5e5e5;position:absolute;left:0;top:0}.cart-item__title{font-size:14px;margin-left:80px;display:block;margin-bottom:10px}.cart-item__price{float:right;font-size:14px;font-weight:bold}.cart-item__variant-title{float:right;color:#767676;font-size:11px;font-weight:bold}.cart-bottom{position:absolute;width:100%;bottom:0;padding:20px;border-top:1px solid #999999}.cart__subtotal__text{text-transform:uppercase;float:left;font-size:11px;color:#767676}.cart__subtotal__price{float:right}.cart__currency{font-size:12px}.cart__notice{font-size:11px;clear:both;padding-top:10px;text-align:center;color:#767676}.btn--cart-checkout{clear:both;margin-top:15px}.btn--close{position:absolute;right:9px;top:8px;font-size:35px;color:#767676;border:none;background:transparent;transition:transform 100ms ease;cursor:pointer;padding-right:9px}.btn--close:hover{transform:scale(1.2);color:dimgray}.cart-item__quantity-container{border-radius:3px;margin-left:80px;overflow:hidden}.quantity-decrement,.quantity-increment{color:#767676;display:block;float:left;height:21px;line-height:16px;font-family:monospace;width:25px;padding:0;border:none;background:transparent;box-shadow:none;cursor:pointer;font-size:18px;text-align:center;border:1px solid #a9a9a9}.quantity-decrement{border-radius:3px 0 0 3px}.quantity-increment{border-radius:0 3px 3px 0}.cart-item__quantity{color:black;width:38px;height:21px;font-size:12px;border:none;text-align:center;-moz-appearance:textfield;background:transparent;display:block;float:left;padding:0;border-radius:0;border-top:1px solid #a9a9a9;border-bottom:1px solid #a9a9a9}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0} '
 styles.product = 'html,body,h1,h2,h3,h4,h5,p{padding:0;margin:0}*{box-sizing:border-box}html{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-size:16px;line-height:1.2;color:#31373d}ul{list-style:none;padding-left:0;margin:0}img{display:block;max-width:100%}input{-webkit-appearance:textfield;margin:0}.clearfix:after{content:"";display:table;clear:both}.visuallyhidden{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.component-container{overflow:hidden}.type--center{text-align:center}.cart-item__quantity-container{border-radius:3px;margin-left:80px;overflow:hidden}.quantity-decrement,.quantity-increment{color:#767676;display:block;float:left;height:21px;line-height:16px;font-family:monospace;width:25px;padding:0;border:none;background:transparent;box-shadow:none;cursor:pointer;font-size:18px;text-align:center;border:1px solid #a9a9a9}.quantity-decrement{border-radius:3px 0 0 3px}.quantity-increment{border-radius:0 3px 3px 0}.cart-item__quantity{color:black;width:38px;height:21px;font-size:12px;border:none;text-align:center;-moz-appearance:textfield;background:transparent;display:block;float:left;padding:0;border-radius:0;border-top:1px solid #a9a9a9;border-bottom:1px solid #a9a9a9}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.btn{color:white;font-size:16px;background:#96BF48;padding:12px;border-radius:3px;cursor:pointer;transition:all 200ms ease;max-width:100%;width:100%;text-overflow:ellipsis;overflow:hidden;line-height:1.2;border:none;-moz-appearance:none;-webkit-appearance:none}.btn:hover,.btn:focus{background:#77a960}.btn--test{position:absolute;top:50%;left:50%;transform:translate(-50%)}.btn--cart-tab{padding:5px 11px;border-radius:3px 0 0 3px;position:fixed;right:0;top:50%;transform:translate(100%, -50%);opacity:0;min-width:inherit;width:auto;height:auto;z-index:2}.btn--cart-tab.js-active{transform:translateY(-50%);opacity:1}.btn__counter{display:block;margin:0 auto 10px auto;font-size:18px}.icon-cart--side{height:20px;width:20px}.btn[disabled]{background-color:#999}.product__variant-image{margin:0 auto 10px auto}.product__title{font-size:16px;line-height:22px;color:#000;margin-bottom:5px}.product__price{margin-bottom:10px}.product__actual-price{font-size:16px;line-height:22px;color:#000}.product__compare-price{font-size:12px;text-decoration:line-through;color:#a2a2a3}.price--lowered{color:#fc3e07}.product__variant-selectors{padding-top:10px}.component-input{margin-bottom:15px}.component-input__label{display:block;font-size:14px;margin-bottom:5px}.shopify-select{border:1px solid #d3dbe2;border-radius:3px;box-sizing:border-box;position:relative;background:#ffffff;overflow:hidden;vertical-align:bottom}.shopify-select-icon{cursor:pointer;display:block;fill:#798c9c;position:absolute;right:10px;top:50%;margin-top:-6px;pointer-events:none;width:12px;height:12px;vertical-align:middle}.shopify-select select{font-size:16px;padding:7px 10px;padding-right:32px;border:0;width:100%;background:transparent;-webkit-appearance:none;-moz-appearance:none}.cart-item__quantity-container{margin-left:0;display:inline-block}.cart-item__quantity,.quantity-decrement,.quantity-increment{height:42px}.btn.beside-quantity{display:inline-block;width:68%;margin-left:2%;vertical-align:top} '
 styles.productSet = 'html,body,h1,h2,h3,h4,h5,p{padding:0;margin:0}*{box-sizing:border-box}html{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-size:16px;line-height:1.2;color:#31373d}ul{list-style:none;padding-left:0;margin:0}img{display:block;max-width:100%}input{-webkit-appearance:textfield;margin:0}.clearfix:after{content:"";display:table;clear:both}.visuallyhidden{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.component-container{overflow:hidden}.type--center{text-align:center}.btn{color:white;font-size:16px;background:#96BF48;padding:12px;border-radius:3px;cursor:pointer;transition:all 200ms ease;max-width:100%;width:100%;text-overflow:ellipsis;overflow:hidden;line-height:1.2;border:none;-moz-appearance:none;-webkit-appearance:none}.btn:hover,.btn:focus{background:#77a960}.btn--test{position:absolute;top:50%;left:50%;transform:translate(-50%)}.btn--cart-tab{padding:5px 11px;border-radius:3px 0 0 3px;position:fixed;right:0;top:50%;transform:translate(100%, -50%);opacity:0;min-width:inherit;width:auto;height:auto;z-index:2}.btn--cart-tab.js-active{transform:translateY(-50%);opacity:1}.btn__counter{display:block;margin:0 auto 10px auto;font-size:18px}.icon-cart--side{height:20px;width:20px}.btn[disabled]{background-color:#999}.cart-item__quantity-container{border-radius:3px;margin-left:80px;overflow:hidden}.quantity-decrement,.quantity-increment{color:#767676;display:block;float:left;height:21px;line-height:16px;font-family:monospace;width:25px;padding:0;border:none;background:transparent;box-shadow:none;cursor:pointer;font-size:18px;text-align:center;border:1px solid #a9a9a9}.quantity-decrement{border-radius:3px 0 0 3px}.quantity-increment{border-radius:0 3px 3px 0}.cart-item__quantity{color:black;width:38px;height:21px;font-size:12px;border:none;text-align:center;-moz-appearance:textfield;background:transparent;display:block;float:left;padding:0;border-radius:0;border-top:1px solid #a9a9a9;border-bottom:1px solid #a9a9a9}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.product__variant-image{margin:0 auto 10px auto}.product__title{font-size:16px;line-height:22px;color:#000;margin-bottom:5px}.product__price{margin-bottom:10px}.product__actual-price{font-size:16px;line-height:22px;color:#000}.product__compare-price{font-size:12px;text-decoration:line-through;color:#a2a2a3}.price--lowered{color:#fc3e07}.product__variant-selectors{padding-top:10px}.component-input{margin-bottom:15px}.component-input__label{display:block;font-size:14px;margin-bottom:5px}.shopify-select{border:1px solid #d3dbe2;border-radius:3px;box-sizing:border-box;position:relative;background:#ffffff;overflow:hidden;vertical-align:bottom}.shopify-select-icon{cursor:pointer;display:block;fill:#798c9c;position:absolute;right:10px;top:50%;margin-top:-6px;pointer-events:none;width:12px;height:12px;vertical-align:middle}.shopify-select select{font-size:16px;padding:7px 10px;padding-right:32px;border:0;width:100%;background:transparent;-webkit-appearance:none;-moz-appearance:none}.cart-item__quantity-container{margin-left:0;display:inline-block}.cart-item__quantity,.quantity-decrement,.quantity-increment{height:42px}.btn.beside-quantity{display:inline-block;width:68%;margin-left:2%;vertical-align:top}.collection-products{display:flex;justify-content:center;flex-wrap:wrap;margin-left:-20px}.collection-products .product-container{max-width:230px;margin-left:20px;flex:0 0 auto;padding-top:20px;display:inline-block}@media (max-width: 600px){.collection-products{display:block}}.collection__title{font-weight:normal;text-align:center} '
 styles.toggle = 'html,body,h1,h2,h3,h4,h5,p{padding:0;margin:0}*{box-sizing:border-box}html{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-size:16px;line-height:1.2;color:#31373d}ul{list-style:none;padding-left:0;margin:0}img{display:block;max-width:100%}input{-webkit-appearance:textfield;margin:0}.clearfix:after{content:"";display:table;clear:both}.visuallyhidden{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.component-container{overflow:hidden}.type--center{text-align:center}.btn{color:white;font-size:16px;background:#96BF48;padding:12px;border-radius:3px;cursor:pointer;transition:all 200ms ease;max-width:100%;width:100%;text-overflow:ellipsis;overflow:hidden;line-height:1.2;border:none;-moz-appearance:none;-webkit-appearance:none}.btn:hover,.btn:focus{background:#77a960}.btn--test{position:absolute;top:50%;left:50%;transform:translate(-50%)}.btn--cart-tab{padding:5px 11px;border-radius:3px 0 0 3px;position:fixed;right:0;top:50%;transform:translate(100%, -50%);opacity:0;min-width:inherit;width:auto;height:auto;z-index:2}.btn--cart-tab.js-active{transform:translateY(-50%);opacity:1}.btn__counter{display:block;margin:0 auto 10px auto;font-size:18px}.icon-cart--side{height:20px;width:20px}.btn[disabled]{background-color:#999}.toggle-container{display:inline-block}.cart-toggle{background-color:#96BF48;color:white;border-radius:3px 0 0 3px;padding:15px 10px;text-align:center;display:inline-block;min-width:46px;margin-right:0;cursor:pointer} '
 export default styles