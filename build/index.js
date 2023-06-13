var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react"), import_react5 = require("react");

// app/components/navegacion.jsx
var import_react2 = require("@remix-run/react");

// public/img/carrito.png
var carrito_default = "/build/_assets/carrito-2445OMQO.png";

// app/components/navegacion.jsx
var import_jsx_runtime2 = require("react/jsx-runtime"), Navegacion = () => {
  let location = (0, import_react2.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("nav", { className: "navegacion", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react2.Link,
      {
        to: "/",
        className: location.pathname === "/" ? "active" : "",
        children: "Inicio"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react2.Link,
      {
        to: "/nosotros",
        className: location.pathname === "/nosotros" ? "active" : "",
        children: "Nosotros"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react2.Link,
      {
        to: "/tienda",
        className: location.pathname === "/tienda" ? "active" : "",
        children: "Tienda"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react2.Link,
      {
        to: "/posts",
        className: location.pathname === "/posts" ? "active" : "",
        children: "Blog"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react2.Link,
      {
        to: "/carrito",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: carrito_default, alt: "Carrito de compras" })
      }
    )
  ] });
}, navegacion_default = Navegacion;

// app/components/footer.jsx
var import_jsx_runtime3 = require("react/jsx-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "contenedor contenido", children: [
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(navegacion_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { className: "copyright", children: [
    "Todos los derechos reservados - Jake Fernandez ",
    (/* @__PURE__ */ new Date()).getFullYear()
  ] })
] }) }), footer_default = Footer;

// app/components/header.jsx
var import_react3 = require("@remix-run/react");

// public/img/logo.svg
var logo_default = "/build/_assets/logo-YZ2KDQEU.svg";

// app/components/header.jsx
var import_jsx_runtime4 = require("react/jsx-runtime"), Header = () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "contenedor barra", children: [
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Link, { className: "logo", to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "img",
    {
      alt: "Imagen logotipo",
      className: "logo",
      src: logo_default
    }
  ) }),
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(navegacion_default, {})
] }) }), header_default = Header;

// app/styles/index.css
var styles_default = "/build/_assets/index-ZSV5EXIL.css";

// app/styles/normalize.css
var normalize_default = "/build/_assets/normalize-6MPO5YKD.css";

// app/root.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function meta() {
  return [
    {
      charset: "utf-8",
      title: "GuitarLA - Remix",
      viewport: "width=device-width,initial-scale=1"
    }
  ];
}
function links() {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
    },
    {
      rel: "stylesheet",
      href: normalize_default
    },
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
}
function App() {
  let carritoLS = typeof window < "u" ? JSON.parse(localStorage.getItem("carrito")) ?? [] : null, [carrito, setCarrito] = (0, import_react5.useState)(carritoLS);
  return (0, import_react5.useEffect)(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_react4.Outlet,
    {
      context: {
        agregarCarrito: (guitarra) => {
          if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
            let carritoActualizado = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
            setCarrito(carritoActualizado);
          } else
            setCarrito([...carrito, guitarra]);
        },
        carrito,
        actualizarCantidad: (guitarra) => {
          let carritoActualizado = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
          setCarrito(carritoActualizado);
        },
        eliminarGuitarra: (id) => {
          let carritoActualizado = carrito.filter((guitarraState) => guitarraState.id != id);
          setCarrito(carritoActualizado);
        }
      }
    }
  ) });
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(header_default, {}),
      children,
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(footer_default, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Scripts, {}),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.LiveReload, {})
  ] });
}
function CatchBoundary() {
  let error = (0, import_react4.useRouteError)();
  if ((0, import_react4.isRouteErrorResponse)(error))
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Document, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "error", children: [
        error.status,
        " ",
        error.statusText
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Link, { className: "error_enlace", to: "/", children: "Deseas ir a la pagina de incio?" })
    ] });
}
function ErrorBoundary() {
  let error = (0, import_react4.useRouteError)();
  if ((0, import_react4.isRouteErrorResponse)(error))
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Document, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "error", children: [
        error.status,
        " ",
        error.statusText
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Link, { className: "error_enlace", to: "/", children: "Deseas ir a la pagina de incio?" })
    ] });
}

