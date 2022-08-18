"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/faqs/FAQ.tsx



const FAQ = ({ items  })=>{
    const { 0: show , 1: setShow  } = (0,external_react_.useState)();
    function handleClick(id) {
        setShow(id);
    }
    function contactUsRef(answer, id) {
        if (id === "faq-1") {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    answer,
                    " \xa0",
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/contact#contact-form",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Contact us"
                        })
                    }),
                    "\xa0 page"
                ]
            });
        } else return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: answer
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "questions",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "heading",
                            children: "FAQ"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "my-accordion",
                                className: "accordion",
                                children: items && items.map((item)=>{
                                    if (item.id === show) {
                                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "accordion-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                className: "accordion-header",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "accordion-button",
                                                        type: "button",
                                                        "data-bs-toggle": "collapse",
                                                        "data-bs-target": `#${item.id}`,
                                                        onClick: ()=>handleClick(item.id),
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        id: `${item.id}`,
                                                        className: "accordion-collapse collapse show",
                                                        "data-bs-parent": "#my-accordion",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "accordion-body",
                                                            children: contactUsRef(item.answer, item.id)
                                                        })
                                                    })
                                                ]
                                            })
                                        }, item.id.toString());
                                    } else {
                                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "accordion-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                className: "accordion-header",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "accordion-button collapsed",
                                                        type: "button",
                                                        "data-bs-toggle": "collapse",
                                                        "data-bs-target": `#${item.id}`,
                                                        onClick: ()=>handleClick(item.id),
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        id: `${item.id}`,
                                                        className: "accordion-collapse collapse",
                                                        "data-bs-parent": "#my-accordion",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "accordion-body",
                                                            children: item.answer
                                                        })
                                                    })
                                                ]
                                            })
                                        }, item.id.toString());
                                    }
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const faqs_FAQ = (FAQ);

;// CONCATENATED MODULE: ./components/features/Features.tsx

const Features = ({ items  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "features",
        className: "cards-1",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-lg-12",
                    children: items && items.map((feature)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `card-icon ${feature.iconColor}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: `${feature.icon}`
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "card-body",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "card-title",
                                            children: feature.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: feature.description
                                        })
                                    ]
                                })
                            ]
                        }, `${feature.id.toString()}`);
                    })
                })
            })
        })
    });
};
/* harmony default export */ const features_Features = (Features);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/header/Header.tsx


function BHeader() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "header",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row alig-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-container mt-5",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                    className: "h1-large",
                                    children: [
                                        "Create big groups with",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: " real users"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-large",
                                    children: "Add cheap real members from selected groups"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/images/tgSubs.png",
                            className: "img-fluid",
                            width: 400,
                            height: 400,
                            alt: "tgMembers",
                            priority: true
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/invitation/Invitation.tsx


function Invitation() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "basic-3",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-lg-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "Everything you need to improve and automatize your Telegram experience"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/contact",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "btn-outline-lg page-scroll",
                                children: "Contact us"
                            })
                        })
                    ]
                })
            })
        })
    });
};

// EXTERNAL MODULE: ./components/layouts/Layout.tsx + 2 modules
var Layout = __webpack_require__(9082);
;// CONCATENATED MODULE: ./components/pricing/Pricing.tsx



const Pricing = ({ items  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "cards-2",
        id: "prices",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "heading",
                            children: "Tools for Telegram"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        children: items && items.map((item)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "card",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "card-body",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "card-title",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    className: "decoration-lines",
                                                    src: "/images/arrow.png",
                                                    alt: "decLine",
                                                    width: "30",
                                                    height: "9.75"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: item.name
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    className: "decoration-lines flipped",
                                                    src: "/images/arrow.png",
                                                    alt: "decLine",
                                                    width: "30",
                                                    height: "9.75"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "list-unstyled li-spaced-lg",
                                            children: item.features.map((feature, index)=>{
                                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: feature
                                                }, index);
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "price",
                                            children: [
                                                item.price,
                                                item.name === "Forward messages" ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "/month"
                                                }) : null
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/contact",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "btn-solid-reg",
                                                children: "Contact us"
                                            })
                                        })
                                    ]
                                })
                            }, item.id.toString());
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const pricing_Pricing = (Pricing);

;// CONCATENATED MODULE: ./server/api.ts
const BASE_URL = "https://my-json-server.typicode.com/RiccardoRobb/JSON-server";
const FEATURES_ENDPOINT = "features";
const PRICING_ENDPOINT = "pricing";
const FAQ_ENDPOINT = "faq";
const API_FEATURES = `${BASE_URL}/${FEATURES_ENDPOINT}`;
const API_PRICING = `${BASE_URL}/${PRICING_ENDPOINT}`;
const API_FAQ = `${BASE_URL}/${FAQ_ENDPOINT}`; // ` U+0060

;// CONCATENATED MODULE: ./pages/index.tsx









const Home = ({ features , pricing , faqs  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Telegram utils"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Powerful tools to improve you Telegram experience. Real members for yout Telegram group and Useful BOTs"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BHeader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(features_Features, {
                items: features
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Invitation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(faqs_FAQ, {
                items: faqs
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(pricing_Pricing, {
                items: pricing
            })
        ]
    });
};
async function getStaticProps() {
    try {
        const responseFeatures = await fetch(API_FEATURES);
        const features = await responseFeatures.json();
        const responsePricing = await fetch(API_PRICING);
        const pricing = await responsePricing.json();
        const responseFAQ = await fetch(API_FAQ);
        const faqs = await responseFAQ.json();
        if (!responseFeatures.ok || !responsePricing.ok || !responseFAQ.ok) {
            return {
                notFound: true
            };
        }
        return {
            props: {
                features,
                pricing,
                faqs
            }
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
}
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,675,82], () => (__webpack_exec__(2061)));
module.exports = __webpack_exports__;

})();