import Repository from "./Repository";



const resourse = "?locale=" ;
const about =  "about?locale=" ;
const contact =  "contact?locale=" ;
const methylamine =  "methylamine?locale=";
const products = "products?locale=";
const productsDetail = 'products/'


export default {
    get() {
        return Repository.get(`${resourse}`)
    },
    getAbout() {
        return Repository.get(`${about}`)
    },
    getContact() {
        return Repository.get(`${contact}`)
    },
    getMethylamine() {
        return Repository.get(`${methylamine}`)
    },
    getProducts() {
        return Repository.get(`${products}`)
    },
    getProductsItem(item) {
        return Repository.get(`${productsDetail + item }`)
    },

    // getPost() {
    //
    // },
    //
    // createPost() {
    //
    // },
}