// app/routes/guitarras.$guitarraUrl.jsx
var guitarras_guitarraUrl_exports = {};
__export(guitarras_guitarraUrl_exports, {
  default: () => guitarras_guitarraUrl_default,
  links: () => links2,
  loader: () => loader,
  meta: () => meta2
});
var import_react6 = require("@remix-run/react"), import_react7 = require("react");

// app/models/guitarras.server.js
async function getGuitarras() {
  return await (await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)).json();
}
async function getGuitarra(url) {
  return await (await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)).json();
}

// app/styles/guitarras.css
var guitarras_default = "/build/_assets/guitarras-Y4E47MEC.css";

// app/routes/guitarras.$guitarraUrl.jsx
var import_jsx_runtime6 = require("react/jsx-runtime");
async function loader({ params }) {
  let { guitarraUrl } = params, guitarra = await getGuitarra(guitarraUrl);
  if (guitarra.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Guitarra No encontrada"
    });
  return guitarra;
}
function meta2({ data }) {
  if (!data || !data.data || data.data.length === 0)
    return [
      {
        title: "GuitarLA - Guitarra no encontrada"
      }
    ];
  if (data.data.length > 0)
    return [
      {
        title: `GuitarLA - ${data.data[0].attributes.nombre}`
      }
    ];
}
function links2() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    }
  ];
}
var Guitarra = () => {
  let [cantidad, setCantidad] = (0, import_react7.useState)(0), { agregarCarrito } = (0, import_react6.useOutletContext)(), guitarra = (0, import_react6.useLoaderData)(), { nombre, precio, descipcion, imagen } = guitarra.data[0].attributes, handleSubmit = (e) => {
    if (e.preventDefault(), cantidad < 1) {
      alert("Debes seleccionar una cantidad");
      return;
    }
    let guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data[0].attributes.url,
      nombre,
      precio,
      cantidad
    };
    agregarCarrito(guitarraSeleccionada);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("main", { className: "contenedor guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { className: "imagen", src: imagen.data[0].attributes.url, alt: `imagen de la guitarra ${nombre}` }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: nombre }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "texto", children: descipcion }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: "precio", children: [
        "$",
        precio
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("form", { onSubmit: handleSubmit, className: "formulario", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", { htmlFor: "cantidad", children: "Cantidad" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          "select",
          {
            onChange: (e) => setCantidad(parseInt(e.target.value)),
            name: "cantidad",
            id: "cantidad",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "0", children: "-- Seleccione --" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "1", children: "1" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "2", children: "2" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "3", children: "3" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "4", children: "4" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "5", children: "5" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "input",
          {
            type: "submit",
            value: "Agregar al carrito"
          }
        )
      ] })
    ] })
  ] });
}, guitarras_guitarraUrl_default = Guitarra;

// app/routes/blogs.$blogUrl.jsx
var blogs_blogUrl_exports = {};
__export(blogs_blogUrl_exports, {
  default: () => blogs_blogUrl_default,
  links: () => links3,
  loader: () => loader2,
  meta: () => meta3
});
var import_react8 = require("@remix-run/react");

// app/models/posts.server.js
async function getPosts() {
  return await (await fetch(`${process.env.API_URL}/blogs?populate=imagen`)).json();
}
async function getPost(url) {
  return console.log("URL: ", url), await (await fetch(`${process.env.API_URL}/blogs?filters[url]=${url}&populate=imagen`)).json();
}

// app/styles/blog.css
var blog_default = "/build/_assets/blog-HYVCGYWI.css";

// app/utils/helpers.js
var formatearFecha = (fecha) => {
  let fechaNueva = new Date(fecha), opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

// app/routes/blogs.$blogUrl.jsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function meta3({ data }) {
  return data ? [
    {
      title: `GuitarLA - ${data.data[0].attributes.titulo}`
    }
  ] : (console.log("data del meta: ", data), [
    {
      title: "GuitarLA - Entrada no encontrada"
    }
  ]);
}
function links3() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
async function loader2({ params }) {
  let { blogUrl } = params, post = await getPost(blogUrl);
  if (post.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada"
    });
  return post;
}
var Blogs = () => {
  let post = (0, import_react8.useLoaderData)(), { titulo, contenido, updatedAt, imagen } = post.data[0].attributes;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("article", { className: " contenedor post mt-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { className: "imagen", src: imagen.data[0].attributes.formats.medium.url, alt: `Imagen blog ${titulo}` }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { children: titulo }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "fecha", children: formatearFecha(updatedAt) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "texto", children: contenido })
    ] })
  ] });
}, blogs_blogUrl_default = Blogs;

