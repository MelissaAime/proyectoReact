import { stock } from "../components/MyProducts/stock"


export const seeStock = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve(stock)
        }, 2000)
    })
}