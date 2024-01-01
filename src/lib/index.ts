// Reexport your entry components here
import HelloWorld from "./modules/HelloWorld/module.js"
import Header from "./modules/Header/module.js"
import Counter from "./modules/Counter/module.js"
import AdminLayout from "./layouts/AdminLayout/layout.js"

export const modules = {
    HelloWorld,
    Counter,
    Header
}

export const layouts = {
    AdminLayout
}