// app/routes/nosotros.jsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => nosotros_default3,
  links: () => links4,
  meta: () => meta4
});

// public/img/nosotros.jpg
var nosotros_default = "/build/_assets/nosotros-55PFFMUZ.jpg";

// app/styles/nosotros.css
var nosotros_default2 = "/build/_assets/nosotros-WXPHAI2E.css";

// app/routes/nosotros.jsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function meta4() {
  return [
    {
      title: "GuitarLA - Nosotros",
      description: "Venta de guitarras, blog de musica"
    }
  ];
}
function links4() {
  return [
    {
      rel: "stylesheet",
      href: nosotros_default2
    },
    {
      rel: "preload",
      href: nosotros_default,
      as: "image"
    }
  ];
}
var Nosotros = () => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("main", { className: "contenedor nosotros", children: [
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "heading", children: "Nosotros" }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "contenido", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("img", { src: nosotros_default, alt: "Imagen nosotros" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, accusamus in voluptate debitis odit libero impedit unde animi architecto dolore iure, magni ipsam porro voluptas nisi explicabo consectetur eum expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, accusamus in voluptate debitis odit libero impedit unde animi architecto dolore iure, magni ipsam porro voluptas nisi explicabo consectetur eum expedita!" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, accusamus in voluptate debitis odit libero impedit unde animi architecto dolore iure, magni ipsam porro voluptas nisi explicabo consectetur eum expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, accusamus in voluptate debitis odit libero impedit unde animi architecto dolore iure, magni ipsam porro voluptas nisi explicabo consectetur eum expedita!" })
    ] })
  ] })
] }), nosotros_default3 = Nosotros;

// app/routes/carrito.jsx
var carrito_exports = {};
__export(carrito_exports, {
  default: () => carrito_default3,
  links: () => links5,
  meta: () => meta5
});
var import_react9 = require("@remix-run/react"), import_react10 = require("react"), import_remix_utils = require("remix-utils");

// app/styles/carrito.css
var carrito_default2 = "/build/_assets/carrito-FD3PL4O6.css";

// app/routes/carrito.jsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function links5() {
  return [
    {
      rel: "stylesheet",
      href: carrito_default2
    }
  ];
}
function meta5() {
  return [
    {
      title: "GuitarLA - Carrito",
      description: "Venta de guitarras, musica, blog, carrito de compras, tienda"
    }
  ];
}
function Carrito() {
  let [total, setTotal] = (0, import_react10.useState)(0), { carrito, actualizarCantidad, eliminarGuitarra } = (0, import_react9.useOutletContext)();
  return console.log(carrito), (0, import_react10.useEffect)(() => {
    let calculoTotal = carrito.reduce((total2, producto) => total2 + producto.cantidad * producto.precio, 0);
    setTotal(calculoTotal);
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_remix_utils.ClientOnly, { fallback: "cargando...", children: () => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("main", { className: "contenedor", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h1", { className: "heading", children: "Carrito de compras" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "carrito", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { children: "Articulos" }),
        (carrito == null ? void 0 : carrito.length) === 0 ? "Carrito Vacio" : carrito == null ? void 0 : carrito.map(
          (producto) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
            "div",
            {
              className: "producto",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { src: producto.imagen, alt: `imagen del producto ${producto.nombre}` }) }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "nombre", children: producto.nombre }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { children: [
                    "Cantidad: ",
                    producto.cantidad
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                    "select",
                    {
                      value: producto.cantidad,
                      className: "select",
                      onChange: (e) => actualizarCantidad({
                        cantidad: +e.target.value,
                        id: producto.id
                      }),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "1", children: "1" }),
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "2", children: "2" }),
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "3", children: "3" }),
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "4", children: "4" }),
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "5", children: "5" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "precio", children: [
                    "$ ",
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: producto.precio })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "subtotal", children: [
                    "Subtotal: $ ",
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: producto.cantidad * producto.precio })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "btn_eliminar",
                    onClick: () => eliminarGuitarra(producto.id),
                    children: "X"
                  }
                )
              ]
            },
            producto.id
          )
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("aside", { className: "resumen", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { children: "Resumen del Pedido" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { children: [
          "Total a pagar: $",
          total
        ] })
      ] })
    ] })
  ] }) });
}
var carrito_default3 = Carrito;

// app/routes/tienda.jsx
var tienda_exports = {};
__export(tienda_exports, {
  default: () => tienda_default,
  links: () => links6,
  loader: () => loader3,
  meta: () => meta6
});
var import_react12 = require("@remix-run/react");

// app/components/guitarra.jsx
var import_react11 = require("@remix-run/react"), import_jsx_runtime10 = require("react/jsx-runtime"), Guitarra2 = ({ guitarra }) => {
  let { descipcion, imagen, precio, url, nombre } = guitarra;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", { src: imagen.data[0].attributes.formats.medium.url, alt: `Imagen guitarra ${nombre}` }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { children: nombre }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "descripcion", children: descipcion }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "precio", children: [
        "$",
        precio
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        import_react11.Link,
        {
          className: "enlace",
          to: `/guitarras/${url}`,
          children: "Ver producto"
        }
      )
    ] })
  ] });
}, guitarra_default = Guitarra2;

// app/components/listado-guitarras.jsx
var import_jsx_runtime11 = require("react/jsx-runtime"), ListadoGuitarras = ({ guitarras }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "heading", children: "Nuestra Coleccion" }),
  guitarras.length && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "guitarras-grid", children: guitarras.map((guitarra) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    guitarra_default,
    {
      guitarra: guitarra == null ? void 0 : guitarra.attributes
    },
    guitarra.id
  )) })
] }), listado_guitarras_default = ListadoGuitarras;

// app/routes/tienda.jsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function meta6() {
  return [
    {
      title: "GuitarLA -Tienda Guitarras",
      description: "GuitarLA - Nuestra coleccion de guitarras"
    }
  ];
}
function links6() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    }
  ];
}
async function loader3() {
  return (await getGuitarras()).data;
}
var Tienda = () => {
  let guitarras = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    listado_guitarras_default,
    {
      guitarras
    }
  ) });
}, tienda_default = Tienda;

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  links: () => links7,
  loader: () => loader4,
  meta: () => meta7
});
var import_react_router = require("react-router");

// app/components/curso.jsx
var import_jsx_runtime13 = require("react/jsx-runtime"), Curso = ({ curso }) => {
  let { contenido, imagen, titulo } = curso;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("section", { className: "curso", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("style", { jsx: "true", children: `
            .curso{
                background-image: linear-gradient(to right,
            rgb(0 0 0 /.65), rgb(0 0 0 /.7)), url(${imagen.data[0].attributes.url}); 
            }
        ` }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "contenedor curso-grid", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h2", { className: "heading", children: titulo }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "texto", children: contenido })
    ] }) })
  ] });
}, curso_default = Curso;

// app/components/post.jsx
var import_react13 = require("@remix-run/react");
var import_jsx_runtime14 = require("react/jsx-runtime"), Post = ({ post }) => {
  let { id } = post, { contenido, imagen, titulo, url, publishedAt } = post.attributes;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("article", { className: "post", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { className: "imagen", src: imagen.data[0].attributes.formats.small.url, alt: `Imagen blog ${titulo}` }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { children: titulo }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "fecha", children: formatearFecha(publishedAt) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "resumen", children: contenido }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react13.Link, { className: "enlace", to: `/blogs/${url}`, children: "Leer Post" })
    ] })
  ] });
}, post_default = Post;

// app/components/listado-posts.jsx
var import_jsx_runtime15 = require("react/jsx-runtime"), ListadoPosts = ({ posts }) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "heading", children: "Blog" }),
  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "blog", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    post_default,
    {
      post
    },
    post.id
  )) })
] }), listado_posts_default = ListadoPosts;

// app/models/curso.server.js
async function getCurso() {
  return (await fetch(`${process.env.API_URL}/curso?populate=imagen`)).json();
}

// app/styles/curso.css
var curso_default2 = "/build/_assets/curso-BJPMRMPU.css";

// app/routes/_index.jsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function meta7() {
}
function links7() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    },
    {
      rel: "stylesheet",
      href: blog_default
    },
    {
      rel: "stylesheet",
      href: curso_default2
    }
  ];
}
async function loader4() {
  let [guitarras, posts, curso] = await Promise.all(
    [
      getGuitarras(),
      getPosts(),
      getCurso()
    ]
  );
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  };
}
var Index = () => {
  let { guitarras, posts, curso } = (0, import_react_router.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      listado_guitarras_default,
      {
        guitarras
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      curso_default,
      {
        curso: curso.attributes
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("section", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      listado_posts_default,
      {
        posts
      }
    ) })
  ] });
}, index_default = Index;

// app/routes/posts.jsx
var posts_exports = {};
__export(posts_exports, {
  default: () => posts_default,
  links: () => links8,
  loader: () => loader5,
  meta: () => meta8
});
var import_react14 = require("@remix-run/react");
var import_jsx_runtime17 = require("react/jsx-runtime");
function meta8({ data }) {
  return [
    {
      title: "GuitarLA - Nuestro Blog"
    }
  ];
}
function links8() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
async function loader5() {
  let posts = await getPosts();
  return console.log(posts), posts.data;
}
var Posts = () => {
  let posts = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    listado_posts_default,
    {
      posts
    }
  ) });
}, posts_default = Posts;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-GAYVIQWZ.js", imports: ["/build/_shared/chunk-2KN63AVI.js", "/build/_shared/chunk-5XCBIPQZ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-KYX2RJ3M.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-WI7UR6BG.js", imports: ["/build/_shared/chunk-6622AZ5F.js", "/build/_shared/chunk-UT3B5KWL.js", "/build/_shared/chunk-NCQLEDNQ.js", "/build/_shared/chunk-4LHKQDAR.js", "/build/_shared/chunk-T33KRNZB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blogs.$blogUrl": { id: "routes/blogs.$blogUrl", parentId: "root", path: "blogs/:blogUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/blogs.$blogUrl-NQHNO56W.js", imports: ["/build/_shared/chunk-NCQLEDNQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/carrito": { id: "routes/carrito", parentId: "root", path: "carrito", index: void 0, caseSensitive: void 0, module: "/build/routes/carrito-MHQIB6VT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras.$guitarraUrl": { id: "routes/guitarras.$guitarraUrl", parentId: "root", path: "guitarras/:guitarraUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras.$guitarraUrl-SALAKRTD.js", imports: ["/build/_shared/chunk-UT3B5KWL.js", "/build/_shared/chunk-T33KRNZB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-R76ON2IO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts": { id: "routes/posts", parentId: "root", path: "posts", index: void 0, caseSensitive: void 0, module: "/build/routes/posts-G7Y3P3I4.js", imports: ["/build/_shared/chunk-6622AZ5F.js", "/build/_shared/chunk-NCQLEDNQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tienda": { id: "routes/tienda", parentId: "root", path: "tienda", index: void 0, caseSensitive: void 0, module: "/build/routes/tienda-QSR65T5E.js", imports: ["/build/_shared/chunk-4LHKQDAR.js", "/build/_shared/chunk-T33KRNZB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "78e49de5", hmr: void 0, url: "/build/manifest-78E49DE5.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/guitarras.$guitarraUrl": {
    id: "routes/guitarras.$guitarraUrl",
    parentId: "root",
    path: "guitarras/:guitarraUrl",
    index: void 0,
    caseSensitive: void 0,
    module: guitarras_guitarraUrl_exports
  },
  "routes/blogs.$blogUrl": {
    id: "routes/blogs.$blogUrl",
    parentId: "root",
    path: "blogs/:blogUrl",
    index: void 0,
    caseSensitive: void 0,
    module: blogs_blogUrl_exports
  },
  "routes/nosotros": {
    id: "routes/nosotros",
    parentId: "root",
    path: "nosotros",
    index: void 0,
    caseSensitive: void 0,
    module: nosotros_exports
  },
  "routes/carrito": {
    id: "routes/carrito",
    parentId: "root",
    path: "carrito",
    index: void 0,
    caseSensitive: void 0,
    module: carrito_exports
  },
  "routes/tienda": {
    id: "routes/tienda",
    parentId: "root",
    path: "tienda",
    index: void 0,
    caseSensitive: void 0,
    module: tienda_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
